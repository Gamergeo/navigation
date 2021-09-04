/**
 * Ajoute une url à la navigation
 */
$.navigationAdd = function (options) {
	let addedPage = new Object();
	addedPage.url = options.url;
	addedPage.data = options.data;
	
	// Première création
	if ($.isEmptyObject(P_nav.pages)) {
		P_nav.pages = new Array();
		P_nav.index = 0;
	} else {
		P_nav.index ++;
	}
	
	P_nav.setPage(P_nav.index, addedPage);
	
	// On supprime toutes les pages suivantes
	for (let i = P_nav.index + 1; i < P_nav.pages.length; i++ ) {
		P_nav.setPage(i, undefined);
	}
	
	P_nav.refresh();
	
	return $;
}