'use strict';
(function () {
   var CLOUD_WIDTH = 420;
   var CLOUD_HEIGHT = 270;
   var CLOUD_X = 100;
   var CLOUD_Y = 10;
   var BAR_WIDTH = 40;
   var barHeight = 150;
   var spaceBetweenBar = 100;

   var renderCloud = function (ctx, x, y, color) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
   };

   var getMaxElement = function (arr) {
      var maxElement = arr[0];

      for (var i = 0; i < arr.length; i++) {
         if (arr[i] > maxElement) {
            maxElement = arr[i];
         }
      }

      return maxElement;
   };

   window.renderStatistics = function (ctx, names, times) {
      renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
      renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

      ctx.fillStyle = '#000';
      ctx.font = '16px PT Mono';
      ctx.fillText('Ура вы победили!', 120, 40);
      ctx.fillText('Список результатов:', 120, 60);

      var maxTime = getMaxElement(times);

      for (var i = 0; i < names.length; i++) {
         var resultBar = barHeight * Math.round(times[i]) / maxTime;
         var colorBar = 'rgba(0, 0, 255, 0.' + Math.ceil(Math.random() * 10).toString() + ')';

         if (names[i] == 'Вы') {
            colorBar = 'rgba(255, 0, 0, 1)';
         }

         ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_WIDTH + spaceBetweenBar * i, (CLOUD_Y + 80) + (barHeight - resultBar));
         ctx.fillStyle = colorBar;
         ctx.fillRect(CLOUD_X + BAR_WIDTH + spaceBetweenBar * i, (CLOUD_Y + 90) + (barHeight - resultBar), BAR_WIDTH, resultBar);
         ctx.fillStyle = '#000';
         ctx.fillText(names[i], CLOUD_X + BAR_WIDTH + spaceBetweenBar * i, CLOUD_Y + barHeight + 110);
      };
   };
})();