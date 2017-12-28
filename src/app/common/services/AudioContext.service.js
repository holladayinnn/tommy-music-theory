(function() {
	angular.module('MyApp.Common')

	.service("AudioContext", function($window, BufferLoader) {
		var self = this;
		var AudioContext = $window.AudioContext || $window.webkitAudioContext;
			self.myAudioContext  = new AudioContext;

		for(var i = 0; i < 41; i++) {
  			var bufferLoader = new BufferLoader(
			self.myAudioContext,
		    ["app/common/sounds/Piano/" + (i + 28) + ".mp3"],
		    finishedLoading);
		    bufferLoader.load();
	    }


	    function finishedLoading(bufferList) {
  			source = this.context.createBufferSource();
			source.buffer = bufferList[0];
  		}

		self.get = function () {
			return self.myAudioContext;
		}
	});
})();