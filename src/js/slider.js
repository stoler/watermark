var SLIDER = (function () {
  // ...
  return {
    updateModel: function (ui) {
      model.alpha = ui.value/100;
    },
    // слайдер обновляется за счет модели
    setSlider: function() {
      console.log('in setSlider');
      $('.generator-transparency__slider').slider('value', model.alpha * 100);
    }
  }
})();