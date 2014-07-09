angular.module('F1FeederApp.services', [])
  .factory('ergastAPIservice', function($http) {

    var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2014/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getDriverDetails = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2014/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getDriverRaces = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2014/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'
      });
    }

    return ergastAPI;
  })
.factory('meetupAPIservice', function($http){

        var meetupAPI = {};
        var apiKey = '341175455860301c51273a6d3c7b'  ;

        meetupAPI.getMembers = function(){
            return $http({
              method: 'JSONP',
              url: 'http://api.meetup.com/2/members?group_urlname=CodeHub-Bristol&key='+ apiKey +'&callback=JSON_CALLBACK'
            });
        }

        return meetupAPI;
});

