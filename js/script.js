//main foto
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleVisibility(element) {
    if (isElementInViewport(element)) {
        element.classList.add('active');
    } else {
        element.classList.remove('active');
    }
}

var image = document.querySelector('.image');


handleVisibility(image);


window.addEventListener('scroll', function() {
    handleVisibility(image);
});




//menu
let menu = document.getElementById('menu');
let burgerMenu = document.getElementById('toggleButton');
let menuLink = document.querySelectorAll('.menu-link');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('actives');
    menu.classList.toggle('menu-activ');
});

menuLink.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('actives');
        menu.classList.remove('menu-activ');
    });
});
















