import angular from 'angular';

class Noty {
  constructor($rootScope) {
    'ngInject';
    this.$scope = $rootScope.$new();
  }

  get() {
    return this.$scope;
  }

  show(action, options) {
    const event = `noty:${action}`;
    console.log('show', event);
    this.$scope.$emit(event, options);
  }
}

export default angular.module('app.components.noty.service', [])
  .service('noty', Noty)
  .name;
