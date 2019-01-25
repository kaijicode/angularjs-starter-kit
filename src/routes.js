import angular from "angular";


angular
.module('myApp')
.config(function ($stateProvider, $urlRouterProvider) {
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
      })
      .state({
         url: '/404',
         name: 'not-found',
         component: 'notFound404'
      });

      $urlRouterProvider.otherwise('/404');
});
