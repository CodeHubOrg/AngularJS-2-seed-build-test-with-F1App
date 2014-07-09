angular.module('F1FeederApp.controllers', []);

angular.module('F1FeederApp', [
  'F1FeederApp.services',
  'F1FeederApp.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when("/members",{  templateUrl: "views/members.html", controller: "membersController"}).
  when("/drivers", {templateUrl: "views/drivers.html", controller: "driversController"}).
  when("/drivers/:id", {templateUrl: "views/driver.html", controller: "driverController"}).
  otherwise({redirectTo: '/drivers'});
}]);