(function() {
    const languageData = {
        code        : 'pl',
        translations: {
            title           : 'Ta strona używa plików cookie!',
            message         : 'Używamy plików cookie, aby poprawić Twoje wrażenia. Akceptując, zgadzasz się na naszą politykę cookie.',
            accept          : 'Akceptuj',
            decline         : 'Odrzuć',
            details         : 'Szczegóły',
            badgeText       : '🍪',
            iframeContent   : 'Ta zawartość jest zablokowana.<br/>Proszę sprawdź swoje <a href="#" class="gdpr-open-preferences">Preferencje prywatności</a>',
            iframeSourceText: 'Zablokowane źródło: {source}',
            isAccepted      : 'Zaakceptowano',
            isDeclined      : 'Odrzucono',
        }
    };
    if (!window.rabbitCookiesLanguages) {
        window.rabbitCookiesLanguages = [languageData];
    } else {
        window.rabbitCookiesLanguages.push(languageData);
    }
})();