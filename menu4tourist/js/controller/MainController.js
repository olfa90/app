// MainController
menufortouristApp.controller('MainController', function($scope, $location, RestaurantsFactory) {

    init();

    function init(){
        $scope.restaurants = RestaurantsFactory.findRestaurants();
    }

    $scope.goDetails = function(restaurant) {
        RestaurantsFactory.saveSelectedRestaurant(restaurant);
        $location.path("/details");
    };
});