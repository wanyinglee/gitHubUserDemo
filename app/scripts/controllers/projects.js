'use strict';

/**
 * @ngdoc function
 * @name taigerAppApp.controllers:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the taigerAppApp
 */
angular.module('taigerAppApp.controllers')
  .controller('ProjectCtrl', function ($scope, $rootScope, $location, $routeParams, gitHubUserService, userDataService) {
    $scope.reposData = userDataService.getRepoData();
    $rootScope.title = $routeParams.username + "'s Projects";
    $scope.getProjectReadMe = function(repo) {
      gitHubUserService.getReadMeContent(repo).then(function(response) {
        if (response.status === 200) {
          userDataService.setReadMeFile(response.data);
          $location.path("/" + repo.full_name);
        } else {
          alert("No README file found!");
        }
      }, function(error) {
        alert("No README file found!");
      });
    };
  });
