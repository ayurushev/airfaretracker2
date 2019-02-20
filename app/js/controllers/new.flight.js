app.controller('NewFlightController', ['$scope', '$http', '$filter', '$timeout', '$document', '$mdDialog', 'airports', function($scope, $http, $filter, $timeout, $document, $mdDialog, airports) {
  $scope.startOfYear = moment().startOf('year').toDate();
  $scope.endOfYear = moment().endOf('year').toDate();
  $scope.model = {
    dateOut: new Date(),
    dateIn: new Date()
  };
  var airports = airports.list();
  // store here valid flight dates for selected origin/destination
  var availabilities = [];

  $scope.getAirports = function(display, origin) {
    var output = [];
    for (var i = 0; i < airports.length; i++) {
      // ignore if origin == destination
      if (origin && airports[i].code == origin.code) {
        continue;
      }
      if (airports[i].display.search(new RegExp(display, 'i')) > -1) {
        output.push(airports[i]);
      }
    };
    return output;
  }

  $scope.ok = function() {
    // transform model first
    $mdDialog.hide({
      enabled: true,
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

  $scope.$watch('model.origin', function(value) {
    if (angular.isObject(value)) {
      // open destination autocomplete box
      $timeout(function() {
        $document[0].querySelector('#airport2').focus();
      });
    }
  });

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
          $scope.model.destination = undefined;
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
