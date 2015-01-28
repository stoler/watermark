var SWITCH = (function () {
  var
      switchVariants = $('.switch'),
      gridLines = $('.multi-line'),
      squareOfGrid = $('.square-td'),

      squareToLines = function () {
        gridLines.each(function () {
          $(this).show();
        });
        $('.square-td--active').removeClass('square-td--active');

        $('.square-td').on('mouseenter', function () {
          $(this).addClass('square-td--hover-disable');
        });
      },
      linesToSquare = function () {
        squareOfGrid.off('mouseenter');
        squareOfGrid.each(function () {
          $(this).removeClass('square-td--hover-disable');
        });
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
        $('.switch--active').removeClass('switch--active');
        $(this).addClass('switch--active');
        changeLabels($(this));
      };
  return {
    init: function () {
      switchVariants.on('click', changeRepeat);
    }
  }
})();