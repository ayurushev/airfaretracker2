app.controller('FlightDetailsController', ['$scope', '$mdDialog', 'model', function($scope, $mdDialog, model) {
  $scope.model = model;

  $scope.cancel = function() {
    $mdDialog.cancel();
  }
}]);
