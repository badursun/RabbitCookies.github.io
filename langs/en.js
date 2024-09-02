(function() {
    const languageData = {
        code        : 'en',
        translations: {
            title           : 'This site uses cookies!',
            message         : 'We use cookies to improve your experience. By accepting, you consent to our cookie policy.',
            accept          : 'Accept',
            decline         : 'Decline',
            details         : 'Details',
            badgeText       : '🍪',
            iframeContent   : 'This content is blocked.<br/>Please review your <a href="#" class="gdpr-open-preferences">Privacy Preferences</a>',
            iframeSourceText: 'Blocked Source: {source}',
            isAccepted      : 'Accepted',
            isDeclined      : 'Declined',
        }
    };
    if (!window.rabbitCookiesLanguages) {
        window.rabbitCookiesLanguages = [languageData];
    } else {
        window.rabbitCookiesLanguages.push(languageData);
    }
})();