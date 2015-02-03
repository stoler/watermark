var RESET = (function () {
    var
        deleteImage = function () {
            $('.generator-picture__watermark').remove();
            $('.generator-picture__img').remove();
        };
    return {
        init: function () {
            // сброс
            $('.button-reset').on('click', function(){
                RESET.resetApp();
                INPUTFIELD.setInput();
                // сбрасывает свитч до моно
                SWITCH.setSwitch();
                // сбрасывает положение слайдбара до правого положения (100%)
                SLIDER.setSlider();
                // вотермарк изменяется
                DRAGGABLE.setWatermark(true);
                DRAGGABLE.setOpacity();
                // метод для инпут файлов чтобы сбрасывал
                // ...
                // грид должен изменяться до первоначального значения
                PLACEGRID.setStyle();
                PLACEGRID.setClass();
                // удаляет загруженные картинки
                deleteImage();

                // отключаются хендлеры и все возвращается в состоянии до
                // инициализации
                // ...
                // инпуты отключаются
                INPUTFIELD.deactivate();
                // стрелки не нажимаются
                COUNTERBTN.deactivate();
                // грид не работает
                PLACEGRID.deactivate();
                // ползунок не двигается
                SLIDER.deactivate();
                // драг отключен
                DRAGGABLE.disable();
                // свитч отключен
                SWITCH.disable();

                $('.button-reset--hover').removeClass('button-reset--hover');
                $('.button-download--hover').removeClass('button-download--hover');

                // боковая панель становится очень сильно прозрачной
                $('.main-generator-buttons').addClass('disable');
                $('.main-generator-transparency').addClass('disable');
                $('.main-generator-position').addClass('disable');
            });
        },
        resetApp: function () {
            model.coord.x = 0;
            model.coord.y = 0;
            model.files.image = '';
            model.files.watermark = '';
            model.gridType = 'mono';
            model.alpha = .5;
            model.margins.x = 1;
            model.margins.y = 1;
            model.isActive = false;

            // сбрасывает инпуты файлов
            $('.jq-file__name').text('Файл не выбран');
        }
    }
})();