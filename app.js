const menuItems = [
  ["dashboard", "대시보드"],
  ["template", "상품 / 템플릿"],
  ["option", "옵션 / 색상"],
  ["type", "문구 / 폰트 / 좌표"],
  ["order", "주문 / PDF"],
  ["log", "알림 / 로그"],
  ["setting", "환경 설정"],
];

const stats = [
  ["운영 상품 수", "6개", "정사각형 / 직사각형 템플릿 포함"],
  ["활성 템플릿", "2종", "SQ-01, RC-01"],
  ["PDF 생성 성공률", "97%", "최근 30건 기준"],
  ["자동 발송 상태", "정상", "주문완료 / 제작 / 출고 연동"],
];

const checklist = [
  "상품 코드와 템플릿 ID를 1:1로 매핑하기",
  "프레임, 배경, 캘리 색상 옵션 정의 완료하기",
  "문구 글자 수 제한과 줄바꿈 기준 확정하기",
  "폰트 등록 및 PDF 아웃라인 처리 흐름 만들기",
  "주문 완료 후 PDF 자동 생성과 저장 경로 검증하기",
  "제작자 확인용 주문 상세 화면 구성하기",
];

const risks = [
  "고객 미리보기와 실제 PDF 결과가 다르게 보일 수 있음",
  "폰트 변경 시 줄바꿈 차이로 문구 밀림이 발생할 수 있음",
  "상품 추가 시 좌표값 검증이 없으면 제작 오류가 날 수 있음",
  "주문 옵션명이 쇼핑몰 옵션과 다르면 매핑 오류가 생길 수 있음",
];

const products = [
  {
    name: "감사패 정사각형 1",
    id: "GS-001",
    shape: "정사각형",
    template: "SQ-01",
    status: "운영중",
    meta: "폰트 Noto Serif KR · 색상 8개 · 최근 수정 2026-04-20",
  },
  {
    name: "감사패 정사각형 2",
    id: "GS-002",
    shape: "정사각형",
    template: "SQ-01",
    status: "운영중",
    meta: "폰트 SUIT · 색상 6개 · 최근 수정 2026-04-19",
  },
  {
    name: "감사패 직사각형 1",
    id: "GR-001",
    shape: "직사각형",
    template: "RC-01",
    status: "검수중",
    meta: "폰트 MaruBuri · 색상 7개 · 최근 수정 2026-04-18",
  },
];

const orders = [
  {
    orderNo: "20260420-1182",
    product: "감사패 정사각형 1",
    meta: "미리보기 정상 · PDF 생성완료 · 아웃라인 완료 · CS 메모 없음",
  },
  {
    orderNo: "20260420-1178",
    product: "감사패 직사각형 1",
    meta: "미리보기 정상 · PDF 검수대기 · 아웃라인 완료 · CS 메모 있음",
  },
  {
    orderNo: "20260420-1172",
    product: "트로피 직사각형 1",
    meta: "미리보기 정상 · PDF 대기 · 아웃라인 대기 · CS 메모 없음",
  },
];

const logs = [
  "2026-04-20 09:00 PDF 생성 엔진 마지막 동기화 완료",
  "카페24 주문 옵션 매핑 확인 필요: 캘리 색상 기본값 처리",
  "폰트 아웃라인 샘플 출력 2건 검수 완료",
  "모바일 미리보기는 관리자 설정에서 비활성화 가능",
];

const palette = {
  frame: {
    "딥 골드": "#c8a96a",
    블랙: "#2a2a2a",
    실버: "#b7bec8",
  },
  background: {
    아이보리: "#f3f0ea",
    웜그레이: "#ddd4c8",
    차콜: "#4c4f56",
  },
  calligraphy: {
    골드: "#a8863a",
    실버: "#8b9099",
    다크브라운: "#5c4831",
  },
};

const formState = {
  shape: "정사각형",
  frame: "딥 골드",
  background: "아이보리",
  calligraphy: "골드",
  message: "반짝이는 감사의 마음을 담았습니다",
};

function renderMenu() {
  const container = document.querySelector("#menu");
  container.innerHTML = menuItems
    .map(
      ([key, label], index) => `
        <button class="${index === 0 ? "active" : ""}" type="button" data-key="${key}">
          <span>${label}</span>
        </button>
      `,
    )
    .join("");
}

