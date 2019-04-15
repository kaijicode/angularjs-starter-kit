import angular from "angular";


angular
   .module("myApp")
   .config(config);


function config($stateProvider, $urlRouterProvider, $locationProvider) {
   $stateProvider
      .state({
         url: "/",
         name: "home",
         component: "home"
      })
      .state({
         url: "/users",
         name: "user-list",
         component: "userList"
      })
      .state({
         url: "/users/{userId}",
         name: "user-profile",
         component: "userProfile"
      })
      .state({
         url: "/404",
         name: "not-found",
         component: "notFound404"
      });

   $urlRouterProvider.otherwise("/404");

   // get rid of hashbang (#!) in path. <base> has to be defined in index.html.
   $locationProvider.html5Mode(true);
}
