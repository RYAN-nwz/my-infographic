function generateNavbar() {
    const reports = [
        { month: 7, title: "7월 VOC", url: "./7월 VOC 월간 리포트.html" },
        { month: 8, title: "8월 VOC", url: "./8월 VOC 월간 리포트.html" },
        { month: 9, title: "9월 VOC", url: "./9월 VOC 월간 리포트.html" },
        // 나중에 10월 리포트를 추가할 때, 이 아래에 한 줄만 추가하면 됩니다.
        // { month: 10, title: "10월 VOC", url: "./10월 VOC 월간 리포트.html" },
    ];

    // 현재 페이지 URL을 기반으로 몇 월 리포트인지 파악
    const currentPage = window.location.pathname.split('/').pop();
    let currentMonth = 0;
    if (currentPage.includes('index.html') || currentPage.includes('9월')) {
        currentMonth = 9;
    } else if (currentPage.includes('8월')) {
        currentMonth = 8;
    } else if (currentPage.includes('7월')) {
        currentMonth = 7;
    }
    
    let navHTML = '<h2 class="text-xl font-bold text-[#073B4C] mb-6">월차별 리포트</h2>';
    navHTML += '<nav class="space-y-3">';

    reports.forEach(report => {
        const isActive = report.month === currentMonth;
        const activeClass = "block p-3 rounded-lg bg-[#118AB2] text-white shadow-lg";
        const inactiveClass = "block p-3 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors";

        navHTML += `
            <a href="${report.url}" class="${isActive ? activeClass : inactiveClass}">
                <div class="font-medium">${report.title}</div>
                <div class="text-sm ${isActive ? 'text-gray-200' : 'text-gray-500'}">2025년 ${report.month}월</div>
            </a>
        `;
    });

    navHTML += '</nav>';

    document.getElementById('sidebar-container').innerHTML = navHTML;
}

// 페이지가 로드되면 함수 실행
document.addEventListener('DOMContentLoaded', generateNavbar);