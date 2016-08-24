(function() {
  'use strict';

  angular
    .module('template')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'ctrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($rootScope, $state, STATES, AuthFactory) {
      var self = this;
      self.navStates = STATES;

      self.loggedIn = false;
      self.username = "";

      if(AuthFactory.isAuthenticated()) {
          self.loggedIn = true;
          self.username = AuthFactory.getUsername();
      }

      $rootScope.$on('login:Successful', function () {
          self.loggedIn = AuthFactory.isAuthenticated();
          self.username = AuthFactory.getUsername();
      });
          
      $rootScope.$on('registration:Successful', function () {
          self.loggedIn = AuthFactory.isAuthenticated();
          self.username = AuthFactory.getUsername();
      });

      self.logOut = function() {
        AuthFactory.logout();
        self.loggedIn = false;
        self.username = "";
      }
    }
  }

})();
