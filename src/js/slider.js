var SLIDER = (function () {
  // ...
  return {
    updateModel: function (ui) {
      model.alpha = ui.value/100;
    },
    // слайдер обновляется за счет модели
    setSlider: function() {
      $('.generator-transparency__slider').slider('value', model.alpha * 100);
    }
  }
})();