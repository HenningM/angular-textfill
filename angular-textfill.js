'use strict'

angular.module('ngTextFill', [])
  .directive('textfill', function ($timeout) {
    return {
      restrict: 'A',
      scope: {
        textfill: '@'
      },
      template: '<div><span>{{textfill}}</span></div>',
      link: function (scope, ele, attr) {
        var container = ele.find('div');
        var span = container.find('span');
        span.css('whiteSpace', 'nowrap');
        var options = {
          debug: attr.debug,
          minFontPixels: attr.minFontPixels,
          maxFontPixels: attr.maxFontPixels,
          widthOnly: attr.widthOnly
        };
        container.textfill(options);

        scope.$watch('textfill', function () {
          container.textfill(options);
        });
      }
    };
  });
