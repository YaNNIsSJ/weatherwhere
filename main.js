// Require module
require('o-colors');

// Wait until the page has loaded
if (document.readyState === 'interactive' || document.readyState === 'complete') {
	document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
}
document.addEventListener('DOMContentLoaded', function() {
	// Dispatch a custom event that will tell all required modules to initialise
	document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
});

// Require module
require('o-fonts');

// Wait until the page has loaded
if (document.readyState === 'interactive' || document.readyState === 'complete') {
	document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
}
document.addEventListener('DOMContentLoaded', function() {
	// Dispatch a custom event that will tell all required modules to initialise
	document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
});
