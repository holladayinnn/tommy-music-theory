(function () {

	angular.module('MyApp.Auth')

	.controller('LoginController', function ($localStorage, AuthFactory) {

		var vm = this;
	    
	    vm.loginData = $localStorage.getObject('userinfo','{}');
	    
	    vm.doLogin = function() {
	        if(vm.rememberMe)
	        	$localStorage.storeObject('userinfo', vm.loginData);

	        AuthFactory.login(vm.loginData);

	        //redirect
	    };
    
	});

})();