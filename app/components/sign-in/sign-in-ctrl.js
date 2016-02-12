import angular from 'angular';

export const controller = 'SignInCtrl';

class SignInCtrl {
  constructor() {
    'ngInject';
    this.data = {
      email: '',
      password: ''
    }
  }

  sendData($event) {
    $event.preventDefault();
  }
}

export default angular.module('app.components.sign-in.ctrl', [])
  .controller(controller, SignInCtrl)
  .name;
