(function() {
    const languageData = {
        code        : 'cs',
        translations: {
            title           : 'Tento web používá cookies!',
            message         : 'Používáme cookies k vylepšení vašeho zážitku. Přijetím souhlasíte s naší politikou cookies.',
            accept          : 'Přijmout',
            decline         : 'Odmítnout',
            details         : 'Podrobnosti',
            badgeText       : '🍪',
            iframeContent   : 'Tento obsah je blokován.<br/>Zkontrolujte své <a href="#" class="gdpr-open-preferences">Nastavení ochrany soukromí</a>',
            iframeSourceText: 'Blokovaný zdroj: {source}',
            isAccepted      : 'Přijato',
            isDeclined      : 'Odmítnuto',
        }
    };
    if (!window.rabbitCookiesLanguages) {
        window.rabbitCookiesLanguages = [languageData];
    } else {
        window.rabbitCookiesLanguages.push(languageData);
    }
})();