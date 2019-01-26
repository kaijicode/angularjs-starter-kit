import angular from "angular";
import template from "./userList.html";
import "./userList.sass";


class UserList {
   constructor(user) {
      this.user = user;
      this.users = [];
   }

   $onInit() {
      const vm = this;
      this.user.getUsers()
         .then((users) => {
            vm.users = users;
         })
         .catch(console.error);
   }
}

UserList.$inject = ["user"];


angular
   .module("myApp")
   .component("userList", {
      template: template,
      controllerAs: "userList",
      controller: UserList
   });
