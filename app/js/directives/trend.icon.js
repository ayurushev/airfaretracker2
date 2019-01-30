app.directive('trendIcon', [function() {
  return {
    replace: true,
    scope: {
      trend: '=ngIf'
    },
    template: '<md-icon class="material-icons" ng-style="{ color: color }" ng-bind="iconFont"></md-icon>',
    link: function(scope, element, attrs) {
      if (scope.trend === 'rise') {
        scope.color = 'red';
        scope.iconFont = 'arrow_upward';
      }
      if (scope.trend === 'drop') {
        scope.color = 'green';
        scope.iconFont = 'arrow_downward';
      }
    }
  };
}]);
