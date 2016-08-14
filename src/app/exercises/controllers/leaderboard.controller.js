(function(){
  angular.module('MyApp.Exercise')

  .controller('LeaderboardController', function(LeaderboardListResource) {
    var vm = this;

    // vm.leaders
    vm.leaders = null;

    function getLeaders() {
        LeaderboardListResource.query().$promise
        .then(function(response) {
          vm.leaders = response;
        });
      }

      getLeaders();

  });

})();