<h1>RabbitCookies - Advanced GDPR/CCPA Cookie Consent Management</h1>

<h2>Overview</h2>
<p>Elevate your website's user experience and compliance with RabbitCookies, the ultimate solution for GDPR and CCPA cookie consent management. With RabbitCookies, you can effortlessly manage cookie consent while providing a seamless user experience and complying with global privacy regulations. Perfect for websites of all sizes, RabbitCookies is designed to enhance user trust and streamline your cookie management processes.</p>

<h2>Key Features</h2>
<ul>
	<li>Comprehensive Cookie Consent Management: Easily handle cookie consent with an elegant and customizable banner that supports multiple languages.</li>
	<li>Flexible Positioning: Choose from various banner positions including bottom-right, bottom-left, top-right, top-left, and center-modal to best fit your website’s design.</li>
	<li>Detailed Consent Tracking: Allow users to view and manage cookie preferences, ensuring compliance with GDPR and CCPA regulations.</li>
	<li>Customizable Appearance: Tailor the banner’s appearance to match your website’s theme with adjustable colors, fonts, and sizes.</li>
	<li>Dynamic Script and Function Loading: Load and manage third-party scripts and functions only after user consent is granted. Supports asynchronous and deferred loading options.</li>
	<li>Overlay for External Iframes: Automatically detect and block external iframes (e.g., YouTube, Vimeo) until consent is given, enhancing privacy and compliance.</li>
	<li>Responsive Design: Fully responsive and mobile-friendly to ensure a consistent user experience across all devices.</li>
	<li>Easy Integration: Simple to integrate with just one JavaScript file and easy-to-use configuration options.</li>
</ul>

<h2>How It Works</h2>
<ul>
	<li>Setup: Add RabbitCookies to your website with a single script inclusion.</li>
	<li>Configuration: Customize the banner’s appearance and behavior using the settings provided.</li>
	<li>Consent Management: Users can easily accept or decline cookies, and their preferences are remembered.</li>
	<li>Script Loading: Load third-party scripts and functions only after user consent, with support for callback functions and asynchronous loading.</li>
	<li>Iframe Overlay: Automatically detect and block external iframes until consent is granted.</li>
</ul>

<h2>Why Choose RabbitCookies?</h2>
	<li>User-Friendly: An intuitive interface that enhances user experience and simplifies cookie management.</li>
	<li>Compliance Ready: Ensures your website adheres to GDPR and CCPA regulations.</li>
	<li>Customizable: Highly customizable to fit the specific needs of your website.</li>
	<li>Efficient: Manage third-party scripts and functions dynamically based on user consent.</li>
</ul>

<h2>Usage Examples</h2>
Integrate RabbitCookies with ease by including the following script and configuration:
<pre class="codes">&lt;script&gt;
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
		thirdPartyScripts 	: [
	        {
	            src 	: "https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID",
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
		],
		thirdPartyFunctions 	: [
	        (event)=>{
	            console.log('Other script loaded.');
	        },
	        function(event) {
	            console.log('Other plugin initialized.');
	        }
		],
	});
});
&lt;/script&gt;</pre>

<h2>Support & Documentation</h2>
<p>For detailed documentation and support, visit <a href="">documentation page</a> or contact support at badursun@adjans.com.tr</p>