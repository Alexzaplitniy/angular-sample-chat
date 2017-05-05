import angular from 'angular';

/**
 * @class Auth
 */
export default class AuthService {
  /**
   * @ngInject
   * @param $window
   * @param $state
   */
  constructor($window, $state) {
    this.storage = $window.localStorage;
    this.state = $state;

    this._isLogin = false;
    this._user = null;

    this._init();
  }

  _init() {
    this._isLogin = Boolean(this.storage.getItem('token')) || false;
    this._user = angular.fromJson(this.storage.getItem('user'));
  }

  /**
   * @returns {boolean}
   */
  isAuthenticated() {
    return this._isLogin;
  }

  /**
   * @returns {null|{name: string, password: string}}
   */
  getUser() {
    return this._user;
  }

  /**
   * @param {{name: string, password: string}} user
   */
  setAuth(user) {
    this._isLogin = true;
    this._user = user;
    this.storage.setItem('token', true);
    this.storage.setItem('user', angular.toJson(user));
    this.state.go('app');
  }

  logout() {
    this._isLogin = false;
    this.storage.removeItem('token');
    this.storage.removeItem('user');
    this.state.go('login');
  }
}
