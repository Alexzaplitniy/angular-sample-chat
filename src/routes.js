/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'appChat',
      authenticate: true
    })
    .state('login', {
      url: '/login',
      component: 'appAuth',
      authenticate: false
    });
}

export default routesConfig;
