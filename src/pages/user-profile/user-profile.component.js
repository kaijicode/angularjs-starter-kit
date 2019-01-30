import angular from "angular";
import template from "./user-profile.html";


class UserProfile {
   static get $inject() {
      return ["$stateParams"];
   }

   constructor($stateParams) {
      this.id = $stateParams.userId;
   }
}

angular
   .module("myApp")
   .component("userProfile", {
      template: template,
      controllerAs: "userDetail",
      controller: UserProfile
   });
