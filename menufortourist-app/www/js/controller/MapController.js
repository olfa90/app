// SearchController
menufortouristApp.controller('MapController', function($scope, $location, $window, UserFactory, RestaurantsFactory, GeolocationFactory) {

    $scope.locale = UserFactory.locale;
    $scope.helpers = AppUtil.helpers;

    init();

    function init(){
        // Pega os restaurantes carregados na consulta anterior.
        $scope.restaurants = RestaurantsFactory.getRestaurantsList();
        
        // var map = RestaurantsFactory.getMapState();

        // Show spinner dialog
        // window.plugins.spinnerDialog.show();
        GeolocationFactory.getCurrentPosition(function(position) {
            var map = new GoogleMap();
            map.initialize(position.coords.latitude, position.coords.longitude);
            showMarkers(map);

            RestaurantsFactory.saveMapState(map);
            // window.plugins.spinnerDialog.hide();
        }, function onError(error) {
            // console.log('onError');
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
            // Hide spinner dialog
            // window.plugins.spinnerDialog.hide();
        });
    }

    // Metodos for internationalization
    $scope.getTitle = function() {
        if ($scope.locale == 'EN') {
            return 'Restaurants';
        } else if ($scope.locale == 'ES') {
            return 'Restaurantes';
        } else {
            return 'Restaurantes';
        }
    };
    //


    $scope.goDetails = function(restaurant) {
        RestaurantsFactory.saveSelectedRestaurant(restaurant);
        RestaurantsFactory.setOrigin(RestaurantsFactory.MAIN_MAP_PAGE);
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
    }
    
});