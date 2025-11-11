// 10월 업데이트된 nav.js

// 현재 페이지 파일명을 기반으로 활성화할 메뉴 ID를 결정합니다.
const path = window.location.pathname.split("/").pop();
let activeId = "index.html"; // 기본값 (최신 리포트)

if (path.includes("9월")) {
    activeId = "9월";
} else if (path.includes("8월")) {
    activeId = "8월";
} else if (path.includes("7월")) {
    activeId = "7월";
} else if (path === "10월 VOC 월간 리포트.html") {
    activeId = "10월";
}

// 메뉴 아이템 목록 (10월 항목 추가)
const menuItems = [
    { name: "10월 리포트 (최신)", href: "index.html", id: "index.html" },
    { name: "10월 리포트 (원본)", href: "10월 VOC 월간 리포트.html", id: "10월" },
    { name: "9월 리포트", href: "9월 VOC 월간 리포트.html", id: "9월" },
    { name: "8월 리포트", href: "8월 VOC 월간 리포트.html", id: "8월" },
    { name: "7월 리포트", href: "7월 VOC 월간 리포트.html", id: "7월" },
];

// 사이드바 렌더링 함수
function renderSidebar() {
    const container = document.getElementById("sidebar-container");
    if (!container) return;

    let menuHtml = `
        <h2 class="text-xl font-bold text-[#073B4C] mb-6 border-b-2 border-[#118AB2] pb-2">월간 리포트</h2>
        <nav>
            <ul>
    `;

    menuItems.forEach(item => {
        let isCurrent = (item.id === activeId);

        // 'index.html' (최신)과 '10월' (원본)은 동일한 리포트이므로,
        // 둘 중 하나가 활성화되면 다른 하나도 함께 활성화 상태로 표시합니다.
        if ((activeId === "index.html" || activeId === "10월") && (item.id === "index.html" || item.id === "10월")) {
            isCurrent = true;
        }

        if (isCurrent) {
            menuHtml += `
                <li class="mb-2">
                    <a href="${item.href}" class="block py-3 px-4 rounded-lg bg-[#118AB2] text-white font-bold text-lg shadow-md">
                        ${item.name}
                    </a>
                </li>
            `;
        } else {
            menuHtml += `
                <li class="mt-2">
                    <a href="${item.href}" class="block py-2 px-4 rounded-lg text-gray-700 hover:bg-gray-200 hover:text-[#073B4C] font-medium">
                        ${item.name}
                    </a>
                </li>
            `;
        }
    });

    menuHtml += `
            </ul>
        </nav>
        <div class="mt-8 pt-6 border-t border-gray-300">
            <h3 class="text-lg font-semibold text-[#073B4C] mb-3">리포트 섹션</h3>
            <ul class="text-sm">
                <li><a href="#deep-dive" class="text-gray-600 hover:text-black hover:underline py-1 block">심층 분석</a></li>
                <li><a href="#voc-summary" class="text-gray-600 hover:text-black hover:underline py-1 block">주요 건의 요약</a></li>
                <li><a href="#major-issues" class="text-gray-600 hover:text-black hover:underline py-1 block">이슈 및 대응 현황</a></li>
            </ul>
        </div>
    `;
    
    container.innerHTML = menuHtml;
}

// 페이지 로드 시 사이드바 렌더링
document.addEventListener("DOMContentLoaded", renderSidebar);