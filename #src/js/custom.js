// TODO: Дописать функцию проверки потдержки формата webP
// function testWebP(callback) {
// 	var webP = new Image();
// 	webP.onload = webP.onerror = function () {
// 		callback(webP.height == 2);
// 	};
// 	webP.src = "data:image/webp;base64,Uk1GRjoAAABXRUJQV1A4IC4AAACyAgCdASoCAAIALmk0mk0i"
// }
// TODO:-------------------------------------------------
//===Menu burger, icon-menu================================================================================================================
$(document).ready(function () {
	$('.icon-menu').click(function (event) {
		$('.icon-menu,.header__menu').toggleClass('_active');
		$('body').toggleClass('lock');
	});
});
//===/Menu burger, icon-menu================================================================================================================

// ===Slider config=========================================================================================================================
// *** Main-slider ***
$('.slider-ms__body').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 4,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				arrows: false
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				arrows: false
			}
		},
		{
			breakpoint: 480,
			settings: "unslick"
		}
	]
});
// ===Galery=========================================================================================================================
// $('.slider-gallery').slick({
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	arrows: false,
// 	fade: true,
// 	asNavFor: '.slider-nav'
// });
// $('.slider-gallery-nav').slick({
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	asNavFor: '.slider-gallery',
// 	dots: true,
// 	centerMode: true,
// 	focusOnSelect: true
// });
// ===/Slider config=========================================================================================================================