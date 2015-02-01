var DRAGGABLE = (function () {
  var
       watermark = $('.generator-picture__watermark');

  return {
    updateModel: function (ui) {
      model.coord.x = parseInt((ui.position.left).toFixed(0));
      model.coord.y = parseInt((ui.position.top).toFixed(0));
      // model.coord.x = ui.position.left;
      // model.coord.y = ui.position.top;
    },

    // изменяет положение
    setWatermark: function (animation) {
      if (animation) {
        watermark.animate({top: model.coord.y, left: model.coord.x}, {duration: 500, queue: false});
      } else {
        watermark.css({top: model.coord.y, left: model.coord.x});
      }
    },
    // изменяет опасити
    setOpacity: function () {
      watermark.css('opacity', model.alpha);
    },

    // рассчитывает величину
    // контейнера внутри которого можно драгать
    // вотермарк
    calculateContainer: function () {
      var
          watermark = $('.generator-picture__watermark'),
          // координаты прямоугольника окна в котором перемещаем вотермарк
          draggableWindow = [217, 109, 872, 645],
          // массив [x1, y1, x2, y2] для определения четырехуголника
          // в котором можно дрегать вотермарк
          resultArray = [];

      resultArray.push(draggableWindow[0] - watermark.width());
      resultArray.push(draggableWindow[1] - watermark.height());
      resultArray.push(draggableWindow[2]);
      resultArray.push(draggableWindow[3]);

      return resultArray;

    }
  }
})();