var app = angular.module('myApplicationModule', [
	'mapModule', 
	'calendarModule', 
	'locationViewModule', 
	'contactModule', 
	'ngRoute', 
	'ngStorage', 
	'ngCookies'
	]);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/landingpage.html',
		controller: 'HomeViewController'
	})
	.when('/home', {
		templateUrl: 'views/home.html',
		controller: 'HomeViewController'
	})
	.when('/contact', {
		templateUrl: 'views/contact.html',
		controller: 'ContactViewController'
	})
	// .when('/profile/:user', {		
	// 	templateUrl: 'views/userProfile.html',
	// 	controller: 'NewEditExpenseViewController'
	// })
	.when('/register', {
		templateUrl: 'views/register.html',
		controller: 'RegisterController'
	})
	.when('/profile/location/:id', {
		templateUrl: 'views/locationView.html',
		controller: 'LocationViewController'
	})
	.otherwise({
		redirectTo: '/'
	})
}]);

app.controller('HomeViewController', ['$scope', function($scope){		// meter en otro JS e inyectar module
	$scope.appTitle = "GoingApp"; 
}]);

app.controller('RegisterController', ['$scope', '$location', function($scope, $location){
	$scope.submitForm = function() {
		if ($scope.userForm.$valid) {
			//alert('our form is amazing');
			$location.url("/#/home")
		}
	}
}]);




app.directive('customHeader', function(){
	return {
		restrict:'E',
		templateUrl: 'views/header.html'
		//controller:
	}
});

app.directive('customFooter', function(){
	return {
		restrict:'E',
		templateUrl: 'views/footer.html'
	}
});

app.directive('customMap', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/custom-map.html'
	}
});

app.directive('customCalendar', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/custom-calendar.html'
	}
});
