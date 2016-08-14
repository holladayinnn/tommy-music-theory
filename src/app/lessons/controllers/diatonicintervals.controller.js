(function(){
	angular.module('MyApp.Lessons')

	.controller('DiatonicIntervalsController', function() {
		var vm = this;
		
		vm.questions = [{question:"A Diatonic Interval is:",
							correctAnswer: '',
							possibleAnswers: '',
							feedback: 'Your answer should be one word.',
							type: 'radio'}];

	});
})();