var RESET = (function () {
    return {
        resetApp: function () {
            model.coord.x = 0;
            model.coord.y = 0;
            model.files.image = '';
            model.files.watermark = '';
            model.gridType = 'mono';
            model.alpha = 1;
            model.margins.x = 1;
            model.margins.y = 1;
            $('.jq-file__name').text('Файл не выбран');
        }
    }
})();