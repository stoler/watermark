var INPUTFIELD = (function () {
  var
      inputWindow = $('.crd-window__num'),
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
      inputWindow.each(function () {
        $(this).removeAttr('disabled');
      });

      windowX.val(model[variant]['x']);
      windowY.val(model[variant]['y']);

      // хендлер для ввода с клавиатуры прямо в инпуты
      inputWindow.on('change', function () {
        // изменяем модель
        INPUTFIELD.updateModel($(this));
        // обновляем инпут
        INPUTFIELD.setInput();
        // обновляем грид
        PLACEGRID.setStyle();
        PLACEGRID.setClass();
        // обновляем вотермарк
        DRAGGABLE.setWatermark(true);
      });
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
    },
    deactivate: function () {
      inputWindow.each(function () {
        $(this).attr('disabled', true);
      });
      windowX.val('');
      windowY.val('');
    }
  }
})();