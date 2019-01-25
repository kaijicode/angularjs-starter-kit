import angular from 'angular';
import angularLogo from "../../logo-angularjs.png";


angular
.module('myApp')
.component('home', {
   template: '' +
      '        <img src="{{home.angularLogoUrl}}"/>' +
      '        <ul>' +
      '            <li>' +
      '                <a href="" ui-sref="user-list">/users</a>' +
      '            </li>' +
      '        </ul>',
   controllerAs: 'home',
   controller: function() {
      const vm = this;

      vm.angularLogoUrl = angularLogo;
   }
});
