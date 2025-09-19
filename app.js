const appsDatabase = {
    'exchanges': [
        { name: "Binance", url: "https://binance.com", icon: "images/i (2).webp" },
        { name: "Bybit", url: "https://bybit.com", icon: "images/i (2).webp" }
    ],
    'channels': [
        { name: "Moh kawan", url: "https://t.me/chat_hamster_gamedev", icon: "images/i (3).webp" },
        { name: "Kpunro новости", url: "https://t.me/hamster_king_ru", icon: "images/i (2).webp" },
        { name: "Tpekhyun", url: "https://t.me/hamster_kombat_gamedev_heroes", icon: "images/i (2).webp" }
    ]
};

function showApps(sectionName) {
    console.log("Показываем раздел:", sectionName);
    const appsGrid = document.getElementById('apps-grid');
    appsGrid.innerHTML = "";
    const appsToShow = appsDatabase[sectionName];

    appsToShow.forEach(app => {
        const appElement = document.createElement('div');
        appElement.className = 'app-item';
        appElement.innerHTML = 
            <img src="${app.icon}" alt="${app.name}" class="app-avatar">
            <span class="app-name">${app.name}</span>
        ;

        appElement.onclick = () => {
            if (window.Telegram && Telegram.WebApp) {
                Telegram.WebApp.openLink(app.url);
            } else {
                window.open(app.url, '_blank');
            }
        };
        appsGrid.appendChild(appElement);
    });
}

// Отладочный код
console.log("App.js загружен");
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM загружен");
    
    // Добавляем обработчики для кнопок
    document.querySelectorAll('.menu-btn').forEach(btn => {
        btn.onclick = function() {
            const section = this.textContent === 'Биржи' ? 'exchanges' : 'channels';
            showApps(section);
        };
    });
    
    // Показываем раздел по умолчанию
    showApps('channels');
});

// Проверка загрузки изображений
setTimeout(function() {
    ["images/i (2).webp", "images/i (3).webp", "images/i_11.webp"].forEach(src => {
        const img = new Image();
        img.onload = function() { console.log("Изображение загружено:", src); };
        img.onerror = function() { console.error("Ошибка загрузки изображения:", src); };
        img.src = src;
    });
}, 1000);
