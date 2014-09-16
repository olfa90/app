// MainController
menufortouristApp.controller('MainController', function($scope, $location, $window, UserFactory, RestaurantsFactory, GeolocationFactory) {

	$scope.locale = UserFactory.locale;
    $scope.helpers = AppUtil.helpers;

    $scope.restaurants = [];
    
    init();

    function init(){
        // Pega os restaurantes carregados na consulta anterior.
        $scope.restaurants = RestaurantsFactory.getAroundResult();

        if ($scope.restaurants == null || $scope.restaurants.length < 1) {
            loadRestaurants();
        }
	}

    function loadRestaurants() {
        // Show spinner dialog
        window.plugins.spinnerDialog.show();
        GeolocationFactory.getCurrentPosition(function(position) {
            // Lat e Lng para teste: -22.9748244,-43.1934073
            UserFactory.lat = position.coords.latitude;
            UserFactory.lng = position.coords.longitude;
            $scope.restaurants = RestaurantsFactory.findNearRestaurants(position.coords.latitude, position.coords.longitude);
        }, function onError(error) {
            // console.log('onError');
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
            // Hide spinner dialog
            window.plugins.spinnerDialog.hide();
        });
    }

    // function initMap(){
    //     if ($scope.map == null) {
    //         // Show spinner dialog
    //         window.plugins.spinnerDialog.show();
    //         GeolocationFactory.getCurrentPosition(function(position) {
    //             $scope.map = new GoogleMap();
    //             $scope.map.initialize(position.coords.latitude, position.coords.longitude);
    //             showMarkers();
    //             window.plugins.spinnerDialog.hide();
    //         }, function onError(error) {
    //             // console.log('onError');
    //             alert('code: '    + error.code    + '\n' +
    //                   'message: ' + error.message + '\n');
    //             // Hide spinner dialog
    //             window.plugins.spinnerDialog.hide();
    //         });
    //     } else {
    //         showMarkers();
    //     }
    // }

    // function showMarkers(){
    //     $scope.map.deleteMarkers();
    //     for (var i = 0; i < $scope.restaurants.length; i++) {
    //         var restaurant = $scope.restaurants[i];
            
    //         if (i == 0) {
    //             $scope.restaurant = restaurant;
    //             $scope.map.addMarkers(restaurant, true);
    //         } else {
    //             $scope.map.addMarkers(restaurant);
    //         }
    //     };
    // }

    // Methods for internationalization
    $scope.getTitle = function() {
        if ($scope.locale == 'EN') {
            return 'Restaurants';
        } else if ($scope.locale == 'ES') {
            return 'Restaurantes';
        } else {
            return 'Restaurantes';
        }
    };
    $scope.getRefreshText = function() {
        if ($scope.locale == 'EN') {
            return 'Refresh';
        } else if ($scope.locale == 'ES') {
            return 'Actualizar';
        } else {
            return 'Atualizar';
        }
    };
    $scope.getSpecialtyText = function() {
        if ($scope.locale == 'EN') {
            return 'Specialty';
        } else if ($scope.locale == 'ES') {
            return 'Especialidad';
        } else {
            return 'Especialidade';
        }
    };
    $scope.getMapText = function() {
        if ($scope.locale == 'EN') {
            return 'Map';
        } else if ($scope.locale == 'ES') {
            return 'Mapa';
        } else {
            return 'Mapa';
        }
    };
    //


    $scope.back = function() {
        $location.path("/language");
        // $window.history.back();
    };

    $scope.goSearch = function() {
        $location.path("/search");
    };

    $scope.goMap = function(restaurants) {
        // $scope.list = false;
        // initMap();
        RestaurantsFactory.saveRestaurantsList(restaurants);
        RestaurantsFactory.setOrigin(RestaurantsFactory.MAIN_PAGE);
        $location.path("/map");
    };

    $scope.refresh = function() {
        loadRestaurants();
    };

    $scope.goDetails = function(restaurant) {
        RestaurantsFactory.saveSelectedRestaurant(restaurant);
        RestaurantsFactory.setOrigin(RestaurantsFactory.MAIN_PAGE);
        $location.path("/details");
    };
    
});