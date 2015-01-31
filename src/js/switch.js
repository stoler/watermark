var SWITCH = (function () {

  return {
    // изменяет значение gridType
    changeSwitchInModel: function (switchPosition) {
      if (switchPosition.hasClass('switch__mono')) {
        model.gridType = 'mono';
      } else {
        model.gridType = 'multi';
      }
    },
    // по клику меняет класс активности
    changeStyle: function (switchUnderClick) {
      $('.switch--active').removeClass('switch--active');
      switchUnderClick.addClass('switch--active');
    },
    // изменяет класс по обращению к модели
    setSwitch: function () {
      $('.switch--active').removeClass('switch--active');
      if (model.gridType === 'mono') {
        $('.switch__mono').addClass('switch--active');
      } else {
        $('.switch__multi').addClass('switch--active');
      }
    }

  };
})();