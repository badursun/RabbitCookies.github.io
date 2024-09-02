(function ($) {
    $.RabbitCookies = function (options) {
        const blockedIcon = `<svg fill="#ffffff" width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-310.001 -321.695)"><path d="M326,321.7a16,16,0,1,0,16,16A16,16,0,0,0,326,321.7Zm0,28a12,12,0,1,1,12-12A12,12,0,0,1,326,349.7Z"/><rect width="28.969" height="4" transform="translate(314.348 346.523) rotate(-45.001)"/></g></svg>`;

        const defaults = {
            language            : navigator.language.startsWith("tr") ? "tr" : "en",
            uiSettings          : {
                bannerBgColor       : '#d00',
                bannerTextColor     : '#fff',
                bannerBtnColor      : '#000',
                bannerBtnTxtColor   : '#fff',
                bannerBadgeBg       : '#fff',
                detailsUrl          : 'https://google.com',
                warnPosition        : 'bottom-right',
            },
            translations        : {
                en: {
                    title           : 'We use cookies!',
                    message         : 'We use cookies to improve your experience. By accepting, you agree to our cookie policy.',
                    accept          : 'Accept',
                    decline         : 'Decline',
                    details         : 'Details',
                    badgeText       : '🍪',
                    iframeContent   : 'This content is blocked.<br/>Please review your <a href="#" class="gdpr-open-preferences">Privacy Preferences</a>',
                    iframeSourceText: 'Blocked Source: {source}',
                    isAccepted      : 'Accepted',
                    isDeclined      : 'Declined',
                },
                tr: {
                    title           : 'Bu sitede çerez kullanımı gerçekleştirilmektedir.',
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
            },
            thirdPartyScripts   : [],
            thirdPartyFunctions : [],
            IframeAllowedDomains: [],
            useLocalStorage     : true,
            backgroundOverlay   : true,
            onAccepted          : () => {},
            onDeclined          : () => {},
            consentStatus       : async () => {
                // return await isCookiesAllowed();
            },
            onInit              : async () => {
                // return await isCookiesAllowed();
            },
        };

        Object.defineProperty(defaults, 'onInit', {
            value       : defaults.onInit,
            writable    : false,
            configurable: false
        });
        Object.defineProperty(defaults, 'consentStatus', {
            value       : defaults.consentStatus,
            writable    : false,
            configurable: false
        });

        const settings = $.extend(true, {}, defaults, options);
        let isInitialized = false, scriptsRunned=false, functionsRunned=false;
        const scriptResults = [];
        const functionResults = [];
        
        const isCookiesAllowed = async () => {
            return new Promise(async(resolve) => {
                // const rabbitCookiesAllowed  = localStorage.getItem("rabbitCookiesAllowed");
                // const permissionAsked       = localStorage.getItem("rabbitCookiesAsked");
                const rabbitCookiesAllowed  = await loadData("rabbitCookiesAllowed");
                const permissionAsked       = await loadData("rabbitCookiesAsked");

                resolve({
                    allowed : (rabbitCookiesAllowed===null ? null : (rabbitCookiesAllowed =='true' ? true : false)),
                    asked   : (permissionAsked =='true' ? true : false)
                });
            });
        };


        const checkButton = async () =>{
            let rabbitCookies = await isCookiesAllowed();
            
            $('.rabbitcookie-buttons').removeClass('cookies-allowed cookies-disallowed');
            $('#rabbitcookie-manage').removeClass('cookie-accepted cookie-declined').addClass(rabbitCookies.allowed==true?'cookie-accepted':'cookie-declined');
            $('.rabbit-popover').html(rabbitCookies.allowed==true ? settings.translations[settings.language].isAccepted : settings.translations[settings.language].isDeclined);
            if (rabbitCookies.allowed===false || rabbitCookies.allowed===null) {
                $('#rabbitcookie-accept').prop('disabled', false);
                $('#rabbitcookie-decline').prop('disabled', false);
                $('.rabbitcookie-buttons').addClass(`cookies-disallowed`);                
            }else{
                $('#rabbitcookie-accept').prop('disabled', true);
                $('.rabbitcookie-buttons').addClass(`cookies-allowed`);
            }
        };

        const init = async () => {
            if (isInitialized) return;
            isInitialized = true;


            try {
                let rabbitCookies = await isCookiesAllowed();
                await settings.onInit(settings);
                await settings.consentStatus(rabbitCookies);
                
                createHTMLStructure(); 
                applyCSS();
                
                if (rabbitCookies.allowed!==true || rabbitCookies.allowed==null) {
                    if(rabbitCookies.asked==false || rabbitCookies.allowed==null){
                        showCookieBanner()
                    };
                    await addOverlayToExternalIframes();
                } else if (rabbitCookies.allowed === true) {
                    await enableThirdPartyScriptsAndFunctions();
                    await removeOverlays();
                };
                await checkButton();
                attachEventListeners();
            } catch (error) {
                console.error("RabbitCookies initialization failed:", error);
            }
        };

        const createHTMLStructure = () => {
            const overlay = $('<div>', { 
                id      : 'rabbitcookie-overlay', 
                class   : 'rabbitcookie-overlay overlay-hidden' 
            });
            const banner = $('<div>', { 
                id      : 'rabbitcookie-banner', 
                class   : `rabbitcookie-banner ${settings.uiSettings.warnPosition} hidden` 
            }).html(`
                <div class="rabbitcookie-content">
                    <div class="rb-header">
                        <h4 class="cookie-warn-title">${settings.translations[settings.language].title}</h4>
                        <a class="rabbitcookie-close">&times;</a>
                    </div>
                    <div class="rb-container">
                        <p id="rabbitcookie-message">${settings.translations[settings.language].message}</p>
                        <div class="rabbitcookie-buttons">
                            <button id="rabbitcookie-accept" class="rabbitcookie-btn">${settings.translations[settings.language].accept}</button>
                            <button id="rabbitcookie-decline" class="rabbitcookie-btn">${settings.translations[settings.language].decline}</button>
                            <button id="rabbitcookie-details" class="rabbitcookie-btn">${settings.translations[settings.language].details}</button>
                        </div>
                    </div>
                    <div class="rb-footer">
                        <div class="rabbitcookie-brand">&copy; RabbitCookies Manager Plugin</div>
                    </div>
                </div>
            `);
            const floatingBtn = $('<div>', { id: 'rabbitcookie-floating-btn', class: 'rabbitcookie-floating-btn' }).html(`
                <button id="rabbitcookie-manage" class="rabbitcookie-floating-icon cookie-declined">
                    ${settings.translations[settings.language].badgeText}
                    <div class="rabbit-popover"></div>
                </button>
            `);

            $('body').append(overlay, banner, floatingBtn);
        };

        const applyCSS = () => {
            const style = `
                :root {
                    --rc-banner-bg  : ${settings.uiSettings.bannerBgColor};
                    --rc-banner-txt : ${settings.uiSettings.bannerTextColor};
                    --rc-button-bg  : ${settings.uiSettings.bannerBtnColor};
                    --rc-button-txt : ${settings.uiSettings.bannerBtnTxtColor};
                    --rc-badge-bg   : ${settings.uiSettings.bannerBadgeBg};
                }
                html.rabbit-cookie-popup{
                    overflow:hidden;
                }
                .rabbitcookie-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.7);
                    z-index: 99998;
                    transition: opacity 0.6s ease-in-out;
                    opacity:1;
                }
                .rabbitcookie-overlay.overlay-hidden {
                    opacity:0;
                    width: 0;
                    height: 0;
                }
                .rabbitcookie-content{
                    color: var(--rc-banner-txt) !important;
                    display: flex;
                    flex-direction: column;
                }
                .rabbitcookie-content #rabbitcookie-message{
                    color: var(--rc-banner-txt) !important;
                }
                .rabbitcookie-banner {
                    font-family: sans-serif;
                    position: fixed;
                    background-color: var(--rc-banner-bg) !important;
                    color: var(--rc-banner-txt) !important;
                    z-index: 99999;
                    border-radius: 8px;
                    max-width: 440px;
                    transition: all 0.7s ease-in-out;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
                }
                .rabbitcookie-banner .rb-header{
                    padding: 10px 15px 5px 15px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    color: var(--rc-banner-txt) !important;
                }
                .rabbitcookie-banner .rb-container{
                    padding:10px 15px;
                    color: var(--rc-banner-txt) !important;
                }
                .rabbitcookie-banner .rb-footer{
                    padding: 0px 15px;
                }
                .rabbitcookie-banner.shown {

                }
                .rabbitcookie-banner.bottom-right{
                    bottom: 70px;
                    right: 20px;
                }
                .rabbitcookie-banner.bottom-left{
                    bottom: 70px;
                    left: 20px;
                }
                .rabbitcookie-banner.top-right{
                    top: 20px;
                    right: 20px;
                }
                .rabbitcookie-banner.top-left{
                    top: 20px;
                    left: 20px;
                }
                .rabbitcookie-banner.center-modal{
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    max-width: 460px;
                }

                .rabbitcookie-banner.bottom-right.hidden{
                    bottom: -200%;
                }
                .rabbitcookie-banner.bottom-left.hidden{
                    bottom: -200%;
                }
                .rabbitcookie-banner.top-right.hidden{
                    top: -200%;
                }
                .rabbitcookie-banner.top-left.hidden{
                    top: -200%;
                }
                .rabbitcookie-banner.center-modal.hidden{
                    bottom: -200%;
                }

                .rabbitcookie-banner .rb-header h4.cookie-warn-title {
                    font-size: 16px;
                    font-weight: 600 !important;
                    color: var(--rc-banner-txt) !important;
                    padding: 0px;
                    margin: 0px;
                    flex-grow: 1
                }
                .rabbitcookie-banner .rb-header a {
                    color: var(--rc-banner-txt) !important;
                    width: 20px;
                    font-size: 22px;
                    text-decoration:none;
                    cursor:pointer;
                }
                .rabbitcookie-content p {
                    margin: 0 0 10px 0;
                    font-size: 14px;
                    line-height: 20px;
                }
                .rabbitcookie-buttons{
                    display: flex; 
                    flex-direction: row; 
                    justify-content: end;
                    margin-top: 30px;
                }
                .rabbitcookie-buttons.cookies-allowed #rabbitcookie-accept::before {
                    content: "\\2713";
                    margin-right: 5px;
                    color: green;
                }
                .rabbitcookie-buttons.cookies-disallowed #rabbitcookie-decline::before {
                    /*content: "\\2713";
                    margin-right: 5px;
                    color: red;*/
                }
                .rabbitcookie-brand{
                    display: flex;
                    flex-direction: row;
                    padding: 4px 0px;
                    font-size: 10px;
                    justify-content: end;
                    opacity: 0.4;
                    margin: 0px;
                }
                .rabbitcookie-brand:hover{
                    opacity: 1;
                }
                .rabbitcookie-btn {
                    margin: 0 5px;
                    padding: 6px 15px;
                    border: none;
                    background-color: var(--rc-button-bg);
                    color: var(--rc-button-txt);
                    cursor: pointer;
                    font-size: 12px;
                    border-radius: 5px;
                    font-weight: 600;
                }
                .rabbitcookie-btn:hover {
                    filter:invert(1);
                }
                .rabbitcookie-btn[disabled] {
                    opacity:0.6;
                    pointer-events: none;
                }
                .rabbitcookie-btn[disabled]:hover {
                    filter:unset;
                }
                .rabbitcookie-floating-btn {
                    position: fixed;
                    bottom: 60px;
                    right: 20px;
                    z-index: 1001;
                    background-color: var(--rc-badge-bg); 
                    border-radius: 200px;
                }
                .rabbitcookie-floating-icon {
                    font-size: 24px;
                    line-height: 34px;
                    background: none;
                    border: none;
                    cursor: pointer;
                    outline: none;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                    border-radius: 500px;
                }
                .rabbitcookie-floating-icon.cookie-accepted {border:2px solid #00800045;}
                .rabbitcookie-floating-icon.cookie-declined {border:2px solid #ff000045;}
                .rabbitcookie-consent-iframe-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.8); /* Dark semi-transparent overlay */
                    z-index: 99997;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
                }
                .rabbit-popover {
                    visibility: hidden;
                    background-color: #000;
                    color: #fff;
                    text-align: center;
                    padding: 0px 10px;
                    border-radius: 4px;
                    position: absolute;
                    left: -90px;
                    top: 50%;
                    transform: translateY(-50%);
                    font-size: 11px;
                }
                .rabbit-popover::before {
                    content: "";
                    position: absolute;
                    top: 50%;
                    right: -8px;
                    margin-top: -5px;
                    border-width: 5px;
                    border-style: solid;
                    border-color: transparent transparent transparent #000;
                }
                .rabbitcookie-floating-icon:hover .rabbit-popover {
                    visibility: visible;
                }
                .iframe-overlay-text {
                    text-align: center;
                    font-size: 14px;
                    font-weight: 400;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: block;
                    align-content: center;
                }
                .iframe-overlay-text a{
                    color:#fff;
                    text-decoration: underline;
                }
                .iframe-overlay-text svg{
                    width: 45px;
                    height: 45px;
                    margin-bottom: 20px;
                }
                .iframe-overlay-text small{
                    display: inline-block;
                    background-color: #ff000057;
                    border-radius: 4px;
                    font-size: 10px;
                    padding: 2px 10px;
                    margin-top: 10px;
                    opacity: 0.6;
                }
                @media (max-width: 768px) {
                    .rabbitcookie-banner {
                        font-size: 12px;
                        max-width: calc(100% - 15px) !important;
                        right: 15px !important;
                        left: 15px !important;
                    }
                    .rabbitcookie-btn {
                        font-size: 12px;
                        padding: 8px 16px;
                    }
                }
            `;
            $('<style>').text(style).appendTo('head');
        };

        const attachEventListeners = () => {
            $('#rabbitcookie-accept').on('click', async () => {
                await setCookieConsent(true);
                await checkButton();
                settings.onAccepted();
            });

            $('#rabbitcookie-decline').on('click', async () => {
                await setCookieConsent(false);
                await checkButton();
                settings.onDeclined();
            });

            $('.rabbitcookie-close').on('click', async () => {
                hideCookieBanner();
            });

            $('#rabbitcookie-details').on('click', () => {
                console.log("Details button clicked");
                settings.uiSettings.detailsUrl && window.open(settings.uiSettings.detailsUrl, '_blank');
            });

            $('#rabbitcookie-manage, .gdpr-open-preferences').on('click', (e) => {
                e.preventDefault();
                showCookieBanner();
            });
        };

        const showCookieBanner = () => {
            $('html').addClass('rabbit-cookie-popup');
            $('#rabbitcookie-banner').removeClass('hidden').addClass('shown');
            settings.backgroundOverlay && $('#rabbitcookie-overlay').removeClass('overlay-hidden');
            // localStorage.setItem("rabbitCookiesAsked", true);
            saveData("rabbitCookiesAsked", true);
        };

        const hideCookieBanner = () => {
            $('html').removeClass('rabbit-cookie-popup');
            $('#rabbitcookie-banner').removeClass('shown').addClass('hidden');
            settings.backgroundOverlay && $('#rabbitcookie-overlay').addClass('overlay-hidden');
        };

        const setCookieConsent = async (consent) => {
            try {
                // localStorage.setItem("rabbitCookiesAllowed", consent);
                saveData("rabbitCookiesAllowed", consent);
                
                hideCookieBanner();
                if (consent) {
                    await enableThirdPartyScriptsAndFunctions();
                    await removeOverlays();
                }
            } catch (error) {
                console.error("Failed to set cookie consent:", error);
            }
        };

        const addOverlayToExternalIframes = async () => {
            const iframes = document.querySelectorAll('iframe');

            iframes.forEach((iframe) => {
                const src = iframe.getAttribute('src') ? iframe.getAttribute('src') : '';
                if (src.startsWith("http://") || src.startsWith("https://")) {
                    const url = new URL(src);
                    const domain = url.hostname;

                    // Eğer IframeAllowedDomains boşsa veya domain listede varsa engelle
                    const shouldBlock = settings.IframeAllowedDomains.length === 0 || 
                                        settings.IframeAllowedDomains.some(allowedDomain => domain.includes(allowedDomain));

                    if (shouldBlock) {
                        iframe.setAttribute('xsrc', src);
                        iframe.setAttribute('src', 'about:blank');

                        const wrapper = document.createElement('div');
                        wrapper.style.position = 'relative';
                        wrapper.style.display = 'inline-block';
                        wrapper.style.width = '100%';

                        iframe.parentNode.insertBefore(wrapper, iframe);
                        wrapper.appendChild(iframe);

                        const overlay = document.createElement('div');
                        overlay.classList.add('rabbitcookie-consent-iframe-overlay');

                        const overlayContent = document.createElement('div');
                        overlayContent.classList.add('iframe-overlay-text');
                        overlayContent.innerHTML = `
                            ${blockedIcon}<br/>
                            ${settings.translations[settings.language].iframeContent}<br/>
                            <small>${(settings.translations[settings.language].iframeSourceText).replace(/{source}/g, domain)}</small>`;

                        overlay.appendChild(overlayContent);
                        wrapper.appendChild(overlay);
                    }
                }
            });
        };

        const removeOverlays = async () => {
            const iframes = document.querySelectorAll('iframe');
            for (const iframe of iframes) {
                const xsrc = iframe.getAttribute('xsrc');
                if (xsrc) {
                    await iframe.setAttribute('src', xsrc);
                    iframe.removeAttribute('xsrc');
                    const overlay = iframe.parentNode.querySelector('.rabbitcookie-consent-iframe-overlay');
                    if (overlay) {
                        await iframe.parentNode.removeChild(overlay);
                    }
                }
            }
        };

        const enableThirdPartyScriptsAndFunctions = async () => {
            try {
                if(scriptsRunned==false){
                    const scriptResults = await Promise.allSettled(
                        settings.thirdPartyScripts.map((scriptInfo, index) => {
                            return new Promise((resolve, reject) => {
                                const script = document.createElement("script");
                                script.src = scriptInfo.src;

                                if (scriptInfo.load === 'async') {
                                    script.async = true;
                                } else if (scriptInfo.load === 'defer') {
                                    script.defer = true;
                                }

                                script.onload = () => {
                                    const result = scriptInfo.callback
                                        ? scriptInfo.callback({ status: true, message: 'success' })
                                        : { status: 'fulfilled', message: `Script #${index + 1} loaded successfully.`, src:scriptInfo.src };
                                    resolve(result);
                                };

                                script.onerror = (error) => {
                                    const result = scriptInfo.callback
                                        ? scriptInfo.callback({ status: false, message: `Failed to load script ${error.message ? error.message : ''}`, src:scriptInfo.src })
                                        : { status: 'rejected', message: `Script #${index + 1} failed to load: ${error.message ? error.message : ''}`, src:scriptInfo.src };
                                    resolve(result);
                                };

                                if (scriptInfo.appendTo && scriptInfo.appendTo === 'body') {
                                    document.body.appendChild(script);
                                } else {
                                    document.head.appendChild(script);
                                }
                            });
                        })
                    );
                    scriptsRunned=true;
                    console.log("Script Results:", scriptResults);
                }

                // Üçüncü parti fonksiyonları çalıştır
                if(functionsRunned==false){
                    const functionResults = await Promise.allSettled(
                        settings.thirdPartyFunctions.map(async (func, index) => {
                            return new Promise(async (resolve, reject) => {
                                try {
                                    const result = func 
                                        ? func({status : true, message: `Function #${index + 1} completed successfully.`})
                                        : {status : false, message: `Function #${index + 1} not defined as function.`}
                                    resolve(result);
                                } catch (error) {
                                    resolve({
                                        status : false,
                                        message: `Function #${index + 1} encountered an error: ${error.message}`
                                    });
                                }
                            });
                        })
                    );
                    functionsRunned=true;
                    console.log("Function Results:", functionResults);
                }

            } catch (error) {
                console.error("Failed to load third-party scripts or functions:", error);
            }
        };

        async function hasLocalStorage() {
            if(settings.useLocalStorage==false){return false}
            
            try {
                const testKey = '__test__';
                localStorage.setItem(testKey, 'test');
                localStorage.removeItem(testKey);
                return true;
            } catch (e) {
                return false;
            }
        };

        async function saveData(key, value) {
            try {
                if (await hasLocalStorage()) {
                    localStorage.setItem(key, value);
                } else {
                    document.cookie = `${key}=${encodeURIComponent(value)}; path=/`;
                }
            } catch (error) {
                console.error('Veri kaydedilirken bir hata oluştu:', error);
            }
        };

        async function loadData(key) {
            try {
                if (await hasLocalStorage()) {
                    return localStorage.getItem(key);
                } else {
                    const cookieMatch = document.cookie.match(new RegExp('(^| )' + key + '=([^;]+)'));
                    return cookieMatch ? decodeURIComponent(cookieMatch[2]) : null;
                }
            } catch (error) {
                console.error('Veri okunurken bir hata oluştu:', error);
                return null;
            }
        };

        init();
    };
})(jQuery);
