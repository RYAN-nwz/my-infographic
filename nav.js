// 10월 업데이트된 nav.js (10월 리포트 메뉴 통합)

// 현재 페이지 파일명을 기반으로 활성화할 메뉴 ID를 결정합니다.
const path = window.location.pathname.split("/").pop();
let activeId = "index.html"; // 기본값 (최신 리포트)

// 10월 원본 파일(index.html이 아닌)을 눌러도 '10월 리포트'가 활성화되도록
if (path === "10월 VOC 월간 리포트.html") {
    activeId = "index.html"; // '10월 리포트' (index.html)를 활성화
} else if (path.includes("9월")) {
    activeId = "9월";
} else if (path.includes("8월")) {
    activeId = "8월";
} else if (path.includes("7월")) {
    activeId = "7월";
}

// 메뉴 아이템 목록 (10월 리포트 통합)
const menuItems = [
    { name: "10월 리포트", href: "index.html", id: "index.html" },
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
        // 현재 활성화된 ID와 아이템의 ID가 정확히 일치할 때만 활성화
        let isCurrent = (item.id === activeId);

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

    // '리포트 섹션' 관련 div 블록 제거됨 (이전 요청 반영)
    menuHtml += `
            </ul>
        </nav>
    `;
    
    container.innerHTML = menuHtml;
}

// 페이지 로드 시 사이드바 렌더링
document.addEventListener("DOMContentLoaded", renderSidebar);