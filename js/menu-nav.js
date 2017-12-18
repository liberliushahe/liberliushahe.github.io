$(function() {
	$(".menu-nav-item>a").on("click", function() {
		if(!$(".menu-nav").hasClass("menu-nav-mini")) {
			if($(this).next().css("display") == "none") {
				$(".menu-nav-item").children("ul").slideUp(500);
				$(this).next('ul').slideDown(300);
				$(this).parent("li").addClass("nav-show").siblings("li").removeClass("nav-show");
			} else {
				$(this).next().slideUp(400);
				$(this).parent("li").removeClass("nav-show").siblings("li").removeClass("nav-show");
			}
		} 
	})

	//缩略菜单显示
	$("#mini").on("click", function() {
		if(!$(".menu-nav").hasClass("menu-nav-mini")) {
			$(".menu-nav-item .nav-show").removeClass("nav-show");
			$(".menu-nav-item ").children("ul").removeAttr("style");
			$(".menu-nav").addClass("menu-nav-mini");
		} else {
			$(".menu-nav").removeClass("menu-nav-mini");
		}

	})
})