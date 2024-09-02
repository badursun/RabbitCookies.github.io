  RabbitCookie Consent  

🍪 RabbitCookies - GDPR & KVKK Compliant Cookie Consent Management
==================================================================

Welcome to RabbitCookies! A powerful and flexible jQuery plugin designed to help your website comply with GDPR/KVKK regulations while maintaining a sleek, user-friendly interface. With RabbitCookies, you can easily manage cookie consent, load third-party scripts, and execute custom functions once consent is granted—all with just a few lines of code.

Features
--------

*   Easy Integration: Simply include the RabbitCookies script in your project, and you're ready to go.
*   Flexible Consent Management: Execute third-party scripts or custom functions based on user consent.
*   Smooth Animations: The cookie banner appears and disappears with smooth animations, enhancing the user experience.
*   Highly Customizable: Easily change texts, styles, and functionalities through the plugin's settings.
*   Multi-Language Support: Add translations for different languages with ease.
*   Richnes: Ready-made themes, easy positions and mobile compatibility
*   Responsive Design: The cookie banner is mobile-friendly and adapts to various screen sizes.
*   Fallback Tolerance: Built-in error handling ensures that the script continues to run smoothly even if issues occur.

Demo
----

For detailed demo, visit [demo page](docs/demo.html).

Getting Started
---------------

* * *

### 1\. Installation

