//HEADER SCROLL EFFECT

window.addEventListener('scroll', function() {
    var header = document.getElementById('body-header');
    var sidebar = document.getElementById('sidebar'); // Adicionado
    if (window.scrollY > 50 || sidebar.classList.contains('open')) {
        header.classList.remove('transparent');
        header.classList.add('solid');
    } else {
        header.classList.remove('solid');
        header.classList.add('transparent');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var header = document.getElementById('body-header');
    header.classList.add('transparent');
});

//END HEADER SCROLL EFFECT

//SIDEBAR

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const sidebar = document.getElementById("sidebar");
    const header = document.getElementById('body-header');

    menuIcon.addEventListener("click", function() {
        menuIcon.classList.toggle("rotate");
        sidebar.classList.toggle("open");

        if (sidebar.classList.contains('open')) {
            header.classList.remove('transparent');
            header.classList.add('solid');
        } else if (window.scrollY <= 50) {
            header.classList.remove('solid');
            header.classList.add('transparent');
        }
    });
});


//END SIDEBAR

//CAROUSEL CARDS

let currentIndex = 0;

function moveCarousel(direction) {
    const carouselInner = document.querySelector('.carousel-inner');
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    const cardWidth = cards[0].offsetWidth;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalCards - 1;
    } else if (currentIndex >= totalCards) {
        currentIndex = 0;
    }

    const offset = -currentIndex * cardWidth;
    carouselInner.style.transform = `translateX(${offset}px)`;
}

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
    const contents = document.querySelectorAll(".content");
    let activeContent = null;

    cards.forEach(card => {
        card.addEventListener("click", function() {
            const contentId = this.getAttribute("data-content");
            const contentElement = document.getElementById(contentId);

            if (activeContent && activeContent === contentElement) {
                contentElement.classList.remove("active");
                activeContent = null;
            } else {
                contents.forEach(content => content.classList.remove("active"));
                contentElement.classList.add("active");
                activeContent = contentElement;
            }
        });
    });
});


//END CAROUSEL CARDS

document.addEventListener("DOMContentLoaded", function() {
    const openingAnimation = document.getElementById('opening-animation');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        openingAnimation.style.display = 'none';
        mainContent.style.display = 'block';
    }, 3000); // 3 seconds
});

