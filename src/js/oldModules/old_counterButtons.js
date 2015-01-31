// поведение кнопок, изменяющих значения в окнах координат

var COUNTERBTN = (function () {
  var initInputValue = function () {
        $('.crd-window__num').each(function () {
          $(this).val(0);
        });
      },
      // get button, checkout what direction it is 
      // and change appropriate window
      changeCoordValue = function (coordButton) {
        var direction = coordButton.hasClass('crd-arrow-list__item--up') ? 10 : -10,
            coordWindow = coordButton.closest('.generator-position-coordinates').find('.crd-window__num');

        // coordWindow.attr('value', parseInt(coordWindow.attr('value')) + direction);
        coordWindow.val(parseInt(coordWindow.val()) + direction);
      },
      changeInputValue = function (inputField) {
        console.log(inputField);
        console.log(inputField.val());
      };

  return {
    init: function () {
        initInputValue();
    },
    changeCoordValue: function ($el) {
        changeCoordValue($el);
    }
  };
})();