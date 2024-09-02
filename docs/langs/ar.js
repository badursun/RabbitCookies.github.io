(function() {
    const languageData = {
        code        : 'ar',
        translations: {
            title           : 'يستخدم هذا الموقع ملفات تعريف الارتباط!',
            message         : 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك. من خلال قبول ذلك، فإنك توافق على سياسة ملفات تعريف الارتباط الخاصة بنا.',
            accept          : 'قبول',
            decline         : 'رفض',
            details         : 'تفاصيل',
            badgeText       : '🍪',
            iframeContent   : 'تم حظر هذا المحتوى.<br/>يرجى مراجعة <a href="#" class="gdpr-open-preferences">تفضيلات الخصوصية</a>',
            iframeSourceText: 'المصدر المحظور: {source}',
            isAccepted      : 'تم قبوله',
            isDeclined      : 'تم رفضه',
        }
    };
    if (!window.rabbitCookiesLanguages) {
        window.rabbitCookiesLanguages = [languageData];
    } else {
        window.rabbitCookiesLanguages.push(languageData);
    }
})();