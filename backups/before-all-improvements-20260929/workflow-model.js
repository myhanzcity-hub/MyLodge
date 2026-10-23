/* Fictional, memory-only workflow. This module is excluded from the public build. */
(() => {
  'use strict';
  const clock = window.MyLodgeConsultation;
  const states = { new: '신규', scheduled: '연락 예정', active: '상담 중', retry: '재연락 필요', closed: '종료' };
  const owners = { '': '미배정', 'advisor-a': '담당자 A (가상)', 'advisor-b': '담당자 B (가상)' };
  const outcomes = { '': '결과 선택', informed: '안내 완료', considering: '참여 검토', withdrawn: '고객 철회', duplicate: '중복 문의' };
  const contacts = { '': '미기록', connected: '연결됨', absent: '고객 부재', requested: '고객이 재연락 요청' };
  const fields = ['owner', 'status', 'contact', 'nextAt', 'nextAction', 'unscheduledReason', 'outcome', 'note'];
  const labels = { owner: '담당자', status: '상담 상태', contact: '최근 연락 결과', nextAt: '다음 연락 일정', nextAction: '다음 행동', unscheduledReason: '일정 미정 사유', outcome: '종료 결과', note: '담당자 메모' };
  const blank = () => ({ owner: '', status: 'new', contact: '', nextAt: '', nextAction: '', unscheduledReason: '', outcome: '', note: '' });
  const copy = value => structuredClone(value);
  function create() {
    let records = [], sequence = 0;
    const receipts = new Map(), attempts = new Map();
    function insert(input, notification = 'simulated') {
      const record = {
        id: `DEMO-${String(++sequence).padStart(3, '0')}`, createdAt: clock.koreaNow().stamp,
        customerKey: input.customerKey || 'fictional-d',
        original: copy(input), ops: blank(), notification,
        history: [{ at: clock.koreaNow().stamp, title: '가상 문의 생성', detail: '접수 상황을 메모리에서 재현했습니다. 실제 저장·발송은 없습니다.' }]
      };
      records.unshift(record); return record;
    }
    function seed() {
      records = []; sequence = 0; receipts.clear(); attempts.clear();
      const today = clock.koreaNow().date;
      const first = insert({ name: '가상 고객 A', phone: '가상 연락처 · 발송 없음', customerKey: 'fictional-a', region: '주문진', topic: '비용·분납', services: [], question: '최초 납입 이후 진행 절차가 궁금합니다.', schedule: { mode: 'any' } });
      const second = insert({ name: '가상 고객 B', phone: '가상 연락처 · 발송 없음', customerKey: 'fictional-b', region: '양양', topic: '이용 방법', services: ['지역 교환'], question: '사용 가능한 시기가 정해져 있나요?', schedule: { mode: '' } });
      second.ops = { ...blank(), owner: 'advisor-a', status: 'scheduled', nextAt: `${today}T18:00`, nextAction: '이용 일정의 미정 항목 안내', note: '초기 예시: 오늘 연락할 문의입니다.' };
      second.history.push({ at: clock.koreaNow().stamp, title: '초기 예시 일정', detail: '담당자 A에게 배정된 오늘 연락 예시입니다.' });
      const third = insert({ name: '가상 고객 C', phone: '가상 연락처 · 발송 없음', customerKey: 'fictional-c', region: '주문진', topic: '공동소유', services: [], question: '공동소유 방식에 대한 설명을 듣고 싶습니다.', schedule: { mode: '' } }, 'failed');
      third.ops = { ...blank(), owner: 'advisor-b', status: 'retry', contact: 'absent', nextAt: `${clock.addDays(today, -1)}T15:00`, nextAction: '부재 고객에게 다시 연락', note: '초기 예시: 기한이 지난 재연락 건입니다.' };
      third.history.push({ at: clock.koreaNow().stamp, title: '초기 예시: 고객 부재', detail: '연락 시도 후 연결되지 않은 상황입니다. 다음 연락 일정이 지났습니다.' });
      return first.id;
    }
    function normalized(draft) {
      const value = blank();
      fields.forEach(field => value[field] = String(draft[field] ?? '').trim());
      if (value.status === 'closed') { value.nextAt = ''; value.nextAction = ''; value.unscheduledReason = ''; }
      else { value.outcome = ''; if (value.nextAt) value.unscheduledReason = ''; }
      return value;
    }
    function validate(draft, current) {
      const value = normalized(draft), errors = {};
      if (!Object.hasOwn(states, value.status)) errors.status = '상담 상태를 선택해 주세요.';
      if (!Object.hasOwn(owners, value.owner)) errors.owner = '등록된 가상 담당자를 선택해 주세요.';
      if (!Object.hasOwn(contacts, value.contact)) errors.contact = '연락 결과를 확인해 주세요.';
      if (value.status !== 'new' && !value.owner) errors.owner = '후속 처리를 맡을 담당자를 지정해 주세요.';
      if (['scheduled', 'active', 'retry'].includes(value.status) && !value.nextAction) errors.nextAction = '다음에 할 일을 적어주세요.';
      if (value.status === 'scheduled' && !value.nextAt) errors.nextAt = '연락 예정 시각을 정해 주세요.';
      if (['active', 'retry'].includes(value.status) && !value.nextAt && !value.unscheduledReason) errors.unscheduledReason = '다음 일정을 정하거나 일정 미정 사유를 남겨주세요.';
      if (value.status === 'closed' && !Object.hasOwn(outcomes, value.outcome)) errors.outcome = '종료 결과를 확인해 주세요.';
      if (value.status === 'closed' && !value.outcome) errors.outcome = '종료한 이유를 선택해 주세요.';
      // An already-overdue appointment may be kept while updating a note. A newly set appointment must be in the future.
      if (value.nextAt && (value.nextAt !== current.nextAt || value.status !== current.status || value.contact !== current.contact)) {
        const parsed = new Date(value.nextAt + '+09:00');
        if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(value.nextAt) || Number.isNaN(parsed.valueOf())) errors.nextAt = '올바른 날짜와 시각을 입력해 주세요.';
        else if (value.nextAt <= clock.koreaNow().stamp) errors.nextAt = '현재 이후의 시각을 선택해 주세요. 한국 시간 기준입니다.';
      }
      if (value.contact === 'absent' && value.status === 'closed' && !['withdrawn', 'duplicate'].includes(value.outcome)) errors.outcome = '부재만으로 안내 완료·참여 검토로 종료할 수 없습니다. 연락 결과를 확인하거나 재연락으로 남겨주세요.';
      if (value.nextAction.length > 200) errors.nextAction = '다음 행동은 200자 이내로 적어주세요.';
      if (value.unscheduledReason.length > 300) errors.unscheduledReason = '미정 사유는 300자 이내로 적어주세요.';
      if (value.note.length > 2000) errors.note = '메모는 2,000자 이내로 적어주세요.';
      return { value, errors };
    }
    function display(field, value) {
      const table = { owner: owners, status: states, contact: contacts, outcome: outcomes }[field];
      return table ? table[value] || '없음' : value || '없음';
    }
    function save(id, draft) {
      const record = records.find(item => item.id === id);
      if (!record) return { ok: false, errors: { status: '가상 문의를 찾을 수 없습니다.' } };
      const { value, errors } = validate(draft, record.ops);
      if (Object.keys(errors).length) return { ok: false, errors };
      const changes = fields.filter(field => record.ops[field] !== value[field]);
      if (!changes.length) return { ok: true, changed: false };
      const detail = changes.map(field => `${labels[field]}: ${display(field, record.ops[field])} → ${display(field, value[field])}`).join('\n');
      record.ops = value;
      record.history.push({ at: clock.koreaNow().stamp, title: '담당자 처리 내용 저장 (시연)', detail });
      return { ok: true, changed: true };
    }
    function inQueue(record, queue) {
      const open = record.ops.status !== 'closed', now = clock.koreaNow();
      if (queue === 'unassigned') return open && !record.ops.owner;
      if (queue === 'today') return open && record.ops.nextAt.slice(0, 10) === now.date;
      if (queue === 'overdue') return open && Boolean(record.ops.nextAt) && record.ops.nextAt < now.stamp;
      if (queue === 'retry') return record.ops.status === 'retry';
      return true;
    }
    seed();
    return {
      states, owners, outcomes, contacts, fields, labels,
      list: () => copy(records), get: id => copy(records.find(record => record.id === id)),
      save, validate, inQueue, normalized,
      async submit(data, token, scenario, lookup = false) {
        // Deliberately local. The fixed identity prevents the public form becoming an operator data source.
        await new Promise(resolve => setTimeout(resolve, 450));
        if (receipts.has(token)) {
          const record = records.find(item => item.id === receipts.get(token));
          return { state: 'saved', id: record.id, notification: record.notification };
        }
        if (lookup) return { state: 'failed' };
        const attempt = (attempts.get(token) || 0) + 1; attempts.set(token, attempt);
        if (scenario === 'save-failure' && attempt === 1) return { state: 'failed' };
        const record = insert({ name: '가상 고객 D', phone: '가상 연락처 · 발송 없음', customerKey: 'fictional-d', region: data.region, topic: data.topic, services: [...data.services], question: data.question, schedule: copy(data.schedule) }, scenario === 'notification-failure' ? 'failed' : 'simulated');
        receipts.set(token, record.id);
        if (scenario === 'unknown' && attempt === 1) return { state: 'unknown' };
        return { state: 'saved', id: record.id, notification: record.notification };
      },
      retryNotification(id) {
        const record = records.find(item => item.id === id);
        if (!record || record.notification !== 'failed') return false;
        record.notification = 'simulated';
        record.history.push({ at: clock.koreaNow().stamp, title: '알림 재처리 시연', detail: '알림 성공 상황으로 변경했습니다. 새 문의는 생성하지 않았으며 실제 발송은 없습니다.' });
        return true;
      },
      reset: seed
    };
  }
  window.MyLodgeWorkflow = Object.freeze({ create });
})();
