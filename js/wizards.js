'use strict';

(function () {
    var wizardsNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
    var wizardsFullNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

    window.wizards = {
        coatsColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
        eyesColors: ['black', 'red', 'blue', 'yellow', 'green',],
        fireballColors: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
    };

    var createWizards = function (name, fullName, coatColor, eyesColor) {
        var wizardsArray = [];

        for (var i = 0; i < 4; i++) {
            var wizardOject = {};

            var randomName = name[window.tools.getRandomNumber(0, name.length - 1)] + ' ' + fullName[window.tools.getRandomNumber(0, fullName.length - 1)];
            var randomCoatColor = coatColor[window.tools.getRandomNumber(0, coatColor.length - 1)];
            var randomEyesColor = eyesColor[window.tools.getRandomNumber(0, eyesColor.length - 1)];

            wizardOject.name = randomName;
            wizardOject.coatColor = randomCoatColor;
            wizardOject.eyesColor = randomEyesColor;

            wizardsArray.push(wizardOject);
        };

        return wizardsArray;
    };

    var wizards = createWizards(wizardsNames, wizardsFullNames, window.wizards.coatsColors, window.wizards.eyesColors);

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
})();