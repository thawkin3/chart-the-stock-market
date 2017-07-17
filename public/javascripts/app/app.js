var app = angular.module('ChartTheStockMarket', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl:'javascripts/app/views/main.html',
			access: {restricted: false}
		})
		.otherwise({ 
			redirectTo: '/',
			access: {restricted: false}
		});
});

app.run(function($rootScope, $location, $window, $route, socket) {

    // any init code here

});