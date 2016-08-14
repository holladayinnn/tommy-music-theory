(function(){
    angular.module('MyApp.Common')

    .directive('volumecontrol', function() {
        return {
            templateUrl: 'app/common/partials/templates/volumecontrol.html',
            controller: 'VolumeController as vCtrl',
            scope: true
        }
    })

    .controller('VolumeController', function(volumeIcon, Volume) {
        var vm = this;
        vm.volumeLevel = Volume.get()*100;
        vm.volumeIcon = volumeIcon[Math.round(vm.volumeLevel/50)];

        vm.changeVolume = function() {
            vm.volumeIcon = volumeIcon[Math.round(vm.volumeLevel/50)];
            Volume.set((vm.volumeLevel) * 0.01);
        };

    });
})();