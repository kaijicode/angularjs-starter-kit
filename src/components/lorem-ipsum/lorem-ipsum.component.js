import angular from "angular";
import template from "./lorem-ipsum.html";
import "./lorem-ipsum.sass";


angular
   .module("myApp")
   .component("loremIpsum", {
      template: template
   });
