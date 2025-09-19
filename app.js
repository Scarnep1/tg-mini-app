const appsDatabase = {
  'provее': [
    { name: "Provee 1", url: "https://provee1.com", icon: "images/provee1-icon.png" },
    { name: "Provee 2", url: "https://provee2.com", icon: "images/provee2-icon.png" }
  ],
  'exchanges': [
    { name: "Binance", url: "https://binance.com", icon: "images/binance-icon.png" },
    { name: "Bybit", url: "https://bybit.com", icon: "images/bybit-icon.png" }
  ],
  'channels': [
    { name: "Крутой канал", url: "https://t.me/cool_channel", icon: "images/channel-icon.png" }
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
      <img src="${app.icon}" alt="${app.name}">
      <span>${app.name}</span>
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

document.addEventListener('DOMContentLoaded', function() {
  showApps('provее');
});
