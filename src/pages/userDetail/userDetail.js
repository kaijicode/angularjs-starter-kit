import angular from 'angular';


angular
.module('myApp')
.component('userDetail', {
   template: '' +
      '<div>' +
      '<h1>User {{userDetail.id}}</h1>' +
      '</div>'
   ,
   controllerAs: 'userDetail',
   controller: function ($stateParams) {
      const vm = this;

      vm.id = $stateParams.userId;
   }
});
