var SWITCH = (function () {
  var
      switchVariants = $('.switch'),

      // меняет класс активности между кнопками 
      // меняющими количество вотермарков в окне 
      changeRepeat = function (switchButton) {
        console.log('im here');
        console.log($(this));
        $('.switch--active').removeClass('switch--active');
        $(this).addClass('switch--active');
      };
  return {
    init: function () {
      console.log('im initialized!');
      switchVariants.on('click', changeRepeat);
    }
  }
})();
SWITCH.init();