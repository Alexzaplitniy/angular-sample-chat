/**
 * @class Auth
 */
export default class ApiService {
  /**
   * @ngInject
   * @param {$q} $q
   * @param {$http} $http
   * @param {$log} $log
   */
  constructor($q, $http, $log) {
    this.$q = $q;
    this.$http = $http;
    this.$log = $log;
  }

  /**
   * @returns {*}
   */
  getFakeData() {
    const random = this._randomInteger(1, 99);
    return this.$http.get(`https://jsonplaceholder.typicode.com/posts/${random}`)
      .then(res => res.data)
      .catch(err => this.$log(err, 'getFakeData'));
  }

  /**
   * @param {number} min
   * @param {number} max
   * @return {number}
   * @private
   */
  _randomInteger(min, max) {
    return Math.round(min - 0.5 + (Math.random() * (max - min + 1)));
  }
}
