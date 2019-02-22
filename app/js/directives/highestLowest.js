// display highest and lowest fare so far based on model.chart.data
app.directive('highestLowest', [function() {
  return {
    replace: true,
    scope: {
      data: '=highestLowest'
    },
    template: '<div layout="column" layout-align="center end">' +
                '<span>Lowest <span class="fw-700">{{ lowest }}</span></span>' +
                '<span>Highest <span class="fw-700">{{ highest }}</span></span>' +
              '</div>',
    link: function(scope, element, attrs) {
      scope.highest = scope.lowest = 0;
      if (angular.isArray(scope.data) && scope.data.length > 0) {
        scope.highest = Math.max(...scope.data);
        scope.lowest = Math.min(...scope.data);
      }
    }
  };
}]);
