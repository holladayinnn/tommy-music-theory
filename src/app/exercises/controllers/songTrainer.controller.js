angular.module('MyApp.Exercise')

.controller('SongTrainerController', function(SpotifyRequestService) {
	var vm = this;

  SpotifyRequestService.getPlaylist();

});