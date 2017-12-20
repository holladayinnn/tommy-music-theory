(function(){
	angular.module('MyApp.Common')

	.factory("Keyboard", function(frequencyList, AudioContext, Volume, ngAudio) {
		function Keyboard() {
			this.myAudioContext  = AudioContext.get();
	  		this.frequency = 440;
	  		this.type = 'piano';
	  		this.oscillator = null;
	  		this.gainNode = null;
	  		this.file = null;
	  		this.isPlaying = false;
		}

		Keyboard.prototype.setWaveType = function(wave) {
			this.type = wave;
		}

		Keyboard.prototype.getWaveType = function() {
			return this.type;
		}

		Keyboard.prototype.updateFrequency = function (note) {
			this.frequency = frequencyList[note];
		}

		Keyboard.prototype.stopNote = function() {
			if(this.type == 'piano') {
				this.stopPianoNote();
			}
			else {
				this.oscillator.stop();
			}
		}

		Keyboard.prototype.playNote = function(note) {
			if(this.type == 'piano') {
				this.playPianoNote(note);
			}
			else {
				this.oscillator = this.myAudioContext.createOscillator();
				this.gainNode = this.myAudioContext.createGain();

				this.updateFrequency(note);

				this.oscillator.type = this.type;
				this.oscillator.frequency.value = this.frequency;
				this.gainNode.gain.value = Volume.get();

				this.gainNode.connect(this.myAudioContext.destination);
				this.oscillator.connect(this.gainNode);

				this.oscillator.start(this.myAudioContext.currentTime);
				// this.oscillator.stop(this.myAudioContext.currentTime + .3);
			}
		}

		Keyboard.prototype.stopPianoNote = function() {
			this.file.stop();
			this.isPlaying= false;
		}

		Keyboard.prototype.playPianoNote = function(note) {
			if(!this.isPlaying) {
				note = parseInt(note) + 28;
				this.file = ngAudio.load("app/common/sounds/" + note + ".mp3");
				this.file.volume = Volume.get();
				this.file.play();
				this.isPlaying = true;
			}
			else {
				this.stopPianoNote();
			}
		}

		return Keyboard;
	});
})();
