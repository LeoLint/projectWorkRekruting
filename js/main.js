$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1
        }
      }
    ]
  });

  