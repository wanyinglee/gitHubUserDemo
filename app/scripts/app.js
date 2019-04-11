'use strict';

/**
 * @ngdoc overview
 * @name taigerAppApp
 * @description
 * # taigerAppApp
 *
 * Main module of the application.
 */
angular
  .module('taigerAppApp', [
    'taigerAppApp.controllers',
    'taigerAppApp.services',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/:username', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectCtrl',
        controllerAs: 'projects'
      })
      .when('/:username/:projectid', {
        templateUrl: 'views/readme.html',
        controller: 'ReadMeCtrl',
        controllerAs: 'readme'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
