import Message from './message';

/**
 * @class controller
 * @method onAdd
 */
class controller {
  /**
   * @ngInject
   * @param {AuthService} AuthService
   * @param {EventEmitter} EventEmitter
   */
  constructor(AuthService, EventEmitter) {
    this.AuthService = AuthService;
    this.eventEmitter = EventEmitter;
  }

  $onInit() {
    this.message = '';
  }

  submit() {
    const message = new Message(this.message, this.AuthService.getUser().name);
    this.message = '';

    this.onAdd(this.eventEmitter({data: message}));
  }
}

export const formComponent = {
  bindings: {
    onAdd: '&'
  },
  template: require('./form.html'),
  controller
};
