var INPUTFIELD = (function () {
  var
      windowX = $('.crd-window__num--x'),
      windowY = $('.crd-window__num--y'),
      variant = '',

      // изменяем координаты или величину марджина?
      checkVariant = function () {
        if (model.gridType === 'mono') {
          variant = 'coord';
        } else {
          variant = 'margins';
        }
      };

  return {
    init: function () {
      windowX.val(0);
      windowY.val(0);
    },
    setInput: function () {
      checkVariant();
      windowX.val(model[variant]['x']);
      windowY.val(model[variant]['y']);
    },
    updateModel: function () {
      checkVariant();
      model[variant]['x'] = parseInt(windowX.val());
      model[variant]['y'] = parseInt(windowY.val());
      console.log('возвращаю модель ', model);
    }
  }
})();