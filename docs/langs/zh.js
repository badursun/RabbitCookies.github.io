(function() {
    const languageData = {
        code        : 'zh',
        translations: {
            title           : '本网站使用Cookie！',
            message         : '我们使用Cookie来提升您的体验。接受即表示您同意我们的Cookie政策。',
            accept          : '接受',
            decline         : '拒绝',
            details         : '详情',
            badgeText       : '🍪',
            iframeContent   : '此内容已被阻止。<br/>请查看您的<a href="#" class="gdpr-open-preferences">隐私设置</a>',
            iframeSourceText: '阻止的来源: {source}',
            isAccepted      : '已接受',
            isDeclined      : '已拒绝',
        }
    };
    if (!window.rabbitCookiesLanguages) {
        window.rabbitCookiesLanguages = [languageData];
    } else {
        window.rabbitCookiesLanguages.push(languageData);
    }
})();