$(function(){
    var counterTimeout,
        realImg = {
            wmW: 0,
            imgW: 0,
            wmH: 0,
            imgH: 0,
            changeWatermarkSize: function (imgW, wmW, imgH, wmH) {
                $('.generator-picture__watermark').width(wmW /(imgW / $('.generator-picture__img').width()))
                    .height(wmH /(imgH / $('.generator-picture__img').height()));
            }
        },
        // массив для определения пределов
        // в которых может перемещаться 
        // вотермарк
        contSize = [];

    // style input
    $('.js-upload').styler();

    // инициализируем драггабл
    contSize = DRAGGABLE.calculateContainer();
    $('.generator-picture__watermark').draggable({
        containment: contSize
    });

    // хендлер для резайза окна (когда окно изменяется в размере, то
    // пересчитывается контейнер в котором может перемещаться изображение)
    $( window ).on('resize', function () {
        // пересчитали блок
        contSize = DRAGGABLE.calculateContainer();
        // инициализировали новую область
        $('.generator-picture__watermark').draggable({
            containment: contSize
        });
    });
   
    // инициализируем слайдер
    $('.generator-transparency__slider').slider({
        min: 0,
        max: 100,
        value: model.alpha * 100,
        range: 'min',
        disabled: true
    });

    // jquery upload
    // загрузка основного изображения
    $('#upload-picture').fileupload({
        dataType: 'json',
        done: function (e, data) {
            if (typeof data.result.files[0]['error'] == 'undefined') {
                $.each(data.result.files, function (index, file) {
                    console.log(file);
                    $('.generator-picture__img').attr('src', '/upload/' + file.name);
                    $('.big_img').attr('src', '/upload/' + file.name).load(function () {
                        realImg.imgW = $('.big_img').width();
                        realImg.imgH = $('.big_img').height();
                        realImg.changeWatermarkSize(realImg.imgW, realImg.wmW, realImg.imgH, realImg.wmH);
                    });
                    FILESINPT.setModel('image', file.name);
                    itsAlive();
                });
            } else {
                alert('Error!');
            }
        }
    });

    // загрузка вотермарка
    $('#upload-watermark').fileupload({
        dataType: 'json',
        done: function (e, data) {
            if (typeof data.result.files[0]['error'] == 'undefined') {
                $.each(data.result.files, function (index, file) {
                    $('.generator-picture__watermark').attr('src', '/upload/' + file.name);
                    $('.big_wm').attr('src', '/upload/' + file.name).load(function () {
                        realImg.wmW = $('.big_wm').width();
                        realImg.wmH = $('.big_wm').height();
                        realImg.changeWatermarkSize(realImg.imgW, realImg.wmW, realImg.imgH, realImg.wmH);
                    });
                    FILESINPT.setModel('watermark', file.name);
                    itsAlive();
                    DRAGGABLE.setOpacity();
                });
            } else {
                alert('Error!');
            }
        }
    });
    
    // отправка данных на сервер
    $('.button-download').on('click', function () {
        SENDDATA.send();
    });

    // социальный шаринг
    $('.social__btn').on('click', function (e) {
        e.preventDefault();
        Share[$(this).data('site')]('URL','TITLE','IMG_PATH', 'DESC');
    });

    function itsAlive () {
        console.log('change!!!');
        console.log('это моделАктив в хендлере инициализации', model.isActive);
        if (model.isActive) {
          console.log('запускаю инициализации');
          INPUTFIELD.init();
          PLACEGRID.init();
          SWITCH.init();
          COUNTERBTN.init();
          SLIDER.init();
          RESET.init();
          DRAGGABLE.init();
        }
    }
    // $('.upload__picture').on('change', function () {
    //     console.log('change!!!');
    //     console.log('это моделАктив в хендлере инициализации', model.isActive);
    //     if (model.isActive) {
    //       console.log('запускаю инициализации');
    //       INPUTFIELD.init();
    //       PLACEGRID.init();
    //       SWITCH.init();
    //       COUNTERBTN.init();
    //       SLIDER.init();
    //       RESET.init();
    //       DRAGGABLE.init();
    //     }
    // });
});