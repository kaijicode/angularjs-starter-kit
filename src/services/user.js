import angular from "angular";
import config from "../config";


angular
   .module("myApp")
   .factory("user", user);

function user($resource) {
   const userResource = $resource(config.USER_API_BASE);

   function getUsers() {
      return userResource.get().$promise
         .then((response) => {
            return response.results;
         });
   }

   return {
      getUsers: getUsers
   };
}

user.$inject = ["$resource"];
