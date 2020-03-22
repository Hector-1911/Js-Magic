'use strict';

/ Wizards change / 

var userDialog = document.querySelector('.setup');

var getRandomNumber = function (min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

var getRandomColor = function (colors) {
   return colors[getRandomNumber(0, colors.length)];
};

var wizardsNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardsFullNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatsColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green',];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var createWizards = function(name, fullName, coatColor, eyesColor) {
   var wizardsArray = [];
   
   for (var i = 0; i < 4; i++) {
      var wizardOject = {};

      var randomName = name[getRandomNumber(0, name.length - 1)] + ' ' + fullName[getRandomNumber(0, fullName.length - 1)];
      var randomCoatColor = coatColor[getRandomNumber(0, coatColor.length - 1)];
      var randomEyesColor = eyesColor[getRandomNumber(0, eyesColor.length - 1)];

      wizardOject.name = randomName;
      wizardOject.coatColor = randomCoatColor;
      wizardOject.eyesColor = randomEyesColor;

      wizardsArray.push(wizardOject);
   };

   return wizardsArray;
};

var wizards = createWizards(wizardsNames, wizardsFullNames, coatsColors, eyesColors);

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
   var wizardElement = similarWizardTemplate.cloneNode(true);

   wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
   wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
   wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

   return wizardElement;
};

var similarListElement = document.querySelector('.setup-similar-list');

var importFragment = function (mas) {
   var fragment = document.createDocumentFragment();

   for (var i = 0; i < mas.length; i++) {
      fragment.appendChild(renderWizard(mas[i]));
   };

   similarListElement.appendChild(fragment);
};

importFragment(wizards);

document.querySelector('.setup-similar').classList.remove('hidden');

/ Popup / 

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setupPopup = document.querySelector('.setup');
var openSetup = document.querySelector('.setup-open');
var closeSetup = setupPopup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
   if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
   };
};

var openPopup = function () {
   setupPopup.classList.remove('hidden');
   document.addEventListener('keydown', onPopupEscPress);

   window.popupDefaultCoords = {
      x: setupPopup.offsetLeft,
      y: setupPopup.offsetTop,
   };
};

var closePopup = function () {
   setupPopup.classList.add('hidden');
   document.removeEventListener('keydown', onPopupEscPress);

   setDefaultPopupCoords();
};

var setDefaultPopupCoords = function () {
   setupPopup.style.left = popupDefaultCoords.x + 'px';
   setupPopup.style.top = popupDefaultCoords.y + 'px';
};

openSetup.addEventListener('click', function () {
   openPopup();
});

openSetup.addEventListener('keydown', function (evt) {
   if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
   };
});

closeSetup.addEventListener('click', function () {
   closePopup();
});

closeSetup.addEventListener('keydown', function (evt) {
   if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
   };
});

var userNameInput = setupPopup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function (evt) {
   if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
   } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышеть 25-ти символов');
   } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
   } else {
      userNameInput.setCustomValidity('');
   };
});

var svgWizard = document.querySelector('.setup-wizard');
var wizardCoat = svgWizard.querySelector('.wizard-coat');
var wizardEyes = svgWizard.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball');

wizardCoat.addEventListener('click', function () {
   var currentColor = getRandomColor(coatsColors);

   wizardCoat.style = 'fill:' + currentColor;
   document.querySelector('input[name="coat-color"]').value = currentColor;
});

wizardEyes.addEventListener('click', function () {
   var currentColor = getRandomColor(eyesColors);

   wizardEyes.style = 'fill:' + currentColor;
   document.querySelector('input[name="eyes-color"]').value = currentColor;
});

wizardFireball.addEventListener('click', function () {
   var currentColor = getRandomColor(fireballColors);

   wizardFireball.style = 'background-color:' + currentColor;
   document.querySelector('input[name="fireball-color"]').value = currentColor;
});

var dialogHandle = setupPopup.querySelector('.upload');
var dialogUploadAvatar = setupPopup.querySelector('input[name="avatar"]');

dialogHandle.addEventListener('mousedown', function (evt) {
   evt.preventDefault();

   var startCoords = {
      x: evt.clientX,
      y: evt.clientY,
   };

   var dragged = false;

   var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
         x: startCoords.x - moveEvt.clientX,
         y: startCoords.y - moveEvt.clientY,
      };

      startCoords = {
         x: moveEvt.clientX,
         y: moveEvt.clientY,
      };

      setupPopup.style.left = (setupPopup.offsetLeft - shift.x) + 'px';
      setupPopup.style.top = (setupPopup.offsetTop - shift.y) + 'px';
   };

   var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
         var onClickPreventDefault = function (evt) {
            evt.preventDefault();
            dialogUploadAvatar.removeEventListener('click', onClickPreventDefault);
         };

         dialogUploadAvatar.addEventListener('click', onClickPreventDefault);
      };
   };

   document.addEventListener('mousemove', onMouseMove);
   document.addEventListener('mouseup', onMouseUp);
});