// document.querySelector('#menuBtn').addEventListener('click', function (e) { var div = document.querySelector('#popupMenu');
  // var img = document.querySelector('#cart');
  
  // div.hidden = !div.hidden;

  // if (div.hidden) {
    // img.src = '../img/cart 1.png'; // путь к первой картинке
  // } else {
    // img.src = '../img/cart pink 1.png'; // путь к другой картинке
  // }
// })



document.addEventListener('DOMContentLoaded', function() {
  var menuBtn = document.querySelector('#menuBtn');
  var menuBtn2 = document.querySelector('#menuBtn2');
  var popupMenu = document.querySelector('#popupMenu');
  var cartImg = document.querySelector('#cart');
  var picFont1 = document.querySelector('#picFont1');
  var picFont2 = document.querySelector('#picFont2');
  var currentFont = picFont1;
  var firstClick = true;

  menuBtn.addEventListener('click', function(e) {
    if (firstClick) {
      popupMenu.style.display = 'block';
      firstClick = false;
    } else {
      popupMenu.style.display = (popupMenu.style.display === 'none') ? 'block' : 'none';
    }

    if (popupMenu.style.display === 'none') {
      cartImg.src = '../img/cart 1.png';
    } else {
      cartImg.src = '../img/cart pink 1.png';
      var span = document.createElement('span');
      span.innerHTML = currentFont.innerHTML;
      popupMenu.innerHTML = '';
      popupMenu.appendChild(span);
    }
  });

  menuBtn2.addEventListener('click', function(e) {
    if (firstClick) {
      popupMenu.style.display = 'block';
      firstClick = false;
    } else {
      popupMenu.style.display = (popupMenu.style.display === 'none') ? 'block' : 'none';
    }

    if (popupMenu.style.display === 'none') {
      cartImg.src = '../img/cart 1.png';
    } else {
      cartImg.src = '../img/cart pink 1.png';
      if (currentFont === picFont1) {
        currentFont = picFont2;
      } else {
        currentFont = picFont1;
      }
      var span = document.createElement('span');
      span.innerHTML = currentFont.innerHTML;
      popupMenu.innerHTML = '';
      popupMenu.appendChild(span);
    }
  });
});



