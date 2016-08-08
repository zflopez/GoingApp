var app = angular.module('myApplicationModule', [
	'mapModule', 
	'calendarModule', 
	'locationViewModule', 
	'contactModule',
	'homeModule',
	'registrationModule', 
	'ngRoute', 
	'ngStorage', 
	'ngCookies'
	]);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'HomeViewController'
	})
	.when('/contact', {
		templateUrl: 'views/contact.html',
		controller: 'ContactViewController'
	})
	/*.when('/profile/:user', {							// working on user profile after registration and login
		templateUrl: 'views/userProfile.html',
		controller: 'NewEditExpenseViewController'
	})*/
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
