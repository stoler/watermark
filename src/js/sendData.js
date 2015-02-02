var SENDDATA = (function ($) {
    var validateData = function () {
        console.log($.trim(model.files.image).length,$.trim(model.files.watermark).length);

        if ($.trim(model.files.image).length === 0 || $.trim(model.files.watermark).length === 0) {
            return false;
        }
        return true;
    };

    return {
        send: function () {
            if (validateData()) {
                console.log(JSON.stringify(model));
                PRELOADER.show();
                $("iframe").attr("src",'/?download=1&data=' + JSON.stringify(model)).ready(function () {
                    PRELOADER.hide();
                });
            } else {
                console.log('Ошибка при отправке данных');
            }
        }
    };
})(jQuery);