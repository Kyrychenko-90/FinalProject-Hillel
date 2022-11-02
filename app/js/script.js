$('.team-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    dotsClass: "my-team-slider"
});

$('.achievements-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    dotsClass: "my-achievements-slider",
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                arrows: false,
                dotsClass: "my-achievements-slider",
            }
        },
    ]
});

