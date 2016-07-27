angular.module('locationViewModule', [])

.controller('LocationViewController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$scope.id = $routeParams.id;

	$http.get("json/map_data.json").success(function(data){
		$scope.locations = data;
	})
}]);