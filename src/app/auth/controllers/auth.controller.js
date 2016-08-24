(function () {

	angular.module('MyApp.Auth')

	.controller('AuthController', function(STATES, $state, $rootScope, AuthFactory) {
		var vm = this;
		vm.navStates = STATES;

		//vm.loggedIn = false;
	    //vm.username = '';
	    
	    if(AuthFactory.isAuthenticated()) {
	        //vm.loggedIn = true;
	        //vm.username = AuthFactory.getUsername();
	        $state.go(STATES.kHomeState);
	    }
	        
	    // vm.openLogin = function () {
	    //     //ngDialog.open({ template: 'views/login.html', scope: vm, className: 'ngdialog-theme-default', controller:"LoginController" });
	    // };
	    
	    // vm.logOut = function() {
	    //    AuthFactory.logout();
	    //     vm.loggedIn = false;
	    //     vm.username = '';
	    // };
	    
	    $rootScope.$on('login:Successful', function () {
	        //vm.loggedIn = AuthFactory.isAuthenticated();
	        //vm.username = AuthFactory.getUsername();
	        $state.go(STATES.kHomeState);
	    });
	        
	    $rootScope.$on('registration:Successful', function () {
	        //vm.loggedIn = AuthFactory.isAuthenticated();
	        //vm.username = AuthFactory.getUsername();
	        $state.go(STATES.kHomeState);
	    });
	    
	    vm.stateis = function(curstate) {
	       return $state.is(curstate);  
	    };
	});
})();