'use strict';

/**
 * @ngdoc function
 * @name taigerAppApp.services:gitHubUserService
 * @description
 * # gitHubUserService
 */
angular.module('taigerAppApp.services', [])
  .factory('gitHubUserService', function ($http) {
    var gitHubProjectsFactory = {};
    gitHubProjectsFactory.getUserProjects = function(username) {
      return $http({
        method: 'GET',
        url: 'https://api.github.com/users/' + username + '/repos',
        headers: {
          "Accept": "application/vnd.github.inertia-preview+json"
        }
      }); 
    };

    gitHubProjectsFactory.getReadMeContent = function(repo) {
      return $http({
        method: 'GET',
        url: 'https://api.github.com/repos/' + repo.full_name + '/readme',
        headers: {
          "Accept": "application/vnd.github.v3.raw"
        }
      }); 
    };

    return gitHubProjectsFactory;
  });
