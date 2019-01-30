app.controller('NewFlightController', ['$scope', '$http', '$mdDialog', 'airports', function($scope, $http, $mdDialog, airports) {
  $scope.airports = airports.list();
  $scope.startOfYear = moment().startOf('year').toDate();
  $scope.endOfYear = moment().endOf('year').toDate();
  $scope.model = {
    dateOut: new Date(),
    dateIn: new Date()
  };
  // store here valid flight dates for selected origin/destination
  var availabilities = [];

  $scope.ok = function() {
    // transform model first
    $mdDialog.hide({
      origin: $scope.model.origin.code,
      destination: $scope.model.destination.code,
      dateOut: moment($scope.model.dateOut).format('YYYY-MM-DD'),
      dateIn: moment($scope.model.dateIn).format('YYYY-MM-DD')
    });
  }

  $scope.cancel = function() {
    $mdDialog.cancel();
  }

  $scope.validDates = function(date) {
    var m = moment(date).format('YYYY-MM-DD');
    return availabilities.includes(m);
  }

  $scope.$watchGroup(['model.origin', 'model.destination'], function(values) {
    if (angular.isObject(values[0]) && angular.isObject(values[1])) {
      if ($scope.busy) {
        return;
      }
      $scope.busy = true;
      $http.get('https://services-api.ryanair.com/farfnd/3/oneWayFares/' + values[0].code + '/' + values[1].code + '/availabilities').then(function(response) {
        //console.log('availabilities', response.data);
        availabilities = response.data;
        if (availabilities.length === 0) {
          alert('No flights available!');
        }
      }, function(error) {
        console.error('HTTP GET', error);
      }).finally(function() {
        $scope.busy = false;
      });
    }
  });

}]);
