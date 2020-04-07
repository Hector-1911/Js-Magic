'use strict';

(function () {
    var ESC_KEYCODE = 27;
    var ENTER_KEYCODE = 13;
 
    window.setupPopup = document.querySelector('.setup');
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
       
       document.querySelector('.setup-similar').classList.remove('hidden');
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
 })();