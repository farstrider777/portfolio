import angular from 'angular';
import 'angular-ui-router';
import Config from './config.js';
import MenuController from './controllers/menu.js';
import HomeController from './controllers/home.js';

//import AccountService from './services/menus.js';

//console.log(AccountService)

//console.log(HomeController)

angular
  .module('app', ['ui.router'])
  .config(Config)
  //.service('AccountService', AccountService)
  .controller('MenuController', MenuController)
  .controller('HomeController', HomeController);
