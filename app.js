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
  { id: "templates", label: "템플릿 관리", icon: icons.templates },
  { id: "mappings", label: "상품 연결 관리", icon: icons.options },
  { id: "pdf", label: "PDF 파일 / 검수", icon: icons.pdf },
  { id: "logs", label: "오류 로그", icon: icons.logs },
  { id: "settings", label: "환경설정 / 권한", icon: icons.settings },
];

const state = {
  activeNav: "dashboard",
  templateTab: "create",
  search: "",
  mappingSearch: "",
  pdfSearch: "",
  templateProductSearch: "",
  products: [
    { id: "P-101", name: "감사패 정사각형 A", cafe24: "product_no_101", template: "TPL-SQ-01", shape: "정사각형", font: "나눔명조 Bold", optionSetIds: ["OPT-FRAME-01", "OPT-BG-01", "OPT-CALLI-01"], copyX: 50, copyY: 47, maxChars: 25, maxLines: 3, status: "운영중", updatedAt: "2026-04-20 09:10" },
    { id: "P-102", name: "감사패 직사각형 B", cafe24: "product_no_102", template: "TPL-RE-01", shape: "직사각형", font: "Noto Serif KR", optionSetIds: ["OPT-FRAME-01", "OPT-BG-01", "OPT-CALLI-01"], copyX: 48, copyY: 45, maxChars: 28, maxLines: 3, status: "운영중", updatedAt: "2026-04-19 18:25" },
    { id: "P-103", name: "부모님 트로피 정사각형 C", cafe24: "product_no_103", template: "TPL-SQ-01", shape: "정사각형", font: "Pretendard SemiBold", optionSetIds: ["OPT-FRAME-01", "OPT-BG-01", "OPT-CALLI-01"], copyX: 50, copyY: 46, maxChars: 22, maxLines: 2, status: "테스트중", updatedAt: "2026-04-18 15:40" },
  ],
  optionSets: [
    { id: "OPT-FRAME-01", title: "?????", values: [{ name: "??", code: "#C8A44D" }, { name: "??", code: "#BFC4CC" }, { name: "??", code: "#111111" }], defaultValue: "??", active: true },
    { id: "OPT-BG-01", title: "????", values: [{ name: "????", code: "#F4EFE6" }, { name: "????", code: "#C8C2B8" }, { name: "??", code: "#464646" }], defaultValue: "????", active: true },
    { id: "OPT-CALLI-01", title: "????", values: [{ name: "??", code: "#C8A44D" }, { name: "??", code: "#BFC4CC" }], defaultValue: "??", active: true },
    { id: "OPT-WEIGHT-01", title: "? ??? ??", values: [{ name: "0.1g", code: "" }, { name: "0.2g", code: "" }, { name: "0.3g", code: "" }], defaultValue: "0.1g", active: true },
    { id: "OPT-TITLE-COLOR-01", title: "????? ????", values: [{ name: "??", code: "#C8A44D" }, { name: "??", code: "#BFC4CC" }, { name: "??", code: "#111111" }], defaultValue: "??", active: true },
    { id: "OPT-SUBTITLE-COLOR-01", title: "????", values: [{ name: "??", code: "#111111" }, { name: "???", code: "#767676" }, { name: "???", code: "#6B4C35" }], defaultValue: "??", active: true },
  ],
  pdfJobs: [
    { id: "JOB-240420-001", orderRef: "CAFE24-54821", customerName: "김민준", customerPhone: "010-2451-8821", orderedProduct: "감사패 정사각형 A", orderedOptions: "프레임 골드 / 배경 아이보리 / 캘리 골드 / 0.1g", template: "TPL-SQ-01", status: "성공", downloadStatus: "다운로드대기", createdAt: "2026-04-20 08:52", issue: "-" },
    { id: "JOB-240420-002", orderRef: "CAFE24-54822", customerName: "이서연", customerPhone: "010-3312-7744", orderedProduct: "감사패 직사각형 B", orderedOptions: "프레임 블랙 / 배경 웜그레이 / 캘리 실버 / 0.2g", template: "TPL-RE-01", status: "실패", downloadStatus: "다운로드대기", createdAt: "2026-04-20 08:58", issue: "문구 길이 초과로 텍스트 아웃라인 변환이 중단되었습니다." },
    { id: "JOB-240420-003", orderRef: "CAFE24-54823", customerName: "박지후", customerPhone: "010-8842-1182", orderedProduct: "부모님 트로피 정사각형 C", orderedOptions: "프레임 실버 / 배경 차콜 / 캘리 골드 / 0.1g", template: "TPL-SQ-01", status: "대기", downloadStatus: "다운로드대기", createdAt: "2026-04-20 09:05", issue: "PDF 생성 큐 대기중" },
    { id: "JOB-240420-004", orderRef: "CAFE24-54824", customerName: "최윤아", customerPhone: "010-5531-0291", orderedProduct: "감사패 정사각형 A", orderedOptions: "프레임 골드 / 배경 아이보리 / 캘리 실버 / 0.3g", template: "TPL-SQ-01", status: "성공", downloadStatus: "다운로드완료", createdAt: "2026-04-20 09:07", issue: "-" },
  ],
  logs: [
    { id: "LOG-001", level: "error", title: "PDF 생성 실패", detail: "문구 최대 길이를 초과하여 텍스트 아웃라인 변환이 중단되었습니다.", time: "2026-04-20 08:58" },
    { id: "LOG-002", level: "warning", title: "템플릿 변경 미반영 상태", detail: "TPL-RE-01 템플릿이 수정되었지만 운영 반영은 아직 이루어지지 않았습니다.", time: "2026-04-20 08:30" },
    { id: "LOG-003", level: "success", title: "옵션셋 저장 완료", detail: "OPT-CALLI-01 기본값이 골드로 저장되었습니다.", time: "2026-04-19 17:11" },
  ],
  selectedProductId: "P-101",
  registeredFonts: ["나눔명조 Bold", "Noto Serif KR", "Pretendard SemiBold", "MaruBuri", "SUIT Bold"],
  cafe24Products: [
    { id: "product_no_101", name: "감사패 정사각형 A", optionSummary: "골드 프레임 가능 / 캘리 옵션 사용" },
    { id: "product_no_102", name: "감사패 직사각형 B", optionSummary: "블랙 프레임 가능 / 직사각형 규격" },
    { id: "product_no_103", name: "부모님 트로피 정사각형 C", optionSummary: "실버 프레임 가능 / 추모 문구 대응" },
    { id: "product_no_104", name: "기업 공로패 와이드 D", optionSummary: "대형 사이즈 / 배경색 커스텀" },
  ],
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
  templateCreateOpen: false,
  productPickerOpen: false,
  templateConfirmOpen: false,
  optionSetCreateOpen: false,
  optionSetPickerOpen: false,
  mappingTemplateId: "TPL-SQ-01",
  templateDraft: {
    templateId: "",
    name: "",
    shape: "정사각형",
    widthMm: "",
    heightMm: "",
    copyX: "50",
    copyY: "47",
    maxChars: "25",
    maxLines: "3",
    frameOptionImage: "",
    bgColorCode: "#F4EFE6",
    font: "나눔명조 Bold",
    linkedOptionSetIds: ["OPT-FRAME-01", "OPT-BG-01", "OPT-CALLI-01"],
    linkedProductId: "",
    linkedProductName: "",
  },
  optionSetDraft: {
    id: "",
    type: "frame",
    title: "?????",
    items: [{ name: "??", code: "#C8A44D" }],
    defaultIndex: 0,
  },
};


