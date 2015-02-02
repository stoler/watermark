var COUNTERBTN = (function () {
  var
      arrowsButtons = $('.crd-arrow-list__item'),
      // на сколько увеличивается значение при режиме моно
      monoStep = 1,
      // на сколько увеличивается значение при режиме мульти
      multiStep = 1;
  return {
    init: function () {
      // хендлер для стрелок
      arrowsButtons.on('mousedown', function () {
          var _this = $(this);
          counterTimeout = setInterval(function () {
              // функция в модуле стрелок, она изменяет модель
              COUNTERBTN.counterBtnModelChange(_this);
              // метод модуля инпутов, он сравнивает себя с моделью и обновляется
              INPUTFIELD.setInput();
              // метод модуля уотермарк, он сравнивает себя с остальным
              DRAGGABLE.setWatermark();
              // метод модуля грид, он сравнивается сам с моделью
              PLACEGRID.setStyle();
              PLACEGRID.setClass();
              TILE.changeHorizontalGutter();
              TILE.changeVerticalGutter();
          }, 70);

          $(this).on('mouseup', function () {
              clearInterval(counterTimeout);
          });
          $(this).on('mouseout', function () {
              clearInterval(counterTimeout);
          });
      });
      arrowsButtons.each(function () {
        $(this).removeClass('crd-arrow-list__item--up-no-hover crd-arrow-list__item--down-no-hover');
      });
    },
    // изменяет модель при нажатии на кнопку
    counterBtnModelChange: function (btn) {
      var
          step = 0,
          axis = btn.hasClass('crd-arrow-list__item--x') ? 'x' : 'y',
          // для проверки что марджин не уйдет ниже единицы
          testValue = 0;

      if (model.gridType === 'mono') {
        step = monoStep;
        model.coord[axis] += btn.hasClass('crd-arrow-list__item--up') ? step : -step;
      } else {
        step = multiStep;
        // скидываем значение в переменную чтобы проверить ее величину перед обновлением модели
        testValue = model.margins[axis] + (btn.hasClass('crd-arrow-list__item--up') ? step : -step);
        if (testValue > 0) {
          model.margins[axis] = testValue;
        }
      }
    },
    deactivate: function () {
      arrowsButtons.off('mousedown');
      $('.crd-arrow-list__item--up').each(function () {
        $(this).addClass('crd-arrow-list__item--up-no-hover');
      });
      $('.crd-arrow-list__item--down').each(function () {
        $(this).addClass('crd-arrow-list__item--down-no-hover');
      });


    }
  }
})();