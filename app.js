const appsDatabase = {
  'exchanges': [
    { name: "Binance", url: "https://binance.com", icon: "images/binance-icon.png" },
    { name: "Bybit", url: "https://bybit.com", icon: "images/bybit-icon.png" }
  ],
  'channels': [
    { name: "Мой канал", url: "https://t.me/chat_hamster_gamedev", icon: "images/channel-icon.png" },
    { name: "Крипто новости", url: "https://t.me/crypto_news", icon: "images/news-icon.png" },
    { name: "Трейдинг", url: "https://t.me/trading_channel", icon: "images/trading-icon.png" }
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
