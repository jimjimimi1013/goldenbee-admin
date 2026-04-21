const icons = {
  dashboard: "▦",
  templates: "◫",
  options: "◉",
  typography: "T",
  pdf: "⇩",
  logs: "⚠",
  settings: "⚙",
  pdfFile: "⎘",
  shield: "⛨",
  clock: "◷",
};

const navItems = [
  { id: "dashboard", label: "대시보드", icon: icons.dashboard },
  { id: "templates", label: "상품 / 템플릿", icon: icons.templates },
  { id: "options", label: "옵션 / 색상", icon: icons.options },
  { id: "typography", label: "문구 / 폰트 / 좌표", icon: icons.typography },
  { id: "pdf", label: "PDF 파일 / 검수", icon: icons.pdf },
  { id: "logs", label: "오류 로그", icon: icons.logs },
  { id: "settings", label: "환경설정 / 권한", icon: icons.settings },
];

const state = {
  activeNav: "dashboard",
  search: "",
  products: [
    { id: "P-101", name: "감사패 정사각형 A", cafe24: "product_no_101", template: "TPL-SQ-01", shape: "정사각형", font: "나눔명조 Bold", status: "운영중", updatedAt: "2026-04-20 09:10" },
    { id: "P-102", name: "감사패 직사각형 B", cafe24: "product_no_102", template: "TPL-RE-01", shape: "직사각형", font: "Noto Serif KR", status: "운영중", updatedAt: "2026-04-19 18:25" },
    { id: "P-103", name: "부모님 트로피 정사각형 C", cafe24: "product_no_103", template: "TPL-SQ-01", shape: "정사각형", font: "Pretendard SemiBold", status: "테스트중", updatedAt: "2026-04-18 15:40" },
  ],
  optionSets: [
    { id: "OPT-FRAME-01", title: "프레임 컬러", values: ["골드", "실버", "블랙"], defaultValue: "골드", active: true },
    { id: "OPT-BG-01", title: "배경 컬러", values: ["아이보리", "웜그레이", "차콜"], defaultValue: "아이보리", active: true },
    { id: "OPT-CALLI-01", title: "캘리 컬러", values: ["골드", "실버"], defaultValue: "골드", active: true },
  ],
  pdfJobs: [
    { id: "JOB-240420-001", orderRef: "CAFE24-54821", customerName: "김민준", orderedProduct: "감사패 정사각형 A", orderedOptions: "프레임 골드 / 배경 아이보리 / 캘리 골드", template: "TPL-SQ-01", status: "성공", outlined: true, createdAt: "2026-04-20 08:52", issue: "-" },
    { id: "JOB-240420-002", orderRef: "CAFE24-54822", customerName: "이서연", orderedProduct: "감사패 직사각형 B", orderedOptions: "프레임 블랙 / 배경 웜그레이 / 캘리 실버", template: "TPL-RE-01", status: "실패", outlined: false, createdAt: "2026-04-20 08:58", issue: "문구 길이 초과로 텍스트 아웃라인 변환이 중단되었습니다." },
    { id: "JOB-240420-003", orderRef: "CAFE24-54823", customerName: "박지후", orderedProduct: "부모님 트로피 정사각형 C", orderedOptions: "프레임 실버 / 배경 차콜 / 캘리 골드", template: "TPL-SQ-01", status: "대기", outlined: false, createdAt: "2026-04-20 09:05", issue: "PDF 생성 큐 대기중" },
    { id: "JOB-240420-004", orderRef: "CAFE24-54824", customerName: "최윤아", orderedProduct: "감사패 정사각형 A", orderedOptions: "프레임 골드 / 배경 아이보리 / 캘리 실버", template: "TPL-SQ-01", status: "성공", outlined: true, createdAt: "2026-04-20 09:07", issue: "-" },
  ],
  logs: [
    { id: "LOG-001", level: "error", title: "PDF 생성 실패", detail: "문구 최대 길이를 초과하여 텍스트 아웃라인 변환이 중단되었습니다.", time: "2026-04-20 08:58" },
    { id: "LOG-002", level: "warning", title: "템플릿 변경 미반영 상태", detail: "TPL-RE-01 템플릿이 수정되었지만 운영 반영은 아직 이루어지지 않았습니다.", time: "2026-04-20 08:30" },
    { id: "LOG-003", level: "success", title: "옵션셋 저장 완료", detail: "OPT-CALLI-01 기본값이 골드로 저장되었습니다.", time: "2026-04-19 17:11" },
  ],
  selectedProductId: "P-101",
  frameColor: "골드",
  bgColor: "아이보리",
  calliColor: "골드",
  copyX: 50,
  copyY: 47,
  fontScale: 28,
  safeMode: true,
  pdfFilter: "전체",
  autoOutline: true,
  templateVersion: "v1.8",
  checklistOpen: false,
  impactModalOpen: false,
};

