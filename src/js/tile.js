var TILE = (function () {
    var
        tile = $('.generator-picture__tile'),
        image = $('.generator-picture__img'),
        watermark = $('.generator-picture__watermark');


    return {
        init: function () {
            var
                imageWidth = image.width(),
                imageHeight = image.width(),
                watermarkWidth = watermark.width(),
                watermarkHeight = watermark.width(),
                watermarkSrc = watermark.attr('src'),
                itemInRow = Math.floor(imageWidth / watermarkWidth) + 1,
                rows = Math.floor(imageHeight / watermarkHeight) + 1;
            // добовляем строки в сетку в зависимости от высоты картинки
            for (i = 0; i < rows; i++) {
                tile.append("<div class='generator-picture__tile-row'>");
            }
            ;

            // добовляем картинки в строку в зависимости от ширины основной картинки
            for (i = 0; i < itemInRow; i++) {
                $('.generator-picture__tile-row').append("<img src='" + watermarkSrc + "' class='tile__image'>");
            }
            ;
        },

        // Показываем или скрываем сетку .generator-picture__tile
        showHide: function (elem) {
            var _this = elem;
            if (_this.hasClass('switch__multi')) {
                watermark.hide();
                tile.show();

            }
            else {
                watermark.show();
                tile.hide();
            }
        },

        // изменяем прозрачность
        changeOpacity: function () {
            tile.css('opacity', model.alpha);
        },

        // изменяем вертикальный отступ
        changeVerticalGutter: function () {
            var tileRow = $('.generator-picture__tile-row');
            tileRow.css({marginBottom: model.margins.y});
        },

        // изменяем горизонтальный отступ
        changeHorizontalGutter: function () {
            var tileImage = $('.tile__image');
            tileImage.css({marginRight: model.margins.x});
        }
    }
})();