(function() {
    const languageData = {
        code        : 'ko',
        translations: {
            title           : '이 사이트는 쿠키를 사용합니다!',
            message         : '경험을 향상시키기 위해 쿠키를 사용합니다. 수락하면 쿠키 정책에 동의하는 것입니다.',
            accept          : '수락',
            decline         : '거부',
            details         : '자세히',
            badgeText       : '🍪',
            iframeContent   : '이 콘텐츠는 차단되었습니다.<br/>자신의 <a href="#" class="gdpr-open-preferences">개인정보 보호 설정</a>을 확인하십시오.',
            iframeSourceText: '차단된 출처: {source}',
            isAccepted      : '수락됨',
            isDeclined      : '거부됨',
        }
    };
    if (!window.rabbitCookiesLanguages) {
        window.rabbitCookiesLanguages = [languageData];
    } else {
        window.rabbitCookiesLanguages.push(languageData);
    }
})();