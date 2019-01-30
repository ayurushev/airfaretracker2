app.filter('RUB', [function() {
  // 30.01.2019
  var rates = {
    'PLN': 17.56,
    'EUR': 75.32,
    'USD': 65.94
  }
  return function(amount, currency) {
    return rates[currency] * amount;
  };
}]);
