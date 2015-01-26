// поведение кнопок, изменяющих значения в окнах координат

var COUNTERBTN = (function () {
  var 
      // get button, checkout what direction it is 
      // and change appropriate window
      changeCoordValue = function (coordButton) {
        var
            direction = coordButton.hasClass('crd-arrow-list__item--up') ? 10 : -10,
            coordWindow = coordButton.closest('.generator-position-coordinates').find('.crd-window__num');

        coordWindow.attr('value', parseInt(coordWindow.attr('value')) + direction);
      };

  return {

    init: function () {
      $('.crd-arrow-list__item').on('click', function () {
        changeCoordValue($(this));
      });
    }
    
  }
})();