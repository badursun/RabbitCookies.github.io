(function() {
    const languageData = {
        code        : 'de',
        translations: {
            title           : 'Diese Seite verwendet Cookies!',
            message         : 'Wir verwenden Cookies, um Ihr Erlebnis zu verbessern. Durch die Annahme stimmen Sie unserer Cookie-Richtlinie zu.',
            accept          : 'Akzeptieren',
            decline         : 'Ablehnen',
            details         : 'Details',
            badgeText       : '🍪',
            iframeContent   : 'Dieser Inhalt ist blockiert.<br/>Bitte überprüfen Sie Ihre <a href="#" class="gdpr-open-preferences">Datenschutzeinstellungen</a>',
            iframeSourceText: 'Blockierte Quelle: {source}',
            isAccepted      : 'Akzeptiert',
            isDeclined      : 'Abgelehnt',
        }
    };
    if (!window.rabbitCookiesLanguages) {
        window.rabbitCookiesLanguages = [languageData];
    } else {
        window.rabbitCookiesLanguages.push(languageData);
    }
})();
