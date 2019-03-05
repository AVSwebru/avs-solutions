(function () {
  var menuLinks = document.querySelectorAll('.js-menu-link');
  var menu = document.querySelector('.js-menu-adapt');
  var menuBtn = document.querySelector('.js-menu-btn');

  menuLinks.forEach(element => {
    element.addEventListener('click', () => {
      menu.classList.remove('active');
      menuBtn.classList.remove('active');
    });
  });
})();