$(document).ready(function () {
	cart();
	slider();
	catalogBtn();
	filterSection();
	triggerProducts();
	carusel();
	toggleShowMobile();
	scrollTopFunction();
	basketPage();
	headerCartCountPrice();
	popup();
	callBack();
});

$(window).resize(function () {

});

$(window).load(function () {
	tovarPreview();
});


var popup = function () {
	$('.overlay').on('click', function () {
		$(this).fadeOut();
		$('.popup').fadeOut();
	})
	$('.popup').find('.close').on('click', function () {
		$('.overlay').fadeOut();
		$('.popup').fadeOut();
	});

}
var tabs = function () {
	var tab = $('.tabs');
	if (tab.length) {
		tab.each(function () {
			var idx = $(this).find('.tab-nav .active').index();
			$(this).find('.tab-content .tab').hide().eq(idx).show();
		});


		tab.find('.tab-nav a').click(function (event) {
			event.preventDefault();

			if ($(this).hasClass('active')) {
				return false;
			} else {
				$(this).parents('.tabs').find('.tab-nav a').removeClass('active');
				var idx = $(this).addClass('active').index();
				$(this).parents('.tabs').find('.tab-content .tab').hide();
				$(this).parents('.tabs').find('.tab-content .tab').eq(idx).show();
			}
		});
	}
}

var cart = function () {
	if ($('.cart-entity').length) {

		$('.cart-btn').on('click', function () {
			$('.cart').toggleClass('show');
			setTimeout(function () {
				$('.cart').toggleClass('cart-animation');
			})
		});

		$(document).click(function (event) {
			if ($(event.target).closest('.cart-entity').length) {
				event.stopPropagation();
				return false
			}
			else if ($(event.target).closest('.cart-btn').length) {
				event.stopPropagation();
				return false
			}
			else {
				if ($('.cart').hasClass('show')) {
					$('.cart').removeClass('show').removeClass('cart-animation');
				}
			}
		});

		$('.cart .close').on('click', function (event) {
			event.stopPropagation();
			$(this).parents('tr').next().remove();
			$(this).parents('tr').remove();
		})
	}
}
var slider = function () {
	if ($('.slider').length) {
		$('.slider').slidesjs({
			//	width: 940,
			height: 263
		});
	}
}

var catalogBtn = function () {
	var catalog = $('.catalog');
	catalog.find('button.orange').on('click', function () {

		catalog.toggleClass('catalog-show');
		setTimeout(function () {
			catalog.toggleClass('catalog-animation');
		}, 1);
	});

	$('.header-mobile .catalog-menu').find('>li > a').on('click', function (event) {
		event.preventDefault();
		$(this).parent().toggleClass("active")
	});
}

var filterSection = function () {
	$('.js-filter').on('click', function () {
		$(this).parents('.filter').toggleClass('opened').find('.inn').slideToggle();

	});
}

var triggerProducts = function () {
	if ($('#list-block').is(':checked')) {
		$('.products').addClass('list-items');
	}
	$('.js-trigger-products').find('input').on('change', function () {
		if ($('#list-block').is(':checked')) {
			$('.products').addClass('list-items');
		}
		else {
			$('.products').removeClass('list-items');
		}
	});

}

tovarPreview = function () {
	if ($('.tovar-big-preview').length) {
		setTimeout(function () {
			$('.tovar-container').find('.tovar-preview').find('ul li').first().find('a').click();
		}, 10)
	}
	$('.tovar-container').find('.tovar-preview').find('a').on('click', function (event) {
		event.preventDefault();
		var src;
		if (!$(this).hasClass('active')) {
			$('.tovar-container').find('.tovar-preview').find('a').removeClass('active');
			src = $(this).addClass('active').attr('href');
			$(this).parents('.tovar-container').find('.big-img').find('img').attr('src', src);
		}
	});
}

carusel = function () {
	if ($(".tovar-carusel").length) {
		if ($(window).width() >= 768) {
			$(".tovar-carusel").jCarouselLite({
				btnNext: ".next",
				btnPrev: ".prev",
				circular: false,
				scroll: 1,
				visible: 3
			});
		}

	}
}

toggleShowMobile = function () {
	if ($(window).width() < 768) {
		var bool = true;

		$('.description-block-title').on('click', function (e) {
			$(this).parent().toggleClass('open');

			if (e.target.className == 'carusel-mobile' && bool) {
				setTimeout(function () {
					$(".tovar-carusel").jCarouselLite({
						btnNext: ".next",
						btnPrev: ".prev",
						circular: false,
						scroll: 1,
						visible: 2
					}, 1000);
				});
				bool = false;
			}
		})
	}
}

scrollTopFunction = function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.icons-up').fadeIn();
		} else {
			$('.icons-up').fadeOut();
		}
	});

	$('.icons-up').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});
}

basketPage = function(){
	$('td.close').find('button').on('click', function(){
		$(this).parents('tr').remove();
	});
}

headerCartCountPrice = function(){
	$('.popup-cart-table').find('.count').find('.min-js').on('click', function(event){
		var row = $(event.target).parent();
		reduceItems(row);
	});

	$('.popup-cart-table').find('.count').find('.plus-js').on('click', function(event){
		var row = $(event.target).parent();
		increaseItems(row);
	});


	$('.basket').find('.input-count').find('.min').on('click', function(event){
		var row = $(event.target).parent();
		reduceItems(row);
	});

	$('.basket').find('.input-count').find('.up').on('click', function(event){
		var row = $(event.target).parent();
		increaseItems(row);
	});

	var reduceItems = function(el){

		var input = el.parent().find('input');
		var amount = parseInt(input.val());
		if (amount > 1) {
			amount = --amount;
			input.val(amount);
			recountPrice(amount, el);
		}
	}

	var increaseItems = function(el){
		var input = el.parent().find('input');
		var amount = parseInt(input.val());
		if (amount > 0) {
			amount = ++amount;
			input.val(amount);
			recountPrice(amount, el);
		}
	}
	var recountPrice = function(itemsCount, el){
		var totalPrice = parseInt(el.parents('tr').find('td.price').find('strong').text())*itemsCount;
		el.parents('tr').find('.total').find('strong').text(totalPrice);
	}
}

callBack = function(){
	$('.call-back').find('.text').on('click', function(event){
		event.preventDefault();
		event.stopPropagation();
		$('.call-back-box').fadeIn();
		$('.overlay').first().fadeIn();
	})
}