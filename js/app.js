var app = angular.module('myApplicationModule', ['mapModule', 'calendarModule', 'ngRoute']);


/*app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {	//funciona sobre la url raíz
		templateUrl: 'views/expenses.html',
		controller: 'ExpensesViewController'	//puedo poner un controller que esté en otro JS
	})
	.when('/expenses', {
		templateUrl: 'views/expenses.html',
		controller: 'ExpensesViewController'
	})
	.when('/expenses/new', {		// añade UN gasto, de ahí expense en singular, son diferentes controllers
		templateUrl: 'views/expenseForm.html',
		controller: 'NewEditExpenseViewController'
	})
	.when('/expenses/edit/:id', {		// : indica que vamos a pasarle parámetros, podría ser cualquier cosa
		templateUrl: 'views/expenseForm.html',
		controller: 'NewEditExpenseViewController'
	})
	.otherwise({
		redirectTo: '/'
	})
}])*/



app.controller('HomeViewController', ['$scope', function($scope){		// meter en otro JS e inyectar module
	$scope.appTitle = "GoingApp"; 
}]);


app.directive('customHeader', function(){
	return {
		restrict:'E',
		templateUrl: 'views/header.html'
	}
});
