'use strict';

(function() {
    window.fireballSize = 22;
    window.getFireballSpeed = function (left) {
        return left ? 5 : 2;
    };

    window.wizardSpeed = 3;
    window.wizardWidth = 70;

    window.getWizardHeight = function () {
        return 1.337 * wizardWidth;
    };

    function getWizardX(width) {
        return (width / 2) - (wizardWidth / 2);
    };

    function getWizardY(height) {
        return height - (height / 3 * 2);
    };
})();
