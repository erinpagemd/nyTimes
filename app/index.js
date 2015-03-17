'use strict'

// var $ = require('jquery'),
//     _ = require('lodash'),
//     Firebase = require('firebase');

angular
.module('nyTimes', ['ui.router'])
.constant('BASE_URL', 'https://temp-app.firebaseio.com')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {url:'/', templateUrl:'views/home.html'})
    .state('login', {url:'/login', templateUrl:'views/login.html', controller:'LoginCtrl'})
    .state('search', {url:'/search', templateUrl:'views/search.html', controller:'SearchCtrl'})

});
