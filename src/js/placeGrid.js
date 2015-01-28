var PLACEGRID = (function () {
    return {
        putActiveSquare: function (square) {
            $('.square-td--active').removeClass('square-td--active');
            square.addClass('square-td--active');
        }
    };
})();