'use strict';

(function () {
   var wizardCoat = document.querySelector('.wizard-coat');
   var wizardEyes = document.querySelector('.wizard-eyes');
   var wizardFireball = document.querySelector('.setup-fireball');

   wizardCoat.addEventListener('click', function () {
      var currentColor = window.tools.getRandomColor(wizards.coatsColors);

      wizardCoat.style = 'fill:' + currentColor;
      document.querySelector('input[name="coat-color"]').value = currentColor;
   });

   wizardEyes.addEventListener('click', function () {
      var currentColor = window.tools.getRandomColor(wizards.eyesColors);

      wizardEyes.style = 'fill:' + currentColor;
      document.querySelector('input[name="eyes-color"]').value = currentColor;
   });

   wizardFireball.addEventListener('click', function () {
      var currentColor = window.tools.getRandomColor(wizards.fireballColors);

      wizardFireball.style = 'background-color:' + currentColor;
      document.querySelector('input[name="fireball-color"]').value = currentColor;
   });
})();

