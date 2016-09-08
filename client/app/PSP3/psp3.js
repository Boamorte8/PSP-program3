'use strict';

angular.module('pspApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('psp3', {
        url: '/psp3',
        template: '<psp3></psp3>'
      });
  });
