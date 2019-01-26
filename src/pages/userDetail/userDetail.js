import angular from 'angular';
import template from './userDetail.html';


class UserDetail {
   constructor($stateParams) {
      this.id = $stateParams.userId;
   }
}
UserDetail.$inject = ['$stateParams'];

angular
.module('myApp')
.component('userDetail', {
   template: template,
   controllerAs: 'userDetail',
   controller: UserDetail
});
