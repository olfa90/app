// MainController
menufortouristApp.controller('MainController', function($scope, $location, $window, UserFactory, RestaurantsFactory, GeolocationFactory) {

    // $scope.UserFactory = UserFactory;
    $scope.locale = UserFactory.locale;
    $scope.connected = UserFactory.connected;
    $scope.helpers = AppUtil.helpers;
    $scope.restaurants = [];

    $scope.$watch(function() {
        return UserFactory.connected;
    }, function (newValue) {
        if ($scope.connected != newValue) {
            console.log("connected changed to " + newValue);
            $scope.connected = newValue;
            init();
        }
    });

    init();

    function init(){
        // Pega os restaurantes carregados na consulta anterior.
        $scope.restaurants = RestaurantsFactory.getAroundResult();

        if ($scope.restaurants == null || $scope.restaurants.length < 1) {
            loadRestaurants();
        }
	}

    function loadRestaurants() {
        if (!UserFactory.connected) {
            return;
        }
        // Show spinner dialog
        window.plugins.spinnerDialog.show();
        GeolocationFactory.getCurrentPosition(function(position) {
            // Lat e Lng para teste: -22.9748244,-43.1934073
            UserFactory.setLat(position.coords.latitude);
            UserFactory.setLng(position.coords.longitude);
            $scope.restaurants = RestaurantsFactory.findNearRestaurants(position.coords.latitude, position.coords.longitude);
        }, function onError(error) {
            // Hide spinner dialog
            window.plugins.spinnerDialog.hide();
            console.log('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
            alert(getGPSErrorMsg());
        }, { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
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
    function getGPSErrorMsg() {
        if ($scope.locale == 'EN') {
            return "Could not get the current position. Either GPS signals are weak or GPS has been switched off.";
        } else if ($scope.locale == 'ES') {
            return 'No se pudo obtener la posición actual. O las señales GPS son débiles o GPS se ha desconectado.';
        } else {
            return 'Não foi possível obter a posição atual. Ou os sinais de GPS estão fracos ou o GPS foi desligado.';
        }
    };
    $scope.getErrorMsg = function() {
        if ($scope.locale == 'EN') {
            return 'No Internet connection';
        } else if ($scope.locale == 'ES') {
            return 'No hay conexión a Internet';
        } else {
            return 'Sem conexão com a Internet';
        }
    };
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