/**
 * @class controller
 */
class controller {
  /**
   * @ngInject
   * @param {AuthService} AuthService
   */
  constructor(AuthService) {
    this.AuthService = AuthService;
  }

  $onInit() {
    this.user = {
      name: '',
      password: ''
    };
  }

  /**
   * @param {Object} data
   */
  onLogin(data) {
    if (data.$valid) {
      this.AuthService.setAuth(this.user);
    }
  }
}

export const authComponent = {
  template: require('./auth.html'),
  controller
};
