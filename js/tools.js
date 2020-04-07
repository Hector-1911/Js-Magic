'use strict';

(function () {
    window.tools = {
        getRandomNumber: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        getRandomColor: function (colors) {
            return colors[tools.getRandomNumber(0, colors.length)];
        },
    };
})();