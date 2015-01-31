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
    changeStyle: function (switchUnderClick) {
      $('.switch--active').removeClass('switch--active');
      switchUnderClick.addClass('switch--active');
    }
  };
})();