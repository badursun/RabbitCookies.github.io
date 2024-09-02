(function() {
    const languageData = {
        code        : 'es',
        translations: {
            title           : '¡Este sitio usa cookies!',
            message         : 'Usamos cookies para mejorar tu experiencia. Al aceptar, consientes nuestra política de cookies.',
            accept          : 'Aceptar',
            decline         : 'Rechazar',
            details         : 'Detalles',
            badgeText       : '🍪',
            iframeContent   : 'Este contenido está bloqueado.<br/>Por favor, revisa tus <a href="#" class="gdpr-open-preferences">Preferencias de privacidad</a>',
            iframeSourceText: 'Fuente Bloqueada: {source}',
            isAccepted      : 'Aceptado',
            isDeclined      : 'Rechazado',
        }
    };
    if (!window.rabbitCookiesLanguages) {
        window.rabbitCookiesLanguages = [languageData];
    } else {
        window.rabbitCookiesLanguages.push(languageData);
    }
})();
