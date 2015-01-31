$(function(){
    // style input
    $('.js-upload').styler();

    // init coordinate counter buttons
    //COUNTERBTN.init();
    // SWITCH.init();
    // init place grid click handler
    INPUTFIELD.init();
    PLACEGRID.init();
    DRAGGABLE.init();
    // jquery upload

    // загрузка основного изображения
    $('#upload-picture').fileupload({
        dataType: 'json',
        done: function (e, data) {
            $.each(data.result.files, function (index, file) {
                $('.generator-picture__img').attr('src', '/upload/' + file.name);
            });
        }
    });

    // загрузка вотермарка
    $('#upload-watermark').fileupload({
        dataType: 'json',
        done: function (e, data) {
            $.each(data.result.files, function (index, file) {
                $('.generator-picture__watermark').attr('src', '/upload/' + file.name);
            });
        }
    });

    // хендлер для кнопок-стрелок
    $('.crd-arrow-list__item').on('click', function () {
        // функция в модуле стрелок, она изменяет модель
        COUNTERBTN.counterBtnModelChange($(this));
        // метод модуля инпутов, он сравнивает себя с моделью и обновляется
        INPUTFIELD.setInput();
        // метод модуля уотермарк, он сравнивает себя с остальным
        // ...
        // метод модуля грид, он сравнивается сам с моделью
        PLACEGRID.setStyle();
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

    
    $('.generator-position__square').on('click', '.square-td', function () {
        // изменяет модель
        // только если моно режим
        if (model.gridType === 'mono') {
          PLACEGRID.updateModel($(this));
        }
        // заставляет обновиться инпут
        INPUTFIELD.setInput();
        // заставляет обновиться уотермарк
    });

    // хендлер для ввода с клавиатуры прямо в инпуты
    $('.crd-window__num').on('change', function () {
      // изменяем модель
      INPUTFIELD.updateModel($(this));
      // обновляем грид
      PLACEGRID.setStyle();
      // обновляем вотермарк
    });
});