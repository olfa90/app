// SearchController
menufortouristApp.controller('MapController', function($rootScope, $scope, $location, $window, RestaurantsFactory, GeolocationFactory) {

    // $scope.locale = UserFactory.locale;
    $scope.helpers = AppUtil.helpers;

    init();

    function init(){
        // Pega os restaurantes carregados na consulta anterior.
        $scope.restaurants = RestaurantsFactory.getRestaurantsList();
        
        // var map = RestaurantsFactory.getMapState();

        // Show spinner dialog
        // window.plugins.spinnerDialog.show();
        var map = new GoogleMap();
        map.initialize($rootScope.user);
        showMarkers(map);
    }

    // Metodos for internationalization
    function getGPSErrorMsg() {
        return $rootScope.user.messages.GPS_ERROR;
    };
    $scope.getErrorMsg = function() {
        return $rootScope.user.messages.INTERNET_ERROR;
    };
    $scope.getTitle = function() {
        return $rootScope.user.messages.RESTAURANTS_TITLE;
    };
    //


    $scope.goDetails = function(restaurant) {
        RestaurantsFactory.saveSelectedRestaurant(restaurant);
        $location.path("/details");
    };

    $scope.back = function() {
        // $location.path("/main");
        $window.history.back();
    };

    $scope.goSearch = function() {
        RestaurantsFactory.cleanSearchResult();
        $location.path("/search");
    };
    
    $scope.goList = function() {
        // var origin = RestaurantsFactory.getOrigin();
        // if (origin == RestaurantsFactory.SEARCH_PAGE || origin == RestaurantsFactory.SEARCH_MAP_PAGE) {
        //     $location.path("/search");
        // } else {
        //     $location.path("/main");
        // }
        $window.history.back();
    };

    // Private util methods
    function showMarkers(map){
        map.deleteMarkers();
        for (var i = 0; i < $scope.restaurants.length; i++) {
            var restaurant = $scope.restaurants[i];
            
            if (i == 0) {
                $scope.restaurant = restaurant;
                map.addMarkers(restaurant, true);
            } else {
                map.addMarkers(restaurant);
            }
        };

        map.fitBounds();
    }
    
});