function getSelectedProduct() {
  return state.products.find((product) => product.id === state.selectedProductId) || state.products[0];
}

function filteredProducts() {
  const keyword = state.search.trim().toLowerCase();
  if (!keyword) return state.products;
  return state.products.filter((item) => [item.name, item.template, item.cafe24].some((value) => value.toLowerCase().includes(keyword)));
}

function filteredPdfJobs() {
  if (state.pdfFilter === "전체") return state.pdfJobs;
  return state.pdfJobs.filter((job) => job.status === state.pdfFilter);
}

function successRate() {
  const ok = state.pdfJobs.filter((job) => job.status === "성공").length;
  return Math.round((ok / state.pdfJobs.length) * 100);
}

function badgeClass(status) {
  if (status === "운영중" || status === "성공") return "badge success";
  if (status === "테스트중" || status === "대기") return "badge warning";
  if (status === "실패") return "badge error";
  return "badge neutral";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function chooseButton(active) {
  return `button ${active ? "selected" : "secondary"}`;
}

function frameGradient() {
  if (state.frameColor === "실버") return "linear-gradient(135deg, #e5e7eb, #9ca3af, #6b7280)";
  if (state.frameColor === "블랙") return "linear-gradient(135deg, #52525b, #18181b, #09090b)";
  return "linear-gradient(135deg, #fde68a, #f59e0b, #a16207)";
}

function bgFill() {
  if (state.bgColor === "웜그레이") return "#d8d1c8";
  if (state.bgColor === "차콜") return "#5e5a57";
  return "#f4efe6";
}

function calliFill() {
  return state.calliColor === "실버" ? "#8a8f99" : "#b8891c";
}

function previewCard() {
  return `
    <div class="frame-shell">
      <div class="frame-art" style="background:${frameGradient()};">
        <div class="frame-inner" style="background:${bgFill()};">
          <div class="frame-chip">0.1 g</div>
          <div class="frame-copy" style="left:${state.copyX}%;top:${state.copyY}%;font-size:${state.fontScale}px;color:${calliFill()};">
            Thanks for<br />everything
          </div>
        </div>
      </div>
      <div class="preview-meta">
        <div class="soft-box">프레임: ${escapeHtml(state.frameColor)}</div>
        <div class="soft-box">배경: ${escapeHtml(state.bgColor)}</div>
        <div class="soft-box">캘리: ${escapeHtml(state.calliColor)}</div>
      </div>
    </div>
  `;
}

function dashboardSection() {
  return `
    <div class="grid-4">
      <div class="card"><div class="card-body"><div class="eyebrow">운영 상품 수</div><div class="stat-value">${state.products.length}</div><div class="small muted">카페24 주문 관리와 분리된 운영 콘솔</div></div></div>
      <div class="card"><div class="card-body"><div class="eyebrow">템플릿 버전</div><div class="stat-value">${escapeHtml(state.templateVersion)}</div><div class="small muted">운영 배포 기준 버전</div></div></div>
      <div class="card"><div class="card-body"><div class="eyebrow">PDF 성공률</div><div class="stat-value">${successRate()}%</div><div class="small muted">실패 건은 재생성 가능</div></div></div>
      <div class="card"><div class="card-body"><div class="eyebrow">오류 로그</div><div class="stat-value">${state.logs.length}</div><div class="small muted">비개발자 확인 가능한 상태</div></div></div>
    </div>
    <div class="grid-split">
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">운영 핵심 흐름</h2>
          <div class="card-description">주문 관리는 카페24에서 진행하고, 이 콘솔은 템플릿 테스트와 PDF 결과만 통제합니다.</div>
        </div>
        <div class="card-body">
          <div class="flow-grid">
            ${[
              ["템플릿 매핑", "상품별 템플릿 ID 연결"],
              ["옵션값 관리", "프레임 / 배경 / 캘리 공통 관리"],
              ["폰트 / 좌표", "문구 위치와 출력 규칙 설정"],
              ["PDF 검수", "생성 파일 다운로드 / 재생성"],
            ].map(([title, desc]) => `<div class="soft-box"><div style="font-weight:700;">${title}</div><div class="small muted" style="margin-top:8px;">${desc}</div></div>`).join("")}
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">최근 배포 상태</h2>
          <div class="card-description">설정값 변경은 즉시 저장하고 운영 반영은 별도 배포로 분리합니다.</div>
        </div>
        <div class="card-body">
          <div class="toggle-box">
            <div class="toggle-row">
              <div><div>운영 반영 준비율</div><div class="tiny muted" style="margin-top:4px;">템플릿 / 옵션 / PDF 규칙 점검 기준</div></div>
              <div style="width:160px;"><div class="progress-rail"><div class="progress-fill" style="width:82%;"></div></div></div>
            </div>
          </div>
          <div class="list-stack" style="margin-top:14px;">
            ${state.logs.map((item) => `<div class="log-box"><div class="log-top"><strong>${escapeHtml(item.title)}</strong><span class="tiny muted">${escapeHtml(item.time)}</span></div><div class="small muted" style="margin-top:8px;">${escapeHtml(item.detail)}</div></div>`).join("")}
          </div>
        </div>
      </div>
    </div>
  `;
}

function templatesSection() {
  const selected = getSelectedProduct();
  return `
    <div class="grid-main">
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">상품 / 템플릿 매핑</h2>
          <div class="card-description">상품 추가를 신규 개발로 만들지 않고 템플릿 연결로 끝나게 하는 구조를 전제로 합니다.</div>
        </div>
        <div class="card-body">
          <div class="product-search"><input id="searchInput" class="text-input" value="${escapeHtml(state.search)}" placeholder="상품명, 템플릿 ID, 카페24 상품번호 검색" /></div>
          <div class="product-list" style="margin-top:14px;">
            ${filteredProducts().map((item) => `
              <button class="product-button ${item.id === selected.id ? "active" : ""}" data-action="select-product" data-id="${item.id}">
                <div class="job-top">
                  <div><div style="font-weight:700;">${escapeHtml(item.name)}</div><div style="margin-top:8px;"><span class="${badgeClass(item.status)}">${escapeHtml(item.status)}</span></div></div>
                  <span class="tiny ${item.id === selected.id ? "" : "muted"}">${escapeHtml(item.updatedAt)}</span>
                </div>
                <div class="product-meta-grid ${item.id === selected.id ? "" : "muted"}">
                  <div>템플릿: ${escapeHtml(item.template)}</div>
                  <div>형태: ${escapeHtml(item.shape)}</div>
                  <div>폰트: ${escapeHtml(item.font)}</div>
                  <div>카페24: ${escapeHtml(item.cafe24)}</div>
                </div>
              </button>
            `).join("")}
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <div class="job-top">
            <div>
              <h2 class="card-title">${escapeHtml(selected.name)}</h2>
              <div class="card-description">원본 디자인 파일 수정이 아니라 운영자가 조정 가능한 설정값만 다루는 화면입니다.</div>
            </div>
            <div class="inline-actions">
              <button class="button secondary">버전 롤백</button>
              <button class="button primary" data-action="republish">운영 반영</button>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="grid-2">
            <div class="soft-box">
              <div style="font-weight:700;">기본 연결 정보</div>
              <div class="key-value" style="margin-top:16px;">
                <div class="key-value-row"><span>카페24 상품번호</span><strong>${escapeHtml(selected.cafe24)}</strong></div>
                <div class="key-value-row"><span>연결 템플릿</span><strong>${escapeHtml(selected.template)}</strong></div>
                <div class="key-value-row"><span>상패 형태</span><strong>${escapeHtml(selected.shape)}</strong></div>
                <div class="key-value-row"><span>출력 폰트</span><strong>${escapeHtml(selected.font)}</strong></div>
              </div>
            </div>
            <div class="soft-box">
              <div class="toggle-row">
                <div><div style="font-weight:700;">안전 모드</div><div class="tiny muted" style="margin-top:4px;">템플릿 원본 수정 차단, 설정값만 저장</div></div>
                <button class="switch ${state.safeMode ? "on" : ""}" data-action="toggle-safe"></button>
              </div>
              <div style="height:1px;background:var(--line);margin:16px 0;"></div>
              <div class="toggle-row">
                <div><div style="font-weight:700;">자동 아웃라인</div><div class="tiny muted" style="margin-top:4px;">PDF 생성 시 폰트 깨짐 방지</div></div>
                <button class="switch ${state.autoOutline ? "on" : ""}" data-action="toggle-outline"></button>
              </div>
              <div class="guide-box" style="margin-top:16px;">현재 운영 버전: <strong>${escapeHtml(state.templateVersion)}</strong></div>
            </div>
          </div>
          <div style="margin-top:18px;">${previewCard()}</div>
        </div>
      </div>
    </div>
  `;
}

function optionsSection() {
  return `
    <div class="grid-main">
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">공통 옵션셋</h2>
          <div class="card-description">상품마다 새로 만들지 않고 공통 옵션셋을 묶어서 운영하는 구조입니다.</div>
        </div>
        <div class="card-body">
          <div class="option-stack">
            ${state.optionSets.map((set) => `
              <div class="soft-box">
                <div class="option-card-top">
                  <div><div style="font-weight:700;">${escapeHtml(set.title)}</div><div class="tiny muted" style="margin-top:4px;">기본값: ${escapeHtml(set.defaultValue)}</div></div>
                  <span class="${set.active ? "badge success" : "badge neutral"}">${set.active ? "활성" : "비활성"}</span>
                </div>
                <div class="chip-group" style="margin-top:12px;">${set.values.map((value) => `<span class="badge neutral">${escapeHtml(value)}</span>`).join("")}</div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">옵션 미리보기</h2>
          <div class="card-description">실시간 미리보기와 PDF 생성이 같은 설정값을 공유하도록 구성했습니다.</div>
        </div>
        <div class="card-body">
          <div class="grid-preview">
            <div class="control-stack">
              <div><div style="font-weight:700;">프레임 컬러</div><div class="chip-group" style="margin-top:10px;">${["골드", "실버", "블랙"].map((value) => `<button class="${chooseButton(state.frameColor === value)}" data-action="frame" data-value="${value}">${value}</button>`).join("")}</div></div>
              <div><div style="font-weight:700;">배경 컬러</div><div class="chip-group" style="margin-top:10px;">${["아이보리", "웜그레이", "차콜"].map((value) => `<button class="${chooseButton(state.bgColor === value)}" data-action="background" data-value="${value}">${value}</button>`).join("")}</div></div>
              <div><div style="font-weight:700;">캘리 컬러</div><div class="chip-group" style="margin-top:10px;">${["골드", "실버"].map((value) => `<button class="${chooseButton(state.calliColor === value)}" data-action="calli" data-value="${value}">${value}</button>`).join("")}</div></div>
            </div>
            <div>${previewCard()}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function typographySection() {
  return `
    <div class="grid-preview">
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">문구 / 폰트 / 좌표 설정</h2>
          <div class="card-description">자유 편집이 아니라 고정 템플릿 기준 좌표와 출력 규칙만 조정합니다.</div>
        </div>
        <div class="card-body">
          <div class="control-stack">
            <div>
              <div style="font-weight:700;">상품 선택</div>
              <select class="select" id="productSelect" style="margin-top:10px;">
                ${state.products.map((product) => `<option value="${product.id}" ${product.id === state.selectedProductId ? "selected" : ""}>${escapeHtml(product.name)}</option>`).join("")}
              </select>
            </div>
            <div class="slider-wrap"><div class="toggle-row"><span style="font-weight:700;">X 좌표</span><strong>${state.copyX}%</strong></div><input type="range" min="20" max="80" step="1" value="${state.copyX}" data-range="copy-x" /></div>
            <div class="slider-wrap"><div class="toggle-row"><span style="font-weight:700;">Y 좌표</span><strong>${state.copyY}%</strong></div><input type="range" min="25" max="70" step="1" value="${state.copyY}" data-range="copy-y" /></div>
            <div class="slider-wrap"><div class="toggle-row"><span style="font-weight:700;">폰트 크기</span><strong>${state.fontScale}px</strong></div><input type="range" min="18" max="40" step="1" value="${state.fontScale}" data-range="font-scale" /></div>
            <div class="grid-2">
              <div class="soft-box"><div class="tiny muted">최대 줄수</div><div style="margin-top:6px;font-size:1.3rem;font-weight:800;">3줄</div></div>
              <div class="soft-box"><div class="tiny muted">글자수 제한</div><div style="margin-top:6px;font-size:1.3rem;font-weight:800;">25자</div></div>
            </div>
            <div class="guide-box small muted">현재 설계 기준은 상패 모양별 문구 위치는 동일하고, 상품별 폰트만 달라질 수 있는 구조를 반영합니다.</div>
          </div>
        </div>
      </div>
      <div>${previewCard()}</div>
    </div>
  `;
}

function pdfSection() {
  return `
    <div class="card">
      <div class="card-header">
        <div class="job-top">
          <div>
            <h2 class="card-title">PDF 파일 / 검수</h2>
            <div class="card-description">고객이 생성한 인쇄용 파일 확인, 다운로드, 재생성만 담당합니다.</div>
          </div>
          <div class="chip-group">${["전체", "성공", "실패", "대기"].map((value) => `<button class="${chooseButton(state.pdfFilter === value)}" data-action="pdf-filter" data-value="${value}">${value}</button>`).join("")}</div>
        </div>
      </div>
      <div class="card-body">
        <div class="jobs-stack">
          ${filteredPdfJobs().map((job) => `
            <div class="job-box">
              <div class="job-top">
                <div>
                  <div class="icon-label"><strong>주문자 : ${escapeHtml(job.customerName)}</strong><span class="${badgeClass(job.status)}">${escapeHtml(job.status)}</span>${job.outlined ? '<span class="badge dark">아웃라인 적용</span>' : ""}</div>
                  <div class="small" style="margin-top:10px;color:var(--text);">주문상품 : ${escapeHtml(job.orderedProduct)}</div>
                  <div class="small" style="margin-top:8px;color:var(--text);">선택옵션 : ${escapeHtml(job.orderedOptions)}</div>
                  <div class="small muted" style="margin-top:8px;">이슈: ${escapeHtml(job.issue)}</div>
                  <div class="tiny muted" style="margin-top:8px;">생성 시각: ${escapeHtml(job.createdAt)}</div>
                  <div class="tiny muted" style="margin-top:8px;">작업번호: ${escapeHtml(job.id)} · 주문번호: ${escapeHtml(job.orderRef)} · 템플릿: ${escapeHtml(job.template)}</div>
                </div>
                <div class="button-row">
                  <button class="button secondary">미리보기</button>
                  <button class="button secondary">PDF 다운로드</button>
                  ${job.status !== "성공" ? `<button class="button primary" data-action="retry-pdf" data-id="${job.id}">재생성</button>` : ""}
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function logsSection() {
  return `
    <div class="grid-main">
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">오류 / 이벤트 로그</h2>
          <div class="card-description">비개발자도 읽을 수 있는 수준으로 원인과 조치 방향을 표시합니다.</div>
        </div>
        <div class="card-body">
          <div class="list-stack">${state.logs.map((log) => `<div class="log-box"><div class="log-top"><div class="icon-label"><span>${log.level === "error" ? "⛔" : log.level === "warning" ? "⚠" : "✓"}</span><strong>${escapeHtml(log.title)}</strong></div><span class="tiny muted">${escapeHtml(log.time)}</span></div><div class="small muted" style="margin-top:8px;">${escapeHtml(log.detail)}</div></div>`).join("")}</div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">오류 대응 가이드</h2>
          <div class="card-description">운영자가 개발 지원 없이 1차 확인 가능한 기준입니다.</div>
        </div>
        <div class="card-body">
          <div class="list-stack">
            ${[
              ["문구 길이 초과", "글자수 제한과 최대 줄 수부터 먼저 확인합니다."],
              ["폰트 아웃라인 실패", "폰트 파일 등록 상태와 자동 아웃라인 설정을 점검합니다."],
              ["배포 후 설정 미적용", "운영 반영 버튼이 눌렸는지와 버전 증가 여부를 확인합니다."],
              ["PDF 생성 지연", "대기 상태인지 실제 실패 상태인지 먼저 구분합니다."],
            ].map(([title, desc]) => `<div class="guide-box"><strong>${title}</strong><div class="small muted" style="margin-top:8px;">${desc}</div></div>`).join("")}
          </div>
        </div>
      </div>
    </div>
  `;
}

function settingsSection() {
  return `
    <div class="grid-2">
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">권한 설정</h2>
          <div class="card-description">운영자가 만질 수 있는 영역과 개발 영역을 분리합니다.</div>
        </div>
        <div class="card-body">
          <div class="list-stack">
            ${[
              ["운영 매니저", "템플릿 매핑, 옵션값, PDF 다운로드 가능"],
              ["검수 담당", "PDF 미리보기와 실패 건 재생성 가능"],
              ["개발자", "렌더링 원본 템플릿과 서버 설정 수정 가능"],
            ].map(([role, desc]) => `<div class="row-box"><div class="toggle-row"><div><strong>${role}</strong><div class="small muted" style="margin-top:6px;">${desc}</div></div><span>${icons.shield}</span></div></div>`).join("")}
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">환경 설정</h2>
          <div class="card-description">PDF 생성 기준과 운영 보조 기능만 단순하게 제공합니다.</div>
        </div>
        <div class="card-body">
          <div class="list-stack">
            <div class="toggle-box"><div class="toggle-row"><div><strong>자동 아웃라인 처리</strong><div class="small muted" style="margin-top:6px;">수신 환경과 무관하게 동일 출력</div></div><button class="switch ${state.autoOutline ? "on" : ""}" data-action="toggle-outline"></button></div></div>
            <div class="toggle-box"><div class="toggle-row"><div><strong>안전 모드</strong><div class="small muted" style="margin-top:6px;">원본 템플릿 직접 수정 차단</div></div><button class="switch ${state.safeMode ? "on" : ""}" data-action="toggle-safe"></button></div></div>
            <button class="button ghost" data-action="open-checklist">배포 전 체크리스트 보기</button>
            <button class="button primary" data-action="open-impact">운영 반영 시뮬레이터</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function contentSection() {
  if (state.activeNav === "dashboard") return dashboardSection();
  if (state.activeNav === "templates") return templatesSection();
  if (state.activeNav === "options") return optionsSection();
  if (state.activeNav === "typography") return typographySection();
  if (state.activeNav === "pdf") return pdfSection();
  if (state.activeNav === "logs") return logsSection();
  return settingsSection();
}

function checklistSheet() {
  return `
    <div class="overlay ${state.checklistOpen ? "open" : ""}" data-action="close-checklist"></div>
    <aside class="side-panel ${state.checklistOpen ? "open" : ""}">
      <div class="side-panel-header">
        <div class="modal-head">
          <div><h2 class="card-title">배포 전 체크리스트</h2><div class="card-description">주문 관리는 카페24에서 하고, 이 콘솔은 PDF와 템플릿만 점검합니다.</div></div>
          <button class="close-button" data-action="close-checklist">닫기</button>
        </div>
      </div>
      <div class="side-panel-body">
        ${["상품별 템플릿 ID 매핑 확인", "옵션셋 기본값 확인", "문구 최대 길이 / 줄 수 확인", "PDF 아웃라인 적용 테스트", "실패 로그 노출 여부 확인", "운영 반영 버전 기록"].map((item) => `<div class="row-box">${item}</div>`).join("")}
      </div>
    </aside>
  `;
}

function impactModal() {
  return `
    <div class="overlay ${state.impactModalOpen ? "open" : ""}" data-action="close-impact"></div>
    <div class="modal-wrap ${state.impactModalOpen ? "open" : ""}">
      <div class="modal">
        <div class="modal-head">
          <div><h2 class="card-title">운영 반영 시뮬레이터</h2><div class="card-description">실제 반영 전에 예상 영향을 미리 보여주는 예시 모달입니다.</div></div>
          <button class="close-button" data-action="close-impact">닫기</button>
        </div>
        <div class="list-stack" style="margin-top:16px;">
          <div class="soft-box">영향 상품: 3개</div>
          <div class="soft-box">변경 항목: 문구 Y 좌표, 캘리 기본값</div>
          <div class="soft-box">재검수 필요: PDF 샘플 2건</div>
        </div>
      </div>
    </div>
  `;
}

function bindRanges() {
  document.querySelectorAll("[data-range]").forEach((element) => {
    element.addEventListener("input", (event) => {
      const value = Number(event.target.value);
      const type = event.target.dataset.range;
      if (type === "copy-x") state.copyX = value;
      if (type === "copy-y") state.copyY = value;
      if (type === "font-scale") state.fontScale = value;
      renderApp();
    });
  });
}

function bindActions() {
  document.querySelectorAll("[data-action]").forEach((element) => {
    element.addEventListener("click", () => {
      const { action, id, value } = element.dataset;
      if (action === "nav") state.activeNav = id;
      if (action === "select-product") state.selectedProductId = id;
      if (action === "frame") state.frameColor = value;
      if (action === "background") state.bgColor = value;
      if (action === "calli") state.calliColor = value;
      if (action === "toggle-safe") state.safeMode = !state.safeMode;
      if (action === "toggle-outline") state.autoOutline = !state.autoOutline;
      if (action === "pdf-filter") state.pdfFilter = value;
      if (action === "republish") {
        const numeric = Number(state.templateVersion.replace("v", ""));
        state.templateVersion = `v${(numeric + 0.1).toFixed(1)}`;
      }
      if (action === "retry-pdf") {
        state.pdfJobs = state.pdfJobs.map((job) => job.id === id ? { ...job, status: "성공", outlined: true, issue: "-", createdAt: "2026-04-20 09:22" } : job);
      }
      if (action === "open-checklist") state.checklistOpen = true;
      if (action === "close-checklist") state.checklistOpen = false;
      if (action === "open-impact") state.impactModalOpen = true;
      if (action === "close-impact") state.impactModalOpen = false;
      renderApp();
    });
  });
}

function bindInputs() {
  const searchInput = document.querySelector("#searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      state.search = event.target.value;
      renderApp();
    });
  }

  const productSelect = document.querySelector("#productSelect");
  if (productSelect) {
    productSelect.addEventListener("change", (event) => {
      state.selectedProductId = event.target.value;
      renderApp();
    });
  }
}

function renderApp() {
  document.querySelector("#app").innerHTML = `
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand">
          <div class="brand-mark">${icons.pdfFile}</div>
          <div>
            <div class="brand-sub">Golden Bee</div>
            <div class="brand-title">Admin Console</div>
          </div>
        </div>
        <div class="nav-list">
          ${navItems.map((item) => `<button class="nav-button ${state.activeNav === item.id ? "active" : ""}" data-action="nav" data-id="${item.id}"><span class="nav-icon">${item.icon}</span><span>${item.label}</span></button>`).join("")}
        </div>
        <div class="sidebar-note">
          <div class="icon-label"><span>${icons.clock}</span><strong>현재 기준</strong></div>
          <ul>
            <li>주문 관리는 카페24</li>
            <li>이 콘솔의 역할: 템플릿 관리 / PDF 검수 / 오류 확인</li>
            <li>불포함 기능: 복잡한 주문 처리 / 확정 워크플로우</li>
          </ul>
        </div>
      </aside>
      <main class="main">
        <section class="hero">
          <div>
            <div class="eyebrow">운영 어드민 샘플</div>
            <div class="hero-title">주문 파일 관리와 템플릿 통제를 위한 관리자 화면</div>
          </div>
          <div class="hero-actions">
            <button class="button secondary">카페24 주문 바로가기</button>
            <button class="button primary" data-action="republish">운영 반영</button>
          </div>
        </section>
        <section class="content-area">${contentSection()}</section>
      </main>
    </div>
    ${checklistSheet()}
    ${impactModal()}
  `;

  bindActions();
  bindInputs();
  bindRanges();
}

renderApp();
