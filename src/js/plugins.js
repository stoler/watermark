$(function(){
    // style input
    $('.js-upload').styler();

    // init coordinate counter buttons
    COUNTERBTN.init();

    // init place grid click handler
    PLACEGRID.init();
    DRAGGABLE.init();
    // jquery upload
    $('#upload-picture').fileupload({
        dataType: 'json',
        done: function (e, data) {
            $.each(data.result.files, function (index, file) {
                $('<p/>').text(file.name).appendTo(document.body);
                console.log('done')
            });
        }
    });


})
