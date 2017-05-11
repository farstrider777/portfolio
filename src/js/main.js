import angular from 'angular';
import 'angular-ui-router';
import Config from './config.js';
import MenuController from './controllers/menu.js';
import HomeController from './controllers/home.js';

//console.log(HomeController)

angular
  .module('app', ['ui.router'])
  .config(Config)
  .controller('MenuController', MenuController)
  .controller('HomeController', HomeController);
