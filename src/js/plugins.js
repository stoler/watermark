$(function(){
    $('.js-upload').styler();
    $('.generator-transparency__slider').slider({
      min: 0,
      max: 100,
      value: 50,
      range: 'min'
    });
    // init coordinate counter buttons
    COUNTERBTN.init();
})
