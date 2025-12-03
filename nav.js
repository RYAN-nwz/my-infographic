document.addEventListener("DOMContentLoaded", function() {
    const sidebarContainer = document.getElementById("sidebar-container");
    if (sidebarContainer) {
        // 메뉴 아이템 배열
        // href는 실제 파일명과 100% 일치해야 합니다.
        const menuItems = [
            { name: "11월 리포트", href: "index.html", id: "nov" },
            { name: "10월 리포트", href: "10월 VOC 월간 리포트.html", id: "oct" },
            { name: "9월 리포트", href: "9월 VOC 월간 리포트.html", id: "sep" },
            { name: "8월 리포트", href: "8월 VOC 월간 리포트.html", id: "aug" },
            { name: "7월 리포트", href: "7월 VOC 월간 리포트.html", id: "jul" }
        ];

        // 1. 현재 페이지 파일명 추출 및 '한글 디코딩'
        const currentPath = window.location.pathname;
        let currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);
        
        // URL에 한글이 있을 경우 깨지지 않게 디코딩, 파일명이 없으면 index.html로 간주
        currentPage = decodeURIComponent(currentPage) || "index.html";

        // **예외 처리**: '11월...html' 파일 자체가 열려있을 경우 'index.html' 메뉴를 활성화하기 위함
        if (currentPage === '11월 VOC 월간 리포트.html') {
            currentPage = 'index.html';
        }

        let menuHtml = `
            <div class="mb-8">
                <h2 class="text-2xl font-bold text-[#073B4C]">VOC 리포트</h2>
                <p class="text-sm text-gray-500">Monthly Dashboard</p>
            </div>
            <nav>
                <ul class="space-y-2">
        `;

        menuItems.forEach(item => {
            // 2. 현재 페이지와 메뉴의 href가 일치하는지 비교
            const isActive = (item.href === currentPage);

            // 스타일 정의
            const baseClasses = "block py-2.5 px-4 rounded transition duration-200 font-medium";
            
            // 활성화 상태일 때: 파란색 배경 + 흰색 글씨 + 섀도우 + 오른쪽 살짝 이동 효과
            const activeClasses = "bg-[#118AB2] text-white shadow-lg transform translate-x-1";
            
            // 비활성화 상태일 때: 회색 글씨 + 호버 시 연한 회색 배경
            const inactiveClasses = "text-gray-600 hover:bg-gray-200 hover:text-[#073B4C]";

            menuHtml += `
                <li>
                    <a href="${item.href}" class="${baseClasses} ${isActive ? activeClasses : inactiveClasses}">
                        ${item.name}
                    </a>
                </li>
            `;
        });

        menuHtml += `
                </ul>
            </nav>
            <div class="mt-auto pt-8 text-xs text-gray-400">
                &copy; 2025 Neowiz Corp.
            </div>
        `;

        sidebarContainer.innerHTML = menuHtml;
    }
});