const SHAPE_PRESETS = {
  "????": { widthMm: "180", heightMm: "180", copyX: "50", copyY: "47", maxChars: "25", maxLines: "3" },
  "????": { widthMm: "240", heightMm: "180", copyX: "48", copyY: "45", maxChars: "28", maxLines: "3" },
};

const OPTION_SET_TYPES = [
  { key: "frame", title: "?????", prefix: "OPT-FRAME" },
  { key: "bg", title: "????", prefix: "OPT-BG" },
  { key: "calli", title: "????", prefix: "OPT-CALLI" },
  { key: "text", title: "????", prefix: "OPT-TEXT" },
];

function getShapePreset(shape) {
  const fallback = SHAPE_PRESETS[shape] || SHAPE_PRESETS["????"];
  const matched = state.products.find((product) => product.shape === shape);
  if (!matched) return fallback;
  return {
    widthMm: fallback.widthMm,
    heightMm: fallback.heightMm,
    copyX: String(matched.copyX ?? fallback.copyX),
    copyY: String(matched.copyY ?? fallback.copyY),
    maxChars: String(matched.maxChars ?? fallback.maxChars),
    maxLines: String(matched.maxLines ?? fallback.maxLines),
  };
}

function getTemplatePrefix(shape) {
  return shape === "????" ? "TPL-RE" : "TPL-SQ";
}

function nextSequenceFromIds(ids, prefix) {
  return ids.reduce((max, id) => {
    const match = String(id).match(new RegExp(`^${prefix}-(\\d+)$`));
    return match ? Math.max(max, Number(match[1])) : max;
  }, 0) + 1;
}

function generateTemplateId(shape) {
  const prefix = getTemplatePrefix(shape);
  const next = nextSequenceFromIds(state.products.map((product) => product.template), prefix);
  return `${prefix}-${String(next).padStart(2, "0")}`;
}

function getOptionSetTypeMeta(type) {
  return OPTION_SET_TYPES.find((item) => item.key === type) || OPTION_SET_TYPES[0];
}

function generateOptionSetId(type) {
  const meta = getOptionSetTypeMeta(type);
  const next = nextSequenceFromIds(state.optionSets.map((set) => set.id), meta.prefix);
  return `${meta.prefix}-${String(next).padStart(2, "0")}`;
}

function applyTemplateShapePreset(shape, options = {}) {
  const preset = getShapePreset(shape);
  state.templateDraft.shape = shape;
  state.templateDraft.templateId = generateTemplateId(shape);
  state.templateDraft.copyX = preset.copyX;
  state.templateDraft.copyY = preset.copyY;
  state.templateDraft.maxChars = preset.maxChars;
  state.templateDraft.maxLines = preset.maxLines;
  if (!options.preserveSize) {
    state.templateDraft.widthMm = preset.widthMm;
    state.templateDraft.heightMm = preset.heightMm;
  }
}

function refreshTemplateDraftId() {
  state.templateDraft.templateId = generateTemplateId(state.templateDraft.shape);
}

function refreshOptionSetDraftId() {
  state.optionSetDraft.id = generateOptionSetId(state.optionSetDraft.type);
  state.optionSetDraft.title = getOptionSetTypeMeta(state.optionSetDraft.type).title;
}

function getOptionValueName(value) {
  return typeof value === "string" ? value : value?.name || "";
}

function getOptionValueCode(value) {
  return typeof value === "string" ? "" : value?.code || "";
}

function resetTemplateDraft() {
  state.templateDraft = {
    templateId: "",
    name: "",
    shape: "정사각형",
    widthMm: "",
    heightMm: "",
    copyX: "50",
    copyY: "47",
    maxChars: "25",
    maxLines: "3",
    frameOptionImage: "",
    bgColorCode: "#F4EFE6",
    font: state.registeredFonts[0],
    linkedOptionSetIds: ["OPT-FRAME-01", "OPT-BG-01", "OPT-CALLI-01"],
    linkedProductId: "",
    linkedProductName: "",
  };
  applyTemplateShapePreset(state.templateDraft.shape);
  state.templateProductSearch = "";
}

function resetOptionSetDraft() {
  state.optionSetDraft = {
    id: "",
    type: "frame",
    title: "?????",
    items: [{ name: "??", code: "#C8A44D" }],
    defaultIndex: 0,
  };
  refreshOptionSetDraftId();
}
function getSelectedProduct() {
  return state.products.find((product) => product.id === state.selectedProductId) || state.products[0];
}

function syncPreviewFromSelectedProduct() {
  const selected = getSelectedProduct();
  if (!selected) return;
  state.copyX = Number(selected.copyX || 50);
  state.copyY = Number(selected.copyY || 47);
}

function filteredProducts() {
  const keyword = state.search.trim().toLowerCase();
  if (!keyword) return state.products;
  return state.products.filter((item) => [item.name, item.template, item.cafe24].some((value) => value.toLowerCase().includes(keyword)));
}

function filteredMappings() {
  const keyword = state.mappingSearch.trim().toLowerCase();
  if (!keyword) return state.products;
  return state.products.filter((item) =>
    [item.name, item.template, item.cafe24].some((value) =>
      value.toLowerCase().includes(keyword),
    ),
  );
}

function templateCatalog() {
  const seen = new Set();
  return state.products
    .filter((item) => {
      if (seen.has(item.template)) return false;
      seen.add(item.template);
      return true;
    })
    .map((item) => ({
      template: item.template,
      label: `${item.template} · ${item.shape} 기본 템플릿`,
      shape: item.shape,
      font: item.font,
      optionSetIds: item.optionSetIds || [],
      copyX: item.copyX,
      copyY: item.copyY,
      maxChars: item.maxChars,
      maxLines: item.maxLines,
    }));
}

function filteredPdfJobs() {
  const searchedJobs = state.pdfJobs.filter((job) => {
    const keyword = state.pdfSearch.trim().toLowerCase();
    if (!keyword) return true;
    return [job.customerName, job.customerPhone, job.orderRef, job.orderedProduct, job.orderedOptions]
      .some((value) => value.toLowerCase().includes(keyword));
  });
  if (state.pdfFilter === "전체") return searchedJobs;
  return searchedJobs.filter((job) => job.status === state.pdfFilter);
}

