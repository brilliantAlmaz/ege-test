const sliderWrapper = document.querySelector('.plan__wrapper');
const slider = document.querySelector('.plan__slider')
const sliderItems = slider.querySelectorAll('.plan__item');
const btns = document.querySelectorAll('.plan__btn-item');

function init() {
	sliderItems.forEach(function (item) {
		item.style.minWidth = sliderWrapper.clientWidth + 'px';
		item.style.maxWidth = sliderWrapper.clientWidth + 'px';
	})

}
init();
window.addEventListener('resize', init);

btns.forEach(function (item, index) {
	item.addEventListener('click', function () {
		btns.forEach(function (k) {
			k.classList.remove('active');
		})
		item.classList.add('active');
		slider.style.transform = `translate(-${sliderWrapper.clientWidth * index}px)`;
	})
})