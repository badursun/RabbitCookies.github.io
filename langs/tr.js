(function() {
    const languageData = {
        code        : 'tr',
        translations: {
            title           : 'Bu sitede çerezler kullanılıyor!.',
            message         : 'Deneyiminizi iyileştirmek için çerezler kullanıyoruz. Kabul ederek çerez politikamızı kabul etmiş oluyorsunuz.',
            accept          : 'Kabul Et',
            decline         : 'Reddet',
            details         : 'Detaylar',
            badgeText       : '🍪',
            iframeContent   : 'Bu içerik engellenmiştir.<br/>Lütfen <a href="#" class="gdpr-open-preferences">Gizlilik Tercihlerinizi</a> gözden geçirin',
            iframeSourceText: 'Engellenen Kaynak: {source}',
            isAccepted      : 'Kabul Edildi',
            isDeclined      : 'Reddedildi',
        }
    };
    if (!window.rabbitCookiesLanguages) {
        window.rabbitCookiesLanguages = [languageData];
    } else {
        window.rabbitCookiesLanguages.push(languageData);
    }
})();