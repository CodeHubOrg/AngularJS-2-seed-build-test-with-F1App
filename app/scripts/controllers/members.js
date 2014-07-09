angular.module('F1FeederApp.controllers')
    .controller('membersController', function($scope, meetupAPIservice) {
    $scope.nameFilter = null;
    $scope.driversList = [];
    $scope.searchFilter = function (driver) {
        var re = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || re.test(mamber.name) ;
    };

    meetupAPIservice.getMembers().success(function (response) {
        //Digging into the response to get the relevant data
        $scope.membersList = response.results;
    });
});