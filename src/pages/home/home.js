import angular from 'angular';
import angularLogo from "../../logo-angularjs.png";
import template from './home.html';


angular
.module('myApp')
.component('home', {
   template: template,
   controllerAs: 'home',
   controller: function() {
      const vm = this;

      vm.angularLogoUrl = angularLogo;
   }
});
