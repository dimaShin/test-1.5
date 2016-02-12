import angular from 'angular';

import Root from './root/root';
import SignIn from './sign-in/sign-in';

import Input from './input/input';

export default angular.module('app.components', [ Root, SignIn, Input ]).name;
