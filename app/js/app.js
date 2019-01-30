/*
  Ryanair Airfare Tracker v2
  (c) 2019 Andrei Yurushev /Lavar/
  https://lavar.mercloud.com
  Kaliningrad, Russia
*/
var app = angular.module('app', ['ngMaterial', 'ngAria', 'ngAnimate', 'ngMessages', 'ui.router', 'chart.js', 'templates']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$mdDateLocaleProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $mdDateLocaleProvider) {
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'partials/home.html',
    controller: 'HomeController'
  });
  $urlRouterProvider.when('/', '/home');
  $urlRouterProvider.otherwise('/')
  $locationProvider.html5Mode(true);

  $mdDateLocaleProvider.firstDayOfWeek = 1;
  $mdDateLocaleProvider.formatDate = function(date) {
    return moment(date).format('YYYY-MM-DD');
  }
  $mdDateLocaleProvider.parseDate = function(dateString) {
    var m = moment(dateString, 'YYYY-MM-DD', true);
    return m.isValid() ? m.toDate() : new Date(NaN);
  }
}]);

app.run(['$transitions', function($transitions) {
  $transitions.onSuccess({}, function(trans) {
  });
}]);
