var INPUTFIELD = (function () {
  var
      windowX = $('.crd-window__num--x'),
      windowY = $('.crd-window__num--y'),
      variant = 'coord',

      // изменяем координаты или величину марджина?
      checkVariant = function () {
        if (model.gridType === 'mono') {
          variant = 'coord';
        } else {
          variant = 'margins';
        }
      },

      // проверяет чтобы инпут был числом
      validateInput = function (input) {
        if (isNaN(input)) {
          return 0;
        }
        return input;
      };

  return {
    init: function () {
      windowX.val(model[variant]['x']);
      windowY.val(model[variant]['y']);
    },
    setInput: function () {
      checkVariant();
      windowX.val(model[variant]['x']);
      windowY.val(model[variant]['y']);
    },
    updateModel: function () {
      checkVariant();
      model[variant]['x'] = validateInput(parseInt(windowX.val()));
      model[variant]['y'] = validateInput(parseInt(windowY.val()));
    }
  }
})();