(function() {
    const languageData = {
        code        : 'it',
        translations: {
            title           : 'Questo sito utilizza i cookie!',
            message         : 'Utilizziamo i cookie per migliorare la tua esperienza. Accettando, acconsenti alla nostra politica sui cookie.',
            accept          : 'Accetta',
            decline         : 'Rifiuta',
            details         : 'Dettagli',
            badgeText       : '🍪',
            iframeContent   : 'Questo contenuto è bloccato.<br/>Per favore, rivedi le tue <a href="#" class="gdpr-open-preferences">Preferenze sulla privacy</a>',
            iframeSourceText: 'Fonte Bloccata: {source}',
            isAccepted      : 'Accettato',
            isDeclined      : 'Rifiutato',
        }
    };
    if (!window.rabbitCookiesLanguages) {
        window.rabbitCookiesLanguages = [languageData];
    } else {
        window.rabbitCookiesLanguages.push(languageData);
    }
})();