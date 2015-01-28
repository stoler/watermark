var SWITCH = (function () {
  var
      switchVariants = $('.switch'),
      gridLines = $('.multi-line'),

      squareToLines = function () {
        gridLines.each(function () {
          $(this).show();
        });
        $('.square-td--active').removeClass('square-td--active');
        $('.square-td:hover').css("background", "#dae0e8");

      },
      linesToSquare = function () {
        gridLines.each(function () {
          $(this).hide();
        });
        $('.square-td').first().addClass('square-td--active');
      },

      // меняет названия полей ввода с букв на стрелки
      changeLabels = function (activeButton) {
        var
            axisLabel = $(".crd-axis");

        if (activeButton.hasClass('switch__mono')) {
          axisLabel.each(function () {
            var $this = $(this);
            $this.removeClass('crd-axis--arrow');
            $this.addClass('crd-axis--letter');
          });
          linesToSquare();
        } else if (activeButton.hasClass('switch__multi')) {
          axisLabel.each(function () {
            var $this = $(this);
            $this.removeClass('crd-axis--letter');
            $this.addClass('crd-axis--arrow');
          });
          squareToLines();
        }
        
      },


      // меняет класс активности между кнопками 
      // меняющими количество вотермарков в окне 
      // задает класс, который выделяет кнопку красным
      changeRepeat = function () {
        console.log('im here');
        console.log($(this));
        $('.switch--active').removeClass('switch--active');
        $(this).addClass('switch--active');
        changeLabels($(this));
      };
  return {
    init: function () {
      console.log('im initialized!');
      switchVariants.on('click', changeRepeat);
    }
  }
})();
SWITCH.init();