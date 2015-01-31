var PLACEGRID = (function () {
  var
      // состоянии, которое не позволяет делать дом манипуляции если нажать на свитч, который
      // и так выбран
      state = '',

      // линия на гриде
      gridLines = $('.multi-line'),

      // квадрат на гриде
      squareOfGrid = $('.square-td'),

      // стрелки или буквы возле полей инпута
      inputLabels = $('.crd-axis'),

      // изменяет ширину линий грида
      changeLineWidth = function () {
        var
            gridSide = 101,
            lineWidthVertical = model.margins.y,
            lineWidthHorizontal = model.margins.x,
            // вычисляем центр
            leftPosition = (gridSide - lineWidthVertical) / 2,
            topPosition = (gridSide - lineWidthHorizontal) / 2;

        $('.multi-line.position-vertical').css({width: lineWidthVertical, left: leftPosition});
        $('.multi-line.position-horizontal').css({height: lineWidthHorizontal, top: topPosition});
      },

      // меняет квадраты на линии
      squareToLine = function () {
        // показываем линии
        gridLines.each(function () {
          $(this).show();
        });
        // отключаем возможности показа активного квадрата
        $('.square-td--active').removeClass('square-td--active');
        // todo
        // выключаем ховер
        squareOfGrid.each(function () {
          $(this).addClass('square-td--hover-disable');
        });
        // отключаем возможность выбора положения активного квадрата
        squareOfGrid.off('click');
      },

      // меняет линии на квадраты
      lineToSquare = function () {
        // подключаем ховер по квадратам
        squareOfGrid.each(function () {
          $(this).removeClass('square-td--hover-disable');
        });
        // прячем линии
        gridLines.each(function () {
          $(this).hide();
        });
        // присваиваем левому верхнему квадрату активность
        squareOfGrid.first().addClass('square-td--active');

        // подключаем возможность переключения активного квадрата
        squareOfGrid.on('click', function () {
          $('.square-td--active').removeClass('square-td--active');
          $(this).addClass('square-td--active');
        })


      },

      // меняет названия полей ввода с букв на стрелки
      changeLabels = function (mode) {
        if (mode === 'mono') {
          inputLabels.each(function () {
            inputLabels.addClass('crd-axis--letter');
            inputLabels.removeClass('crd-axis--arrow');
          })
        } else {
          inputLabels.each(function () {
            inputLabels.addClass('crd-axis--arrow');
            inputLabels.removeClass('crd-axis--letter');
          })
        }
      },

      changeGrid = function (mode) {
        if (mode === 'mono') {
          // запускает функцию из линии в квадрат
          lineToSquare();
        } else {
          // запускает функцию из квадрата в линии
          squareToLine();
        }
      };

  return {
    init: function () {
      state = 'mono';
      lineToSquare();
    },
    setStyle: function () {
      var 
          mode = model.gridType === 'mono' ? 'mono' : 'multi';
      // не запускать, если нажали по активной кнопке свитча
      if (mode !== state) {
        state = mode;
        changeLabels(mode);
        changeGrid(mode);
      }
      if (state === 'multi') {
        // обновлять стиль только в районе толщины линий
        changeLineWidth();
      }
    }
  }
})();