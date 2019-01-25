
'use strict';

const app = angular.module('myApp', [
    'ui.router'
]);

app.config(function($stateProvider) {
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
    template: 'Home'
});

app.component('userDetail', {
    template: '' +
        '<div>' +
            '<h1>User {{userDetail.id}}</h1>' +
        '</div>'
    ,
    controllerAs: 'userDetail',
    controller: function($stateParams) {
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
    controller: function(user) {
        const vm = this;

        user.getUsers()
            .then((users) => {
                vm.users = users;
            })
            .catch(console.error);
    }
});

app.factory('user', function() {
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