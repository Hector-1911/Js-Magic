'use strict';

(function () {

    window.wizards = {
        coatsColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
        eyesColors: ['black', 'red', 'blue', 'yellow', 'green',],
        fireballColors: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
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

    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

    var renderWizard = function (wizard) {
        var wizardElement = similarWizardTemplate.cloneNode(true);

        wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
        wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
        wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

        return wizardElement;
    };

    var similarListElement = document.querySelector('.setup-similar-list');

    var importFragment = function (mas) {
        var fragment = document.createDocumentFragment();

        for (var i = 0; i < 4; i++) {
            fragment.appendChild(renderWizard(mas[i]));
        };

        similarListElement.appendChild(fragment);
    };

    window.backend.load(importFragment, onError);

    var form = document.querySelector('.setup-wizard-form');

    form.addEventListener('submit', function (evt) {
      window.backend.save(new FormData(form), function (response) {
          window.setupPopup.classList.add('hidden');
      }, onError);

      evt.preventDefault();
    });
})();