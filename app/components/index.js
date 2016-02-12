import angular from 'angular';

import Root from './root/root';
import SignIn from './sign-in/sign-in';

import Input from './input/input';
import Noty from './noty/noty';

export default angular.module('app.components', [ Root, SignIn, Input, Noty ]).name;
