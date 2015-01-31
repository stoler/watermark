var SLIDER = (function () {
  // ...
  return {
    updateModel: function (ui) {
      model.alpha = ui.value/100;
    }
  }
})();