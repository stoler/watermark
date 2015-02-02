var FILESINPT = (function () {
  var
      checkState = function () {
        if (model.files.image !== '' && model.files.watermark !== '') {
          model.isActive = true;
        }
      };
  return {
    setModel: function (place, file) {
      model.files[place] = file;
      console.log(model.files);
      checkState();
    },
    // берет данные из модели
    updateSelf: function () {
      $('.jq-file__name').val('');
    }
  }
})();