function renderStats() {
  const container = document.querySelector("#stats");
  container.innerHTML = stats
    .map(
      ([title, value, sub]) => `
        <article class="stat-card">
          <div class="eyebrow">${title}</div>
          <div class="stat-value">${value}</div>
          <div class="product-meta">${sub}</div>
        </article>
      `,
    )
    .join("");
}

function renderSimpleList(selector, items, className) {
  const container = document.querySelector(selector);
  container.innerHTML = items
    .map(
      (item) => `
        <div class="${className}">
          ${item}
        </div>
      `,
    )
    .join("");
}

function renderProducts() {
  const container = document.querySelector("#products");
  container.innerHTML = products
    .map(
      (item) => `
        <div class="product-item">
          <div class="product-head">
            <strong>${item.name}</strong>
            <div class="tags">
              <span class="tag">${item.id}</span>
              <span class="tag">${item.shape}</span>
              <span class="tag">${item.template}</span>
              <span class="tag">${item.status}</span>
            </div>
          </div>
          <div class="product-meta">${item.meta}</div>
        </div>
      `,
    )
    .join("");
}

function renderOrders() {
  const container = document.querySelector("#orders");
  container.innerHTML = orders
    .map(
      (item) => `
        <div class="order-item">
          <strong>주문번호 ${item.orderNo}</strong>
          <div class="product-meta">${item.product}</div>
          <div class="order-meta">${item.meta}</div>
          <div class="order-actions">
            <button class="mini-button" type="button">미리보기</button>
            <button class="mini-button primary" type="button">PDF 다운로드</button>
          </div>
        </div>
      `,
    )
    .join("");
}

function renderLogs() {
  const container = document.querySelector("#logs");
  container.innerHTML = logs
    .map((item) => `<div class="log-item">${item}</div>`)
    .join("");
}

function fillSelect(id, entries, selectedValue) {
  const select = document.querySelector(id);
  select.innerHTML = Object.keys(entries)
    .map(
      (key) =>
        `<option value="${key}" ${key === selectedValue ? "selected" : ""}>${key}</option>`,
    )
    .join("");
}

function updatePreview() {
  const card = document.querySelector("#previewCard");
  const message = document.querySelector("#previewMessage");
  const progressFill = document.querySelector("#progressFill");
  const progressValue = document.querySelector("#progressValue");

  const isRectangle = formState.shape === "직사각형";
  card.classList.toggle("rectangle", isRectangle);
  card.style.borderColor = palette.frame[formState.frame];
  card.style.background = palette.background[formState.background];
  message.style.color = palette.calligraphy[formState.calligraphy];
  message.textContent = formState.message;

  let score = 40;
  if (formState.frame) score += 15;
  if (formState.background) score += 15;
  if (formState.calligraphy) score += 15;
  if (formState.message.trim().length >= 6) score += 15;
  score = Math.min(score, 100);

  progressFill.style.width = `${score}%`;
  progressValue.textContent = `${score}%`;
}

function bindControls() {
  const shapeSelect = document.querySelector("#shapeSelect");
  shapeSelect.innerHTML = ["정사각형", "직사각형"]
    .map(
      (value) =>
        `<option value="${value}" ${value === formState.shape ? "selected" : ""}>${value}</option>`,
    )
    .join("");

  fillSelect("#frameSelect", palette.frame, formState.frame);
  fillSelect("#backgroundSelect", palette.background, formState.background);
  fillSelect("#calligraphySelect", palette.calligraphy, formState.calligraphy);

  document.querySelector("#shapeSelect").addEventListener("change", (event) => {
    formState.shape = event.target.value;
    updatePreview();
  });

  document.querySelector("#frameSelect").addEventListener("change", (event) => {
    formState.frame = event.target.value;
    updatePreview();
  });

  document
    .querySelector("#backgroundSelect")
    .addEventListener("change", (event) => {
      formState.background = event.target.value;
      updatePreview();
    });

  document
    .querySelector("#calligraphySelect")
    .addEventListener("change", (event) => {
      formState.calligraphy = event.target.value;
      updatePreview();
    });

  document.querySelector("#messageInput").addEventListener("input", (event) => {
    formState.message = event.target.value;
    updatePreview();
  });
}

renderMenu();
renderStats();
renderSimpleList("#checklist", checklist, "check-item");
renderSimpleList("#risks", risks, "risk-item");
renderProducts();
renderOrders();
renderLogs();
bindControls();
updatePreview();
