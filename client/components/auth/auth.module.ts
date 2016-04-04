'use strict';

angular.module('movieAngularApp.auth', [
  'movieAngularApp.constants',
  'movieAngularApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
