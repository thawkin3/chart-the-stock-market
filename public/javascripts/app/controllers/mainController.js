(function() {

	var mainController = function ($scope, $routeParams, $rootScope, $timeout, socket) {

		$scope.stocks = [
			{
				name: "Google",
				symbol: "GOOG",
				price: 987.48
			},
			{
				name: "Apple",
				symbol: "AAPL",
				price: 149.56
			},
			{
				name: "Facebook",
				symbol: "FB",
				price: 163.06
			},
			{
				name: "Twitter",
				symbol: "TWTR",
				price: 19.98
			}
		];

		$scope.addStock = function () {
			if (typeof $scope.stockSymbol != "undefined" && $scope.stockSymbol != "") {
				$scope.stocks.push({
					name: "name here",
					symbol: $scope.stockSymbol,
					price: 0
				});
				$scope.stockSymbol = "";
			}
		}

		$scope.removeStock = function (symbol) {
			for (var i = 0; i < $scope.stocks.length; i++) {
				if ($scope.stocks[i].symbol == symbol) {
					$scope.stocks.splice(i, 1);
					break;
				}
			}
		}

	};

	mainController.$inject = ['$scope', '$routeParams', '$rootScope', '$timeout', 'socket'];

	angular.module('ChartTheStockMarket')
	    .controller('mainController', mainController);

}());