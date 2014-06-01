$(document).ready(function () {
  cart();
  slider();
  catalogBtn();
  filterSection();
  triggerProducts();

});

$(window).resize(function () {

});

$(window).load(function () {

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

    $('.cart-btn').on('click', function() {
      $('.cart').toggleClass('show');
      setTimeout(function(){
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

    $('.cart .close').on('click', function(event) {
      event.stopPropagation();
      $(this).parents('tr').next().remove();
      $(this).parents('tr').remove();
    })
  }
}
var slider = function() {
  if ($('.slider').length) {
    $('.slider').slidesjs({
  //	width: 940,
      height: 263
    });
  }
}

var catalogBtn = function() {
  var catalog = $('.catalog');
  catalog.find('button.orange').on('click', function(){

    catalog.toggleClass('catalog-show');
    setTimeout(function(){
      catalog.toggleClass('catalog-animation');
    }, 1);
  });

  $('.header-mobile .catalog-menu').find('>li > a').on('click', function(event){
    event.preventDefault();
    $(this).parent().toggleClass("active")
  });
}

var filterSection = function() {
  $('.js-filter').on('click', function() {
    $(this).parents('.filter').toggleClass('opened').find('.inn').slideToggle();

  });
}

var triggerProducts = function() {
  if ($('#list-block').is(':checked')) {
    $('.products').addClass('list-items');
  }
  $('.js-trigger-products').find('input').on('change', function(){
    if ($('#list-block').is(':checked')) {
      $('.products').addClass('list-items');
    }
    else {
      $('.products').removeClass('list-items');
    }
  });

  
}