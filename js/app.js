var app = angular.module('mypage', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $sceDelegateProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {
      templateUrl: 'views/project.html',
      controller: 'project',
      url: '/'
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
