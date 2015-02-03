var DRAGGABLE = (function () {
  var
       watermark = $('.generator-picture__watermark');

  return {
    init: function () {
      // хендлер для окна с возможностью драгабл
      $('.generator-picture__watermark').on('drag', function (e, ui) {
          // изменяет модель
          DRAGGABLE.updateModel(ui);
          // инпуты изменяются
          INPUTFIELD.setInput();
          // грид изменяется
          PLACEGRID.setClass();
      });
    },
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
          image = $('.generator-picture__image'),

          // координаты контейнера вотермарка
          container = [
            image.offset().left,
            image.offset().top,
            image.offset().left + image.width(),
            image.offset().top + image.height(),
          ],

          // массив [x1, y1, x2, y2] для определения четырехуголника
          // в котором можно дрегать вотермарк
          resultArray = [];
      
      
      console.log(container);

      resultArray.push(container[0] - watermark.width());
      resultArray.push(container[1] - watermark.height());
      resultArray.push(container[2]);
      resultArray.push(container[3]);

      return resultArray;

    },

    disable: function () {
      $('.generator-picture__watermark').off('drag');
    }
  }
})();