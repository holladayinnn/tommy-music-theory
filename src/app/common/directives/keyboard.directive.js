(function() {
  'use strict';

 angular.module('MyApp.Common')

    .directive('keyboard', function() {
    	return {
    		templateUrl: 'app/common/partials/templates/keyboard.html',
    		controller: 'KeyboardController as kCtrl',
            bindToController: true,
            scope: {
                low: '=',
                high: '='
            }
        }
    })

    .controller('KeyboardController', function(Keyboard, pianoKeys, $filter) {
        var vm = this;

        $filter('startFrom');

        vm.k = new Keyboard();
        vm.pianoKeys = pianoKeys;
        vm.difference = vm.high-vm.low;
        vm.limit = function (num) {
            return Math.min(12, vm.difference - num) + vm.low;
        };

        vm.note = function (index) {
            return vm.low+index;
        };
    })

})();