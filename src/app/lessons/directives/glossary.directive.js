(function() {
  'use strict';

 angular.module('MyApp.Lessons')

    .directive('glossary', function() {
    	return {
    		templateUrl: 'app/lessons/partials/templates/glossary.html',
    		controller: 'GlossaryController as gCtrl',
            bindToController: true,
            scope: true
        }
    })

    .controller('GlossaryController', function(Glossary) {
        var vm = this;
        vm.glossary = Glossary;
    })
})();