(function ($) {
    let settings = {};
    let isInitialized = false;

    $.RabbitCookies = function (options) {
        const blockedIcon = `<svg fill="#ffffff" width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-310.001 -321.695)"><path d="M326,321.7a16,16,0,1,0,16,16A16,16,0,0,0,326,321.7Zm0,28a12,12,0,1,1,12-12A12,12,0,0,1,326,349.7Z"/><rect width="28.969" height="4" transform="translate(314.348 346.523) rotate(-45.001)"/></g></svg>`;
        const cookieIcon = `<?xml version="1.0" encoding="utf-8"?><svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 22.628906 9.371094 28 16 28 C 22.628906 28 28 22.628906 28 16 C 28 15.515625 27.964844 15.039063 27.90625 14.566406 C 27.507813 14.839844 27.023438 15 26.5 15 C 25.421875 15 24.511719 14.3125 24.160156 13.359375 C 23.535156 13.757813 22.796875 14 22 14 C 19.789063 14 18 12.210938 18 10 C 18 9.265625 18.210938 8.585938 18.558594 7.992188 C 18.539063 7.996094 18.519531 8 18.5 8 C 17.117188 8 16 6.882813 16 5.5 C 16 4.941406 16.1875 4.433594 16.496094 4.019531 C 16.332031 4.011719 16.167969 4 16 4 Z M 23.5 4 C 22.671875 4 22 4.671875 22 5.5 C 22 6.328125 22.671875 7 23.5 7 C 24.328125 7 25 6.328125 25 5.5 C 25 4.671875 24.328125 4 23.5 4 Z M 14.050781 6.1875 C 14.25 7.476563 15 8.585938 16.046875 9.273438 C 16.015625 9.511719 16 9.757813 16 10 C 16 13.308594 18.691406 16 22 16 C 22.496094 16 22.992188 15.9375 23.46875 15.8125 C 24.152344 16.4375 25.015625 16.851563 25.953125 16.96875 C 25.464844 22.03125 21.1875 26 16 26 C 10.484375 26 6 21.515625 6 16 C 6 11.152344 9.46875 7.097656 14.050781 6.1875 Z M 22 9 C 21.449219 9 21 9.449219 21 10 C 21 10.550781 21.449219 11 22 11 C 22.550781 11 23 10.550781 23 10 C 23 9.449219 22.550781 9 22 9 Z M 14 10 C 13.449219 10 13 10.449219 13 11 C 13 11.550781 13.449219 12 14 12 C 14.550781 12 15 11.550781 15 11 C 15 10.449219 14.550781 10 14 10 Z M 27 10 C 26.449219 10 26 10.449219 26 11 C 26 11.550781 26.449219 12 27 12 C 27.550781 12 28 11.550781 28 11 C 28 10.449219 27.550781 10 27 10 Z M 11 13 C 9.894531 13 9 13.894531 9 15 C 9 16.105469 9.894531 17 11 17 C 12.105469 17 13 16.105469 13 15 C 13 13.894531 12.105469 13 11 13 Z M 16 15 C 15.449219 15 15 15.449219 15 16 C 15 16.550781 15.449219 17 16 17 C 16.550781 17 17 16.550781 17 16 C 17 15.449219 16.550781 15 16 15 Z M 12.5 19 C 11.671875 19 11 19.671875 11 20.5 C 11 21.328125 11.671875 22 12.5 22 C 13.328125 22 14 21.328125 14 20.5 C 14 19.671875 13.328125 19 12.5 19 Z M 19.5 20 C 18.671875 20 18 20.671875 18 21.5 C 18 22.328125 18.671875 23 19.5 23 C 20.328125 23 21 22.328125 21 21.5 C 21 20.671875 20.328125 20 19.5 20 Z"/></svg>`;

        const defaults = {
            language            : navigator.language.startsWith("tr") ? "tr" : "en",
            uiSettings          : {
                theme               : 'theme-1',
                darkMode            : false,
                bannerPosition      : 'bottom-right',
                bannerBgColor       : '#d00',
                bannerTextColor     : '#fff',
                bannerBtnColor      : '#000',
                bannerBtnTxtColor   : '#fff',
                bannerBadgeBg       : '#fff',
                detailsUrl          : 'https://google.com',
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

        settings = $.extend(true, {}, defaults, options);
        let scriptsRunned=false, functionsRunned=false;
        const scriptResults = [];
        const functionResults = [];
        
        const isCookiesAllowed = async () => {
            return new Promise(async(resolve) => {
                const rabbitCookiesAllowed  = await loadData("rabbitCookiesAllowed");
                const permissionAsked       = await loadData("rabbitCookiesAsked");

                resolve({
                    allowed : (rabbitCookiesAllowed===null ? null : (rabbitCookiesAllowed =='true' ? true : false)),
                    asked   : (permissionAsked =='true' ? true : false)
                });
            });
        };

        const addLanguage = (languageCode, translations)=>{
            settings.translations[languageCode] = translations;
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
            
            if (typeof rabbitCookiesLanguages !== 'undefined') {
                if (Array.isArray(rabbitCookiesLanguages)) {
                    rabbitCookiesLanguages.forEach(function(language) {
                        addLanguage(language.code, language.translations);
                    });
                } else {
                    addLanguage(rabbitCookiesLanguages.code, rabbitCookiesLanguages.translations);
                }
            }

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
                id          : 'rabbitcookie-overlay', 
                class       : 'rabbitcookie-overlay overlay-hidden',
                'data-rce'  : true,
            });
            const banner = $('<div>', { 
                id              : 'rabbit-cookie-banner', 
                class           : `rabbit-cookie-banner ${settings.uiSettings.bannerPosition} hidden`,
                'data-theme'    : `${settings.uiSettings.theme}`,
                'data-mode'     : (settings.uiSettings.darkMode ? `dark`:`light`),
                'data-position' : settings.uiSettings.bannerPosition,
                'data-rce'      : true,
            }).html(`
                <a class="rabbitcookie-close">&times;</a>
                <div class="rabbit-cookie-icon">${cookieIcon}</div>
                <div class="rabbit-cookie-text">
                    <h4>${settings.translations[settings.language].title}</h4>
                    <p>${settings.translations[settings.language].message}</p>
                </div>
                <div class="rabbit-cookie-actions">
                    <button id="rabbitcookie-accept" class="rabbit-btn">${settings.translations[settings.language].accept}</button>
                    <button id="rabbitcookie-decline" class="rabbit-btn">${settings.translations[settings.language].decline}</button>
                    <button id="rabbitcookie-details" class="rabbit-btn">${settings.translations[settings.language].details}</button>
                </div>
                <div class="rabbit-cookie-dev">&copy; RabbitCookies Manager Plugin</div>
            `);
            const floatingBtn = $('<div>', { 
                id          : 'rabbitcookie-floating-btn', 
                class       : 'rabbitcookie-floating-btn',
                'data-rce'  : true,
            }).html(`
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
                .rabbit-cookie-banner {
                    font-family: sans-serif;
                    position: fixed;
                    background-color: #fff;
                    color: #000;
                    z-index: 99999;
                    border-radius: 8px;
                    max-width: 440px;
                    transition: all 0.2s ease-in-out;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
                }
                .rabbit-cookie-banner[data-position="bottom-right"]{
                    bottom: 70px;
                    right: 20px;
                }
                .rabbit-cookie-banner[data-position="bottom-left"]{
                    bottom: 70px;
                    left: 20px;
                }
                .rabbit-cookie-banner[data-position="top-right"]{
                    top: 20px;
                    right: 20px;
                }
                .rabbit-cookie-banner[data-position="top-left"]{
                    top: 20px;
                    left: 20px;
                }
                .rabbit-cookie-banner[data-position="center-modal"]{
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    max-width: 500px;
                    min-height: 250px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .rabbit-cookie-banner[data-position="bottom-line"]{
                    bottom: 0px;
                    left: 0px;
                    max-width: none;
                    width: 100vw;
                    border-radius: 0px;
                }
                .rabbit-cookie-banner[data-position="top-line"]{
                    top: 0px;
                    left: 0px;
                    max-width: none;
                    width: 100vw;
                    border-radius: 0px;
                }

                .rabbit-cookie-banner[data-position="bottom-right"].hidden{
                    bottom: -200%;
                }
                .rabbit-cookie-banner[data-position="bottom-left"].hidden{
                    bottom: -200%;
                }
                .rabbit-cookie-banner[data-position="top-right"].hidden{
                    top: -200%;
                }
                .rabbit-cookie-banner[data-position="top-left"].hidden{
                    top: -200%;
                }
                .rabbit-cookie-banner[data-position="center-modal"].hidden{
                    bottom: -200%;
                }
                .rabbit-cookie-banner[data-position="bottom-line"].hidden{
                    bottom: -200%;
                }
                .rabbit-cookie-banner[data-position="top-line"].hidden{
                    top: -200%;
                }

                .rabbit-cookie-banner .rabbitcookie-close{
                    padding: 5px 5px;
                    position: absolute;
                    right: 0px;
                    display: block;
                    width: 30px;
                    text-align: center;
                    font-weight: 600;
                    font-size: 20px;
                    color:red;
                    z-index:999;
                    text-decoration: none;
                    cursor:pointer;
                }
                .rabbit-cookie-banner .rabbitcookie-close:hover{
                    text-decoration: none;
                }
                .rabbit-cookie-banner .rabbit-cookie-icon{
                    display: flex;
                }
                .rabbit-cookie-banner .rabbit-cookie-icon i,
                .rabbit-cookie-banner .rabbit-cookie-icon svg{
                    width:60px;
                    height:60px;
                }

                .rabbit-cookie-banner .rabbit-cookie-text{
                    padding: 10px;
                }
                .rabbit-cookie-banner .rabbit-cookie-text h4{
                    padding: 0px;
                    margin: 0px;
                    font-size: 20px;
                    color: var(--rc-banner-txt);
                }
                .rabbit-cookie-banner .rabbit-cookie-text p{
                    padding: 0px;
                    margin: 5px 0px;
                    font-size: 13px;
                    color: var(--rc-banner-txt);
                }

                .rabbit-cookie-banner .rabbit-cookie-actions{
                    padding:20px 0px;
                }
                .rabbit-cookie-banner .rabbit-cookie-actions .rabbit-btn{
                    padding: 6px 10px;
                    border-radius: 4px;
                    border: none;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                    font-size: 12px;
                }
                .rabbit-cookie-banner .rabbit-cookie-actions .rabbit-btn:hover{

                }
                .rabbit-cookie-banner .rabbit-cookie-actions #rabbitcookie-accept.rabbit-btn:hover{
                    background-color: #8bc34a;
                }
                .rabbit-cookie-banner .rabbit-cookie-actions #rabbitcookie-decline.rabbit-btn:hover{
                    background-color: #d00000;
                }
                .rabbit-cookie-banner .rabbit-cookie-actions #rabbitcookie-details.rabbit-btn:hover{
                    background-color: #9e9e9e;
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
                    bottom: 20px;
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


                .rabbit-cookie-banner .rabbit-cookie-dev{
                    padding: 5px 30px !important;
                    display: flex;
                    font-size: 10px;
                    justify-content: end;
                    color:#000;
                    opacity: 0.4;
                }
                .rabbit-cookie-banner:hover .rabbit-cookie-dev{
                    opacity: 1;
                }
                .rabbit-cookie-banner[data-mode="dark"] .rabbit-cookie-dev{
                    color:#fff;
                }



                /* 
                    Dark Mode 
                */
                .rabbit-cookie-banner[data-mode="dark"]{
                    background-color: #1a1a2e;
                    color: #f1f1f1;
                }
                .rabbit-cookie-banner[data-mode="dark"] .rabbit-cookie-text {
                    filter: invert(1);
                }
                .rabbit-cookie-banner[data-mode="dark"] .rabbitcookie-close{

                }
                .rabbit-cookie-banner[data-mode="dark"] .rabbit-cookie-icon i,
                .rabbit-cookie-banner[data-mode="dark"] .rabbit-cookie-icon svg{
                    filter: invert(1);
                }

                /* Theme 1  */
                .rabbit-cookie-banner[data-theme="theme-1"] .rabbit-cookie-icon{
                    min-height:90px;
                    padding: 10px;
                    justify-content: center;
                    align-items: center;
                }
                .rabbit-cookie-banner[data-theme="theme-1"] .rabbit-cookie-icon i{
                    font-size:46px;
                }
                .rabbit-cookie-banner[data-theme="theme-1"] .rabbit-cookie-text{
                    padding:20px 30px;
                    text-align: center;
                }
                .rabbit-cookie-banner[data-theme="theme-1"] .rabbit-cookie-actions{
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                }

                /* Theme 2  */
                .rabbit-cookie-banner[data-theme="theme-2"] .rabbit-cookie-icon{
                    display:none;
                }
                .rabbit-cookie-banner[data-theme="theme-2"] .rabbit-cookie-icon i{
                    font-size:46px;
                }
                .rabbit-cookie-banner[data-theme="theme-2"] .rabbit-cookie-text{
                    padding:20px 30px;
                    text-align: left;
                }
                .rabbit-cookie-banner[data-theme="theme-2"] .rabbit-cookie-actions{
                    padding: 10px 30px;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    gap: 10px;
                }
                .rabbit-cookie-banner[data-theme="theme-2"] .rabbit-btn{
                    margin:0px;
                }

                /* Theme 3  */
                .rabbit-cookie-banner[data-theme="theme-3"]{
                    display: flex;
                    flex-wrap: wrap;
                    gap: 5px; 
                    max-width: 600px;
                    padding: 10px;
                }
                .rabbit-cookie-banner[data-theme="theme-3"] .rabbit-cookie-icon{
                    flex: none;
                    width: 60px;
                    justify-content: center;
                    align-items: center;
                }
                .rabbit-cookie-banner[data-theme="theme-3"] .rabbit-cookie-icon i{
                    font-size:20px;
                }
                .rabbit-cookie-banner[data-theme="theme-3"] .rabbit-cookie-text{
                    text-align: left;
                    flex: auto;
                }
                .rabbit-cookie-banner[data-theme="theme-3"] .rabbit-cookie-actions{
                    display: flex;
                    justify-content: end;
                    gap: 10px;
                    padding: 0px;
                }
                .rabbit-cookie-banner[data-theme="theme-3"] .rabbit-btn{
                    margin:0px;
                }
                .rabbit-cookie-banner[data-theme="theme-3"] > div {
                    flex: 1 1 calc(25% - 10px); /* 4 eleman için her biri %25 genişlikte ve boşluk hesaplanır */
                    box-sizing: border-box;
                    padding: 10px;
                    text-align: center;
                }
                .rabbit-cookie-banner[data-theme="theme-3"] > div:last-child {
                    flex: 1 1 100%; /* Son eleman tüm alanı kaplar */
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
                settings.uiSettings.detailsUrl && window.open(settings.uiSettings.detailsUrl, '_blank');
            });

            $('#rabbitcookie-manage, .gdpr-open-preferences').on('click', (e) => {
                e.preventDefault();
                showCookieBanner();
            });
        };

        const showCookieBanner = () => {
            $('html').addClass('rabbit-cookie-popup');
            $('#rabbit-cookie-banner').removeClass('hidden').addClass('shown');
            settings.backgroundOverlay && $('#rabbitcookie-overlay').removeClass('overlay-hidden');
            saveData("rabbitCookiesAsked", true);
        };

        const hideCookieBanner = () => {
            $('html').removeClass('rabbit-cookie-popup');
            $('#rabbit-cookie-banner').removeClass('shown').addClass('hidden');
            settings.backgroundOverlay && $('#rabbitcookie-overlay').addClass('overlay-hidden');
        };

        const setCookieConsent = async (consent) => {
            try {
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
                }

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

    $.RabbitCookies.update = async (newSettings)=>{
        settings = $.extend(true, settings, newSettings);
        $.RabbitCookies.reBuild();
        console.log('New Settings: ', settings);
    }

    $.RabbitCookies.reBuild = async ()=>{
        isInitialized=false;
        $('[data-rce]').remove();
        $.RabbitCookies(settings);
    }
})(jQuery);