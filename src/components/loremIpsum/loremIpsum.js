import angular from "angular";
import template from "./loremIpsum.html";
import "./loremIpsum.sass";


angular
   .module("myApp")
   .component("loremIpsum", {
      template: template
   });
