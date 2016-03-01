var app = angular.module('mypage', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $sceDelegateProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {
      templateUrl: 'views/landing.html',
      controller: 'landing',
      url: '/'
    }).state('project', {
      templateUrl: 'views/project.html',
      controller: 'project',
      url: '/projects/'
    }).state('about', {
      templateUrl: 'views/about.html',
      controller: 'about',
      url: '/about'
    })
   $sceDelegateProvider.resourceUrlWhitelist([
     'self',
     '*://www.youtube.com/**'
   ]);
});
