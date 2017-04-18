function Config ($stateProvider, $urlRouterProvider) {

  $stateProvider
     .state('home', {
       url: '/home',
       templateUrl: 'templates/home.tmp.html',
       controller: 'HomeController',
     })
     .state('resume', {
       url: '/resume',
       templateUrl: 'templates/resume.tmp.html',
       //controller: 'ResumeController',
     })
     .state('page-not-found', {
       url: '/not-found',
       template: `<h2>page not found</h2>
      <a href="/#!/home">Click here to go home</a>`
     });


  $urlRouterProvider.when('', '/home');
  $urlRouterProvider.otherwise('/home');
}

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config;
