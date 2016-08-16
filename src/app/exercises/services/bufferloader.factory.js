//buffer loader code => http://www.html5rocks.com/en/tutorials/webaudio/intro/

(function () {

	angular.module('MyApp.Exercise')

	.factory('BufferLoader', function (Volume, $http) {
		function BufferLoader(context, urlList, callback, direction) {
			this.context = context;
			this.urlList = urlList;
			this.direction = direction;
			this.onload = callback;
			this.bufferList = new Array();
			this.loadCount = 0;
		}

		BufferLoader.prototype.loadBuffer = function(url, index) {
		    var loader = this;

		    //load file
		    $http({
			    method: 'GET',
			    url: url,
			    responseType: 'arraybuffer'
			})
			.then(function(response) {
			    loader.context.decodeAudioData(
			    	response.data, 
			    	function(buffer) {
				    	if (!buffer) {
				          	console.log('error decoding file data: ' + url);
				          	return;
				        }

				        loader.bufferList[index] = buffer;

				        //if all the files are loaded, call the callback function to play the files
				        if (++loader.loadCount == loader.urlList.length)
				        	loader.onload(loader.bufferList);
			    	}, 
			    	function(err) {
			    		console.log(err)
			    	}
			    );
			});	  
		}

		BufferLoader.prototype.load = function() {
			for (var i = 0; i < this.urlList.length; ++i)
				this.loadBuffer(this.urlList[i], i);
		}

		return BufferLoader;

	})
})();