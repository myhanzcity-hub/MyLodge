(() => {
 const tokens=document.createElement('link');tokens.rel='stylesheet';tokens.href='tokens.css';document.head.prepend(tokens);
  'use strict';
  const $ = id => document.getElementById(id);
  const model = window.MyLodgeWorkflow.create(), time = window.MyLodgeConsultation;
  const queueLabels = { all: '전체 문의', unassigned: '미배정', today: '오늘 연락', overdue: '기한 경과', retry: '재연락 필요' };
  const filters = { queue: 'all', search: '', state: '', owner: 'all', sort: 'recent' };
  let selectedId = model.list().at(-1).id, view = 'operator', baseline = null, pendingNavigation = null, guardOpener = null;
  let detailController = null;
  const guard = $('unsaved-dialog'), resetDialog = $('reset-dialog');
  const form = () => $('operator-form');
  const field = name => $('ops-' + name);
  const text = (tag, value, className) => { const node = document.createElement(tag); node.textContent = value; if (className) node.className = className; return node; };
  const status = message => $('workflow-status').textContent = message;
  const formatStamp = value => value ? value.replace('T', ' ') + ' · 한국 시간' : '일정 미정';
  function options(select, values) {
    Object.entries(values).forEach(([value, label]) => { const option = document.createElement('option'); option.value = value; option.textContent = label; select.append(option); });
  }
  options($('state-filter'), model.states); options($('owner-filter'), model.owners);
  const sortBar = document.createElement('div'); sortBar.className = 'wf-sort-bar';
  sortBar.innerHTML = '<label for="case-sort">목록 정렬</label><select id="case-sort"><option value="recent">최근 접수순</option><option value="next">연락 일정순</option></select>';
  document.querySelector('.wf-inbox-heading').after(sortBar);
  function draft() { return form() ? Object.fromEntries(model.fields.map(name => [name, field(name).value])) : null; }
  function dirty() { return Boolean(baseline && form() && JSON.stringify(draft()) !== JSON.stringify(baseline)); }
  function filtered() {
    const query = filters.search.toLocaleLowerCase('ko-KR').trim();
    const records = model.list().filter(record => model.inQueue(record, filters.queue) && (!filters.state || record.ops.status === filters.state) && (filters.owner === 'all' || record.ops.owner === filters.owner) && (!query || [record.id, record.original.name, record.original.region, record.original.topic].join(' ').toLocaleLowerCase('ko-KR').includes(query)));
    const recent = (a,b) => Number(b.id.split('-')[1])-Number(a.id.split('-')[1]);
    return records.sort(filters.sort === 'next' ? (a,b) => Number(a.ops.status === 'closed')-Number(b.ops.status === 'closed') || (a.ops.nextAt || '9999').localeCompare(b.ops.nextAt || '9999') || recent(a,b) : recent);
  }
  function syncFilterControls() {
    if ($('case-search').value !== filters.search) $('case-search').value = filters.search;
    $('state-filter').value = filters.state; $('owner-filter').value = filters.owner;
    $('case-sort').value = filters.sort;
    document.querySelectorAll('[data-queue]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.queue === filters.queue)));
  }
  function renderList() {
    const all = model.list(), visible = filtered();
    const focusedCase = document.activeElement?.dataset.case;
    Object.keys(queueLabels).forEach(queue => document.querySelector(`[data-count="${queue}"]`).textContent = all.filter(record => model.inQueue(record, queue)).length);
    if (!guard.open && document.activeElement !== $('case-search')) syncFilterControls();
    $('inbox-title').textContent = queueLabels[filters.queue]; $('visible-count').textContent = `${visible.length}건`;
    $('empty-list').hidden = Boolean(visible.length);
    const list = $('case-list'), scrollTop = list.scrollTop, scrollLeft = list.scrollLeft; list.replaceChildren();
    visible.forEach(record => {
      const button = document.createElement('button'); button.type = 'button'; button.className = 'wf-case'; button.dataset.case = record.id;
      button.setAttribute('aria-pressed', String(record.id === selectedId));
      const top = text('div', '', 'wf-case-top'); top.append(text('span', record.id), text('span', record.createdAt.slice(0, 10)));
      const title = text('div', '', 'wf-case-name'), badge = text('span', model.states[record.ops.status], 'wf-badge'); badge.dataset.state = record.ops.status;
      title.append(text('strong', record.original.name), badge);
      button.append(top, title, text('p', `${record.original.region || '프로젝트 미정'} · ${record.original.topic || '주제 미정'}`), text('p', model.owners[record.ops.owner]));
      if (record.ops.nextAction) button.append(text('p', '다음 행동 · ' + record.ops.nextAction, 'wf-case-action'));
      const next = text('small', record.ops.status === 'closed' ? `종료 · ${model.outcomes[record.ops.outcome]}` : record.ops.nextAt ? `다음 연락 ${record.ops.nextAt.replace('T', ' ')}` : record.ops.unscheduledReason ? '일정 미정 · ' + record.ops.unscheduledReason : '다음 연락 일정 없음');
      next.className = 'wf-case-next';
      if (model.inQueue(record, 'overdue')) { next.classList.add('wf-overdue'); next.textContent = '기한 경과 · ' + next.textContent; }
      button.append(next); list.append(button);
    });
    if (focusedCase) list.querySelector(`[data-case="${focusedCase}"]`)?.focus({ preventScroll: true });
    list.scrollTop = scrollTop;
    list.scrollLeft = scrollLeft;
    const outside = $('selection-outside');
    if (outside) outside.hidden = !selectedId || visible.some(record => record.id === selectedId);
  }
  function ensureSelection() {
    const visible = filtered();
    if (!visible.some(record => record.id === selectedId)) selectedId = visible[0]?.id || null;
  }
  function renderDetail() {
    detailController?.abort(); detailController = new AbortController();
    const on = (node, event, handler) => node.addEventListener(event, handler, { signal: detailController.signal });
    const root = $('case-detail'), record = model.get(selectedId); baseline = null;
    if (!record) { root.innerHTML = '<div class="wf-empty"><h2>표시할 문의가 없습니다.</h2><p>검색 조건을 바꾸거나 가상 상담을 만들어 주세요.</p></div>'; return; }
    root.innerHTML = `<p id="selection-outside" class="wf-selection-note" role="status" hidden>시간이 지나 이 문의가 현재 업무 묶음에서 제외되었습니다. 작성 중인 내용을 유지하고 있습니다. 저장하거나 다른 문의를 선택해 주세요.</p><div class="wf-detail-head"><div><span class="wf-id"></span><h2 tabindex="-1"></h2><p></p></div><span class="wf-badge"></span></div>
      <div class="wf-original"><div class="wf-section-heading"><h3>고객이 남긴 내용</h3><span>최초 입력 유지</span></div><dl></dl><p class="wf-related" hidden></p></div>
      <div class="wf-notification"><p></p><button type="button" id="retry-notification" hidden>알림 재처리 시연</button></div>
      <form class="wf-form" id="operator-form" novalidate><div class="wf-section-heading"><h3>담당자의 다음 행동</h3><span>가상 처리 기록</span></div><p class="wf-state-help" id="state-help"></p><div class="wf-form-grid">
      <div><label for="ops-owner">담당자</label><select id="ops-owner" aria-describedby="error-owner"></select><p id="error-owner" class="wf-error"></p></div>
      <div><label for="ops-status">상담 상태</label><select id="ops-status" aria-describedby="error-status"></select><p id="error-status" class="wf-error"></p></div>
      <div class="wf-wide"><label for="ops-contact">최근 연락 결과</label><select id="ops-contact" aria-describedby="error-contact"></select><p id="error-contact" class="wf-error"></p><p class="wf-help">연락 시도와 실제 통화 연결을 구분합니다.</p></div>
      <div id="wrap-nextAt"><label for="ops-nextAt">담당자가 정한 다음 연락 일정</label><input type="datetime-local" id="ops-nextAt" aria-describedby="error-nextAt nextAt-help"><p id="error-nextAt" class="wf-error"></p><p class="wf-help" id="nextAt-help">한국 시간 기준 · 고객의 희망 시간은 위에 따로 보존됩니다.</p></div>
      <div id="wrap-nextAction"><label for="ops-nextAction">다음 행동</label><input id="ops-nextAction" maxlength="200" placeholder="예: 납입 절차 안내 후 질문 확인" aria-describedby="error-nextAction"><p id="error-nextAction" class="wf-error"></p></div>
      <div class="wf-wide" id="wrap-unscheduledReason"><label for="ops-unscheduledReason">일정 미정 사유</label><input id="ops-unscheduledReason" maxlength="300" placeholder="예: 고객이 가능 일정을 확인한 뒤 회신 예정" aria-describedby="error-unscheduledReason"><p id="error-unscheduledReason" class="wf-error"></p></div>
      <div class="wf-wide" id="wrap-outcome"><label for="ops-outcome">종료 결과</label><select id="ops-outcome" aria-describedby="error-outcome"></select><p id="error-outcome" class="wf-error"></p><p class="wf-help">상담 종료는 계약 완료나 구좌 확보를 의미하지 않습니다.</p></div>
      <div class="wf-wide"><label for="ops-note">담당자 메모</label><textarea id="ops-note" rows="4" maxlength="2000" placeholder="예시 처리 메모를 남겨보세요. 실제 개인정보를 입력하지 마세요." aria-describedby="error-note note-count"></textarea><p id="error-note" class="wf-error"></p><p id="note-count" class="wf-help"></p></div></div>
      <p class="wf-save-message" role="alert" id="save-message" hidden></p><div class="wf-form-actions"><button type="submit" class="primary" id="save-ops">처리 내용 저장 (시연)</button><button type="button" id="discard-ops">변경 취소</button><span class="wf-dirty" id="dirty-state" role="status"></span></div></form>
      <div class="wf-timeline"><h3>처리 이력</h3><ol></ol></div>`;
    root.querySelector('.wf-id').textContent = record.id;
    root.querySelector('.wf-detail-head h2').textContent = record.original.name;
    root.querySelector('.wf-detail-head p').textContent = `생성 ${formatStamp(record.createdAt)}`;
    const badge = root.querySelector('.wf-detail-head .wf-badge'); badge.textContent = model.states[record.ops.status]; badge.dataset.state = record.ops.status;
    const values = [['연락처', record.original.phone], ['관심 프로젝트', record.original.region || '선택 안 함'], ['상담 주제', record.original.topic || '선택 안 함'], ['관심 서비스', record.original.services.join(', ') || '선택 안 함'], ['고객 희망 시간', time.scheduleText(record.original.schedule)], ['문의 내용', record.original.question || '작성 안 함']];
    const dl = root.querySelector('.wf-original dl'); values.forEach(([label, value]) => { const row = document.createElement('div'); if (label === '고객 희망 시간') row.className = 'wf-preference'; row.append(text('dt', label), text('dd', value)); dl.append(row); });
    const related = model.list().filter(item => item.customerKey === record.customerKey && item.id !== record.id);
    if (related.length) { const node = root.querySelector('.wf-related'); node.hidden = false; node.textContent = `같은 가상 고객의 다른 문의: ${related.map(item => item.id + ' (' + (item.original.region || '프로젝트 미정') + ')').join(', ')}. 각각 별도로 보존됩니다.`; }
    root.querySelector('.wf-notification p').textContent = record.notification === 'failed' ? '가상 접수 완료 · 알림 실패 상황입니다. 접수 내용은 유지됩니다.' : '가상 접수 완료 · 알림 성공 상황입니다. 실제 발송은 없습니다.';
    $('retry-notification').hidden = record.notification !== 'failed';
    on($('retry-notification'), 'click', () => guarded(() => { model.retryNotification(record.id); renderDetail(); status('알림 재처리 상황을 반영했습니다. 가상 문의 수는 그대로이며 실제 발송은 없습니다.'); }));
    options(field('owner'), model.owners); options(field('status'), model.states); options(field('contact'), model.contacts); options(field('outcome'), model.outcomes);
    model.fields.forEach(name => field(name).value = record.ops[name]); baseline = draft();
    const list = root.querySelector('.wf-timeline ol'); [...record.history].reverse().forEach(event => { const li = document.createElement('li'), at = text('time', formatStamp(event.at)); at.dateTime = event.at + '+09:00'; li.append(at, text('strong', event.title), text('p', event.detail)); list.append(li); });
    const followup = document.createElement('button');
    followup.type = 'button'; followup.id = 'suggest-retry'; followup.className = 'outline';
    followup.textContent = '재연락 필요로 변경';
    field('contact').parentElement.append(followup);
    on(followup, 'click', () => { field('status').value = 'retry'; updateConditionalFields(); refreshErrors(); updateDirty(); field('nextAction').focus(); });
    on(form(), 'input', () => { updateConditionalFields(); refreshErrors(); updateDirty(); });
    on(form(), 'change', () => { updateConditionalFields(); refreshErrors(); updateDirty(); });
    on(form(), 'submit', event => { event.preventDefault(); saveCurrent(); });
    on($('discard-ops'), 'click', () => guarded(() => { renderDetail(); status('저장 전 변경을 취소했습니다.'); }, { allowSave: false }));
    updateConditionalFields(); updateDirty();
  }
  function updateConditionalFields() {
    if (!form()) return;
    const closed = field('status').value === 'closed', hasTime = Boolean(field('nextAt').value);
    $('suggest-retry').hidden = field('status').value !== 'new' || !['absent', 'requested'].includes(field('contact').value);
    ['nextAt', 'nextAction'].forEach(name => $('wrap-' + name).hidden = closed);
    $('wrap-unscheduledReason').hidden = closed || hasTime;
    $('wrap-outcome').hidden = !closed;
    $('state-help').textContent = ({ new: '새 문의입니다. 담당자를 배정한 뒤 다음 연락 계획을 정해 주세요.', scheduled: '담당자·다음 행동·미래의 연락 일정이 필요합니다.', active: '상담을 진행하는 단계입니다. 다음 행동과 일정 또는 미정 사유를 남겨 주세요.', retry: '다시 연락할 문의입니다. 담당자·다음 행동·다음 일정 또는 미정 사유를 남겨 주세요.', closed: '종료 결과를 남깁니다. 저장하면 다음 연락 일정과 행동은 비워지며 이전 값은 이력에 남습니다.' })[field('status').value];
    $('note-count').textContent = `${field('note').value.length.toLocaleString('ko-KR')} / 2,000자`;
  }
  function updateDirty() {
    if (!form()) return;
    $('dirty-state').textContent = dirty() ? '저장하지 않은 변경이 있습니다' : '저장된 내용과 같습니다';
    $('discard-ops').disabled = !dirty(); $('save-ops').disabled = !dirty();
  }
  function refreshErrors() {
    const { errors } = model.validate(draft(), model.get(selectedId).ops);
    model.fields.forEach(name => {
      if (field(name).getAttribute('aria-invalid') !== 'true') return;
      $('error-' + name).textContent = errors[name] || '';
      field(name).setAttribute('aria-invalid', String(Boolean(errors[name])));
    });
    if (!form().querySelector('[aria-invalid=true]')) $('save-message').hidden = true;
  }
  function saveCurrent() {
    if (!form()) return true;
    const id = selectedId, result = model.save(id, draft());
    model.fields.forEach(name => { $('error-' + name).textContent = result.errors?.[name] || ''; field(name).setAttribute('aria-invalid', String(Boolean(result.errors?.[name]))); });
    if (!result.ok) {
      $('save-message').hidden = false; $('save-message').textContent = '처리 내용을 저장하지 못했습니다. 표시된 항목을 확인해 주세요.';
      field(Object.keys(result.errors)[0])?.focus(); return false;
    }
    ensureSelection(); renderList(); renderDetail();
    $('case-detail').querySelector('h2')?.focus({ preventScroll: true });
    status(result.changed ? `${id} 처리 내용을 시연 화면에 반영했습니다.${selectedId !== id ? selectedId ? ' 변경된 문의가 현재 필터에서 제외되어 다른 문의를 표시합니다.' : ' 현재 필터에 해당하는 문의가 없습니다.' : ''}` : '변경된 내용이 없어 새 이력을 추가하지 않았습니다.');
    return true;
  }
  function guarded(action, settings = {}) {
    if (guard.open) return;
    if (!dirty()) { action(); return; }
    pendingNavigation = action; guardOpener = document.activeElement;
    $('guard-save').hidden = settings.allowSave === false;
    $('unsaved-copy').textContent = settings.allowSave === false ? '저장 전 변경을 취소하면 마지막으로 저장한 내용으로 돌아갑니다.' : '저장하지 않고 이동하면 작성 중인 처리 내용이 사라집니다.';
    guard.showModal(); $('guard-stay').focus();
  }
  function cancelGuard() { pendingNavigation = null; guard.close(); syncFilterControls(); guardOpener?.focus(); }
  $('guard-stay').addEventListener('click', cancelGuard);
  guard.addEventListener('cancel', event => { event.preventDefault(); cancelGuard(); });
  $('guard-discard').addEventListener('click', () => { const action = pendingNavigation; pendingNavigation = null; guard.close(); renderDetail(); action?.(); });
  $('guard-save').addEventListener('click', () => {
    const action = pendingNavigation; pendingNavigation = null; guard.close();
    if (saveCurrent()) action?.(); else { syncFilterControls(); status('이동 전에 저장할 항목을 확인해 주세요.'); }
  });
  function changeFilters(values) { if (Object.entries(values).every(([key,value]) => filters[key] === value)) return; guarded(() => { Object.assign(filters, values); ensureSelection(); renderList(); renderDetail(); status(`${filtered().length}건의 문의를 표시합니다.`); }); }
  function clearFilters() { changeFilters({ queue: 'all', search: '', state: '', owner: 'all', sort: 'recent' }); }
  document.querySelectorAll('[data-queue]').forEach(button => button.addEventListener('click', () => changeFilters({ queue: button.dataset.queue })));
  $('case-search').addEventListener('input', event => { if (event.isComposing) return; changeFilters({ search: $('case-search').value }); });
  $('case-search').addEventListener('compositionend', () => changeFilters({ search: $('case-search').value }));
  $('state-filter').addEventListener('change', () => changeFilters({ state: $('state-filter').value }));
  $('owner-filter').addEventListener('change', () => changeFilters({ owner: $('owner-filter').value }));
  $('case-sort').addEventListener('change', () => changeFilters({ sort: $('case-sort').value }));
  $('clear-filters').addEventListener('click', clearFilters); $('empty-clear').addEventListener('click', clearFilters);
  const scrollDetail = () => $('case-detail').scrollIntoView({ block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  $('case-list').addEventListener('click', event => { const button = event.target.closest('[data-case]'); if (!button) return; const id = button.dataset.case; if (selectedId === id) { if (matchMedia('(max-width:800px)').matches) scrollDetail(); return; } guarded(() => { selectedId = id; renderList(); renderDetail(); $('case-detail').querySelector('h2').focus({ preventScroll: true }); if (matchMedia('(max-width:800px)').matches) scrollDetail(); }); });
  function switchView(next) {
    view = next; $('operator-view').hidden = next !== 'operator'; $('customer-view').hidden = next !== 'customer';
    document.querySelectorAll('[data-view]').forEach(button => { if (button.dataset.view === next) button.setAttribute('aria-current', 'page'); else button.removeAttribute('aria-current'); });
    status(next === 'customer' ? '이름과 연락처가 고정된 가상 고객으로 상담을 만들어 보세요.' : '고객 문의를 선택하고 다음 행동을 정해 주세요.');
  }
  document.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => { if (button.dataset.view !== view) guarded(() => switchView(button.dataset.view)); }));
  const descriptions = { normal: '가상 접수와 알림이 완료된 상황을 보여줍니다.', 'save-failure': '처음에는 문의가 생성되지 않습니다. 입력을 유지한 채 다시 누르면 한 건이 생성됩니다.', unknown: '가상 문의는 한 번만 생성합니다. 응답이 늦을 때 같은 시연 번호를 확인하는 흐름입니다.', 'notification-failure': '접수는 완료되고 알림만 실패합니다. 운영 화면에서 알림 재처리를 체험할 수 있습니다.' };
  $('scenario-description').textContent = descriptions.normal;
  $('scenario-mode').addEventListener('change', () => $('scenario-description').textContent = descriptions[$('scenario-mode').value]);
  const scenario = time.mount($('scenario-form'), {
    mode: 'scenario',
    onReset() { $('scenario-mode').disabled = false; },
    async onSubmit(data, token, lookup) {
      $('scenario-mode').disabled = true;
      const result = await model.submit(data, token, $('scenario-mode').value, lookup);
      if (result.state === 'saved') $('scenario-mode').disabled = false;
      renderList(); return result;
    },
    onComplete(id) { guarded(() => { Object.assign(filters, { queue: 'all', search: '', state: '', owner: 'all', sort: 'recent' }); selectedId = id; renderList(); renderDetail(); switchView('operator'); status(`${id} 가상 문의를 선택했습니다. 고객의 최초 입력이 아래에 연결되어 있습니다.`); $('case-detail').querySelector('h2').focus({ preventScroll: true }); scrollDetail(); }); }
  });
  $('reset-workflow').addEventListener('click', () => guarded(() => resetDialog.showModal()));
  $('reset-cancel').addEventListener('click', () => resetDialog.close());
  $('reset-confirm').addEventListener('click', () => {
    resetDialog.close(); selectedId = model.reset(); Object.assign(filters, { queue: 'all', search: '', state: '', owner: 'all', sort: 'recent' });
    scenario.reset(); $('scenario-mode').disabled = false; $('scenario-mode').value = 'normal'; $('scenario-description').textContent = descriptions.normal;
    renderList(); renderDetail(); switchView('operator'); status('예시 문의 3건으로 돌아왔습니다.');
  });
  window.addEventListener('beforeunload', event => { if (dirty() || scenario.hasDraft()) { event.preventDefault(); event.returnValue = ''; } });
  document.querySelectorAll('.wf-header a').forEach(link => link.addEventListener('click', event => { if (!dirty()) return; event.preventDefault(); guarded(() => { baseline = null; location.href = link.href; }); }));
  // Queue counts age with the Korean clock; never rebuild an unsaved editor.
  time.watchMinute(renderList);
  renderList(); renderDetail();
})();
