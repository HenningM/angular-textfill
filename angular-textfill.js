'use strict'

angular.module('ngTextFill', [])
  .directive('textfill', function ($timeout) {
    return {
      restrict: 'A',
      scope: {
        textfill: '@'
      },
      template: '<span>{{textfill}}</span>',
      link: function (scope, element, attr) {
        var container = element,
            options = {
              innerTag: attr.innerTag || "span",
              debug: attr.debug || false,
              minFontPixels: parseInt(attr.minFontPixels) || 4,
              maxFontPixels: parseInt(attr.maxFontPixels) || 40,
              widthOnly: attr.widthOnly || false,
              explicitHeight: attr.explicitHeight || null,
              explicitWidth: attr.explicitWidth || null
            };
            
        container.textfill(options);

        scope.$watch('textfill', function () {
          container.textfill(options);
        });
      }
    };
  });
