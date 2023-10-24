//открытие галереи
document.querySelectorAll('.img-container img').forEach(img => {
    img.onclick = () => {
      document.querySelector('.pop-up').style.display = 'block';
      document.querySelector('.pop-up img').src = img.getAttribute('src');
    }
  });
  
  document.querySelector('.pop-up .close').onclick = () => {
    document.querySelector('.pop-up').style.display = 'none';
  };

  let btn = document.getElementById('btnOffOn');
  let imgHidden = document.getElementById('img-container-hidden');

  btn.addEventListener('click', () => {
    imgHidden.classList.toggle('img-container-active');
    btn.classList.toggle('rotate');

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







