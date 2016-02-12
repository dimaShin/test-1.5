import angular from 'angular';
import Components from './components/';
import Routing from './routing/';
import Helpers from './helpers/';

export default angular.module('app', [ Components, Routing, Helpers ]).name;
