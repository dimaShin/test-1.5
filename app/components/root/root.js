import angular from 'angular';
import template from './root.html';
import uiBootstrap from 'angular-ui-bootstrap';
import './custom-bootstrap.less';

export default angular.module('app.components.root', [ uiBootstrap ])
  .component('root', {
    template
  })
  .name;
