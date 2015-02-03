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
      checkState();
    }
  }
})();