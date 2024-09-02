(function() {
    const languageData = {
        code        : 'fr',
        translations: {
            title           : 'Ce site utilise des cookies !',
            message         : 'Nous utilisons des cookies pour améliorer votre expérience. En acceptant, vous consentez à notre politique en matière de cookies.',
            accept          : 'Accepter',
            decline         : 'Refuser',
            details         : 'Détails',
            badgeText       : '🍪',
            iframeContent   : 'Ce contenu est bloqué.<br/>Veuillez revoir vos <a href="#" class="gdpr-open-preferences">Préférences de confidentialité</a>',
            iframeSourceText: 'Source Bloquée : {source}',
            isAccepted      : 'Accepté',
            isDeclined      : 'Refusé',
        }
    };
    if (!window.rabbitCookiesLanguages) {
        window.rabbitCookiesLanguages = [languageData];
    } else {
        window.rabbitCookiesLanguages.push(languageData);
    }
})();