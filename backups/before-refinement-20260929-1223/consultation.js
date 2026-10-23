/* Shared customer form. No network requests or browser storage. */
(() => {
  'use strict';
  const periods = [
    { id: 'morning', label: '오전', hours: [9, 10, 11], range: '09–11시' },
    { id: 'afternoon', label: '오후', hours: [12, 13, 14, 15, 16, 17], range: '12–17시' },
    { id: 'evening', label: '저녁', hours: [18, 19, 20, 21, 22, 23], range: '18–23시' }
  ];
  const topics = ['비용·분납', '공동소유', '이용 방법', '기타'];
  const services = ['지역 교환', '알림', '렌트·공동 모집', '청소·룸서비스'];
  const pad = value => String(value).padStart(2, '0');
  function koreaNow() {
    const parts = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
    }).formatToParts(new Date());
    const p = Object.fromEntries(parts.map(part => [part.type, part.value]));
    return { date: `${p.year}-${p.month}-${p.day}`, minute: Number(p.hour) * 60 + Number(p.minute), stamp: `${p.year}-${p.month}-${p.day}T${p.hour}:${p.minute}` };
  }
  function addDays(date, days) {
    const value = new Date(`${date}T12:00:00+09:00`);
    value.setUTCDate(value.getUTCDate() + days);
    return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Asia/Seoul' }).format(value);
  }
  function prettyDate(date) {
    return new Intl.DateTimeFormat('ko-KR', { timeZone: 'Asia/Seoul', year: 'numeric', month: 'long', day: 'numeric', weekday: 'short' }).format(new Date(`${date}T12:00:00+09:00`));
  }
  function scheduleText(schedule) {
    if (schedule.mode === 'any') return '운영시간 중 언제든 괜찮아요';
    if (schedule.mode !== 'specific') return '희망 시간 미지정';
    const period = periods.find(item => item.id === schedule.period);
    const date = prettyDate(schedule.date).replace(/년 /, '. ').replace(/월 /, '. ').replace(/일 /, '');
    const hour = Number(schedule.hour);
    const label = schedule.hour ? `${hour < 12 ? '오전' : '오후'} ${hour % 12 || 12}시` : period?.label || '시간대 미정';
    return `${date} · ${label} 희망 (한국 시간)`;
  }
  function formatPhone(value) {
    const digits = /^[0-9\s-]*$/.test(value) ? value.replace(/[\s-]/g, '') : '';
    return /^01[016789][0-9]{7,8}$/.test(digits) ? digits.replace(/^(\d{3})(\d{3,4})(\d{4})$/, '$1-$2-$3') : value;
  }
  function watchMinute(callback, signal) {
    let timer;
    const refresh = () => { if (!document.hidden) callback(); };
    const tick = () => { refresh(); timer = setTimeout(tick, 60000 - Date.now() % 60000 + 50); };
    timer = setTimeout(tick, 60000 - Date.now() % 60000 + 50);
    window.addEventListener('focus', refresh, { signal });
    document.addEventListener('visibilitychange', refresh, { signal });
    signal?.addEventListener('abort', () => clearTimeout(timer), { once: true });
  }
  let instance = 0;
  function mount(container, options = {}) {
    const demo = options.mode === 'scenario';
    const prefix = `consult-${++instance}`;
    const id = key => `${prefix}-${key}`;
    const find = key => container.querySelector(`#${id(key)}`);
    const controller = new AbortController();
    const listen = (node, event, handler) => node.addEventListener(event, handler, { signal: controller.signal });
    let schedule = { mode: '', date: '', period: '', exact: false, hour: '' };
    let token = crypto.randomUUID(), pending = false, completed = false, snapshot = null, unresolved = false;
    let submittingButton = null, editTarget = null;
    const radioChips = (name, values) => values.map(value => `<label class="cf-choice"><input type="radio" name="${id(name)}" value="${value}"><span>${value}</span></label>`).join('');
    container.innerHTML = `
      <div class="cf-shell">
        <div class="cf-preview-note"><span class="cf-dot" aria-hidden="true"></span>${demo ? '가상 고객으로 운영 흐름을 체험합니다.' : '상담 화면 미리보기 · 실제 접수와 연락은 진행되지 않습니다.'}</div>
        <ol class="cf-progress" aria-label="상담 화면 체험 단계"><li aria-current="step"><b>1</b>정보 입력</li><li><b>2</b>내용 확인</li><li><b>3</b>체험 완료</li></ol>
        <form class="cf-form" novalidate>
          <div class="cf-form-heading"><h3>연락받을 정보를 알려주세요</h3><p>${demo ? '이름과 연락처는 가상 정보로 고정되어 있습니다.' : '실제 개인정보 대신 예시 정보를 사용해 주세요.'}</p></div>
          <div class="cf-basic-grid">
            <div class="cf-field"><label for="${id('name')}">이름 <span class="required">*</span></label><input id="${id('name')}" type="text" name="name" maxlength="40" autocomplete="off" placeholder="예: 예시 고객" required aria-describedby="${id('name-error')}" ${demo ? 'value="가상 고객 D" readonly' : ''}><p class="error" id="${id('name-error')}"></p></div>
            <div class="cf-field"><label for="${id('phone')}">휴대전화 번호 <span class="required">*</span></label><input id="${id('phone')}" type="tel" name="phone" inputmode="tel" maxlength="20" autocomplete="off" placeholder="예: 010-0000-0000" required aria-describedby="${id('phone-error')}" ${demo ? 'value="가상 연락처 · 발송 없음" readonly' : ''}><p class="error" id="${id('phone-error')}"></p></div>
          </div>
          <fieldset class="cf-field" id="${id('region-field')}" tabindex="-1"><legend>관심 프로젝트 <span class="optional">선택</span></legend><div class="cf-choices">${radioChips('region', ['주문진', '양양', '아직 정하지 않았어요'])}</div><button type="button" class="cf-clear" data-clear="region" hidden>프로젝트 선택 해제</button><p class="cf-region-note" role="status" id="${id('region-note')}"></p></fieldset>
          <details class="cf-extras" id="${id('extras')}"><summary><span><strong>상담에 도움이 되는 정보 추가</strong><small>주제·서비스·희망 시간·문의 내용 · 모두 선택 사항</small></span><span class="cf-extra-count" id="${id('extra-count')}">선택</span></summary><div class="cf-extras-body">
            <fieldset class="cf-field" id="${id('topic-field')}" tabindex="-1"><legend>가장 궁금한 주제</legend><div class="cf-choices">${radioChips('topic', topics)}</div><button type="button" class="cf-clear" data-clear="topic" hidden>주제 선택 해제</button></fieldset>
            <fieldset class="cf-field" id="${id('services-field')}" tabindex="-1"><legend>관심 서비스 <span class="optional">여러 개 선택 가능</span></legend><div class="cf-choices">${services.map(value => `<label class="cf-choice"><input type="checkbox" name="${id('services')}" value="${value}"><span>${value}</span></label>`).join('')}</div><p class="small">각 서비스는 준비 중입니다.</p></fieldset>
            <fieldset class="cf-schedule" id="${id('schedule')}" tabindex="-1" aria-describedby="${id('schedule-error')}"><legend>연락받기 편한 시간</legend><p class="small">희망 시간을 전달하는 화면입니다. 상담이 확정되는 예약은 아닙니다.</p>
              <div class="cf-mode-group" role="group" aria-label="희망 시간 선택 방법"><button type="button" data-mode="any" aria-pressed="false">시간 무관</button><button type="button" data-mode="specific" aria-pressed="false">날짜·시간대 선택</button></div>
              <div id="${id('schedule-picker')}" hidden>
                <div class="cf-step-label"><b>01</b><span>편한 날짜</span></div><div class="cf-dates" id="${id('dates')}" role="group" aria-label="가까운 날짜 · 옆으로 넘겨 더 보기"></div><p class="cf-date-hint">옆으로 넘겨 날짜를 보거나 아래 달력에서 고르세요.</p>
                <div class="cf-calendar-row"><label for="${id('date')}">다른 날짜</label><input type="date" id="${id('date')}" aria-describedby="${id('schedule-error')}"></div>
                <div class="cf-step-label"><b>02</b><span>편한 시간대</span></div><div class="cf-periods" role="group" aria-label="희망 시간대">${periods.map(period => `<button type="button" data-period="${period.id}" aria-pressed="false" disabled><strong>${period.label}</strong><small>${period.range}</small></button>`).join('')}</div>
                <p class="cf-schedule-help" id="${id('schedule-help')}">날짜를 먼저 골라주세요.</p>
                <label class="cf-exact-toggle"><input type="checkbox" id="${id('exact')}" disabled><span>구체적인 시각도 선택할게요</span></label>
                <div id="${id('hours-wrap')}" hidden><div class="cf-hours" id="${id('hours')}" role="group" aria-label="희망 시각"></div><p class="small">이미 지난 시각은 선택할 수 없습니다.</p></div>
                <p class="cf-policy-note">09–23시는 선택 화면의 예시입니다. 실제 운영시간·휴무일·연락 마감은 협의 후 안내합니다.</p>
              </div>
              <div class="cf-schedule-summary" id="${id('schedule-summary')}" role="status">희망 시간 미지정</div><p class="error" id="${id('schedule-error')}"></p><button type="button" class="cf-clear" id="${id('schedule-clear')}" hidden>시간 선택 해제</button>
            </fieldset>
            <div class="cf-field"><label for="${id('question')}">궁금한 내용</label><textarea id="${id('question')}" rows="4" maxlength="1000" placeholder="예: 최초 납입 이후 절차가 궁금해요." aria-describedby="${id('question-count')}"></textarea><p class="small cf-count" id="${id('question-count')}">0 / 1,000자</p></div>
          </div></details>
          <div class="cf-consent"><label for="${id('consent')}"><input type="checkbox" id="${id('consent')}" required aria-describedby="${id('consent-error')}"><span>개인정보 수집·이용 동의 화면을 확인합니다 <span class="required">*</span></span></label><p class="error" id="${id('consent-error')}"></p><details><summary>안내 내용 보기</summary><div class="cf-consent-copy"><p>현재는 체험 화면이며 실제 개인정보를 접수하거나 저장하지 않습니다.</p><p>정식 접수 시 이름·연락처와 선택한 상담 정보를 문의 응대에 사용하는 안내를 제공할 예정입니다. 수집 항목과 보관 기간을 포함한 공식 문서는 정식 접수 전에 공개합니다.</p><p>이 확인은 정식 약관이나 승인된 개인정보 처리 문서에 대한 동의를 대신하지 않습니다.</p></div></details></div>
          <div class="cf-error-summary" id="${id('error-summary')}" role="alert" hidden></div>
          <button type="submit" class="primary cf-submit">입력 내용 확인하기 <span aria-hidden="true">→</span></button><p class="cf-bottom-note">상담 체험은 계약·구좌 확보·실제 접수가 아닙니다.</p>
        </form>
        <div class="cf-complete" id="${id('complete')}" tabindex="-1" hidden><span class="cf-success-symbol" aria-hidden="true">✓</span><p class="eyebrow">PREVIEW COMPLETE</p><h3>${demo ? '가상 문의가 준비되었습니다' : '상담 화면 체험을 마쳤습니다'}</h3><p id="${id('complete-copy')}"></p><dl id="${id('receipt')}"></dl><div class="cf-complete-actions"><button type="button" class="primary" id="${id('next')}" ${demo ? '' : 'hidden'}>운영자 화면에서 이어보기</button><button type="button" class="outline" id="${id('restart')}">새로 체험하기</button></div></div>
      </div>`;
    const form = container.querySelector('form');
    const dialog = document.createElement('dialog');
    dialog.className = 'cf-review-dialog';
    dialog.setAttribute('aria-labelledby', id('review-title'));
    dialog.setAttribute('aria-describedby', id('review-description'));
    dialog.innerHTML = `<div class="cf-dialog-head"><div><p class="eyebrow">02 · REVIEW</p><h2 id="${id('review-title')}">연락처와 희망 시간을<br>한 번 더 확인해 주세요</h2></div><button type="button" class="cf-close" data-close aria-label="확인창 닫기">닫기 ×</button></div><p id="${id('review-description')}" class="small">${demo ? '가상 문의만 운영 시안에 연결됩니다.' : '입력은 전송되거나 저장되지 않습니다.'}</p><dl class="cf-review-values"></dl><div class="cf-review-feedback" role="status" tabindex="-1" hidden></div><div class="cf-dialog-actions"><button type="button" class="outline" data-close>돌아가서 수정</button><button type="button" class="primary" data-confirm>${demo ? '가상 문의 생성' : '확인하고 체험 완료'}</button></div>`;
    document.body.append(dialog);
    const confirm = dialog.querySelector('[data-confirm]');
    const feedback = dialog.querySelector('.cf-review-feedback');

    function progress(step) {
      container.querySelectorAll('.cf-progress li').forEach((node, index) => {
        if (index + 1 === step) node.setAttribute('aria-current', 'step'); else node.removeAttribute('aria-current');
        node.classList.toggle('is-done', index + 1 < step);
      });
    }
    function focusField(key) {
      const target = find(key);
      if (!target) return;
      if (find('extras').contains(target)) find('extras').open = true;
      target.scrollIntoView({ block: 'center', behavior: 'auto' });
      const focusable = target.matches('input,textarea,button,select') ? target : target.querySelector('input:not(:disabled),button:not(:disabled)') || target;
      focusable.focus({ preventScroll: true });
    }
    function setError(key, message) {
      find(key + '-error').textContent = message;
      find(key).setAttribute('aria-invalid', String(Boolean(message)));
    }
    function selected(name) { return container.querySelector(`input[name="${id(name)}"]:checked`)?.value || ''; }
    function values() {
      return {
        name: find('name').value.trim(), phone: formatPhone(find('phone').value.trim()),
        region: selected('region'), topic: selected('topic'),
        services: [...container.querySelectorAll(`input[name="${id('services')}"]:checked`)].map(input => input.value),
        question: find('question').value.trim(), schedule: { ...schedule }, consent: find('consent').checked
      };
    }
    function extraCount() {
      const count = Number(Boolean(selected('topic'))) + Number(container.querySelector(`input[name="${id('services')}"]:checked`) !== null) + Number(Boolean(schedule.mode)) + Number(Boolean(find('question').value.trim()));
      find('extra-count').textContent = count ? `${count}개 작성` : '선택';
      find('question-count').textContent = `${find('question').value.length.toLocaleString('ko-KR')} / 1,000자`;
    }
    function availableHours(period) {
      const now = koreaNow();
      return period.hours.filter(hour => schedule.date > now.date || (schedule.date === now.date && hour * 60 > now.minute));
    }
    function validDate() {
      const date = find('date');
      return Boolean(schedule.date) && date.validity.valid && schedule.date >= koreaNow().date;
    }
    function dates() {
      const now = koreaNow();
      find('date').min = now.date;
      if (find('dates').dataset.today === now.date) return;
      if (find('dates').contains(document.activeElement)) return;
      find('dates').dataset.today = now.date;
      find('dates').innerHTML = Array.from({ length: 7 }, (_, index) => {
        const date = addDays(now.date, index);
        const day = new Intl.DateTimeFormat('ko-KR', { timeZone: 'Asia/Seoul', weekday: 'short' }).format(new Date(`${date}T12:00:00+09:00`));
        return `<button type="button" data-date="${date}" aria-label="${prettyDate(date)}" aria-pressed="${schedule.date === date}"><span>${index === 0 ? '오늘' : index === 1 ? '내일' : day}</span><strong>${Number(date.slice(8))}</strong><small>${Number(date.slice(5, 7))}월</small></button>`;
      }).join('');
    }
    function renderSchedule() {
      find('date').min = koreaNow().date;
      find('schedule-picker').hidden = schedule.mode !== 'specific';
      find('schedule-clear').hidden = !schedule.mode;
      container.querySelectorAll('[data-mode]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.mode === schedule.mode)));
      container.querySelectorAll('[data-date]').forEach(button => {
        button.setAttribute('aria-pressed', String(button.dataset.date === schedule.date));
        button.setAttribute('aria-disabled', String(button.dataset.date < koreaNow().date));
      });
      const valid = validDate();
      container.querySelectorAll('[data-period]').forEach(button => {
        const period = periods.find(item => item.id === button.dataset.period);
        button.disabled = !valid || !availableHours(period).length;
        button.setAttribute('aria-pressed', String(period.id === schedule.period));
      });
      const chosen = periods.find(period => period.id === schedule.period);
      find('exact').disabled = !valid || !chosen || !availableHours(chosen).length;
      find('exact').checked = schedule.exact;
      find('hours-wrap').hidden = !schedule.exact;
      const hours = find('hours');
      if (hours.dataset.renderedPeriod !== (chosen?.id || '')) {
        hours.dataset.renderedPeriod = chosen?.id || '';
        hours.innerHTML = chosen ? chosen.hours.map(hour => `<button type="button" data-hour="${pad(hour)}">${pad(hour)}:00</button>`).join('') : '';
      }
      hours.querySelectorAll('[data-hour]').forEach(button => {
        button.disabled = !valid || !chosen || !availableHours(chosen).includes(Number(button.dataset.hour));
        button.setAttribute('aria-pressed', String(schedule.hour === button.dataset.hour));
      });
      find('schedule-help').textContent = !valid ? '날짜를 먼저 골라주세요.' : !periods.some(period => availableHours(period).length) ? '오늘 선택할 수 있는 예시 시각이 지났습니다. 다른 날짜를 선택해 주세요.' : '시간대만 선택해도 됩니다. 날짜와 시각은 한국 시간 기준입니다.';
      find('schedule-summary').textContent = schedule.mode === 'specific' && (!valid || !schedule.period) ? '날짜와 시간대를 골라주세요. 선택을 해제해도 진행할 수 있습니다.' : schedule.mode === 'specific' && schedule.exact && !schedule.hour ? '구체적인 시각을 선택하거나 시각 선택을 꺼주세요.' : scheduleText(schedule);
      if (schedule.mode === 'specific' && chosen && (!valid || !availableHours(chosen).length || (schedule.exact && schedule.hour && !availableHours(chosen).includes(Number(schedule.hour))))) {
        find('schedule-summary').textContent = '선택한 날짜·시각이 지났습니다. 입력은 유지되며, 확인 전에 시간을 다시 골라주세요.';
      }
      extraCount();
      refreshErrors();
    }
    function changeDate(date) {
      if (date === schedule.date) return;
      schedule.date = date; schedule.period = ''; schedule.hour = ''; schedule.exact = false;
      find('date').value = date; setError('schedule', ''); renderSchedule();
    }
    function resetSchedule() {
      schedule = { mode: '', date: '', period: '', exact: false, hour: '' };
      find('date').value = ''; setError('schedule', ''); dates(); renderSchedule();
    }
    function collectErrors() {
      find('date').min = koreaNow().date;
      const data = values(), errors = [];
      if (!data.name) errors.push(['name', '이름을 입력해 주세요.']);
      if (!demo && (!/^[0-9\s-]+$/.test(data.phone) || !/^01[016789][0-9]{7,8}$/.test(data.phone.replace(/[\s-]/g, '')))) errors.push(['phone', '숫자·공백·하이픈으로 번호를 입력해 주세요. 예: 010-0000-0000']);
      if (schedule.mode === 'specific') {
        const period = periods.find(item => item.id === schedule.period);
        if (!validDate()) errors.push(['schedule', '오늘 이후 날짜를 선택하거나 시간 선택을 해제해 주세요.']);
        else if (!period || !availableHours(period).length) errors.push(['schedule', '선택 가능한 시간대를 골라주세요.']);
        else if (schedule.exact && (!schedule.hour || !availableHours(period).includes(Number(schedule.hour)))) errors.push(['schedule', '선택한 시각이 지났거나 비어 있습니다. 시각을 다시 고르거나 구체적인 시각 선택을 꺼주세요.']);
      }
      if (!data.consent) errors.push(['consent', '개인정보 안내의 체험 확인란을 선택해 주세요.']);
      return { data, errors };
    }
    function refreshErrors() {
      const { errors } = collectErrors();
      ['name', 'phone', 'schedule', 'consent'].forEach(key => {
        if (find(key).getAttribute('aria-invalid') === 'true') setError(key, errors.find(error => error[0] === key)?.[1] || '');
      });
      const count = ['name', 'phone', 'schedule', 'consent'].filter(key => find(key).getAttribute('aria-invalid') === 'true').length;
      find('error-summary').hidden = !count;
      find('error-summary').textContent = count ? `${count}개 항목을 확인해 주세요. 입력한 내용은 유지됩니다.` : '';
    }
    function validate() {
      const { data, errors } = collectErrors();
      ['name', 'phone', 'schedule', 'consent'].forEach(key => setError(key, errors.find(error => error[0] === key)?.[1] || ''));
      const summary = find('error-summary'); summary.hidden = !errors.length;
      summary.textContent = errors.length ? `${errors.length}개 항목을 확인해 주세요. 입력한 내용은 유지됩니다.` : '';
      if (errors.length) { focusField(errors[0][0]); return null; }
      return data;
    }
    function review(data) {
      snapshot = data;
      const entries = [
        ['연락처', data.phone, 'phone', true], ['희망 시간', scheduleText(data.schedule), 'schedule', true],
        ['이름', data.name, 'name'], ['관심 프로젝트', data.region || '선택 안 함', 'region-field'],
        ['상담 주제', data.topic || '선택 안 함', 'topic-field'],
        ['관심 서비스', data.services.join(', ') || '선택 안 함', 'services-field'],
        ['문의 내용', data.question || '작성 안 함', 'question']
      ];
      const list = dialog.querySelector('dl'); list.replaceChildren();
      entries.forEach(([label, value, field, important]) => {
        const row = document.createElement('div'), dt = document.createElement('dt'), dd = document.createElement('dd'), button = document.createElement('button');
        if (important) row.className = 'is-important';
        dt.textContent = label; dd.textContent = value; button.type = 'button'; button.textContent = '수정'; button.setAttribute('aria-label', label + ' 수정');
        button.disabled = demo && ['phone', 'name'].includes(field);
        button.dataset.locked = String(button.disabled);
        listen(button, 'click', () => { editTarget = field; dialog.close(); });
        row.append(dt, dd, button); list.append(row);
      });
      feedback.hidden = true; feedback.textContent = ''; confirm.textContent = demo ? '가상 문의 생성' : '확인하고 체험 완료'; confirm.dataset.action = 'submit';
      progress(2); dialog.showModal();
    }
    function showFeedback(message, action = 'submit') {
      feedback.hidden = false; feedback.textContent = message; confirm.dataset.action = action;
      confirm.textContent = action === 'lookup' ? '시연 접수 결과 확인' : '다시 시도하기'; feedback.focus();
    }
    async function complete() {
      if (pending || completed) return;
      // Recheck a stale time selection before any simulated submission.
      if (confirm.dataset.action !== 'lookup' && snapshot.schedule.mode === 'specific') {
        const period = periods.find(item => item.id === snapshot.schedule.period);
        if (!validDate() || !period || !availableHours(period).length || (snapshot.schedule.exact && !availableHours(period).includes(Number(snapshot.schedule.hour)))) {
          editTarget = 'schedule'; dialog.close(); setError('schedule', '시간이 지나 선택을 다시 확인해야 합니다.'); renderSchedule(); return;
        }
      }
      pending = true; confirm.disabled = true; dialog.setAttribute('aria-busy', 'true');
      dialog.querySelectorAll('[data-close],.cf-review-values button').forEach(button => button.disabled = true);
      try {
        const result = demo ? await options.onSubmit({ ...snapshot, schedule: { ...snapshot.schedule }, services: [...snapshot.services] }, token, confirm.dataset.action === 'lookup') : { state: 'preview' };
        if (!result || result.state === 'failed') { showFeedback('저장 실패 상황을 시연했습니다. 입력은 그대로이며, 가상 문의도 아직 생성되지 않았습니다. 다시 시도할 수 있습니다.'); return; }
        if (result.state === 'unknown') { unresolved = true; showFeedback('응답이 늦어 접수 결과를 확인하는 상황입니다. 같은 내용을 다시 만들지 않고 기존 가상 접수부터 확인합니다.', 'lookup'); return; }
        unresolved = false; completed = true; dialog.close(); progress(3); form.hidden = true;
        find('complete-copy').textContent = demo ? '같은 가상 문의를 운영자 화면에서 배정하고, 재연락과 종료까지 처리할 수 있습니다. 실제 저장·연락은 없습니다.' : '입력 내용은 전송되거나 저장되지 않았습니다. 정식 접수 시에는 접수번호와 담당자 연락 절차를 안내할 예정입니다.';
        const receipt = find('receipt'); receipt.replaceChildren();
        if (demo) {
          [['시연 번호', result.id], ['접수 상태', '가상 접수 완료'], ['알림 상태', result.notification === 'failed' ? '발송 실패 상황 · 실제 발송 없음' : '알림 성공 상황 · 실제 발송 없음']].forEach(([label, value]) => {
            const row = document.createElement('div'), dt = document.createElement('dt'), dd = document.createElement('dd'); dt.textContent = label; dd.textContent = value; row.append(dt, dd); receipt.append(row);
          });
          find('next').onclick = () => options.onComplete?.(result.id);
        }
        form.reset(); snapshot = null; dialog.querySelector('dl').replaceChildren();
        find('complete').hidden = false; find('complete').focus();
      } catch {
        showFeedback(unresolved ? '결과 확인이 지연되고 있습니다. 같은 가상 접수를 다시 확인해 주세요.' : '화면 처리 중 문제가 생겼습니다. 입력 내용은 유지됩니다. 다시 시도해 주세요.', unresolved ? 'lookup' : 'submit');
      } finally {
        pending = false; confirm.disabled = false; dialog.removeAttribute('aria-busy');
        dialog.querySelectorAll('[data-close],.cf-review-values button').forEach(button => button.disabled = unresolved || button.dataset.locked === 'true');
      }
    }
    listen(form, 'submit', event => {
      event.preventDefault(); if (pending || completed) return;
      const data = validate(); if (data) { submittingButton = event.submitter; review(data); }
    });
    listen(confirm, 'click', complete);
    dialog.querySelectorAll('[data-close]').forEach(button => listen(button, 'click', () => { if (!pending && !unresolved) dialog.close(); }));
    listen(dialog, 'cancel', event => { if (pending || unresolved) event.preventDefault(); });
    listen(dialog, 'close', () => {
      if (!completed) progress(1);
      if (editTarget) { const key = editTarget; editTarget = null; focusField(key); }
      else if (!completed) submittingButton?.focus();
    });
    listen(find('phone'), 'blur', () => { if (!demo) find('phone').value = formatPhone(find('phone').value); });
    listen(find('question'), 'input', extraCount);
    listen(form, 'input', refreshErrors);
    listen(form, 'change', event => {
      if (event.target.name === id('region')) find('region-note').textContent = '';
      refreshErrors();
      ['region', 'topic'].forEach(name => container.querySelector(`[data-clear="${name}"]`).hidden = !selected(name)); extraCount();
    });
    container.querySelectorAll('[data-clear]').forEach(button => listen(button, 'click', () => {
      container.querySelectorAll(`input[name="${id(button.dataset.clear)}"]`).forEach(input => input.checked = false);
      button.hidden = true; if (button.dataset.clear === 'region') find('region-note').textContent = '';
      focusField(button.dataset.clear + '-field'); extraCount();
    }));
    container.querySelectorAll('[data-mode]').forEach(button => listen(button, 'click', () => {
      if (schedule.mode === button.dataset.mode) return;
      resetSchedule(); schedule.mode = button.dataset.mode; dates(); renderSchedule();
    }));
    listen(find('dates'), 'click', event => { const button = event.target.closest('[data-date]'); if (button && button.dataset.date >= koreaNow().date) changeDate(button.dataset.date); });
    listen(find('date'), 'change', () => changeDate(find('date').value));
    listen(find('date'), 'focus', () => { find('date').min = koreaNow().date; });
    container.querySelectorAll('[data-period]').forEach(button => listen(button, 'click', () => {
      if (schedule.period === button.dataset.period) return;
      schedule.period = button.dataset.period; schedule.hour = ''; setError('schedule', ''); renderSchedule();
    }));
    listen(find('exact'), 'change', () => { schedule.exact = find('exact').checked; schedule.hour = ''; setError('schedule', ''); renderSchedule(); });
    listen(find('hours'), 'click', event => {
      const button = event.target.closest('[data-hour]'); if (!button || button.disabled) return;
      schedule.hour = button.dataset.hour; setError('schedule', ''); renderSchedule();
      find('hours').querySelector('[aria-pressed="true"]')?.focus({ preventScroll: true });
    });
    listen(find('schedule-clear'), 'click', () => { resetSchedule(); container.querySelector('[data-mode="any"]').focus(); });
    watchMinute(() => { dates(); renderSchedule(); }, controller.signal);
    function restart() {
      if (pending) return;
      completed = false; unresolved = false; token = crypto.randomUUID(); snapshot = null; form.reset(); form.hidden = false;
      find('complete').hidden = true; find('extras').open = false; find('region-note').textContent = '';
      container.querySelectorAll('[data-clear]').forEach(button => button.hidden = true);
      ['name', 'phone', 'schedule', 'consent'].forEach(key => setError(key, ''));
      find('error-summary').hidden = true; resetSchedule(); extraCount(); progress(1); focusField('name'); options.onReset?.();
    }
    listen(find('restart'), 'click', restart);
    dates(); renderSchedule();
    return {
      setRegion(value) {
        const radio = [...container.querySelectorAll(`input[name="${id('region')}"]`)].find(input => input.value === value);
        if (!radio) return;
        if (completed) restart(); radio.checked = true;
        container.querySelector('[data-clear="region"]').hidden = false;
        find('region-note').textContent = `${value} 프로젝트에서 선택한 관심 지역입니다. 변경할 수 있어요.`;
      },
      focus: () => focusField('name'),
      reset: restart,
      destroy() { controller.abort(); dialog.remove(); container.replaceChildren(); },
      hasDraft() { return !completed && (Boolean(find('name').value && !demo) || Boolean(find('phone').value && !demo) || Boolean(selected('region') || selected('topic') || find('question').value || schedule.mode) || Boolean(container.querySelector(`input[name="${id('services')}"]:checked`)) || find('consent').checked); }
    };
  }
  window.MyLodgeConsultation = Object.freeze({ mount, koreaNow, addDays, prettyDate, scheduleText, periods, watchMinute });
})();
