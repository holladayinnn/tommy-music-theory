(function(){
angular.module('MyApp.Exercise')

	.controller('ExerciseController', function($state, _UserAddResource, _UserUpdateResource, 
		STATES) {
		var vm = this;

		vm.navStates = STATES;
		vm._userAdded = false;

		vm._user = {
			Username: "MusicalGenius",
			Score: 0
		};

		vm.add_user = function(){
			vm._userAdded = true;
			//Add user to database
			_UserAddResource.add_User(vm._user).$promise
				.then(function(response) {
				vm._user.id = response._id;
				//console.log(response);
			});
		}

		vm.update_user = function(score){
			if(score > vm._user.Score){
				vm._user.Score = score;
				if (vm._userAdded == true) {
					_UserUpdateResource.save(vm._user).$promise
				    .then(function(response) {
				    	//console.log(response);
				    });
				}
			}
		}
	});
})();