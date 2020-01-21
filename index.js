document.addEventListener('D0MContentLoaded' function() {

  var buttons = document.querySelectorAll('.btn');

  buttons.forEach(function(button) {
      button.addEventListener('click', function() {
      var color = button.getAttribute('data-color');
      var boxContainer = document.querySelector('.box-container');
      var box = document.createElement('div');
      box.className = 'box ' + color;
      boxContainer.appendChild(box);
    });
  });
});
