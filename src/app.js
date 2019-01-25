'use strict';
import angular from 'angular';
import uirouter from 'angular-ui-router';

import angularLogo from './logo-angularjs.png';


const app = angular.module('myApp', [
   'ui.router'
]);

app.config(function ($stateProvider) {
   $stateProvider
      .state({
         url: '',
         name: 'home',
         component: 'home'
      })
      .state({
         url: '/users',
         name: 'user-list',
         component: 'userList'
      })
      .state({
         url: '/users/{userId}',
         name: 'user-detail',
         component: 'userDetail'
      });
});

app.component('home', {
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

app.component('userDetail', {
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

app.component('userList', {
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

app.factory('user', function () {
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
