// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic','subModule'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});


app.config(function($stateProvider, $urlRouterProvider) {

  openFB.init({appId: '1551520451790569'});

  $stateProvider.state('home', {
    controller:'LoginController',
    url: '/',
    templateUrl: 'templates/login.html'
  });

  $stateProvider
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabsLayout.html"
    })
    .state('tab.shared', {
      url: '/shared',
      views: {
        'tab-shared': {
          templateUrl: 'templates/shared.html',
          controller: 'SharedController'
        }
      }
    });

    $urlRouterProvider.otherwise('/tab/shared')

})