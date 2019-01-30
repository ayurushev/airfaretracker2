app.filter('airport', ['airports', function(airports) {
  return function(code) {
    return airports.getDisplay(code);
  };
}]);
