var DRAGGABLE = (function () {
    var _this = this,
        images = $('.generator-picture__image'),

        posX = $('.crd-window__num--x'),
        posY = $('.crd-window__num--y'),
        watermark = $('.generator-picture__watermark'),
        slider = $('.generator-transparency__slider'),
        grisSquare = $('.square-td'),
        inputWindow = $('.crd-window__num'),

        // Размеры элементов
        imagesWidth = images.width(),
        imageHalfWidth = imagesWidth / 2,
        watermarkWidth = watermark.width(),
        watermarkHalfWidth = watermarkWidth/ 2,
        imageHeight = images.height(),
        imageHalfHeight = imageHeight / 2,
        watermarkHeight = watermark.height(),
        watermarkHalfHeight = watermarkHeight/ 2,
        centerX = imageHalfWidth-watermarkHalfWidth,
        centerY = imageHalfHeight-watermarkHalfHeight,
        gridPosArr = [
            [0, 0],
            [0, centerX],
            [0, imagesWidth-watermarkWidth],
            [centerY, 0],
            [centerY, centerX],
            [centerY, imagesWidth-watermarkWidth],
            [imageHeight-watermarkHeight, 0],
            [imageHeight-watermarkHeight, centerX],
            [imageHeight-watermarkHeight, imagesWidth-watermarkWidth]
        ];
    return {
        init: function () {
            watermark.draggable({
                containment: "parent"
            });
            slider.slider({
                min: 0,
                max: 100,
                value: model.alpha * 100,
                range: 'min'
            });
            this.add_listerners()
        },
        add_listerners: function () {
            watermark.on('drag', this.set_pos);
            inputWindow.on('focusout', this.set_pos_x);
            slider.on('slide', this.set_opacity);
            // grisSquare.on('click', this.set_grid_pos)
        },
        set_pos: function (e, ui) {
            //var $this = $(this);
            posX.val(ui.position.left);
            posY.val(ui.position.top);
            model.coord.x = ui.position.left;
            model.coord.y = ui.position.top;
        },
        set_pos_x: function() {
            // console.log(posY.text(),posX.text());
            watermark.css({top: model.coord.y +'px', left: model.coord.x +'px'});

        },
        set_opacity: function(e,ui){
            var opacity = ui.value/100;
            model.alpha = opacity;
            watermark.css('opacity', opacity);
        },
        set_grid_pos: function(e){
            var $this = $(this),
            index = grisSquare.index($this);
            model.coord.x = gridPosArr[index][1];
            model.coord.y = gridPosArr[index][0];
            watermark.animate({top: gridPosArr[index][0]+'px', left: gridPosArr[index][1]+'px'}, 300);
        }
    };
})();