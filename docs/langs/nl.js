(function() {
    const languageData = {
        code        : 'nl',
        translations: {
            title           : 'Deze site gebruikt cookies!',
            message         : 'We gebruiken cookies om je ervaring te verbeteren. Door te accepteren ga je akkoord met ons cookiebeleid.',
            accept          : 'Accepteren',
            decline         : 'Weigeren',
            details         : 'Details',
            badgeText       : '🍪',
            iframeContent   : 'Deze inhoud is geblokkeerd.<br/>Bekijk je <a href="#" class="gdpr-open-preferences">Privacyinstellingen</a>',
            iframeSourceText: 'Geblokkeerde Bron: {source}',
            isAccepted      : 'Geaccepteerd',
            isDeclined      : 'Weigeren',
        }
    };
    if (!window.rabbitCookiesLanguages) {
        window.rabbitCookiesLanguages = [languageData];
    } else {
        window.rabbitCookiesLanguages.push(languageData);
    }
})();