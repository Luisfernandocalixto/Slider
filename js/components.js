$(document).ready(function () {
    $('.sidenav').sidenav({
        closeOnclick: true
    });

    $('.carousel.carousel-slider').carousel(
        {
            fullWidth: true,
            indicators: true,
            duration: 200,
        }
    );

    autoplay();
    function autoplay() {
        $('.carousel.carousel-slider').carousel('next');
        $('.carousel-item.img').addClass('fade-in');
        setTimeout(autoplay, 6500);

    }



});