function filteredCafe24Products() {
  const keyword = state.templateProductSearch.trim().toLowerCase();
  if (!keyword) return state.cafe24Products;
  return state.cafe24Products.filter((item) =>
    [item.id, item.name, item.optionSummary].some((value) =>
      value.toLowerCase().includes(keyword),
    ),
  );
}

function optionSetSummary(ids) {
  if (!ids || !ids.length) return "-";
  return ids.join(", ");
}

function bindSearchInput(selector, stateKey) {
  const input = document.querySelector(selector);
  if (!input) return;

  let composing = false;
  const rerenderWithFocus = (value, caret) => {
    state[stateKey] = value;
    renderApp();
    const nextInput = document.querySelector(selector);
    if (nextInput) {
      nextInput.focus();
      if (typeof caret === "number") {
        nextInput.setSelectionRange(caret, caret);
      }
    }
  };

  input.addEventListener("compositionstart", () => {
    composing = true;
  });

  input.addEventListener("compositionend", (event) => {
    composing = false;
    rerenderWithFocus(event.target.value, event.target.selectionStart);
  });

  input.addEventListener("input", (event) => {
    state[stateKey] = event.target.value;
    if (!composing) {
      rerenderWithFocus(event.target.value, event.target.selectionStart);
    }
  });
}

function recentTemplates() {
  const cutoff = new Date("2026-04-14T00:00:00");
  return state.products.filter((item) => new Date(item.updatedAt.replace(" ", "T")) >= cutoff);
}

function successRate() {
  const ok = state.pdfJobs.filter((job) => job.status === "성공").length;
  return Math.round((ok / state.pdfJobs.length) * 100);
}

