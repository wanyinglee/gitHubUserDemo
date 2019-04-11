'use strict';

/**
 * @ngdoc function
 * @name taigerAppApp.controllers:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the taigerAppApp
 */
angular.module('taigerAppApp.controllers', [])
  .controller('MainCtrl', function ($scope, $rootScope, $location, gitHubUserService, userDataService) {
    $rootScope.title = "Home";
    $scope.getUsersProjects = function(username) {
      gitHubUserService.getUserProjects(username).then(function(response) {
        if (response.data) {
          userDataService.setRepoData(response.data);
          $location.path("/" + username);
        } else {
          alert("No Repos Found!");
        }
      }, function(error) {
        alert("User Not Found!");
      });
    }; 
  });
