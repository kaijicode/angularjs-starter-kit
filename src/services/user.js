import angular from "angular";


angular
   .module("myApp")
   .factory("user", function () {
      const users = [
         {id: 1, name: "Alice"},
         {id: 2, name: "Bob"}
      ];

      function getUsers() {
         return new Promise((resolve) => {
            resolve(users);
         });
      }

      return {
         getUsers: getUsers
      };
   });
