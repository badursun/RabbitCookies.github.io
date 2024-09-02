(function() {
    const languageData = {
        code        : 'ja',
        translations: {
            title           : 'このサイトはクッキーを使用しています！',
            message         : 'お客様の体験を向上させるためにクッキーを使用しています。受け入れることで、クッキーのポリシーに同意したことになります。',
            accept          : '受け入れる',
            decline         : '拒否する',
            details         : '詳細',
            badgeText       : '🍪',
            iframeContent   : 'このコンテンツはブロックされています。<br/>ご自身の<a href="#" class="gdpr-open-preferences">プライバシー設定</a>を確認してください',
            iframeSourceText: 'ブロックされたソース: {source}',
            isAccepted      : '受け入れました',
            isDeclined      : '拒否されました',
        }
    };
    if (!window.rabbitCookiesLanguages) {
        window.rabbitCookiesLanguages = [languageData];
    } else {
        window.rabbitCookiesLanguages.push(languageData);
    }
})();