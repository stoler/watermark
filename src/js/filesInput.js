var FILESINPT = (function () {
  var
      checkState = function () {
        console.log('im in stateCheck!!!');
        if (model.files.image !== '' && model.files.watermark !== '') {
          console.log('устанавливаю значение на тру!');
          model.isActive = true;
          console.log('это модел.изАктив', model.isActive);
        }
      };
  return {
    setModel: function (place, file) {
      model.files[place] = file;
      console.log(model.files);
      checkState();
    }
  }
})();