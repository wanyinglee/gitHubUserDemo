'use strict';

/**
 * @ngdoc function
 * @name taigerAppApp.controllers:ReadMeCtrl
 * @description
 * # ReadMeCtrl
 * Controller of the taigerAppApp
 */
angular.module('taigerAppApp.controllers')
  .controller('ReadMeCtrl', function ($scope, $sce, $rootScope, $routeParams, userDataService) {
    $rootScope.title = $routeParams.projectid;
    $scope.parseMD = function(md_content){
      return marked(md_content);
    };
    $scope.readmeHtml = $sce.trustAsHtml($scope.parseMD(userDataService.getReadMeFile()));
  });
