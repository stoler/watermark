var DRAGGABLE = (function () {
    var _this = this,
        images = $('.generator-picture__image'),
        watermark = $('.generator-picture__watermark'),
        posX = $('.crd-window__num--x'),
        posY = $('.crd-window__num--y'),
        spinners = $('.crd-arrow-list__item'),
        slider = $('.generator-transparency__slider');
    // Размеры элементов
        imagesWidth = images.width(),
        imageHalfWidth = imagesWidth / 2,
        watermarkWidth = watermark.width();
    return {
        init: function () {
            watermark.draggable({
                containment: "parent"
            });
            slider.slider({
                min: 0,
                max: 100,
                value: 50,
                range: 'min'
            });
            this.add_listerners()
        },
        add_listerners: function () {
            watermark.on('drag', this.set_pos);
            spinners.on('click', this.set_pos_x);
            slider.on('slide', this.set_opacity);
        },
        set_pos: function (e, ui) {
            //var $this = $(this);
            posX.text(ui.position.left)
            posY.text(ui.position.top)
            console.log(ui.position.left)
        },
        set_pos_x: function() {
            console.log(posY.text(),posX.text());
            watermark.css({top: posY.text()+'px', left: posX.text()+'px'});

        },
        set_opacity: function(e,ui){
            opacity = ui.value/100;
            console.log(opacity);
            watermark.css('opacity', opacity);
        }
    }

})();

