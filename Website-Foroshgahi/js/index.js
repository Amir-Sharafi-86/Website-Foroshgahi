var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
});

jQuery('.slider-item').owlCarousel({
	loop: true,
	autoplay:true,
	margin: 10,
	rtl: true,
	nav: false,
	dots: true,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 2,
		},
		1000: {
			items: 2,
		}
	}
});


jQuery('.cat-slider-item').owlCarousel({
	loop: false,
	autoplay:true,
	margin: 10,
	rtl: true,
	nav: false,
	dots: true,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 3,
		},
		1000: {
			items: 4,
		}
	}
});


jQuery('.product-gallery').owlCarousel({
	loop: false,
	autoplay:true,
	margin: 10,
	rtl: true,
	nav: false,
	dots: true,
	responsiveClass: true,
	responsive: {
		0: {
			items: 2,
		},
		600: {
			items: 3,
		},
		1000: {
			items: 4,
		}
	}
});


jQuery('.brands-slider').owlCarousel({
	loop: false,
	autoplay:true,
	margin: 10,
	rtl: true,
	nav: false,
	dots: false,
	responsiveClass: true,
	responsive: {
		0: {
			items: 2,
		},
		600: {
			items: 3,
		},
		1000: {
			items: 5,
		}
	}
});


jQuery('.timer').startTimer();


jQuery('footer span.scrooltop').click(function () {
	jQuery('body,html').animate({
		scrollTop: 0
	}, 1000);
	return false;
});

jQuery("#appzoom").elevateZoom({
	zoomType: "inner",
	cursor: "crosshair"
});

jQuery('[data-fancybox="gallery"]').fancybox({});

jQuery('.responsive-menu-container ul li').has('ul').append("<span class='resp-menu-ul-show'><i class='bi bi-caret-down-fill'></i></span>");

jQuery('.responsive-menu-container ul li span.resp-menu-ul-show').click(function () {
	jQuery(this).prev('ul').slideToggle();
	jQuery(this).find('i').toggleClass('bi-caret-down-fill');
	jQuery(this).find('i').toggleClass('bi-caret-up-fill');
});

jQuery('#responsive_Menu_Btn').click(function () {
	jQuery('.responsive-menu-container').toggleClass('responsive-menu-show');
	jQuery('body,html').toggleClass('overflow-hidden');
});

jQuery('.close_responsive_Menu').click(function () {
	jQuery('.responsive-menu-container').removeClass('responsive-menu-show');
	jQuery('body,html').removeClass('overflow-hidden');
});


function get_window_width() {
	var win_width = jQuery(window).width();
	if (win_width > 768) {
		jQuery('.responsive-menu-container').removeClass('responsive-menu-show');
		jQuery('body,html').removeClass('overflow-hidden');

	}
}

get_window_width();

jQuery(window).resize(function () {
	get_window_width();
});

jQuery('.delete-cart-item').click(function () {
	jQuery(this).parent().parent().remove();
});