app.factory('storage', ['$window', function($window) {
  return {
    save: function(key, value) {
      try {
        $window.localStorage.setItem(key, angular.toJson(value));
        return true;
      } catch(e) {
        return false;
      }
    },
    get: function(key) {
      if (key in $window.localStorage) {
        return angular.fromJson($window.localStorage.getItem(key));
      }
    },
    remove: function(key) {
      if (key in $window.localStorage) {
        $window.localStorage.removeItem(key);
      }
    }
  };
}]);