var PLACEGRID = (function () {
  var putActiveSquare = function (square) {
    $('.square-td--active').removeClass('square-td--active');
    square.addClass('square-td--active');
  }
  return {
    init: function() {
      $('.generator-position__square').on('click', '.square-td', function () {
        putActiveSquare($(this));
      });
    }
  }
})();