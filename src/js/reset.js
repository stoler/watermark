var RESET = (function () {
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
            $('.jq-file__name').text('Файл не выбран');
        }
    }
})();