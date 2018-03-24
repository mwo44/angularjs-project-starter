import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import {AppComponent} from './app.component';
import {customersModule} from './customers/customers.module';

const materialConfig = $mdThemingProvider => {
  $mdThemingProvider.disableTheming();
};

export const appModule = angular
  .module('app', [
    uiRouter,
    'ngMaterial',
    customersModule.name,
  ])
  .component('app', new AppComponent())
  .config(materialConfig);