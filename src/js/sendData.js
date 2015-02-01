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
                $.ajax({
                    url: "/",
                    type: "POST",
                    data: model
                }).done(function () {
                    console.log('Данные отправлены! Или нет.');
                });
            } else {
                console.log('Ошибка при отправке данных');
            }


        }
    };
})(jQuery);