(function(){
	angular.module('MyApp.Contact')

	.controller('ContactController', function($state, STATES) {
		var vm = this;
		vm.navStates = STATES;
	});
})();