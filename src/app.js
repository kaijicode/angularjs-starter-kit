'use strict';
import angular from 'angular';
import angularLogo from "./logo-angularjs.png";


angular
.module('myApp')
.component('home', {
   template: '' +
      '        <img src="{{home.angularLogoUrl}}"/>' +
      '        <ul>' +
      '            <li>' +
      '                <a href="" ui-sref="user-list">/users</a>' +
      '            </li>' +
      '        </ul>',
   controllerAs: 'home',
   controller: function() {
      const vm = this;

      vm.angularLogoUrl = angularLogo;
   }
});


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

angular
.module('myApp')
.component('userList', {
   template: '' +
      '<div>' +
      '<h1>User List</h1>' +
      '<div ng-repeat="user in userList.users">' +
      '<a href ui-sref="user-detail({userId: user.id})">user: {{user.id}}</a>' +
      '</div>' +
      '</div>'
   ,
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

angular
.module('myApp')
.factory('user', function () {
   const users = [
      {id: 1, name: 'Alice'},
      {id: 2, name: 'Bob'}
   ];

   function getUsers() {
      return new Promise((resolve, reject) => {
         resolve(users);
      });
   }

   return {
      getUsers: getUsers
   }
});
