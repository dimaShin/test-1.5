import angular from 'angular';

import template from './sign-in.html';
import './sign-in.scss';

import SignInCtrl, { controller, controllerAs } from './sign-in-ctrl';

export default angular.module('app.components.sign-in', [ SignInCtrl ])
  .component('signIn', {
    template,
    controller,
    controllerAs
  }).name;
