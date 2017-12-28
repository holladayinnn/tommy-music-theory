(function(){
	angular.module('MyApp.Common')

	.factory("Keyboard", function(frequencyList, AudioContext, Volume, ngAudio, BufferLoader) {
		function Keyboard() {
			this.myAudioContext  = AudioContext.get();
	  		this.frequency = 440;
	  		this.type = 'piano';
	  		this.oscillator = null;
	  		this.gainNode = null;
	  		this.file = null;
	  		this.isPlaying = false;
	  		// this.pianoNotes = new Array(25);
	  		// this.note = -1
	  		// for(var i = 0; i < 25; i++){
	  		// 	this.pianoNotes[i] = ngAudio.load("app/common/sounds/Piano/" + (i + 28) + ".mp3");
	  		// }

	  	// 	for(var i = 0; i < 25; i++) {
	  	// 		var bufferLoader = new BufferLoader(
				// this.myAudioContext,
			 //    ["app/common/sounds/Piano/" + (i + 28) + ".mp3"],
			 //    finishedLoading);
			 //    bufferLoader.load();
		  //   }


		  //   function finishedLoading(bufferList) {
		  //   	console.log("here");
	  	// 		source = this.context.createBufferSource();
				// source.buffer = bufferList[0];
	  	// 	}
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
			// var isPlaying = this.file && this.file.currentTime > 0 && !this.file.paused && !this.file.ended && this.file.readyState > 2;
			// if (isPlaying) {
			// 	this.file.stop();
			// }
			// if(this.isPlaying = true) {
			// 	this.file.stop();
			// 	this.isPlaying= false;
			// 	this.pianoNotes[this.note] = ngAudio.load("app/common/sounds/Piano/" + (this.note + 28) + ".mp3");
			// }
			// this.source.stop(this.context.currentTime)
		}

		Keyboard.prototype.playPianoNote = function(note) {
			// id = '#piano'+(note);
			// var pianoNote = document.querySelector(id);
			// console.log(pianoNote);
			// pianoNote.load();
			// pianoNote.play();
			// setTimeout(function(){
   //  			pianoNote.pause(); 
   //  		}, 500);
			
			note = parseInt(note) + 28;

			var bufferLoader = new BufferLoader(
				this.myAudioContext,
			    ["app/common/sounds/Piano/" + note + ".mp3"],
			    finishedLoading
		    );

		  	bufferLoader.load();

		  	function finishedLoading(bufferList) {
				// Create two sources and play them both together.
				source = this.context.createBufferSource();
				source.buffer = bufferList[0];
				var gainNode = this.context.createGain();

				gainNode.gain.value = Volume.get();

				source.connect(gainNode);

				gainNode.connect(this.context.destination);

				source.start(this.context.currentTime);
				source.stop(this.context.currentTime+.5);
			}
		}

		// Keyboard.prototype.playPianoNote = function(note) {
    		// var isPlaying = this.file && this.file.currentTime > 0 && !this.file.paused && !this.file.ended && this.file.readyState > 2;
			// if(!isPlaying) {
			// 	// note = parseInt(note) + 28;
			// 	//this.file = ngAudio.load("app/common/sounds/Piano/" + note + ".mp3");
			// 	note = parseInt(note);
			// 	this.file = this.pianoNotes[note];
			// 	this.file.volume = Volume.get();
			// 	this.file.play();
			// 	this.isPlaying = true;
			// 	this.note = note
			// }
			// else {
			// 	this.stopPianoNote();
			// }

		// }

		return Keyboard;
	});
})();
