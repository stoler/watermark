var DRAGGABLE = (function () {
  var
       watermark = $('.generator-picture__watermark');

  return {
    updateModel: function (ui) {
      model.coord.x = parseInt((ui.position.left).toFixed(0));
      model.coord.y = parseInt((ui.position.top).toFixed(0));
      // model.coord.x = ui.position.left;
      // model.coord.y = ui.position.top;
    },
    // изменяет положение
    setWatermark: function () {
      watermark.css({top: model.coord.y, left: model.coord.x});
    },
    // изменяет опасити
    setOpacity: function () {
      watermark.css('opacity', model.alpha);
    }
  }
})();