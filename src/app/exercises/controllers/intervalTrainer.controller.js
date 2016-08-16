(function() {
    angular.module('MyApp.Exercise')

    .controller('IntervalTrainerController', function($timeout, Keyboard, itlevelDescription, 
                                                    pianoKeys, ScoreKeeper, IntervalTrainer) {
            var vm = this;

            vm.it = new IntervalTrainer();
            vm.sk = new ScoreKeeper();
            vm.k = new Keyboard();
            vm.it.createNew(vm.sk.level);
            vm.pianoKeys = pianoKeys;
            vm.itlevels = itlevelDescription;
            vm.level = vm.sk.level;
            vm.startGame = true;
            vm.startKeepingScore = false;
            vm.levelUp = false;
            vm.startOver = false;
            vm.beatGame = false;
            vm.disableButton = false;     

            vm.checkAnswer = function(answer) {
                if(vm.startKeepingScore) {
                    vm.levelUp = false;
                    vm.startOver = false;
                    vm.beatGame = false;
                    vm.numAnswered+=1;

                    vm.sk.checkAnswer(answer, vm.it);

                    if (vm.level != vm.sk.level) {
                        vm.level = vm.sk.level;
                        vm.levelUp = true;
                    }
                    if (vm.sk.numAttempted == 0) {
                        vm.startOver = true;
                    }
                    //rewrite below:
                    if (vm.level == vm.it.levels && vm.sk.numAttempted != 0 && vm.sk.numAttempted % vm.sk.numToPass == 0 
                            && vm.sk.numCorrect > vm.sk.numAttempted-vm.sk.numToFail) {
                        vm.beatGame = true;
                    }
                }
            };

            vm.resetLevel = function(level) {
                vm.startGame = true;
                vm.levelUp = false;
                vm.startOver = false;
                vm.sk.resetLevel(level, vm.it);
                vm.level = vm.sk.level;
                vm.it.createNew(vm.sk.level);
            }

            vm.isActive = function(index) {
                if(index == vm.level ) {
                    return "current";
                }
                else {
                    return "not-current";
                }
            }
    });
})();