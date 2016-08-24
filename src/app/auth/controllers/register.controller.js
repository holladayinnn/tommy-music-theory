(function() {

	angular.module('MyApp.Auth')

	.controller('RegisterController', function ($localStorage, AuthFactory) {
		var vm = this;

		vm.register={};
		vm.loginData={};

		vm.doRegister = function() {
		    //console.log('Registering');

		    AuthFactory.register(vm.registration);
		};
	});
})();