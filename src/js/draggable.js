var DRAGGABLE = (function () {
  var
       watermark = $('.generator-picture__watermark');
       // contSize = [];

  return {
    init: function () {
      // contSize = this.calculateContainer();
      // console.log(contSize);
      $('.generator-picture__watermark').draggable({
          containment: 'window'
      });

      // хендлер для окна с возможностью драгабл
      $('.generator-picture__watermark').on('drag', function (e, ui) {
          // изменяет модель
          DRAGGABLE.updateModel(ui);
          // инпуты изменяются
          INPUTFIELD.setInput();
          // грид изменяется
          PLACEGRID.setClass();
      });
      
      // хендлер для резайза окна (когда окно изменяется в размере, то
      // пересчитывается контейнер в котором может перемещаться изображение)
      $( window ).on('resize', function () {
          // пересчитали блок
          contSize = DRAGGABLE.calculateContainer();
          // инициализировали новую область
          $('.generator-picture__watermark').draggable({
              containment: contSize
          });
      });
      this.setOpacity();


        $('.generator-picture__tile').on('drag', function (e, ui) {
            // изменяет модель при перетаскивании сетки 'замостить'
            DRAGGABLE.updateModel(ui);
        });
    },
    updateModel: function (ui) {
      model.coord.x = parseInt((ui.position.left).toFixed(0));
      model.coord.y = parseInt((ui.position.top).toFixed(0));
      // model.coord.x = ui.position.left;
      // model.coord.y = ui.position.top;
      console.log(model.coord);
    },

    // изменяет положение
    setWatermark: function (animation) {
      if (animation) {
        $('.generator-picture__watermark').animate({top: model.coord.y, left: model.coord.x}, {duration: 500, queue: false});
      } else {
        $('.generator-picture__watermark').css({top: model.coord.y, left: model.coord.x});
      }
    },
    // изменяет опасити
    setOpacity: function () {
      $('.generator-picture__watermark').css('opacity', model.alpha);
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
            image.offset().left - $('.generator-picture__watermark').width(),
            image.offset().top - $('.generator-picture__watermark').height(),
            image.offset().left + image.width(),
            image.offset().top + image.height()
          ];

          // массив [x1, y1, x2, y2] для определения четырехуголника
          // в котором можно дрегать вотермарк
          // resultArray = [];
      
      return container;

      // resultArray.push(container[0] - $('.generator-picture__watermark').width());
      // resultArray.push(container[1] - $('.generator-picture__watermark').height());
      // resultArray.push(container[2]);
      // resultArray.push(container[3]);

      // return resultArray;

    },

    disable: function () {
      $('.generator-picture__watermark').off('drag');
    }
  }
})();