$(function(){
    var counterTimeout,
        // массив для определения пределов
        // в которых может перемещаться 
        // вотермарк
        contSize = [];

    // style input
    $('.js-upload').styler();

    INPUTFIELD.init();
    PLACEGRID.init();

    

    // инициализируем драггабл
    contSize = DRAGGABLE.calculateContainer();
    $('.generator-picture__watermark').draggable({
        containment: contSize
    });
   
    // инициализируем слайдер
    $('.generator-transparency__slider').slider({
        min: 0,
        max: 100,
        value: model.alpha * 100,
        range: 'min'
    });

    // jquery upload

    // загрузка основного изображения
    $('#upload-picture').fileupload({
        dataType: 'json',
        done: function (e, data) {
            $.each(data.result.files, function (index, file) {
                $('.generator-picture__img').attr('src', '/upload/' + file.name);
                model.files.image = file.name;
            });
        }
    });

    // загрузка вотермарка
    $('#upload-watermark').fileupload({
        dataType: 'json',
        done: function (e, data) {
            $.each(data.result.files, function (index, file) {
                $('.generator-picture__watermark').attr('src', '/upload/' + file.name);
                model.files.watermark = file.name;
            });
        }
    });

    // хендлер для стрелок
    $('.crd-arrow-list__item').on('mousedown', function () {
        var _this = $(this);
        counterTimeout = setInterval(function () {
            // функция в модуле стрелок, она изменяет модель
            COUNTERBTN.counterBtnModelChange(_this);
            // метод модуля инпутов, он сравнивает себя с моделью и обновляется
            INPUTFIELD.setInput();
            // метод модуля уотермарк, он сравнивает себя с остальным
            DRAGGABLE.setWatermark();
            // метод модуля грид, он сравнивается сам с моделью
            PLACEGRID.setStyle();
            PLACEGRID.setClass();
        }, 50);

        $(this).on('mouseup', function () {
            clearInterval(counterTimeout);
        });
        $(this).on('mouseout', function () {
            clearInterval(counterTimeout);
        });
    });

    // хендлер для переключения режимов мульти/моно
    $('.switch').on('click', function () {
        // изменяем модель
        SWITCH.changeSwitchInModel($(this));
        // изменяет свой вид
        SWITCH.changeStyle($(this));
        // инпут должен обновиться
        INPUTFIELD.setInput();
        // грид должен обновиться
        PLACEGRID.setStyle();
        // watermark должен перестать двигаться и начать увеличивать марджин
        // ...
    });

    // хендлер для грида
    $('.generator-position__square').on('click', '.square-td', function () {
        // изменяет модель
        // только если моно режим
        if (model.gridType === 'mono') {
            PLACEGRID.updateModel($(this));
        }
        // ставит класс
        PLACEGRID.setClass();
        // заставляет обновиться инпут
        INPUTFIELD.setInput();
        // заставляет обновиться уотермарк
        DRAGGABLE.setWatermark(true);
    });

    // хендлер для ввода с клавиатуры прямо в инпуты
    $('.crd-window__num').on('change', function () {
      // изменяем модель
      INPUTFIELD.updateModel($(this));
      // обновляем грид
      PLACEGRID.setStyle();
      PLACEGRID.setClass();
      // обновляем вотермарк
      DRAGGABLE.setWatermark(true);
    });

    // хендлер для слайдера
    $('.generator-transparency__slider').on('slide', function (e, ui) {
        // обновляет модель когда перемещается
        SLIDER.updateModel(ui);
        // дергает обновление вотермарка
        DRAGGABLE.setOpacity();
    });
    
    // хендлер для окна с возможностью драгабл
    $('.generator-picture__watermark').on('drag', function (e, ui) {
        // изменяет модель
        DRAGGABLE.updateModel(ui)
        // инпуты изменяются
        INPUTFIELD.setInput();
        // грид изменяется
        PLACEGRID.setClass();
    });

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
        // грид должен инзменяться до первоначального значения
        PLACEGRID.setStyle();
        PLACEGRID.setClass();
    });

    // отправка данных на сервер
    $('.button-download').on('click', function () {
        SENDDATA.send();
    });
});