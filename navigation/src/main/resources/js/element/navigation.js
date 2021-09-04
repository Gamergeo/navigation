/**
 * Initialise la navigation
 */
$.fn.navigation = function () {
		
	sessionStorage.removeItem("plugin_navigation_navigationPages");
	sessionStorage.removeItem("plugin_navigation_navigationIndex");
	
	return this.each(function() {
		let previousElement = $(this).children().eq(0);
		previousElement.addClass('plugin_navigation_previous');
		
		// Add click event
		previousElement.on('click', function() {
			P_nav.index--;
			P_nav.refresh();
		});
		
		let nextElement = $(this).children().eq(1);
		nextElement.addClass('plugin_navigation_next');
		
		nextElement.on('click', function() {
			P_nav.index++;
			P_nav.refresh();
		});
		
		P_nav.refresh();
	});
}