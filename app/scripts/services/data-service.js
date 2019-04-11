'use strict';

/**
 * @ngdoc function
 * @name taigerAppApp.services:userDataService
 * @description
 * # userDataService
 */
angular.module('taigerAppApp.services')
  .factory('userDataService', function () {
    var repoData = null;
    var readmeFile = null;
     return {
      getRepoData: function() {
        return repoData;
      },
      setRepoData: function(value) {
        repoData = value;
      },
      getReadMeFile: function() {
        return readmeFile;
      },
      setReadMeFile: function(value) {
        readmeFile = value;
      }
     };
  });