To get started with RabbitCookies, include the jQuery library and the RabbitCookies script in your HTML file:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="path/to/rabbitcookies.js"></script>
<!-- optional external language file(s)-->
<script src="langs/es.js"></script>
```
**Ready language files:** ar, cs, de, en, es, fr, it, ja, jo, nl, pl, pt, ru, sv, tr, zh

### 2\. Initialization (Basic)

Initialize the RabbitCookies plugin with your desired settings:


```html
<script>
$(document).ready(function () {
	$.RabbitCookies({
		uiSettings 			: {
			detailsUrl          : 'https://google.com'
			bannerPosition 		: 'top-right',
		},
	});
});
</script>
```

### 3\. Usage

Once initialized, RabbitCookies will automatically display the cookie consent banner to users who have not yet given their consent. Based on their choice, RabbitCookies will:

*   Load third-party scripts: Only after the user accepts the cookies.
*   Execute custom functions: Define any number of functions that should run after the user consents.

#### Example

Here is a simple example demonstrating the basic usage of RabbitCookies:

```html
<script>
$(document).ready(function () {
	$.RabbitCookies({
		language 			: "en",
		uiSettings 			: {
			detailsUrl          : 'https://google.com',
			bannerPosition 		: 'top-right',
		},
        onAccepted          : () => {
        	// Accept Clicked
        },
        onDeclined          : () => {
        	// Decline Clicked
        },
		translations 		: {
			fr: {
				title 		: "We use cookies!",
				message 	: "We use cookies to personalize content and ads, to provide social media features and to analyze our traffic.",
				accept 		: "Accept All",
				decline 	: "Decline All",
				details 	: "Details",
				badgeText	: '🍪',
			}
		},
		thirdPartyScripts 	: \[
	        {
	            src 	: "https://www.googletagmanager.com/gtag/js?id=GA\_TRACKING\_ID",
	            load 	: "async",
	            appendTo: "head",
	            callback: (event)=>{},
	        },
	        {
	            src 	: "https://cdn.jsdelivr.net/npm/some-plugin@latest/plugin.min.js",
	            load 	: "defer"
	            appendTo: "body",
	            callback: (event)=>{},
	        }
		\],
		thirdPartyFunctions 	: \[
	        (event)=>{
	            console.log('Other script loaded.');
	        },
	        function(event) {
	            console.log('Other plugin initialized.');
	        }
		\],
	});
});
</script>
```

### 4\. Settings

Once initialized, RabbitCookies will automatically display the cookie consent banner to users who have not yet given their consent. Based on their choice, RabbitCookies will:

#### 4.1 General Settings

Parameter

Description

Type

Values

Default

\`language\`

The language for the banner and messages.

String

Any valid language code (e.g., "en", "fr", "tr")

Auto (navigator.language)

\`useLocalStorage\`

Storing RabbitCookies preferences in “localStorage” or as “cookies”..

Boolean

true|false

true

\`backgroundOverlay\`

An overlay is used in the background when displaying the cookie warning banner.

Boolean

true|false

true

#### 4.2 Callback(s)

Parameter

Description

Type

Values

Default

\`onInit\`

Triggered when main function init.

async function

return settings object

async ()=>{}

\`onAccepted\`

Triggered when Accept is clicked.

function

()=>{}

\`onDeclined\`

Triggered when Declined is clicked.

function

()=>{}

\`consentStatus\`

Triggered when main function init and return consent status.

async function

return {allowed:true|false, asked:true|false}

async ()=>{}

#### 4.3 UI Settings

Parameter

Description

Type

Values

Default

\`bannerBgColor\`

The background color of the banner.

String (Hex Color)

Any valid hex color code

#000

\`bannerTextColor\`

The text color of the banner.

String (Hex Color)

Any valid hex color code

#fff

\`bannerBtnColor\`

The background color of the buttons.

String (Hex Color)

Any valid hex color code

#000

\`bannerBtnTxtColor\`

The text color of the buttons.

String (Hex Color)

Any valid hex color code

#fff

\`bannerBadgeBg\`

The background color of the badge.

String (Hex Color)

Any valid hex color code

#fff

\`detailsUrl\`

The URL for more details.

String (URL)

Any valid URL

""

\`bannerPosition\`

The position of the banner on the screen.

String

"bottom-right", "bottom-left", "top-right", "top-left", "center-modal", "top-line", "bottom-line"

"bottom-right"

#### 4.4 Translations

You can init any language you want directly as an object or load it as a script from an external file.

Here is a simple example demonstrating the basic usage of RabbitCookies:

<script>
$(document).ready(function () {
	$.RabbitCookies({
		translations 		: {
			fr: {
				title 		: "We use cookies!",
				message 	: "We use cookies to personalize content and ads, to provide social media features and to analyze our traffic.",
				accept 		: "Accept All",
				decline 	: "Decline All",
				details 	: "Details",
				badgeText	: '🍪',
			},
			ar: {
				title 		: 'يستخدم هذا الموقع ملفات تعريف الارتباط!',
				message 	: 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك. من خلال قبول ذلك، فإنك توافق على سياسة ملفات تعريف الارتباط الخاصة بنا.',
				accept 		: 'قبول',
				decline 	: 'رفض',
				details 	: 'تفاصيل',
				badgeText	: '🍪',
			},
			...
		},
	});
});
</script>

###### 4.5.1 Translations Params

Parameter

Description

Type

Values

Default

\`title\`

The title text in the specified language.

String

Any text

"We use cookies to enhance"

\`message\`

The message text in the specified language.

String

Any text

"We use cookies to enhance your experience. By accepting, you agree to our cookie policy."

\`accept\`

The text for the accept button in the specified language.

String

Any text

"Accept"

\`decline\`

The text for the decline button in the specified language.

String

Any text

"Decline"

\`details\`

The text for the details button in the specified language.

String

Any text

"Details"

\`badgeText\`

The text for the badge in the specified language.

String

Any text

"🍪"

\`iframeContent\`

The text for the blocked iframe content in the specified language.

String

Any text

"This content is blocked. Please review your Privacy Preferences"

\`iframeSourceText\`

Writes the domain information of the blocked resource.

String

Any text with mustache match

"Blocked Source: `{source}`"

\`isAccepted\`

When the policy is accepted, it is written in the status field.

String

Any text

"Accepted"

\`isDeclined\`

When the policy is declined, it is written in the status field.

String

Any text

"Declined"

#### 4.6 Third Party Scripts

You can include third party scripts that you want to run based on cookie consents. You can also trigger actions to be taken after the installation process with the callback feature.

Here is a simple example demonstrating the basic usage of RabbitCookies:

<script>
$(document).ready(function () {
	$.RabbitCookies({
		thirdPartyScripts 	: \[
			{
				src 	: "https://www.googletagmanager.com/gtag/js?id=GA\_TRACKING\_ID",
				load 	: "async",
				appendTo: "head",
				callback: (event)=>{},
			},
			{
				src 	: "https://cdn.jsdelivr.net/npm/some-plugin@latest/plugin.min.js",
				load 	: "defer"
				appendTo: "body",
				callback: (event)=>{},
			},
			...
		\],
	});
});
</script>

###### 4.6.1 Third Party Scripts Params

Parameter

Description

Type

Values

Default

\`src\`

The URL of the third-party script.

String (URL)

Any valid URL

""

\`load\`

How to load the script.

String

async, defer, null

null

\`appendTo\`

Where to append the script.

String

head, body

head

\`callback\`

Callback after adding the script result with promise

function

(result)=>{...}

null

#### 4.7 Third Party Functions

You can include third party functions that you want to run based on cookie confirmations. You can also trigger actions to be taken after the installation process with the callback feature.

Here is a simple example demonstrating the basic usage of RabbitCookies:

<script>
$(document).ready(function () {
	$.RabbitCookies({
		thirdPartyFunctions 	: \[
	        (event)=>{
	            console.log('Other script loaded.');
	        },
	        function(event) {
	            console.log('Other plugin initialized.');
	        },
	        ...
		\],
	});
});
</script>

###### 4.7.1 Third Party Functions Params

Parameter

Description

Type

Values

Default

\`thirdPartyFunctions\`

Functions to be executed after consent is given and return as promise.

Array of Functions

\[function(event) {...}, ...\]

\[\]

#### 4.8 Allowed Domains for IFRAME Embed

Parameter

Description

Type

Values

Default

\`IframeAllowedDomains\`

List of embedded video provider domains to be controlled by the cookie policy. If it's empty, block all iframes

Array

\['youtube.com', 'youtu.be', 'dailymotion.com', ...\]

\[\]

### 5\. Customization

You can customize the look and feel of the cookie banner by overriding the default CSS styles. All RabbitCookies CSS classes start with `.rabbitcookie-` to avoid conflicts with other styles.

### 6\. Error Handling

RabbitCookies has built-in error handling. In case any script fails to load or execute, RabbitCookies ensures that your website remains functional.

### 7\. Extras \[External Iframe Overlay Protection\]

Our new feature provides enhanced privacy and security by blocking external iframes on your website. If an iframe's source is from a different domain, it will be covered with a semi-transparent overlay to prevent unauthorized content from being displayed or interacted with. Once users consent to cookies, the overlay will automatically be removed, allowing the external content to function normally. You can also block only the domains you specify.

Default blocked

Default blocked

Default not blocked

#### How It Works

*   Iframe Detection: The script scans all iframes on the page.
*   Domain Verification: For each iframe, the script checks if the source domain is different from the current website's domain.
*   Overlay Application: If the iframe's source domain is different, a semi-transparent overlay is applied to the iframe, covering it and preventing interaction.
*   Cookie Consent Handling: When users accept cookies, the overlay is removed, and the iframe becomes interactive as intended.
*   If there are domains defined in the \`IframeAllowedDomains\` list, these domains will be blocked. If the list is left empty, all domains will be blocked.

### License

RabbitCookies is licensed under the MIT License. Feel free to use it in your projects and contribute to its development.

### Contributions

Contributions are welcome! If you encounter any issues, have suggestions, or want to contribute, please open an issue or submit a pull request on GitHub.

Start using RabbitCookies today to ensure your website is GDPR/KVKK compliant while maintaining a smooth and user-friendly experience. Happy coding! 🎉

```javascript
$(document).ready(function () { /\* Demo Code Start \*/ $(document).on('change', '\[data-theme-mode\]', function(event) { event.preventDefault(); let newMode = $('option:selected', $('\[data-theme-mode\]')).val(); $('#rabbit-cookie-banner').attr('data-mode', newMode); }); $(document).on('change', '\[data-theme-position\]', function(event) { event.preventDefault(); let newPosition = $('option:selected', $('\[data-theme-position\]')).val(); $('#rabbit-cookie-banner').attr('data-position', newPosition); }); $(document).on('change', '\[data-set-theme\]', function(event) { event.preventDefault(); let newTheme = $('option:selected', $('\[data-set-theme\]')).val(); $('#rabbit-cookie-banner').attr('data-theme', newTheme); }); $(document).on('change', '\[data-set-lang\]', function(event) { event.preventDefault(); let newLang = $('option:selected', $('\[data-set-lang\]')).val(); $.RabbitCookies.update({language: newLang}); }); /\* Demo Code End \*/ $.RabbitCookies({ language : "tr", useLocalStorage : true, backgroundOverlay : false, uiSettings : { theme : 'theme-2', darkMode : true, bannerPosition : 'top-right', // bottom-right, bottom-left, top-right, top-left, center-modal, bottom-line, top-line bannerBgColor : '#fff', bannerTextColor : '#000', bannerBtnColor : '#000', bannerBtnTxtColor : '#fff', bannerBadgeBg : '#fff', detailsUrl : 'https://google.com', }, translations : { fr: { title : 'Nous utilisons des cookies pour améliorer', message : 'Nous utilisons des cookies pour améliorer votre expérience. En acceptant, vous acceptez notre politique de cookies.', accept : 'Accepter', decline : 'Refuser', details : 'Détails', badgeText : '🍪', iframeContent : 'Ce contenu est bloqué.<br/>Veuillez consulter vos préférences en matière de <a href="#" class="gdpr-open-preferences">protection de la vie privée</a>.', iframeSourceText: 'Source bloquée: {source}', } }, onInit : (settings) => { writeConsole(\`Cookie Consent Inited\`); writeConsole(\`Plugin data storage preference: '${settings.useLocalStorage==true?'localStorage':'cookie'}'\`); /\* Demo Selectboxes \*/ $('\[data-set-theme\]').val( settings.uiSettings.theme ); $('\[data-theme-mode\]').val( settings.uiSettings.darkMode==true ? \`dark\`:\`light\` ); $('\[data-theme-position\]').val( settings.uiSettings.bannerPosition ); /\* Demo Selectboxes \*/ console.log(\`Languages: ${Object.keys(settings.translations)}\`); }, onAccepted : () => { writeConsole(\`Cookie Consent: 'Accepted'\`); }, onDeclined : () => { writeConsole(\`Cookie Consent: 'Declined'\`); }, consentStatus : async (status) => { writeConsole(\`is Allowed: '${status.allowed}'\`); writeConsole(\`is Asked: '${status.asked}'\`); writeConsole(\`Cookie Consent Status: ${status.allowed==null ? 'NOT ANSWERED' : (status==true ? 'ACCEPTED' : 'DECLINED')}\`); }, IframeAllowedDomains: \['youtube.com', 'youtu.be', 'vimeo.com'\], thirdPartyScripts : \[ { src : "https://www.googletagmanager.com/gtag/js?id=YOUR\_GA\_TRACKING\_ID", load : "async", // async,defer,null appendTo: "head", // head,body callback: (event)=>{ writeConsole(\`Script Loading: ${event.src}\`); if(event.status){ writeConsole(\`Script Loaded: ${event.src}\`); $('#script\_1').addClass('runned'); }else{ writeConsole(\`Script Not Loaded: ${event.src}\`); writeConsole(\`Error: ${event.message}\`); $('#script\_1').addClass('failed'); } // $('#script\_1 span').html(event.message); } }, { src : "http://non-exist-domain.co.de.tr", load : "async", // async,defer,null appendTo: "head", // head,body callback: (event)=>{ writeConsole(\`Script Loading: ${event.src}\`); if(event.status){ // writeConsole(\`Script Loaded: ${event.src}\`); $('#script\_2').addClass('runned'); }else{ // $('#script\_2').addClass('failed'); writeConsole(\`Script Not Loaded: ${event.src}\`); writeConsole(\`Error: ${event.message}\`); } // $('#script\_2 span').html(event.message); } }, \], thirdPartyFunctions : \[ (event) => { writeConsole(\`Function Loading: ${JSON.stringiy(event)}\`); if(event.status){ writeConsole(\`Function Success: ${JSON.stringiy(event)}\`); // $('#function\_1').addClass('runned'); }else{ writeConsole(\`Function Failed: ${JSON.stringiy(event)}\`); // $('#function\_1').addClass('failed'); } // $('#function\_1 span').html(event.message); }, (event) => { writeConsole(\`Function Loading: ${JSON.stringiy(event)}\`); if(event.status){ writeConsole(\`Function Success: ${JSON.stringiy(event)}\`); // $('#function\_2').addClass('runned'); }else{ writeConsole(\`Function Failed: ${JSON.stringiy(event)}\`); // $('#function\_2').addClass('failed'); } // $('#function\_2 span').html(event.message); }, \], }); }); function writeConsole(text){ $('#console').append(\`> ${text}\\n\`); }
```