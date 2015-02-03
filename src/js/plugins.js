// $(function(){
    var counterTimeout;

    // style input
    $('.js-upload').styler();


    FILESINPT.init();


   
    // инициализируем слайдер
    $('.generator-transparency__slider').slider({
        min: 0,
        max: 100,
        value: model.alpha * 100,
        range: 'min',
        disabled: true
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
        if (model.isActive) {
          // удаляет опасити с боковой панели
          $('.disable').removeClass('disable');

          // добавляет возможность ховера для нижних кнопок
          $('.button-reset').addClass('button-reset--hover');
          $('.button-download').addClass('button-download--hover');

          INPUTFIELD.init();
          PLACEGRID.init();
          SWITCH.init();
          COUNTERBTN.init();
          SLIDER.init();
          RESET.init();
          DRAGGABLE.init();
        }
    }
// });