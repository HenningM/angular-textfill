(function() {
  'use strict';

  angular
    .module('ngTextFill', [])
    .directive('textfill', textfillDirective);

  textfillDirective.$inject = ['$timeout'];

  function textfillDirective($timeout) {
    return {
      restrict: 'A',
      scope: {
        textfill: '@',
        textfillOnSuccess: '=',
        textfillOnFail: '=',
        textfillOnComplete: '='
      },
      template: '<span>{{textfill}}</span>',
      link: link
    };

    function link(scope, element, attr) {
      var container = element;
      var options = {
        innerTag: attr.innerTag || "span",
        debug: attr.debug || false,
        minFontPixels: parseInt(attr.minFontPixels, 10) || 4,
        maxFontPixels: parseInt(attr.maxFontPixels, 10) || 40,
        widthOnly: attr.widthOnly || false,
        explicitHeight: attr.explicitHeight || null,
        explicitWidth: attr.explicitWidth || null,
        success: scope.textfillOnSuccess || null,
        fail: scope.textfillOnFail || null,
        complete: scope.textfillOnComplete || null
      };

      $timeout(function() {
        container.textfill(options);
      });

      scope.$watch('textfill', function () {
        container.textfill(options);
      });
    }
  }
})(window, window.angular);
