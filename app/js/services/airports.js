app.factory('airports', [function() {
  var defaults = [
    { code: 'GDN', display: 'Gdansk' },
    { code: 'PSA', display: 'Pisa' },
    { code: 'BGY', display: 'Milan Bergamo' },
    { code: 'KUN', display: 'Kaunas' },
    { code: 'VNO', display: 'Vilnius' },
    { code: 'NAP', display: 'Naples' },
    { code: 'WMI', display: 'Warsaw Modlin' },
    { code: 'WAW', display: 'Warsaw Chopin' },
    { code: 'CIA', display: 'Rome Ciampino' },
    { code: 'FCO', display: 'Rome Fiumicino' }
  ];
  var data = defaults;
  return {
    getDisplay: function(code) {
      return data.find(x => x.code == code).display;
    },
    getCode: function(display) {
      return data.find(x => x.display == display).code;
    },
    list: function() {
      return data;
    }
  }
}]);
