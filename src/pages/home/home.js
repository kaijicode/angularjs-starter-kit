import angular from "angular";
import angularLogo from "./logo-angularjs.png";
import template from "./home.html";
import "../../components/loremIpsum/loremIpsum";


class Home {
   constructor() {
      this.angularLogoUrl = angularLogo;
   }
}

angular
   .module("myApp")
   .component("home", {
      template: template,
      controllerAs: "home",
      controller: Home
   });
