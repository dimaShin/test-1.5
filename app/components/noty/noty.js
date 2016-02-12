import angular from 'angular';

import './codrops-vendors/classie';
import './codrops-vendors/notificationFx';
import  './codrops-vendors/ns-default.css';
import  './codrops-vendors/ns-style-other.css';

import template from './noty.html';
import NotyService from './noty-service';

export default angular.module('app.components.noty', [ NotyService ])
  .directive('noty', (noty, $document) => {
    'ngInject';

    return {
      restrict: 'E',
      template,
      link: ($scope, $el) => {

        const emmiter = noty.get();



        emmiter.$on('noty:error', () => {
          const defaultOptions = {
            wrapper : $document[0].getElementById('noty-wrp'),
            message : '<p>Whatever you did, it was successful!</p>',
            layout : 'other',
            effect : 'loadingcircle',
            ttl : 100,
            type : 'notice'
          };

          var notification = new NotificationFx(defaultOptions);

          console.log('error');
          notification.show();
        });

      }
    }
  })
  .name;