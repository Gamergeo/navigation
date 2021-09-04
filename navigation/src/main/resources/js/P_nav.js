class P_nav {
	
	static get pages() {
		return JSON.parse(sessionStorage.getItem("plugin_navigation_navigationPages"))	
	}
	
	static get index() {
		return parseInt(sessionStorage.getItem("plugin_navigation_navigationIndex"));
	}
	
	static set pages(pages) {
		sessionStorage.setItem("plugin_navigation_navigationPages", JSON.stringify(pages));
	}
	
	static set index(index) {
		sessionStorage.setItem("plugin_navigation_navigationIndex", index);
	}
	
	static setPage(index, page) {
		let pages = this.pages;
		pages[index] = page;
		this.pages = pages;
	}
	
	static hasPrevious() {
		let navigationPages = JSON.parse(sessionStorage.getItem("plugin_navigation_navigationPages"));
		let navigationIndex = sessionStorage.getItem("plugin_navigation_navigationIndex");
		
		if ($.isEmptyObject(navigationPages) || navigationIndex == 0) {
			return false;
		}
		
		return true;
	}
	
	static hasNext() {
		let navigationPages = JSON.parse(sessionStorage.getItem("plugin_navigation_navigationPages"));
		let navigationIndex = sessionStorage.getItem("plugin_navigation_navigationIndex");
			
		if ($.isEmptyObject(navigationPages) || navigationIndex >= navigationPages.length - 1) {
			return false;
		}
		
		return true;
	}
	
	static refresh() {
		$('.plugin_navigation_previous').toggle(P_nav.hasPrevious());
		$('.plugin_navigation_next').toggle(P_nav.hasNext());
	}
	
}