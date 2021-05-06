$(function(){

    $('.product_slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow_left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow_right.svg" alt=""></button>',
        autoplay: 2000
    });

    $('.production_slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow_left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow_right.svg" alt=""></button>',
        autoplay: 2000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
    });

});