$(document).ready(function() {
	$('.js-menu').on('click', function(e) {
		e.preventDefault();
		//display menu nav-icon
		$(this).toggleClass('is-open');
		//show slide bar
		$('.slide-bar').toggleClass('is-open');
		//body stop overflow
		$("body").toggleClass("overflow-hidden");
		$(".overlay").toggleClass("is-active");
	});
	
	$('.overlay').on('click', function(e) {
		e.preventDefault();
		$('.nav-icon').removeClass('is-open');
		$('.slide-bar').removeClass('is-open');
		$('.subnav-list').removeClass('is-display');
		$(".nav-link-icon").removeClass('is-open');
		$("body").removeClass("overflow-hidden");
		$(".overlay").removeClass("is-active");
	});
	
	//display nav-list__items
	$('.js-nav').on('click', function(e) {
		e.preventDefault();
		$(this).find('.subnav-list').toggleClass('is-display');
		$(".nav-link-icon").toggleClass('is-open');
	});
});
