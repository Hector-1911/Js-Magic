'use strict';

(function () {
   var coatColor;
   var eyesColor;
   var wizards = [];

   var getRank = function (wizard) {
      var rank = 0;

      if (wizard.colorCoat === coatColor) {
         rank += 2;
      };

      if (wizard.colorEyes === eyesColor) {
         rank += 1;
      };

      return rank;
   };

   var namesComparator = function (leftName, rightName) {
      if (leftName > rightName) {
         return 1;
      } else if (leftName < rightName) {
         return -1;
      } else {
         return 0;
      }
   };

   var updateWizards = function () {
      window.render(wizards.sort(function (left, right) {
         var rankDiff = getRank(right) - getRank(left);

         if (rankDiff === 0) {
            rankDiff = namesComparator(left.name, right.name);
         };

         return rankDiff;
      }));
   };

   window.wizard.onCoatChange = function (color) {
      coatColor = color;
      window.debounce(updateWizards);
   };

   window.wizard.onEyesChange = function (color) {
      eyesColor = color;
      window.debounce(updateWizards);
   };

   var onLoad = function (data) {
      wizards = data;
      updateWizards();
   };

   var onError = function (message) {
      var node = document.createElement('div');

      node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
      node.style.position = 'absolute';
      node.style.left = 0;
      node.style.right = 0;
      node.style.fontSize = '30px';

      node.textContent = message;
      document.body.insertAdjacentElement('afterbegin', node);
   };

   window.backend.load(onLoad, onError);
})();