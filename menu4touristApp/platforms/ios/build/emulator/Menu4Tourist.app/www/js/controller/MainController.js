// MainController
floripabusApp.controller('MainController', function($scope, $location, RoutesFactory) {
	
	$scope.stopName = null;
	//$scope.busRoutes = RoutesFactory.getSearchResult();
	
    $scope.search = function(){
    	$scope.busRoutes = RoutesFactory.getRoutes($scope.stopName);
    }

    $scope.showRouteDetails = function(busRoute) {
    	RoutesFactory.saveSelectedBusRoute(busRoute);
    	$location.path("/details");
	};

    $scope.goDetails = function() {
        $location.path("/details");
    };
});