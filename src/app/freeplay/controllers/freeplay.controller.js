(function (){
	angular.module('MyApp.Freeplay')

	.controller('FreeplayController', function(ngAudio, STATES, Keyboard) {
		var vm = this;
		vm.k = new Keyboard();
		vm.playing = false;
		vm.buttonText = "Play"
	 	vm.beat = null;

		vm.playBeat = function () {
			if (vm.playing) {
				vm.playing = false;
				vm.beat.stop();
				vm.buttonText = "Play"
			}
			else {
				vm.beat = ngAudio.load("app/common/sounds/jdilla.mp3");
				vm.playing = true;
				vm.beat.play();
				vm.buttonText = "Stop"
			}
		}
	});
})();