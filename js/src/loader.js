/*global jQuery:false */
/*global window:false */
/*global document:false */
/*global _agm:false */

/**
 * Asynchrounously load Google Maps API.
 */


/**
 * Global API loaded flag.
 */
window._agmMapIsLoaded = false;


/**
 * Callback - triggers loaded flag setting.
 */
function agmInitialize () {
	window._agmMapIsLoaded = true;
}

/**
 * Handles the actual loading of Google Maps API.
 */
function loadGoogleMaps () {
	var protocol = '';
	try { protocol = document.location.protocol; } catch (e) { protocol = 'http:'; }
	var script = document.createElement("script");
	script.type = "text/javascript";
	var api_key = window._agm_api_key;
	if (api_key) {
		api_key = "&key=" + api_key;
	}
	script.src = protocol + "//maps.google.com/maps/api/js?v=3" + api_key + "&libraries=panoramio&sensor=false&callback=agmInitialize";
	document.body.appendChild(script);
}

jQuery(window).load(loadGoogleMaps);
