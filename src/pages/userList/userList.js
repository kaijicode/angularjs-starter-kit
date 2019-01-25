import angular from 'angular';
import template from './userList.html';
import './userList.sass';


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
