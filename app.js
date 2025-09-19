const appsDatabase = {
  'exchanges': [
    { name: "Binance", url: "https://binance.com", icon: "images/i (2).webp" },
    { name: "Bybit", url: "https://bybit.com", icon: "images/i (2).webp" }
  ],
  'channels': [
    { name: "Мой канал", url: "https://t.me/chat_hamster_gamedev", icon: "images/i (3).webp" },
    { name: "Крипто новости", url: "https://t.me/hamster_king_ru", icon: "images/i (2).webp" },
    { name: "Трейдинг", url: "https://t.me/hamster_kombat_gamedev_heroes", icon: "images/i (2).webp" }
  ]
};

function showApps(sectionName) {
  const appsGrid = document.getElementById('apps-grid');
  appsGrid.innerHTML = '';

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

// Показываем раздел "Каналы" по умолчанию
document.addEventListener('DOMContentLoaded', function() {
  showApps('channels');
});
