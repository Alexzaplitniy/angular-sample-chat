/**
 * @ngInject
 * @param $transitions
 */
function authConfig($transitions) {
  $transitions.onStart({to: state => state.authenticate}, trans => {
    const AuthService = trans.injector().get('AuthService');
    if (!AuthService.isAuthenticated()) {
      return trans.router.stateService.target('login');
    }
  });
}

export default authConfig;
