var TILE = (function () {
    var tile = $('.generator-picture__tile'),

        watermark,
        image,
        watermarkWidth = 0, watermarkHeight,
        watermarkSrc,
        imageWidth = 0, imageHeight;

    return {
        initImage: function () {
            image = $('.generator-picture__img'),
            imageWidth = image.width();
            imageHeight = image.width();
            console.log(imageWidth)
            TILE.initTile()
            //itemInRow = Math.floor(imageWidth / watermarkWidth) + 1,
            //rows = Math.floor(imageHeight / watermarkHeight) + 1;


        },
        initWatermark: function() {
            watermark = $('.generator-picture__watermark'),
            watermarkWidth = watermark.width();
            watermarkHeight = watermark.width();
            watermarkSrc = watermark.attr('src');
            console.log(watermarkHeight, watermarkWidth,watermarkSrc );
            TILE.initTile()
        },
        initTile: function() {
            $('.generator-picture__tile-row').remove()
            $('.tile__image').remove()
            if (watermarkWidth > 0 & imageWidth > 0) {
                //alert(true)
                var itemInRow = Math.floor(imageWidth / watermarkWidth) + 1,
                    rows = Math.floor(imageHeight / watermarkHeight) + 1;
                //alert(watermark.width(),image.width())
                for (i = 0; i < rows; i++) {
                    //alert(true)
                    tile.append("<div class='generator-picture__tile-row'>");
                }
                ;
                for (i = 0; i < itemInRow; i++) {
                    //alert(false)
                    $('.generator-picture__tile-row').append("<img src='" + watermarkSrc + "' class='tile__image'>");
                }
                ;
            }
        },
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
        changeOpacity: function () {
            tile.css('opacity', model.alpha);
        },
        changeVerticalGutter: function () {
            var tileRow = $('.generator-picture__tile-row');
            tileRow.css({marginBottom: model.margins.x});
        },
        changeHorizontalGutter: function () {
            var tileImage = $('.tile__image');
            tileImage.css({marginRight: model.margins.y});
        }
    }
})();