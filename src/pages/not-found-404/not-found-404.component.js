import angular from "angular";
import template from "./not-found-404.html";


angular
   .module("myApp")
   .component("notFound404", {
      template: template
   });
