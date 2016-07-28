angular.module('mapModule', ['uiGmapgoogle-maps'])

.controller('loadMapController', ['$scope', '$http', function($scope, $http){

	$http.get ("json/map_data.json").success(function(data) {
		$scope.locations = data;

		var category = [];

		for (var i = 0; i < data.length; i++){
			category[i] = data[i].category;
		};

		var sorted_categories = category.sort();

		$scope.categories = [];

		for (var i = 0; i < category.length; i++){
			if (sorted_categories[i+1] != sorted_categories[i]){
				$scope.categories.push(sorted_categories[i]);
			}
		};

		$scope.map.markers = data;
		console.log($scope.map.markers);
	});


	$scope.map = { 
		center: { 
			latitude: 37.395400, 
			longitude: -5.984930 
		}, 
		zoom: 13, 
		window: {
			model: {},
			show: false,
			options:{
				pixelOffset: {width:-1,height:-20}
			}
		}, 
		markers: [],
		markersEvents: {
			click: function(marker, eventName, model, args) {
				$scope.map.window.model = model;
				$scope.map.window.show = true;  	
			}
		}
	};

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(pos) {
			$scope.map.center = {
				latitude:pos.coords.latitude,
				longitude: pos.coords.longitude
			}
		})	
	};
}]);
