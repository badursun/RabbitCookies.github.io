(function() {
    const languageData = {
        code        : 'ru',
        translations: {
            title           : 'Этот сайт использует cookies!',
            message         : 'Мы используем cookies для улучшения вашего опыта. Принимая, вы соглашаетесь с нашей политикой cookies.',
            accept          : 'Принять',
            decline         : 'Отклонить',
            details         : 'Детали',
            badgeText       : '🍪',
            iframeContent   : 'Этот контент заблокирован.<br/>Пожалуйста, просмотрите свои <a href="#" class="gdpr-open-preferences">Настройки конфиденциальности</a>',
            iframeSourceText: 'Заблокированный источник: {source}',
            isAccepted      : 'Принято',
            isDeclined      : 'Отклонено',
        }
    };
    if (!window.rabbitCookiesLanguages) {
        window.rabbitCookiesLanguages = [languageData];
    } else {
        window.rabbitCookiesLanguages.push(languageData);
    }
})();