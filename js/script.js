$(document).ready(function () {
  // ============ Slick carousel ==============
  $(".logo-carousel").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".testimonies-carousel").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".team-carousel").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  // ============== Smooth scrolling ===============

  $(function () {
    $('a[href*=#]:not([data-toggle="tab"])').click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          );
          return false;
        }
      }
    });
  });

  $(function () {
    $("#animation-container").wordsrotator({
      autoLoop: true, //auto rotate words
      randomize: false, //show random entries from the words array
      stopOnHover: false, //stop animation on hover
      changeOnClick: false, //force animation run on click
      animationIn: "fadeInLeft", //css class for entrace animation
      animationOut: "fadeOut", //css class for exit animation
      speed: 2000, //delay in milliseconds between two words
      words: [
        "Desarrollo de Clientes",
        "Estrategia de Producto",
        "Modelos de Negocio",
        "Validación de Ideas",
      ],
    });
  });
});
