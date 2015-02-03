var FILESINPT = (function () {
  var
      wmW = 0,
      imgW = 0,
      wmH = 0,
      imgH = 0,

      changeWatermarkSize = function (imgW, wmW, imgH, wmH) {
          $('.generator-picture__watermark').width(wmW /(imgW / $('.generator-picture__img').width()))
              .height(wmH /(imgH / $('.generator-picture__img').height()));
      },

      checkState = function () {
        if (model.files.image !== '' && model.files.watermark !== '') {
          model.isActive = true;
        }
      };
  return {
    init: function () {
      // jquery upload
      // загрузка основного изображения
      $('#upload-picture').fileupload({
          dataType: 'json',
          done: function (e, data) {
              PRELOADER.hide();
              if (typeof data.result.files[0]['error'] == 'undefined') {
                  $.each(data.result.files, function (index, file) {
                      // $('.generator-picture__img').attr('src', '/upload/' + file.name);
                      $('<img>').addClass('generator-picture__img').attr('src', '/upload/' + file.name)
                          .appendTo('.generator-picture__image');
                      $('.big_img').attr('src', '/upload/' + file.name).load(function () {
                          imgW = $('.big_img').width();
                          imgH = $('.big_img').height();
                          changeWatermarkSize(imgW, wmW, imgH, wmH);
                      });
                      FILESINPT.setModel('image', file.name);
                      FILESINPT.updateInputField('upload-picture');
                      itsAlive();
                  });
              } else {
                  alert('Error!');
              }
          },
          send: function () {
              PRELOADER.show();
          }
      });

      // загрузка вотермарка
      $('#upload-watermark').fileupload({
          dataType: 'json',
          done: function (e, data) {
              PRELOADER.hide();
              if (typeof data.result.files[0]['error'] == 'undefined') {
                  $.each(data.result.files, function (index, file) {
                      // $('.generator-picture__watermark').attr('src', '/upload/' + file.name);
                      $('<img>').addClass('generator-picture__watermark').attr('src', '/upload/' + file.name)
                          .appendTo('.generator-picture__image');
                      $('.big_wm').attr('src', '/upload/' + file.name).load(function () {
                          wmW = $('.big_wm').width();
                          wmH = $('.big_wm').height();
                          changeWatermarkSize(imgW, wmW, imgH, wmH);
                      });
                      // изменяет модель сообразно имени файла
                      FILESINPT.setModel('watermark', file.name);
                      // изменяет поле, содержащее имя файла в разметке
                      FILESINPT.updateInputField('upload-watermark');
                      itsAlive();
                      // DRAGGABLE.setOpacity();
                  });
              } else {
                  alert('Error!');
              }
          },
          send: function () {
              PRELOADER.show();
          }
      });

    },
    setModel: function (place, file) {
      model.files[place] = file;
      checkState();
    },
    updateInputField: function (place) {
      if (place === 'upload-picture') {
        // добавит текст в div с названием картинки
        console.log('зашел');
        $('#upload-picture-styler .jq-file__name').text(model.files.image);
      } else if (place = 'upload-watermark') {
        // добавить текст в div с вотермарком
        $('#upload-watermark-styler .jq-file__name').text(model.files.watermark);
      }
    }
  }
})();