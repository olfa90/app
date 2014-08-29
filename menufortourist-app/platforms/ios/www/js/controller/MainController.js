// MainController
menufortouristApp.controller('MainController', function($scope, $location, RestaurantsFactory, GeolocationFactory) {

	//$scope.locationDone = false;
	$scope.restaurants = RestaurantsFactory.getSearchResult();
	
    init();

    function init(){
        // $scope.restaurants = RestaurantsFactory.findRestaurants();
        //$scope.restaurants = RestaurantsFactory.findNearRestaurants(-22.9748244,-43.1934073);
        if ($scope.restaurants == null || $scope.restaurants.length < 1) {
        	GeolocationFactory.getCurrentPosition(function(position) {
        		$scope.restaurants = RestaurantsFactory.findNearRestaurants(position.coords.latitude, position.coords.longitude);
				//$scope.locationDone = true;
        	}, function onError(error) {
		    	console.log('onError');
		        alert('code: '    + error.code    + '\n' +
		              'message: ' + error.message + '\n');
		    });
        }
	}

    $scope.goDetails = function(restaurant) {
        RestaurantsFactory.saveSelectedRestaurant(restaurant);
        $location.path("/details");
    };
    
});