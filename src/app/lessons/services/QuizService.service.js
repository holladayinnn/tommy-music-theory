(function(){
	angular.module('MyApp.Lessons')

	.service('QuizService', function() {
		var self = this;

		self.checkInput = function(userAnswer, possibleCorrectAnswers) {
			userAnswer = userAnswer.toUpperCase();
			for (var i = 0; i < possibleCorrectAnswers.length; ++i) {
		        if (userAnswer == possibleCorrectAnswers[i]) {
		        	return true;
		        }
		    }
		    return false;
		}

		self.checkRadio = function(userAnswer, correctAnswer) {
			if(userAnswer == correctAnswer) {
	            return true;
	        }
	        else {
	            return false;
	        }
		}

		self.checkAllAnswers = function(questions) {
			var numCorrect = 0;
			for(var i = 0; i < questions.length; ++i) {
	            if(questions[i].correct === true) {
	                questions[i].correct
	                numCorrect++;
	            }
	        }
	        if (numCorrect == questions.length) {
	        	return true;
	        }
	        else {
	        	return false;
	        }
		}
	});
})();