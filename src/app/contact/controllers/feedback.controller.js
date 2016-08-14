(function (){
	angular.module('MyApp.Contact')

	.controller('FeedbackController', function(ratingClasses, iconClasses, ngAudio) {
		var vm = this;
		
		vm.rating = 0;
		vm.ratingClass = "";
		vm.iconClass = "";
		vm.feedbackRequired = true;
		vm.formSubmitted = false;
		vm.emailExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		vm.setRating = function (rating) {
			vm.rating = rating;
			vm.ratingClass=ratingClasses[vm.rating];
			vm.iconClass=iconClasses[vm.rating]
		};

		vm.setFeedbackRequired = function() {
	    	if(vm.positiveFeedback == '' && vm.improvementFeedback == '') {
	    		vm.feedbackRequired = true;
	    	}
	    	else {
	    		vm.feedbackRequired = false;
	    	}
	    };

		vm.submitFeedback = function() {
	    	if (vm.feedbackForm.$valid) {
	    		vm.formSubmitted = true;
	    	}
	    };
	});

})();