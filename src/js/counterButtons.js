var COUNTERBTN = (function () {
  var
      // на сколько увеличивается значение при режиме моно
      monoStep = 1,
      // на сколько увеличивается значение при режиме мульти
      multiStep = 1;
  return {
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
    }
  }
})();