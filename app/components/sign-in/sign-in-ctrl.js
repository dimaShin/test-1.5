import angular from 'angular';

export const controller = 'SignInCtrl';
export const controllerAs = 'ctrl';

class SignInCtrl {
  constructor(noty) {
    'ngInject';
    this.noty = noty;
    this.data = {
      email: '',
      password: ''
    }
  }

  sendData($event) {
    $event.preventDefault();
    this.noty.show('error', {});
  }
}

export default angular.module('app.components.sign-in.ctrl', [])
  .controller(controller, SignInCtrl)
  .name;
