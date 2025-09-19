const MainButton = window.Telegram.WebApp.MainButton;
const BackButton = window.Telegram.WebApp.BackButton;

document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const screens = document.querySelectorAll('.screen');
    const exchangeButtons = document.querySelectorAll('.exchange-btn');
    const menuCards = document.querySelectorAll('.menu-card');
    const screenTitle = document.getElementById('screen-title');

    // Инициализация Telegram Web App
    window.Telegram.WebApp.expand();
    window.Telegram.WebApp.enableClosingConfirmation();

    // Обработчик навигации
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-target');
            
            // Обновляем активную кнопку
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Показываем соответствующий экран
            screens.forEach(screen => screen.classList.add('hidden'));
            document.getElementById(target).classList.remove('hidden');
            
            // Обновляем заголовок
            screenTitle.textContent = button.textContent;
        });
    });

    // Обработчик кнопок бирж
    exchangeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const url = button.getAttribute('data-url');
            window.Telegram.WebApp.openLink(url);
        });
    });

    // Обработчик карточек меню
    menuCards.forEach(card => {
        card.addEventListener('click', () => {
            const url = card.getAttribute('data-url');
            window.Telegram.WebApp.openLink(url);
        });
    });

    // Обработчик кнопки "Назад"
    BackButton.onClick(() => {
        window.Telegram.WebApp.close();
    });
    
    BackButton.show();
});
