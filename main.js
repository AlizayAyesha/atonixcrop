$(document).ready(function() {
    $(".nav-link").on("click", function() {
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    });

    // Toggle hamburger menu for mobile view
    $('.hamburger').on('click', function() {
        $('.navbar ul').toggleClass('active'); // Show or hide the menu
        $(this).toggleClass('active'); // Change the hamburger icon
    });
});

$(document).ready(function() {
    $('.card, .card-active').on("click", function() {
        $(this).addClass("card-active").removeClass("card")
               .siblings().removeClass('card-active').addClass('card');
    });

    function activateNextCard() {
        var $activeCard = $('.card-active');
        var $nextCard = $activeCard.next('.card');
        if ($nextCard.length === 0) {
            $nextCard = $('.card').first();
        }
        $activeCard.removeClass('card-active').addClass('card');
        $nextCard.addClass('card-active').removeClass('card');
    }

  
});

function navigateTo(page) {
    window.location.href = page;
}


document.addEventListener('DOMContentLoaded', function() {
    const matrixEffect = document.querySelector('.matrix-effect');
    const columnSpacing = 30; // Spacing between columns
    const rowSpacing = 30; // Spacing between rows
    const columns = Math.floor(window.innerWidth / columnSpacing);
    const rows = Math.floor(window.innerHeight / rowSpacing);
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    function createMatrix() {
        for (let i = 0; i < columns; i++) {
            for (let j = 0; j < rows; j++) {
                const span = document.createElement('span');
                span.style.left = `${i * columnSpacing}px`;
                span.style.top = `${j * rowSpacing}px`;
                span.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
                matrixEffect.appendChild(span);
                animateMatrix(span);
            }
        }
    }

    function animateMatrix(span) {
        const animationDuration = Math.random() * 10 + 10; // Random duration between 10s and 20s
        span.style.animation = `fall ${animationDuration}s linear infinite`;
    }

    createMatrix();
});

// jQuery for hamburger menu
$(document).ready(function() {
    $('.navbar-toggler').on('click', function() {
        $('#navbarNav').toggleClass('collapsed');
        $(this).toggleClass('collapsed');
    });
});
