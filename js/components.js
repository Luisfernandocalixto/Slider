$(document).ready(function () {
    $('.sidenav').sidenav({
        closeOnclick: true
    });


    // $('.carousel').carousel();

    // $('.carousel.carousel-slider').carousel(
    //     {
    //         fullWidth: true,
    //         indicators: true,
    //     }
    // );

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


// const slides = document.querySelectorAll('.carousel-item');
// let currentSlide = 0;
// const totalSlides = slides.length;

// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.classList.add("fade-in");
//         slide.style.display = i === index ? 'block' : 'none';
//     });
// }
// function nextSlide() {
//     currentSlide = (currentSlide + 1) % totalSlides;
//     showSlide(currentSlide);
// }

// showSlide(currentSlide);

// setInterval(nextSlide, 5500);

// document.addEventListener('DOMContentLoaded', function() {
//     const elems = document.querySelectorAll('.carousel');
//     const instances = M.Carousel.init(elems, {
//         fullWidth: true,
//         indicators: true,
//         duration: 200,
//         interval: 3000 // Cambia cada 3 segundos
//     });

//     const imgElement = document.getElementById("img");
//     if (imgElement) {
//         imgElement.style.width = "768px"; // Cambia el ancho de la imagen
//     } else {
//         console.error("El elemento con ID 'img' no se encontró.");
//     }
// });