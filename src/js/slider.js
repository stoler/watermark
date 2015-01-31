var SLIDER = (function () {
  // ...
  return {
    updateModel: function (ui) {
      model.alpha = ui.value/100;
    }
    // todo
    // слайдер обновляется за счет модели, вероятно лучше чтобы сбрасывался
  }
})();