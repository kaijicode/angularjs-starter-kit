import angular from 'angular';
import template from './userDetail.html';


angular
.module('myApp')
.component('userDetail', {
   template: template,
   controllerAs: 'userDetail',
   controller: function ($stateParams) {
      const vm = this;

      vm.id = $stateParams.userId;
   }
});
