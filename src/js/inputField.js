var INPUTFIELD = (function () {
  var
      inputWindow = $('.crd-window__num'),
      windowX = $('.crd-window__num--x'),
      windowY = $('.crd-window__num--y'),
      variant = 'coord',

      // проверяет чтобы ввод при мульти-режиме
      // было >= 1
      validInput = function (val) {
        if (variant === 'coord') {
          return val;
        }

        if (val >= 1) {
          return val;
        } else {
          return 1;
        }
      },

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
      inputWindow.on('input', function () {
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

      inputWindow.on('keypress', function (e) {
        var
            key = e.keyCode;

        if (key === 38) {
          INPUTFIELD.keyUpdateModel($(this), 1);
        } else if (key === 40) {
          INPUTFIELD.keyUpdateModel($(this), -1);
        }
        INPUTFIELD.setInput();
        PLACEGRID.setStyle();
        PLACEGRID.setClass();
        DRAGGABLE.setWatermark();
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
    keyUpdateModel: function (inpWin, direction) {
      checkVariant(); 
      var
          coordination = inpWin.hasClass('crd-window__num--x') ? 'x' : 'y';
          
      model[variant][coordination] = validInput(model[variant][coordination] += direction);
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