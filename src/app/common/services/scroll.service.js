(function(){
	angular.module('MyApp.Common')

	.service("Scroll", function($window) {
		var self = this;
		self.scrollToTop = function() {
			$window.scrollTo(0, 0);
		}
	});
})();
