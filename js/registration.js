angular.module('registrationModule', [])

.controller('RegisterController', ['$scope', '$location', function($scope, $location){
	$scope.submitForm = function() {
		if ($scope.userForm.$valid) {
			$location.url("/#/")
		}
	}
}])