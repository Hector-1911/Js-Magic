'use strict';

(function () {
    var userNameInput = document.querySelector('.setup-user-name');
 
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
 })();