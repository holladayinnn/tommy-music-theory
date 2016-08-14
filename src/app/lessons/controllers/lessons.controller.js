(function(){
	angular.module('MyApp.Lessons')

	.controller('LessonsController', function($state, STATES, PlayExample, Keyboard, PlayTime, $timeout) {
		var vm = this;

		vm.navStates = STATES;
		vm.k = new Keyboard();

		vm.disableButtons = false;

		vm.enableButtons = function(type, length) {
			var waitTime = PlayTime.Calculate(type, length);
			$timeout(function() {
				vm.disableButtons = false;
			}, waitTime);
		};

		vm.playExample = function (type, values){
			vm.disableButtons = true;
			if (type == "scaleAsc") {
				vm.enableButtons("scale", values.length);
				PlayExample.ScaleAscending(values);
			}
			else if (type == "scaleDesc") {
				vm.enableButtons("scale", values.length)
				PlayExample.ScaleDescending(values);
			}
			else {
				vm.enableButtons("k_interval", 0);
				PlayExample.Interval(values[0],values[1]);
			}
		};
	});
})();