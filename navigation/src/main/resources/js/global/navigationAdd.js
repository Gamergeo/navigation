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
	
		// Si la page et les datas sont identiques à la page actuelle, on ne fait rien
		if (addedPage.url == $.navigationPage().url && addedPage.data == $.navigationPage().data) {
			return;
		}
	
		P_nav.index ++;
	}
	
	P_nav.setPage(P_nav.index, addedPage);
	
	// On supprime toutes les pages suivantes
	P_nav.pages = P_nav.pages.splice(0, P_nav.index + 1);
	
	P_nav.refresh();
	
	return $;
}