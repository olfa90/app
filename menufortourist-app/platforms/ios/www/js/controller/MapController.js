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
        map.initialize($rootScope.user.lat, $rootScope.user.lng, $rootScope.user.locale);
        showMarkers(map);
    }

    // Metodos for internationalization
    function getGPSErrorMsg() {
        if ($rootScope.user.locale == 'en') {
            return "Could not get the current position. Either GPS signals are weak or GPS has been switched off.";
        } else if ($rootScope.user.locale == 'es') {
            return 'No se pudo obtener la posición actual. O las señales GPS son débiles o GPS se ha desconectado.';
        } else {
            return 'Não foi possível obter a posição atual. Ou os sinais de GPS estão fracos ou o GPS foi desligado.';
        }
    };
    $scope.getTitle = function() {
        if ($rootScope.user.locale == 'en') {
            return 'Restaurants';
        } else if ($rootScope.user.locale == 'es') {
            return 'Restaurantes';
        } else if ($rootScope.user.locale.substring(0, 2) == 'fr') {
            return 'Restaurants';
        } else if ($rootScope.user.locale.substring(0, 2) == 'de') {
            return 'Restaurants';
        } else {
            return 'Restaurantes';
        }
    };
    //


    $scope.goDetails = function(restaurant) {
        RestaurantsFactory.saveSelectedRestaurant(restaurant);
        // RestaurantsFactory.setOrigin(RestaurantsFactory.MAIN_MAP_PAGE);
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