app.controller('HomeController', ['$scope', '$http', '$mdDialog', '$timeout', '$filter', 'airports', 'storage', function($scope, $http, $mdDialog, $timeout, $filter, airports, storage) {
  $scope.flights = storage.get('flights') || [];

  $scope.newFlight = function() {
    $mdDialog.show({
      controller: 'NewFlightController',
      templateUrl: 'partials/new.flight.html',
      targetEvent: event,
      clickOutsideToClose: true
    }).then(function(result) {
      //console.log('newFlight result', result);
      $scope.flights.push(result);
      $scope.check(result);
    }, function() {});
  }

  $scope.openDetails = function(model) {
    $mdDialog.show({
      controller: 'FlightDetailsController',
      templateUrl: 'partials/flight.details.html',
      targetEvent: event,
      clickOutsideToClose: true,
      locals: {
        model: model
      }
    }).then(function(result) {
    }, function() {
    });
  }

  $scope.compareFares = function(model) {
    // comparing fares and setting trending flag
    if (model.roundTripFare > model.lastRoundTripFare) {
      model.newFare = 'rise';
    }
    if (model.roundTripFare < model.lastRoundTripFare) {
      model.newFare = 'drop';
    }

    // playing sound
    // pushing chart data
    if (model.newFare) {
      new Audio('short-notice.mp3').play();

      if (!model.chart) {
        model.chart = {
          labels: [],
          data: []
        };
      }
      // shortcuts
      var labels = model.chart.labels, data = model.chart.data;

      // remove first item in array if length reaches 10
      if (labels.length === 10) {
        labels.shift();
      }
      if (data.length === 10) {
        data.shift();
      }

      labels.push([
        $filter('date')(new Date(), 'MMM d'), // line 1
        $filter('date')(new Date(), 'HH:mm')  // line 2
      ]);
      data.push(model.roundTripFare);
    }
  }

  $scope.check = function(model) {
    if (model.busy) {
      return;
    }
    model.busy = true;
    model.lastRoundTripFare = model.roundTripFare;
    delete model.newFare;

    var request = {
      ADT: 1,
      RoundTrip: true,
      ToUs: 'AGREED',
      origin: model.origin,
      destination: model.destination,
      dateOut: model.dateOut,
      dateIn: model.dateIn
    };

    /*$timeout(function() {
      model.roundTripFare = Math.floor(Math.random() * 500) + 100;
      model.busy = false;
      $scope.compareFares(model);
    }, 250);*/

    $http.get('https://desktopapps.ryanair.com/v4/en-ie/availability', { params: request }).then(function(response) {
      var data = response.data;
      //console.log(data);
      model.roundTripFare = 0;
      model.currency = data.currency || 'EUR';
      model.trips = []; // clear before update

      angular.forEach(data.trips, function(trip) {
        var flight = trip.dates[0].flights[0], time = [], fare = 0;
        try {
          time = flight.time;
          fare = flight.regularFare.fares[0].amount;
        } catch(e) {}
        model.trips.push({
          origin: trip.origin,
          destination: trip.destination,
          flightNumber: flight.flightNumber,
          time: time,
          duration: flight.duration,
          fare: fare
        });
        model.roundTripFare += fare;
      });
      // this can be the first time flight information is fetched so
      // we have to check if lastRoundTripFare is defined first
      if (model.lastRoundTripFare) {
        $scope.compareFares(model);
      }
    }, function(error) {
      console.error('HTTP GET', error);
    }).finally(function() {
      model.busy = false;
    });
  }

  $scope.checkAll = function() {
    if ($scope.flights.length === 0) {
      return;
    }
    angular.forEach($scope.flights, function(flight) {
      $scope.check(flight);
    });
  }

  $scope.saveFlights = function() {
    if (storage.save('flights', $scope.flights)) {
      alert('Flights saved to localStorage.');
    }
  }

  $scope.deleteFlight = function(model) {
    var index = $scope.flights.indexOf(model);
    $scope.flights.splice(index, 1);
  }

}]);
