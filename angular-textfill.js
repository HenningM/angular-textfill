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
          debug: attr.debug || false,
          minFontPixels: attr.minFontPixels || 4,
          maxFontPixels: attr.maxFontPixels || 40,
          widthOnly: attr.widthOnly || false
        };
        container.textfill(options);

        scope.$watch('textfill', function () {
          container.textfill(options);
        });
      }
    };
  });
