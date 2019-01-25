import angular from 'angular';


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
