// // Отладочный код - удалить после исправления
console.log("App.js загружен");

// Проверяем, что элементы существуют
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM загружен");
    
    const appsGrid = document.getElementById('apps-grid');
    const menuButtons = document.querySelectorAll('.menu-btn');
    
    console.log("appsGrid существует:", !!appsGrid);
    console.log("Кнопок меню найдено:", menuButtons.length);
    
    // Проверяем обработчики кнопок
    menuButtons.forEach(btn => {
        console.log("Кнопка:", btn.textContent, "onclick:", btn.onclick);
        btn.onclick = function() {
            console.log("Нажата кнопка:", this.textContent);
            const section = this.getAttribute('data-section') || 
                           (this.textContent === 'Биржи' ? 'exchanges' : 'channels');
            showApps(section);
        };
    });
    
    // Показываем раздел по умолчанию
    showApps('channels');
});

// ... остальной код без изменений
Убедимся, что код выполняется
console.log("App.js loaded successfully!");

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

// Сделаем функцию глобальной для доступа из HTML
window.showApps = function(sectionName) {
    console.log("Showing section:", sectionName);
    
    const appsGrid = document.getElementById('apps-grid');
    if (!appsGrid) {
        console.error("Element with id 'apps-grid' not found!");
        return;
    }
    
    appsGrid.innerHTML = "";
    
    const appsToShow = appsDatabase[sectionName];
    if (!appsToShow) {
        console.error("Section not found:", sectionName);
        return;
    }

    appsToShow.forEach(app => {
        const appElement = document.createElement('div');
        appElement.className = 'app-item';
        appElement.innerHTML = 
            <img src="${app.icon}" alt="${app.name}" class="app-avatar">
            <span class="app-name">${app.name}</span>
        ;

        appElement.onclick = () => {
            console.log("Opening:", app.url);
            if (window.Telegram && Telegram.WebApp) {
                Telegram.WebApp.openLink(app.url);
            } else {
                window.open(app.url, '_blank');
            }
        };
        
        appsGrid.appendChild(appElement);
    });
}

// Показываем раздел "Каналы" по умолчанию
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");
    showApps('channels');
    
    // Добавляем обработчики для кнопок (на всякий случай)
    document.querySelectorAll('.menu-btn').forEach(btn => {
        const section = btn.getAttribute('data-section');
        if (section) {
            btn.onclick = () => showApps(section);
        }
    });
});

// Проверка загрузки изображений
function checkImages() {
    const imagesToCheck = [
        "images/i (2).webp",
        "images/i (3).webp",
        "images/i_11.webp" // ваш фон
    ];
    
    imagesToCheck.forEach(src => {
        const img = new Image();
        img.onload = function() {
            console.log("Изображение загружено:", src);
        };
        img.onerror = function() {
            console.error("Ошибка загрузки изображения:", src);
        };
        img.src = src;
    });
}

// Запускаем проверку после загрузки страницы
setTimeout(checkImages, 1000);
