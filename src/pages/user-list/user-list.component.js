import angular from "angular";
import template from "./user-list.html";
import "./user-list.sass";


class UserList {
   static get $inject() {
      return ["user"];
   }

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

angular
   .module("myApp")
   .component("userList", {
      template: template,
      controllerAs: "userList",
      controller: UserList
   });
