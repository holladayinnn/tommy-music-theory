(function(){
	angular.module('MyApp.Home')

	.controller('HomeController', function($anchorScroll, $location) {
		var vm = this;

		vm.gotoAnchor = function (anchorName) {
			var newHash = anchorName;

			if ($location.hash() !== newHash) {
	        	$location.hash(anchorName);
	    	}
	    	else {
	    		$anchorScroll().yOffset = 50;
	    	}
		}
	});
})();