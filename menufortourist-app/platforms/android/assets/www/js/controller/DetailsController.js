// DetailsController
menufortouristApp.controller('DetailsController', function($scope, $location, RestaurantsFactory){

    $scope.restaurant = null;

    init();

    function init(){
        $scope.restaurant = RestaurantsFactory.getSelectedRestaurant();
        restaurant = RestaurantsFactory.getRestaurantCardapio($scope.restaurant);
        if (restaurant != null) {
        	$scope.restaurant = restaurant;
        }
    }

    $scope.back = function() {
        $location.path("/main");
    };

    $scope.formatPriceDescription = function(description) {
        if (description != null) {
            return '('+description+')';
        }
        return '';
    }
});