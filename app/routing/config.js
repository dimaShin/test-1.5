import angular from 'angular';
import ngRoute from 'angular-route';

export default angular.module('app.routing.config', [ ngRoute ])
  .config(($routeProvider, $locationProvider) => {
    'ngInject'

    $routeProvider.when('/signIn', {
      template: '<sign-in></sign-in>'
    });

    $routeProvider.otherwise('/signIn');
    $locationProvider.html5Mode(true);
  }).name;
