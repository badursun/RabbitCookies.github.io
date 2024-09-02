(function() {
    const languageData = {
        code        : 'pt',
        translations: {
            title           : 'Este site usa cookies!',
            message         : 'Usamos cookies para melhorar sua experiência. Ao aceitar, você consente com nossa política de cookies.',
            accept          : 'Aceitar',
            decline         : 'Recusar',
            details         : 'Detalhes',
            badgeText       : '🍪',
            iframeContent   : 'Este conteúdo está bloqueado.<br/>Por favor, revise suas <a href="#" class="gdpr-open-preferences">Preferências de Privacidade</a>',
            iframeSourceText: 'Fonte Bloqueada: {source}',
            isAccepted      : 'Aceito',
            isDeclined      : 'Recusado',
        }
    };
    if (!window.rabbitCookiesLanguages) {
        window.rabbitCookiesLanguages = [languageData];
    } else {
        window.rabbitCookiesLanguages.push(languageData);
    }
})();