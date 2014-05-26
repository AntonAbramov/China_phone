$(document).ready(function () {
  cart();
  slider();




});

$(window).resize(function () {

});

$(window).load(function () {

});


var popup = function () {
	$(".overlay").on("click", function () {
		$(this).fadeOut();
		$('.popup').fadeOut();
	})
	$(".popup").find(".close").on("click", function () {
		$(".overlay").fadeOut();
		$('.popup').fadeOut();
	});

}
var tabs = function () {
	var tab = $(".tabs");
	if (tab.length) {
		tab.each(function () {
			var idx = $(this).find(".tab-nav .active").index();
			$(this).find('.tab-content .tab').hide().eq(idx).show();
		});


		tab.find(".tab-nav a").click(function (event) {
			event.preventDefault();

			if ($(this).hasClass("active")) {
				return false;
			} else {
				$(this).parents('.tabs').find(".tab-nav a").removeClass('active');
				var idx = $(this).addClass("active").index();
				$(this).parents('.tabs').find(".tab-content .tab").hide();
				$(this).parents('.tabs').find(".tab-content .tab").eq(idx).show();
			}
		});
	}
}

var cart = function () {
  if ($(".cart-entity").length) {

    $(".cart-btn").on("click", function() {
      $('.cart').toggleClass("show");
    });

    $(document).click(function (event) {
      if ($(event.target).closest(".cart-entity").length) {
        event.stopPropagation();
        return false
      }
      else if ($(event.target).closest(".cart-btn").length) {
      event.stopPropagation();
        return false
      }
      else {
        if ($(".cart").hasClass("show")) {
          $(".cart").removeClass("show");
        }
      }
    });

    $(".cart .close").on("click", function(event) {
      event.stopPropagation();
      $(this).parents("tr").next().remove();
      $(this).parents("tr").remove();
    })
  }
}
var slider = function() {
  if ($(".slider").length) {
    $(".slider").slidesjs({
  //	width: 940,
      height: 263
    });
  }
}