'use strict';

(function () {
   window.debounce = function (fun) {
      var lastTimeout;

      if (lastTimeout) {
         window.clearTimeout(lastTimeout);
      };

      lastTimeout = window.setTimeout(function () {
         fun();
      }, 700);
   };
})();