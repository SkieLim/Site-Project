//SIDEBAR

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const sidebar = document.getElementById("sidebar");

    menuIcon.addEventListener("click", function() {
        menuIcon.classList.toggle("rotate");
        sidebar.classList.toggle("open");
    });
});

//END SIDEBAR


//HEADER SCROLL EFFECT

window.addEventListener('scroll', function() {
    var header = document.getElementById('body-header');
    if (window.scrollY > 50) {
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