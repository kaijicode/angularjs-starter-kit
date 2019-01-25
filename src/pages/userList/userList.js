import angular from 'angular';
import template from './userList.html';


angular
.module('myApp')
.component('userList', {
   template: template,
   controllerAs: 'userList',
   controller: function (user) {
      const vm = this;

      user.getUsers()
         .then((users) => {
            vm.users = users;
         })
         .catch(console.error);
   }
});