function badgeClass(status) {
  if (status === "운영중" || status === "성공") return "badge success";
  if (status === "테스트중" || status === "대기") return "badge warning";
  if (status === "실패") return "badge error";
  if (status === "다운로드완료") return "badge success";
  if (status === "다운로드대기") return "badge neutral";
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

function previewCard(shapeOverride) {
  const selectedShape = shapeOverride || getSelectedProduct().shape;
  const frameClass = selectedShape === "직사각형" ? "frame-art rectangle" : "frame-art";
  return `
    <div class="frame-shell">
      <div class="${frameClass}" style="background:${frameGradient()};">
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
  const createTab = `
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">템플릿 생성</h2>
        <div class="card-description">원본 에셋을 새로 만드는 화면이 아니라, 운영 가능한 템플릿 소스를 등록하는 단계입니다.</div>
      </div>
      <div class="card-body">
        <div class="form-grid">
          <label class="form-field">
            <span class="field-label">템플릿 이름</span>
            <input id="draftName" class="text-input" value="${escapeHtml(state.templateDraft.name)}" placeholder="예: 정사각 신규 템플릿" />
          </label>
          <div class="form-field">
            <span class="field-label">??? ID</span>
            <div class="summary-box" style="padding:14px 16px;">${escapeHtml(state.templateDraft.templateId)}</div>
          </div>
          <label class="form-field">
            <span class="field-label">액자 형태</span>
            <select id="draftShape" class="select">
              <option value="정사각형" ${state.templateDraft.shape === "정사각형" ? "selected" : ""}>정사각</option>
              <option value="직사각형" ${state.templateDraft.shape === "직사각형" ? "selected" : ""}>직사각</option>
            </select>
          </label>
          <label class="form-field">
            <span class="field-label">기준 폰트</span>
            <select id="draftFont" class="select">
              ${state.registeredFonts.map((font) => `<option value="${font}" ${state.templateDraft.font === font ? "selected" : ""}>${font}</option>`).join("")}
            </select>
          </label>
          <label class="form-field">
            <span class="field-label">가로(mm)</span>
            <input id="draftWidth" class="text-input" value="${escapeHtml(state.templateDraft.widthMm)}" placeholder="예: 180" />
          </label>
          <label class="form-field">
            <span class="field-label">세로(mm)</span>
            <input id="draftHeight" class="text-input" value="${escapeHtml(state.templateDraft.heightMm)}" placeholder="예: 180" />
          </label>
        </div>

        <div class="grid-2" style="margin-top:18px;">
          <div class="summary-box">
            <div style="font-weight:700;">기본 출력 규칙</div>
            <div class="key-value" style="margin-top:16px;">
              <div class="key-value-row"><span>문구 X 좌표</span><strong><input id="draftCopyX" class="text-input" value="${escapeHtml(state.templateDraft.copyX)}" style="width:88px;padding:8px 10px;" /></strong></div>
              <div class="key-value-row"><span>문구 Y 좌표</span><strong><input id="draftCopyY" class="text-input" value="${escapeHtml(state.templateDraft.copyY)}" style="width:88px;padding:8px 10px;" /></strong></div>
              <div class="key-value-row"><span>최대 줄수</span><strong><input id="draftMaxLines" class="text-input" value="${escapeHtml(state.templateDraft.maxLines)}" style="width:88px;padding:8px 10px;" /></strong></div>
              <div class="key-value-row"><span>글자수 제한</span><strong><input id="draftMaxChars" class="text-input" value="${escapeHtml(state.templateDraft.maxChars)}" style="width:88px;padding:8px 10px;" /></strong></div>
              <div class="key-value-row"><span>자동 아웃라인</span><strong>사용</strong></div>
            </div>
            <div class="tiny muted" style="margin-top:12px;">?? ??? ??? ?? ??? ?? ??? ??? ???? ?????.</div>
          </div>
          <div class="summary-box">
            <div style="font-weight:700;">생성 후 상태</div>
            <div class="key-value" style="margin-top:16px;">
              <div class="key-value-row"><span>초기 상태</span><strong>테스트중</strong></div>
              <div class="key-value-row"><span>버전</span><strong>v1.0</strong></div>
              <div class="key-value-row"><span>상품 연결</span><strong>미연결</strong></div>
              <div class="key-value-row"><span>옵션/색상셋 연결</span><strong>${escapeHtml(optionSetSummary(state.templateDraft.linkedOptionSetIds))}</strong></div>
            </div>
            <div class="button-row" style="margin-top:14px;">
              <button class="button secondary" data-action="open-option-set-picker">옵션/색상셋 연결</button>
            </div>
          </div>
        </div>

        <div class="button-row" style="margin-top:20px;">
          <button class="button secondary" data-action="reset-template-draft">임시저장</button>
          <button class="button primary" data-action="create-template-inline">템플릿 생성</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h2 class="card-title">최근 7일 이내 생성 리스트</h2>
        <div class="card-description">최근 생성한 템플릿만 하단에서 빠르게 확인합니다.</div>
      </div>
      <div class="card-body">
        <div class="recent-list">
          ${recentTemplates().map((item) => `
            <div class="soft-box">
              <div class="job-top">
                <div>
                  <div style="font-weight:700;">${escapeHtml(item.name)}</div>
                  <div class="small muted" style="margin-top:6px;">${escapeHtml(item.template)} · ${escapeHtml(item.cafe24)}</div>
                </div>
                <span class="${badgeClass(item.status)}">${escapeHtml(item.status)}</span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;

  const listTab = `
    <div class="grid-main">
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">템플릿 리스트</h2>
          <div class="card-description">전체 템플릿 리스트와 카페24 상품 매핑 상태를 확인합니다.</div>
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
                  <div style="grid-column:1 / -1;">옵션셋: ${escapeHtml(optionSetSummary(item.optionSetIds))}</div>
                </div>
              </button>
            `).join("")}
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">${escapeHtml(selected.name)}</h2>
          <div class="card-description">카페24 상품, 연결 템플릿, 옵션셋까지 포함한 전체 매핑 구조입니다.</div>
        </div>
        <div class="card-body">
          <div class="key-value">
            <div class="key-value-row"><span>카페24 상품번호</span><strong>${escapeHtml(selected.cafe24)}</strong></div>
            <div class="key-value-row"><span>연결 템플릿</span><strong>${escapeHtml(selected.template)}</strong></div>
            <div class="key-value-row"><span>연결 옵션셋</span><strong>${escapeHtml(optionSetSummary(selected.optionSetIds))}</strong></div>
            <div class="key-value-row"><span>문구 좌표</span><strong>X ${escapeHtml(selected.copyX)} / Y ${escapeHtml(selected.copyY)}</strong></div>
            <div class="key-value-row"><span>최대 글자수 / 줄 수</span><strong>${escapeHtml(selected.maxChars)}자 / ${escapeHtml(selected.maxLines)}줄</strong></div>
          </div>
          <div style="margin-top:18px;">${previewCard()}</div>
        </div>
      </div>
    </div>
  `;

  const optionTab = `
    <div class="content-area">
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">옵션 / 색상셋 생성</h2>
          <div class="card-description">상단에서 새 옵션셋을 만들고, 하단에서 생성된 모든 옵션/색상셋을 확인합니다.</div>
        </div>
        <div class="card-body">
          <div class="form-grid">
            <div class="form-field">
              <span class="field-label">??? ID</span>
              <div class="summary-box" style="padding:14px 16px;">${escapeHtml(state.optionSetDraft.id)}</div>
            </div>
            <div class="form-field full">
              <span class="field-label">??? ??</span>
              <div class="chip-group">${OPTION_SET_TYPES.map((type) => `<button class="${chooseButton(state.optionSetDraft.type === type.key)}" data-action="select-option-type" data-value="${type.key}">${type.title}</button>`).join("")}</div>
            </div>
            <div class="form-field full">
              <span class="field-label">??? / ????</span>
              <div class="option-item-stack">${state.optionSetDraft.items.map((item, index) => `<div class="option-item-row"><input class="text-input" data-option-item-name="${index}" value="${escapeHtml(item.name)}" placeholder="???" /><input class="text-input" data-option-item-code="${index}" value="${escapeHtml(item.code)}" placeholder="#C8A44D" /><button class="${chooseButton(state.optionSetDraft.defaultIndex === index)}" data-action="set-default-option-item" data-id="${index}">???</button><button class="button secondary" data-action="remove-option-item" data-id="${index}">??</button></div>`).join("")}</div>
              <div class="button-row" style="margin-top:12px;">
                <button class="button secondary" data-action="add-option-item">+ ??? ??</button>
              </div>
            </div>
          </div>
          <div class="button-row" style="margin-top:18px;">
            <button class="button primary" data-action="confirm-option-set-create">??/??? ??</button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">전체 옵션 / 색상셋 리스트</h2>
          <div class="card-description">생성된 모든 옵션/색상셋을 아래에서 관리합니다.</div>
        </div>
        <div class="card-body">
          <div class="option-stack">
            ${state.optionSets.map((set) => `
              <div class="soft-box">
                <div class="option-card-top">
                  <div>
                    <div style="font-weight:700;">${escapeHtml(set.id)}</div>
                    <div class="small muted" style="margin-top:6px;">${escapeHtml(set.title)}</div>
                  </div>
                  <span class="${set.active ? "badge success" : "badge neutral"}">${set.active ? "활성" : "비활성"}</span>
                </div>
                <div class="chip-group" style="margin-top:12px;">${set.values.map((value) => `<span class="badge neutral">${escapeHtml(getOptionValueName(value))}${getOptionValueCode(value) ? ` (${escapeHtml(getOptionValueCode(value))})` : ""}</span>`).join("")}</div>
                <div class="tiny muted" style="margin-top:10px;">기본값: ${escapeHtml(set.defaultValue)}</div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </div>
  `;

  return `
    <div class="content-area">
      <div class="tab-row">
        <button class="tab-button ${state.templateTab === "create" ? "active" : ""}" data-action="template-tab" data-value="create">1. ????????</button>
        <button class="tab-button ${state.templateTab === "list" ? "active" : ""}" data-action="template-tab" data-value="list">2. ??????????/button>
        <button class="tab-button ${state.templateTab === "options" ? "active" : ""}" data-action="template-tab" data-value="options">3. ??? / ?????/button>
        <button class="tab-button ${state.templateTab === "typography" ? "active" : ""}" data-action="template-tab" data-value="typography">4. ??? / ??? / ???</button>
      </div>
      ${state.templateTab === "create" ? createTab : state.templateTab === "list" ? listTab : state.templateTab === "options" ? optionTab : typographySection()}
    </div>
  `;
}

function optionsSection() {
  return `
    <div class="grid-main">
      <div class="card">
        <div class="card-header">
          <div class="job-top">
            <div>
              <h2 class="card-title">공통 옵션셋</h2>
              <div class="card-description">프레임 컬러, 배경 컬러, 캘리 컬러 같은 옵션셋을 관리자에서 생성하고 기본값을 지정합니다.</div>
            </div>
            <button class="button primary" data-action="open-option-set-create">옵션셋 생성</button>
          </div>
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
        <div class="product-search" style="margin-bottom:16px;">
          <input id="pdfSearchInput" class="text-input" value="${escapeHtml(state.pdfSearch)}" placeholder="주문자명, 카페24 주문번호, 주문상품명으로 검색" />
        </div>
        <div class="jobs-stack">
          ${filteredPdfJobs().map((job) => `
            <div class="job-box">
              <div class="job-top">
                <div>
                  <div class="icon-label"><strong>주문번호 : ${escapeHtml(job.orderRef)}</strong><span class="${badgeClass(job.status)}">${escapeHtml(job.status)}</span><span class="${badgeClass(job.downloadStatus)}">${escapeHtml(job.downloadStatus)}</span></div>
                  <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px 16px;margin-top:12px;">
                    <div class="small" style="color:var(--text);"><strong>주문자명</strong> : ${escapeHtml(job.customerName)}</div>
                    <div class="small" style="color:var(--text);"><strong>주문자 연락처</strong> : ${escapeHtml(job.customerPhone)}</div>
                    <div class="small" style="color:var(--text);"><strong>제품명</strong> : ${escapeHtml(job.orderedProduct)}</div>
                    <div class="small" style="color:var(--text);"><strong>카페24 주문번호</strong> : ${escapeHtml(job.orderRef)}</div>
                    <div class="small" style="color:var(--text);grid-column:1 / -1;"><strong>옵션</strong> : ${escapeHtml(job.orderedOptions)}</div>
                    <div class="small" style="color:var(--text);grid-column:1 / -1;"><strong>주문일시</strong> : ${escapeHtml(job.createdAt)}</div>
                  </div>
                  <div class="small muted" style="margin-top:8px;">이슈: ${escapeHtml(job.issue)}</div>
                  <div class="tiny muted" style="margin-top:8px;">작업번호: ${escapeHtml(job.id)} · 템플릿: ${escapeHtml(job.template)}</div>
                </div>
                <div class="button-row">
                  <button class="button secondary">이미지 미리보기</button>
                  <button class="button secondary" data-action="download-pdf" data-id="${job.id}">EPS 다운로드</button>
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

function mappingsSection() {
  const selected = getSelectedProduct();
  const templates = templateCatalog();
  const currentTemplate = templates.find((item) => item.template === state.mappingTemplateId) || templates[0];
  return `
    <div class="grid-main">
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">카페24 상품 연결 관리</h2>
          <div class="card-description">생성된 템플릿을 카페24 상품과 연결하는 별도 관리 화면</div>
        </div>
        <div class="card-body">
          <div class="product-search">
            <input id="mappingSearchInput" class="text-input" value="${escapeHtml(state.mappingSearch)}" placeholder="상품명, 카페24 상품번호, 템플릿 ID 검색" />
          </div>
          <div class="product-list" style="margin-top:14px;">
            ${filteredMappings().map((item) => `
              <button class="product-button ${item.id === selected.id ? "active" : ""}" data-action="select-mapping-product" data-id="${item.id}">
                <div class="job-top">
                  <div>
                    <div style="font-weight:700;">${escapeHtml(item.name)}</div>
                    <div style="margin-top:8px;"><span class="${badgeClass(item.status)}">${escapeHtml(item.status)}</span></div>
                  </div>
                  <span class="tiny ${item.id === selected.id ? "" : "muted"}">${escapeHtml(item.updatedAt)}</span>
                </div>
                <div class="product-meta-grid ${item.id === selected.id ? "" : "muted"}">
                  <div>카페24: ${escapeHtml(item.cafe24)}</div>
                  <div>템플릿: ${escapeHtml(item.template)}</div>
                  <div>형태: ${escapeHtml(item.shape)}</div>
                  <div>폰트: ${escapeHtml(item.font)}</div>
                </div>
              </button>
            `).join("")}
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h2 class="card-title">${escapeHtml(selected.name)}</h2>
          <div class="card-description">상품 상세에서 어떤 템플릿을 사용할지 연결하는 실제 운영 화면</div>
        </div>
        <div class="card-body">
          <div class="form-grid">
            <label class="form-field">
              <span class="field-label">카페24 상품번호</span>
              <input class="text-input" value="${escapeHtml(selected.cafe24)}" readonly />
            </label>
            <label class="form-field">
              <span class="field-label">연결 템플릿</span>
              <select id="mappingTemplateSelect" class="select">
                ${templates.map((item) => `<option value="${item.template}" ${item.template === state.mappingTemplateId ? "selected" : ""}>${escapeHtml(item.label)}</option>`).join("")}
              </select>
            </label>
          </div>

          <div class="grid-2" style="margin-top:18px;">
            <div class="summary-box">
              <div style="font-weight:700;">현재 연결 기준</div>
              <div class="key-value" style="margin-top:16px;">
                <div class="key-value-row"><span>상품명</span><strong>${escapeHtml(selected.name)}</strong></div>
                <div class="key-value-row"><span>템플릿 ID</span><strong>${escapeHtml(currentTemplate ? currentTemplate.template : selected.template)}</strong></div>
                <div class="key-value-row"><span>액자 형태</span><strong>${escapeHtml(currentTemplate ? currentTemplate.shape : selected.shape)}</strong></div>
                <div class="key-value-row"><span>폰트</span><strong>${escapeHtml(currentTemplate ? currentTemplate.font : selected.font)}</strong></div>
                <div class="key-value-row"><span>옵션셋</span><strong>${escapeHtml(currentTemplate ? optionSetSummary(currentTemplate.optionSetIds) : optionSetSummary(selected.optionSetIds))}</strong></div>
              </div>
            </div>
            <div class="summary-box">
              <div style="font-weight:700;">운영 주의사항</div>
              <ul class="small muted" style="margin:12px 0 0;padding-left:18px;line-height:1.7;">
                <li>상품 연결은 주문 관리가 아니라 렌더링 기준 지정입니다.</li>
                <li>잘못 연결하면 미리보기와 출력 결과가 함께 틀어집니다.</li>
                <li>템플릿 변경 후 샘플 EPS 재검수가 필요합니다.</li>
              </ul>
            </div>
          </div>

          <div class="button-row" style="margin-top:18px;">
            <button class="button secondary">이전 연결 보기</button>
            <button class="button primary" data-action="save-mapping">연결 저장</button>
          </div>
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
  if (state.activeNav === "mappings") return mappingsSection();
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

function templateCreateModal() {
  return `
    <div class="overlay ${state.templateCreateOpen || state.productPickerOpen || state.templateConfirmOpen ? "open" : ""}" data-action="close-template-overlays"></div>
    <div class="modal-wrap ${state.templateCreateOpen ? "open" : ""}">
      <div class="modal">
        <div class="modal-head">
          <div>
            <h2 class="card-title">템플릿 생성</h2>
            <div class="card-description">템플릿 이름, 규격, 옵션, 폰트, 연결 상품까지 한 번에 설정합니다.</div>
          </div>
          <button class="close-button" data-action="close-template-create">닫기</button>
        </div>
        <div class="modal-section">
          <div class="form-grid">
            <label class="form-field">
              <span class="field-label">템플릿 ID</span>
              <input id="draftTemplateId" class="text-input" value="${escapeHtml(state.templateDraft.templateId)}" placeholder="예: TPL-SQ-01" />
            </label>
            <label class="form-field">
              <span class="field-label">정사각 / 직사각</span>
              <select id="draftShape" class="select">
                <option value="정사각형" ${state.templateDraft.shape === "정사각형" ? "selected" : ""}>정사각형</option>
                <option value="직사각형" ${state.templateDraft.shape === "직사각형" ? "selected" : ""}>직사각형</option>
              </select>
            </label>
            <label class="form-field full">
              <span class="field-label">템플릿 이름</span>
              <input id="draftName" class="text-input" value="${escapeHtml(state.templateDraft.name)}" placeholder="예: 감사패 와이드 템플릿 01" />
            </label>
            <label class="form-field">
              <span class="field-label">가로(mm)</span>
              <input id="draftWidth" class="text-input" value="${escapeHtml(state.templateDraft.widthMm)}" placeholder="예: 180" />
            </label>
            <label class="form-field">
              <span class="field-label">세로(mm)</span>
              <input id="draftHeight" class="text-input" value="${escapeHtml(state.templateDraft.heightMm)}" placeholder="예: 180" />
            </label>
            <label class="form-field full">
              <span class="field-label">프레임 컬러 옵션 이미지</span>
              <input id="draftFrameImage" class="text-input" value="${escapeHtml(state.templateDraft.frameOptionImage)}" placeholder="예: /assets/options/frame-gold.png" />
            </label>
            <label class="form-field">
              <span class="field-label">배경색 코드</span>
              <input id="draftBgColor" class="text-input" value="${escapeHtml(state.templateDraft.bgColorCode)}" placeholder="예: #F4EFE6" />
            </label>
            <label class="form-field">
              <span class="field-label">폰트 설정</span>
              <select id="draftFont" class="select">
                ${state.registeredFonts.map((font) => `<option value="${font}" ${state.templateDraft.font === font ? "selected" : ""}>${font}</option>`).join("")}
              </select>
            </label>
            <label class="form-field">
              <span class="field-label">문구 X 좌표</span>
              <input id="draftCopyX" class="text-input" value="${escapeHtml(state.templateDraft.copyX)}" placeholder="예: 50" />
            </label>
            <label class="form-field">
              <span class="field-label">문구 Y 좌표</span>
              <input id="draftCopyY" class="text-input" value="${escapeHtml(state.templateDraft.copyY)}" placeholder="예: 47" />
            </label>
            <label class="form-field">
              <span class="field-label">최대 글자수</span>
              <input id="draftMaxChars" class="text-input" value="${escapeHtml(state.templateDraft.maxChars)}" placeholder="예: 25" />
            </label>
            <label class="form-field">
              <span class="field-label">최대 줄 수</span>
              <input id="draftMaxLines" class="text-input" value="${escapeHtml(state.templateDraft.maxLines)}" placeholder="예: 3" />
            </label>
            <div class="form-field full">
              <span class="field-label">옵션셋 연결</span>
              <div class="chip-group">
                ${state.optionSets.map((set) => `<button class="${chooseButton(state.templateDraft.linkedOptionSetIds.includes(set.id))}" data-action="toggle-draft-option-set" data-id="${set.id}">${escapeHtml(set.id)}</button>`).join("")}
              </div>
            </div>
            <div class="form-field full">
              <span class="field-label">상품 연결</span>
              <div class="summary-box">
                <div class="small" style="color:var(--text);">${state.templateDraft.linkedProductName ? `선택 상품: ${escapeHtml(state.templateDraft.linkedProductName)}` : "아직 연결된 상품이 없습니다."}</div>
                <div class="button-row" style="margin-top:12px;">
                  <button class="button secondary" data-action="open-product-picker">상품연결</button>
                </div>
              </div>
            </div>
          </div>
          <div class="button-row" style="margin-top:18px;justify-content:flex-end;">
            <button class="button secondary" data-action="close-template-create">취소</button>
            <button class="button primary" data-action="open-template-confirm">생성하기</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function optionSetCreateModal() {
  return `
    <div class="modal-wrap ${state.optionSetCreateOpen ? "open" : ""}">
      <div class="modal">
        <div class="modal-head">
          <div>
            <h2 class="card-title">옵션셋 생성</h2>
            <div class="card-description">예: OPT-FRAME-01, OPT-BG-01 형태로 옵션셋 ID와 기본값을 만듭니다.</div>
          </div>
          <button class="close-button" data-action="close-option-set-create">닫기</button>
        </div>
        <div class="modal-section">
          <div class="form-grid">
            <label class="form-field">
              <span class="field-label">옵션셋 ID</span>
              <input id="optionSetId" class="text-input" value="${escapeHtml(state.optionSetDraft.id)}" placeholder="예: OPT-FRAME-01" />
            </label>
            <label class="form-field">
              <span class="field-label">옵션셋 이름</span>
              <input id="optionSetTitle" class="text-input" value="${escapeHtml(state.optionSetDraft.title)}" placeholder="예: 프레임 컬러" />
            </label>
            <label class="form-field full">
              <span class="field-label">옵션 값</span>
              <input id="optionSetValues" class="text-input" value="${escapeHtml(state.optionSetDraft.values)}" placeholder="예: 골드, 실버, 블랙" />
            </label>
            <label class="form-field full">
              <span class="field-label">기본값</span>
              <input id="optionSetDefault" class="text-input" value="${escapeHtml(state.optionSetDraft.defaultValue)}" placeholder="예: 골드" />
            </label>
          </div>
          <div class="button-row" style="margin-top:18px;justify-content:flex-end;">
            <button class="button secondary" data-action="close-option-set-create">취소</button>
            <button class="button primary" data-action="confirm-option-set-create">생성하기</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function optionSetPickerModal() {
  return `
    <div class="modal-wrap ${state.optionSetPickerOpen ? "open" : ""}">
      <div class="modal">
        <div class="modal-head">
          <div>
            <h2 class="card-title">옵션 / 색상셋 불러오기</h2>
            <div class="card-description">사전에 생성한 옵션/색상셋을 중복 선택해서 템플릿에 연결합니다.</div>
          </div>
          <button class="close-button" data-action="close-option-set-picker">닫기</button>
        </div>
        <div class="picker-list" style="margin-top:18px;">
          ${state.optionSets.map((set) => `
            <button class="picker-item" data-action="toggle-draft-option-set" data-id="${set.id}">
              <div class="job-top">
                <div>
                  <div style="font-weight:700;">${escapeHtml(set.id)}</div>
                  <div class="small muted" style="margin-top:6px;">${escapeHtml(set.title)}</div>
                </div>
                <span class="${state.templateDraft.linkedOptionSetIds.includes(set.id) ? "badge success" : "badge neutral"}">${state.templateDraft.linkedOptionSetIds.includes(set.id) ? "선택됨" : "선택가능"}</span>
              </div>
            </button>
          `).join("")}
        </div>
        <div class="button-row" style="margin-top:18px;justify-content:flex-end;">
          <button class="button primary" data-action="close-option-set-picker">선택 완료</button>
        </div>
      </div>
    </div>
  `;
}

function productPickerModal() {
  return `
    <div class="modal-wrap ${state.productPickerOpen ? "open" : ""}">
      <div class="modal">
        <div class="modal-head">
          <div>
            <h2 class="card-title">카페24 상품 연결</h2>
            <div class="card-description">등록된 상품 중에서 연결할 제품을 검색해서 선택합니다.</div>
          </div>
          <button class="close-button" data-action="close-product-picker">닫기</button>
        </div>
        <div class="modal-section">
          <input id="templateProductSearch" class="text-input" value="${escapeHtml(state.templateProductSearch)}" placeholder="상품명, 상품번호로 검색" />
          <div class="picker-list" style="margin-top:14px;">
            ${filteredCafe24Products().map((item) => `
              <button class="picker-item" data-action="select-linked-product" data-id="${item.id}">
                <div style="font-weight:700;">${escapeHtml(item.name)}</div>
                <div class="small muted" style="margin-top:6px;">${escapeHtml(item.id)}</div>
                <div class="small muted" style="margin-top:6px;">${escapeHtml(item.optionSummary)}</div>
              </button>
            `).join("")}
          </div>
        </div>
      </div>
    </div>
  `;
}

function templateConfirmModal() {
  return `
    <div class="modal-wrap ${state.templateConfirmOpen ? "open" : ""}">
      <div class="modal">
        <div class="modal-head">
          <div>
            <h2 class="card-title">이대로 생성하시겠습니까?</h2>
            <div class="card-description">확인하면 상품 / 템플릿 리스트에 새 템플릿이 추가됩니다.</div>
          </div>
        </div>
        <div class="list-stack" style="margin-top:16px;">
          <div class="summary-box">템플릿 ID: ${escapeHtml(state.templateDraft.templateId || "-")}</div>
          <div class="summary-box">템플릿 이름: ${escapeHtml(state.templateDraft.name || "-")}</div>
          <div class="summary-box">형태: ${escapeHtml(state.templateDraft.shape || "-")}</div>
          <div class="summary-box">사이즈: ${escapeHtml(state.templateDraft.widthMm || "-")}mm × ${escapeHtml(state.templateDraft.heightMm || "-")}mm</div>
          <div class="summary-box">문구 좌표: X ${escapeHtml(state.templateDraft.copyX || "-")} / Y ${escapeHtml(state.templateDraft.copyY || "-")}</div>
          <div class="summary-box">최대 글자수 / 줄 수: ${escapeHtml(state.templateDraft.maxChars || "-")}자 / ${escapeHtml(state.templateDraft.maxLines || "-")}줄</div>
          <div class="summary-box">프레임 컬러 옵션 이미지: ${escapeHtml(state.templateDraft.frameOptionImage || "-")}</div>
          <div class="summary-box">배경색 코드: ${escapeHtml(state.templateDraft.bgColorCode || "-")}</div>
          <div class="summary-box">폰트: ${escapeHtml(state.templateDraft.font || "-")}</div>
          <div class="summary-box">연결 옵션셋: ${escapeHtml(optionSetSummary(state.templateDraft.linkedOptionSetIds) || "-")}</div>
          <div class="summary-box">연결 상품: ${escapeHtml(state.templateDraft.linkedProductName || "-")}</div>
        </div>
        <div class="button-row" style="margin-top:18px;justify-content:flex-end;">
          <button class="button secondary" data-action="back-to-template-edit">수정</button>
          <button class="button primary" data-action="confirm-template-create">확인</button>
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
      if (action === "template-tab") state.templateTab = value;
      if (action === "select-product") {
        state.selectedProductId = id;
        syncPreviewFromSelectedProduct();
      }
      if (action === "select-mapping-product") {
        state.selectedProductId = id;
        const selected = getSelectedProduct();
        state.mappingTemplateId = selected.template;
        syncPreviewFromSelectedProduct();
      }
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
        state.pdfJobs = state.pdfJobs.map((job) => job.id === id ? { ...job, status: "성공", issue: "-", createdAt: "2026-04-20 09:22" } : job);
      }
      if (action === "download-pdf") {
        state.pdfJobs = state.pdfJobs.map((job) => job.id === id ? { ...job, downloadStatus: "다운로드완료" } : job);
      }
      if (action === "save-mapping") {
        const chosen = templateCatalog().find((item) => item.template === state.mappingTemplateId);
        if (chosen) {
          state.products = state.products.map((product) =>
            product.id === state.selectedProductId
              ? {
                  ...product,
                  template: chosen.template,
                  shape: chosen.shape,
                  font: chosen.font,
                  optionSetIds: [...chosen.optionSetIds],
                  copyX: chosen.copyX,
                  copyY: chosen.copyY,
                  maxChars: chosen.maxChars,
                  maxLines: chosen.maxLines,
                  updatedAt: "2026-04-21 11:20",
                }
              : product,
          );
        }
      }
      if (action === "open-checklist") state.checklistOpen = true;
      if (action === "close-checklist") state.checklistOpen = false;
      if (action === "open-impact") state.impactModalOpen = true;
      if (action === "close-impact") state.impactModalOpen = false;
      if (action === "open-template-create") {
        resetTemplateDraft();
        state.templateCreateOpen = true;
      }
      if (action === "open-option-set-create") {
        resetOptionSetDraft();
      }
      if (action === "close-template-create") {
        state.templateCreateOpen = false;
        state.templateConfirmOpen = false;
        state.productPickerOpen = false;
      }
      if (action === "close-template-overlays") {
        state.templateCreateOpen = false;
        state.templateConfirmOpen = false;
        state.productPickerOpen = false;
      }
      if (action === "open-product-picker") state.productPickerOpen = true;
      if (action === "close-product-picker") state.productPickerOpen = false;
      if (action === "open-option-set-picker") state.optionSetPickerOpen = true;
      if (action === "close-option-set-picker") state.optionSetPickerOpen = false;
      if (action === "select-linked-product") {
        const picked = state.cafe24Products.find((product) => product.id === id);
        if (picked) {
          state.templateDraft.linkedProductId = picked.id;
          state.templateDraft.linkedProductName = picked.name;
        }
        state.productPickerOpen = false;
      }
      if (action === "toggle-draft-option-set") {
        if (state.templateDraft.linkedOptionSetIds.includes(id)) {
          state.templateDraft.linkedOptionSetIds = state.templateDraft.linkedOptionSetIds.filter((optionId) => optionId !== id);
        } else {
          state.templateDraft.linkedOptionSetIds = [...state.templateDraft.linkedOptionSetIds, id];
        }
      }
      if (action === "select-option-type") {
        state.optionSetDraft.type = value;
        refreshOptionSetDraftId();
      }
      if (action === "add-option-item") {
        state.optionSetDraft.items = [...state.optionSetDraft.items, { name: "", code: "" }];
      }
      if (action === "remove-option-item") {
        const index = Number(id);
        if (state.optionSetDraft.items.length > 1) {
          state.optionSetDraft.items = state.optionSetDraft.items.filter((_, itemIndex) => itemIndex !== index);
          if (state.optionSetDraft.defaultIndex >= state.optionSetDraft.items.length) {
            state.optionSetDraft.defaultIndex = Math.max(0, state.optionSetDraft.items.length - 1);
          }
        }
      }
      if (action === "set-default-option-item") {
        state.optionSetDraft.defaultIndex = Number(id);
      }
      if (action === "create-template-inline") {
        const nextIndex = state.products.length + 101;
        const width = Number(state.templateDraft.widthMm || 0);
        const height = Number(state.templateDraft.heightMm || 0);
        const newProduct = {
          id: `P-${nextIndex}`,
          name: state.templateDraft.name || `?? ??? ${state.products.length + 1}`,
          cafe24: state.templateDraft.linkedProductId || "product_unlinked",
          template: state.templateDraft.templateId || generateTemplateId(state.templateDraft.shape),
          shape: state.templateDraft.shape || (width && height && width === height ? "????" : "????"),
          font: state.templateDraft.font,
          optionSetIds: [...state.templateDraft.linkedOptionSetIds],
          copyX: Number(state.templateDraft.copyX || 50),
          copyY: Number(state.templateDraft.copyY || 47),
          maxChars: Number(state.templateDraft.maxChars || 25),
          maxLines: Number(state.templateDraft.maxLines || 3),
          status: "????",
          updatedAt: "2026-04-21 10:00",
        };
        state.products = [newProduct, ...state.products];
        state.selectedProductId = newProduct.id;
        syncPreviewFromSelectedProduct();
        state.productPickerOpen = false;
        state.optionSetPickerOpen = false;
        state.templateTab = "create";
        resetTemplateDraft();
      }
      if (action === "confirm-option-set-create") {
        const values = state.optionSetDraft.items
          .map((item) => ({ name: item.name.trim(), code: item.code.trim() }))
          .filter((item) => item.name);
        const defaultItem = values[state.optionSetDraft.defaultIndex] || values[0];
        state.optionSets = [
          {
            id: state.optionSetDraft.id || generateOptionSetId(state.optionSetDraft.type),
            title: state.optionSetDraft.title || getOptionSetTypeMeta(state.optionSetDraft.type).title,
            values,
            defaultValue: defaultItem ? defaultItem.name : "",
            active: true,
          },
          ...state.optionSets,
        ];
        resetOptionSetDraft();
      }
      if (action === "reset-template-draft") {
        resetTemplateDraft();
      }
      renderApp();
    });
  });
}

function bindInputs() {
  bindSearchInput("#searchInput", "search");

  const productSelect = document.querySelector("#productSelect");
  if (productSelect) {
    productSelect.addEventListener("change", (event) => {
      state.selectedProductId = event.target.value;
      syncPreviewFromSelectedProduct();
      renderApp();
    });
  }

  bindSearchInput("#pdfSearchInput", "pdfSearch");
  bindSearchInput("#templateProductSearch", "templateProductSearch");
  bindSearchInput("#mappingSearchInput", "mappingSearch");

  const mappingTemplateSelect = document.querySelector("#mappingTemplateSelect");
  if (mappingTemplateSelect) {
    mappingTemplateSelect.addEventListener("change", (event) => {
      state.mappingTemplateId = event.target.value;
      renderApp();
    });
  }

  const draftName = document.querySelector("#draftName");
  if (draftName) {
    draftName.addEventListener("input", (event) => {
      state.templateDraft.name = event.target.value;
    });
  }

  const draftTemplateId = document.querySelector("#draftTemplateId");
  if (draftTemplateId) {
    draftTemplateId.addEventListener("input", (event) => {
      state.templateDraft.templateId = event.target.value;
    });
  }

  const draftShape = document.querySelector("#draftShape");
  if (draftShape) {
    draftShape.addEventListener("change", (event) => {
      state.templateDraft.shape = event.target.value;
    });
  }

  const draftWidth = document.querySelector("#draftWidth");
  if (draftWidth) {
    draftWidth.addEventListener("input", (event) => {
      state.templateDraft.widthMm = event.target.value;
    });
  }

  const draftHeight = document.querySelector("#draftHeight");
  if (draftHeight) {
    draftHeight.addEventListener("input", (event) => {
      state.templateDraft.heightMm = event.target.value;
    });
  }

  const draftFrameImage = document.querySelector("#draftFrameImage");
  if (draftFrameImage) {
    draftFrameImage.addEventListener("input", (event) => {
      state.templateDraft.frameOptionImage = event.target.value;
    });
  }

  const draftBgColor = document.querySelector("#draftBgColor");
  if (draftBgColor) {
    draftBgColor.addEventListener("input", (event) => {
      state.templateDraft.bgColorCode = event.target.value;
    });
  }

  const draftFont = document.querySelector("#draftFont");
  if (draftFont) {
    draftFont.addEventListener("change", (event) => {
      state.templateDraft.font = event.target.value;
    });
  }

  const draftCopyX = document.querySelector("#draftCopyX");
  if (draftCopyX) {
    draftCopyX.addEventListener("input", (event) => {
      state.templateDraft.copyX = event.target.value;
    });
  }

  const draftCopyY = document.querySelector("#draftCopyY");
  if (draftCopyY) {
    draftCopyY.addEventListener("input", (event) => {
      state.templateDraft.copyY = event.target.value;
    });
  }

  const draftMaxChars = document.querySelector("#draftMaxChars");
  if (draftMaxChars) {
    draftMaxChars.addEventListener("input", (event) => {
      state.templateDraft.maxChars = event.target.value;
    });
  }

  const draftMaxLines = document.querySelector("#draftMaxLines");
  if (draftMaxLines) {
    draftMaxLines.addEventListener("input", (event) => {
      state.templateDraft.maxLines = event.target.value;
    });
  }

  const optionSetId = document.querySelector("#optionSetId");
  if (optionSetId) {
    optionSetId.addEventListener("input", (event) => {
      state.optionSetDraft.id = event.target.value;
    });
  }

  const optionSetTitle = document.querySelector("#optionSetTitle");
  if (optionSetTitle) {
    optionSetTitle.addEventListener("input", (event) => {
      state.optionSetDraft.title = event.target.value;
    });
  }

  const optionSetValues = document.querySelector("#optionSetValues");
  if (optionSetValues) {
    optionSetValues.addEventListener("input", (event) => {
      state.optionSetDraft.values = event.target.value;
    });
  }

  const optionSetDefault = document.querySelector("#optionSetDefault");
  if (optionSetDefault) {
    optionSetDefault.addEventListener("input", (event) => {
      state.optionSetDraft.defaultValue = event.target.value;
    });
  }
}

function renderApp() {
  syncPreviewFromSelectedProduct();
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
    ${optionSetPickerModal()}
    ${productPickerModal()}
  `;

  bindActions();
  bindInputs();
  bindRanges();
}

resetTemplateDraft();
resetOptionSetDraft();
renderApp();
