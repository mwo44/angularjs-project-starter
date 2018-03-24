import angular from 'angular';
import {appModule} from './app/app.module';
import {Customer} from './app/customers/model/customer';

const apiConfig = {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-User-ID': 'mwolniak'
  },
  url: 'https://wsb-frontend-project-angularjs.juszczak.io/'
};


angular.element(document).ready(() => {
  angular.bootstrap(document, [appModule.name]);
});
