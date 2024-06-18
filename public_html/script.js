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
