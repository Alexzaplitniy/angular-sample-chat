import './index.scss';

import angular from 'angular';

import 'angular-ui-router';
import routesConfig from './routes';
import authConfig from './config/auth';

import AuthService from './auth/auth.service';
import ApiService from './app/api.service';

import {appComponent} from './app/app.component';
import {authComponent} from './auth/auth.component';
import {formComponent} from './app/form/form.component';
import {listComponent} from './app/list/list.component';

export const app = 'app';

angular
  .module(app, [
    'ui.router'
  ])
  .run(authConfig)
  .config(routesConfig)
  .service('AuthService', AuthService)
  .service('ApiService', ApiService)
  .component('appChat', appComponent)
  .component('appAuth', authComponent)
  .component('appForm', formComponent)
  .component('appList', listComponent)
  .value('EventEmitter', payload => ({$event: payload}));
