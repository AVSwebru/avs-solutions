(function() {
  var mouseIsDown = false;
  var comparsionItemArr = document.querySelectorAll('.js-comparsion');
  var comparsionItemOffset = comparsionItemArr[0].getBoundingClientRect().left;
  var handlerArr = document.querySelectorAll('.js-comparsion-handler');
  var leftComparsionArr = document.querySelectorAll('.js-comparsion-left');

  for (let i = 0; i < comparsionItemArr.length; i++) {
    handlerArr.forEach(element => {
      element.addEventListener('mousedown', () => {
        mouseIsDown = true;
      });
    });

    comparsionItemArr.forEach(element => {
      element.addEventListener('mouseup', () => {
        if (mouseIsDown == true) mouseIsDown = false;
      });
    });
    
    comparsionItemArr.forEach(element => {
      element.addEventListener('mouseleave', () => {
        mouseIsDown = false;
      });
    });
    
    comparsionItemArr.forEach((element, i) => {
      element.addEventListener('mousemove', () => {
        if (mouseIsDown) {
          let comparsionVal = event.clientX - comparsionItemOffset;
          if (comparsionVal < comparsionItemArr[i].offsetWidth && comparsionVal > 0) {
            handlerArr[i].style.left = comparsionVal + 'px';
            leftComparsionArr[i].style.width = comparsionVal  + 'px';
          }
        }
      });
    });
  }
})();


