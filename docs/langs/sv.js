(function() {
    const languageData = {
        code        : 'sv',
        translations: {
            title           : 'Denna webbplats använder cookies!',
            message         : 'Vi använder cookies för att förbättra din upplevelse. Genom att acceptera samtycker du till vår cookiepolicy.',
            accept          : 'Acceptera',
            decline         : 'Avvisa',
            details         : 'Detaljer',
            badgeText       : '🍪',
            iframeContent   : 'Detta innehåll är blockerat.<br/>Vänligen kontrollera dina <a href="#" class="gdpr-open-preferences">Integritetsinställningar</a>',
            iframeSourceText: 'Blockerad källa: {source}',
            isAccepted      : 'Accepterad',
            isDeclined      : 'Avvisad',
        }
    };
    if (!window.rabbitCookiesLanguages) {
        window.rabbitCookiesLanguages = [languageData];
    } else {
        window.rabbitCookiesLanguages.push(languageData);
    }
})();