const swiper = new Swiper('.swiper', {
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},


	// swiper settings
	slidesPerView: 2,
	slidesPerGroup: 1,
	spaceBetween: 20,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

});
if (window.innerWidth <= 770) {
	swiper.params.slidesPerView = 1;
}
else {
	swiper.params.slidesPerView = 2;
}
window.addEventListener('resize', function () {
	if (window.innerWidth <= 770) {
		swiper.params.slidesPerView = 1;
	}
	else {
		swiper.params.slidesPerView = 2;
	}
})