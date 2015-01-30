$(function(){
    // style input
    $('.js-upload').styler();

    // init coordinate counter buttons
    //COUNTERBTN.init();
    SWITCH.init();
    // init place grid click handler
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

    $('.crd-arrow-list__item').on('click', function () {
        COUNTERBTN.changeCoordValue($(this));
    });

    $('.generator-position__square').on('click', '.square-td', function () {
        PLACEGRID.putActiveSquare($(this));
    });
});