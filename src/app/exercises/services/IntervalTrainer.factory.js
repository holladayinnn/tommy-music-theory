(function () {

	angular.module('MyApp.Exercise')

	.factory('IntervalTrainer', function(AudioContext, frequencyList, directions, intervalDistances,
							itlevelDescription, Volume, ngAudio, BufferLoader) {
		function IntervalTrainer() {
			this.myAudioContext  = AudioContext.get();
	  		this.frq1 = 0;
	  		this.frq2 = 0;
	  		this.volume = 1;
	  		this.type = 'piano';
	  		this.oscillator = null;
	  		this.oscillator2 = null;
	  		this.gainNode = null;
	  		this.gainNode2 = null;
	  		this.direction = directions[0];
	  		this.levels = itlevelDescription.length;
	  		this.intervalTime = 0;
	  		this.file1 = null;
	  		this.file2 = null;
		}

		IntervalTrainer.prototype.createNew = function(level) {

			//determines if the interval is going up, down or the same time depending on level
			if(level <= 5) {
				this.direction = directions[Math.floor(Math.random() * 2)];
			}
			else {
				this.direction = directions[Math.floor(Math.random() * 3)];
			}

			//choose a random value for first note of the interval
			this.frq1 = Math.floor(Math.random() * 25);

			//frequency 2 chooses a random value from indices the array based on what level the game is on
			if (level <= 2) {
				this.frq2 = this.frq1 + intervalDistances[(Math.floor(Math.random() * 2)) + (2*level)];
			}
			else if(level == 3) {
				this.frq2 = this.frq1 + intervalDistances[(Math.floor(Math.random() * 3)) + (2*level)];
			}
			else if(level <= 5) {
				this.frq2 = this.frq1 + intervalDistances[(Math.floor(Math.random() * 2)) + (2*level + 1)];
			}
			else if(level <= 7) {
				this.frq2 = this.frq1 + intervalDistances[(Math.floor(Math.random() * (2*(level-6) + 4)))];
			}
			else if(level <= 10) {
				this.frq2 = this.frq1 + intervalDistances[(Math.floor(Math.random() * (2*(level-8) + 9))) ];
			}
			else if(level <= 12) {
				this.frq2 = this.frq1 + intervalDistances[(Math.floor(Math.random() * 2)) +(13 + (2*(level-11)))];
			}
			else if(level == 13) {
				this.frq2 = this.frq1 + intervalDistances[(Math.floor(Math.random() * 4)) + 13];
			}
			else if(level == 14) {
				this.frq2 = this.frq1 + intervalDistances[(Math.floor(Math.random() * 17))];
			}
		}

		IntervalTrainer.prototype.play = function() {
			if(this.direction == 'together') {
				this.intervalTime = 1;
			}
			else {
				this.intervalTime = 2;
			}

			if (this.type == 'piano') {
				this.playPiano()
			}
			else {
				this.oscillator = this.myAudioContext.createOscillator();
				this.oscillator2 = this.myAudioContext.createOscillator();
				this.gainNode = this.myAudioContext.createGain();
				this.gainNode2 = this.myAudioContext.createGain();

				this.oscillator.type = this.type;
				this.oscillator2.type = this.type;
				this.oscillator.frequency.value = frequencyList[this.frq1];
				this.oscillator2.frequency.value = frequencyList[this.frq2];

				this.gainNode.gain.value = Volume.get();
				this.gainNode2.gain.value = Volume.get();

				this.gainNode.connect(this.myAudioContext.destination);
				this.oscillator.connect(this.gainNode);
				this.gainNode2.connect(this.myAudioContext.destination);
				this.oscillator2.connect(this.gainNode2);

				if(this.direction == "up")
				{
					this.oscillator.start(this.myAudioContext.currentTime);
					this.oscillator.stop(this.myAudioContext.currentTime + 1);

					this.oscillator2.start(this.myAudioContext.currentTime + 1);
					this.oscillator2.stop(this.myAudioContext.currentTime + 2);
				}
				else if(this.direction == "down") {
					this.oscillator2.start(this.myAudioContext.currentTime);
					this.oscillator2.stop(this.myAudioContext.currentTime + 1);

					this.oscillator.start(this.myAudioContext.currentTime + 1);
					this.oscillator.stop(this.myAudioContext.currentTime + 2);
				}
				else {
					this.oscillator.start(this.myAudioContext.currentTime);
					this.oscillator.stop(this.myAudioContext.currentTime + 1);

					this.oscillator2.start(this.myAudioContext.currentTime);
					this.oscillator2.stop(this.myAudioContext.currentTime + 1);
				}
			}
		}

		IntervalTrainer.prototype.playPiano = function() {
			var note1 = parseInt(this.frq1) + 28;
			var note2 = parseInt(this.frq2) + 28;

			var bufferLoader = new BufferLoader(
				this.myAudioContext,
			    ["/app/common/sounds/Piano/" + note1 + ".ogg", "/app/common/sounds/Piano/" + note2 + ".ogg"],
			    finishedLoading,
			    this.direction
		    );

		  	bufferLoader.load();

		  	//callback function that plays the files from bufferloader
		  	function finishedLoading(bufferList) {
				// Create two sources and play them both together.
				var source1 = this.context.createBufferSource();
				var source2 = this.context.createBufferSource();
				source1.buffer = bufferList[0];
				source2.buffer = bufferList[1];
				var gainNode1 = this.context.createGain();
				var gainNode2 = this.context.createGain();

				gainNode1.gain.value = Volume.get();
				gainNode2.gain.value = Volume.get();

				source1.connect(gainNode1);
				source2.connect(gainNode2);

				gainNode1.connect(this.context.destination);
				gainNode2.connect(this.context.destination);

				if(this.direction == 'up') {
					source1.start(this.context.currentTime);
					source1.stop(this.context.currentTime+1);
					source2.start(this.context.currentTime+1);
					source2.stop(this.context.currentTime+2);
				}
				else if(this.direction == 'down') {
					source2.start(this.context.currentTime);
					source2.stop(this.context.currentTime+1);
					source1.start(this.context.currentTime+1);
					source1.stop(this.context.currentTime+2);

				}
				else {
					source1.start(this.context.currentTime);
					source2.start(this.context.currentTime);
					source1.stop(this.context.currentTime+1);
					source2.stop(this.context.currentTime+1);

				}
			}


			//was hoping there was an easier way to implement starting and stop times with angular audio
			//but haven't figured out a way yet


			// this.file1 = ngAudio.load("app/common/sounds/piano/" + note1 + ".ogg");
			// this.file2 = ngAudio.load("app/common/sounds/piano/" + note2 + ".ogg");
			// this.file1.volume = Volume.get();
			// this.file2.volume = Volume.get();
			// console.log(this.file1);
			// this.file1.play();
			// if(this.file1.currentTime == 1) {
			// 	this.file1.stop();
			// }

			// if(this.direction == "up") {
			// 	this.file1.play();
			// 	//after 1 second
			// 	this.file1.stop();
			// 	this.file2.play();
			// 	//after 2 seconds
			// 	this.file2.stop();
			// }
			// else if (this.direction == "down"){
			// 	this.file2.play();
			// 	//after 1 second
			// 	this.file2.stop();
			// 	this.file1.play();
			// 	//after 2 seconds
			// 	this.file1.stop();
			// }
			// else {
			// 	this.file1.play();
			// 	this.file2.play();

			// 	//after 1 second
			// 	this.file1.stop();
			// 	this.file2.stop();
			// }
		}

		IntervalTrainer.prototype.checkAnswer = function(answer) {
			if (this.frq2 - this.frq1 == answer) {
				return true;
			}
			else {
				return false;
			}
		}

		return IntervalTrainer;
	});
})();
