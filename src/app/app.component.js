import Message from './form/message';

/**
 * @class controller
 */
class controller {
  /**
   * @ngInject
   * @param {AuthService} AuthService
   * @param {ApiService} ApiService
   */
  constructor(AuthService, ApiService) {
    this.AuthService = AuthService;
    this.api = ApiService;
  }

  $onInit() {
    this.list = [];
  }

  onLogout() {
    this.AuthService.logout();
  }

  addMessage({data}) {
    this.list.push(data);
    this._addFakeMessage();
  }

  _addFakeMessage() {
    this.api.getFakeData().then(({body, title}) => {
      this.list.push(new Message(body, title));
    });
  }
}

export const appComponent = {
  template: require('./app.html'),
  controller
};
