// DetailsController
menufortouristApp.controller('DetailsController', function($scope, $location, RestaurantsFactory){

    $scope.restaurant = null;

    init();

    function init(){
        $scope.restaurant = RestaurantsFactory.getSelectedRestaurant();
    }

    $scope.back = function() {
        $location.path("/main");
    };
});