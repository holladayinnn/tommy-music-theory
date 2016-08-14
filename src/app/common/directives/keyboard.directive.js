(function() {
  'use strict';

 angular.module('MyApp.Common')

    .directive('keyboard', function() {
    	return {
    		templateUrl: 'app/common/partials/templates/keyboard.html',
    		controller: 'KeyboardController as kCtrl',
            bindToController: true,
            scope: {
                len: '='
            }
        }
    })

    .controller('KeyboardController', function(Keyboard, ngAudio, pianoKeys) {
        var vm = this;

        vm.k = new Keyboard();
        vm.pianoKeys = pianoKeys;
    })

})();