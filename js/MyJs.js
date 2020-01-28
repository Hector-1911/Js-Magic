var fireballSize = 22;
var getFireballSpeed = function (left) {
    return left ? 5 : 2;
}

wizardSpeed = 3;
wizardWidth = 70;

getWizardHeight = function () {
    return 1.337 * wizardWidth;
}

function getWizardX (width) {
    return (width / 2) - (wizardWidth / 2);
}

function getWizardY (height) {
    return height - (height / 3 * 2);
}
