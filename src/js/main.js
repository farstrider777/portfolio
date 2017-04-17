import angular from 'angular';
import 'angular-ui-router';
import Config from './config.js';
import HomeController from './controllers/home.js';

//console.log(HomeController)

angular
  .module('app', ['ui.router'])
  .config(Config)
  .controller('HomeController', HomeController);
