// MainController
menufortouristApp.controller('MainController', function($rootScope, $scope, $location, $window, RestaurantsFactory, GeolocationFactory) {

    // $scope.locale = $rootScope.user.locale;
    // $scope.connected = $rootScope.user.connected;
    $scope.helpers = AppUtil.helpers;
    $scope.restaurants = [];

    $scope.$watch(function() {
        return $rootScope.user.connected;
    }, function (newValue) {
        if ($rootScope.user.connected != newValue) {
            console.log("connected changed to " + newValue);
            $rootScope.user.connected = newValue;
            setInternetErrorMsg();
            init();
        }
    });

    init();

    function init(){
        // Pega os restaurantes carregados na consulta anterior.
        $scope.restaurants = RestaurantsFactory.getAroundResult();

        // Load restaurants filters
        // $scope.filter = RestaurantsFactory.loadFilters();
        // $scope.filter.around = true;

        if ($scope.restaurants == null || $scope.restaurants.length < 1) {
            loadRestaurants();
        }
	}

    function loadRestaurants() {
        if (!$rootScope.user.connected) {
            return;
        }
        // Show spinner dialog
        window.plugins.spinnerDialog.show();
        GeolocationFactory.getCurrentPosition(
            successCallbackGeolocation,
            errorCallbackGeolocation,
            { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }
        );
    }

    function errorCallbackGeolocation(error) {
        console.log('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        if (error.code == error.TIMEOUT) {
            // Attempt to get GPS loc timed out after 5 seconds, 
            // try low accuracy location
            GeolocationFactory.getCurrentPosition(
                successCallbackGeolocation, 
                function onError(error) {
                    console.log('code: '    + error.code    + '\n' +
                          'message: ' + error.message + '\n');

                    // In case without GPS, get first 50 restaurants.
                    $scope.restaurants = RestaurantsFactory.findNearRestaurants($rootScope.user.lat, $rootScope.user.lng);
                    
                    // Hide spinner dialog
                    // window.plugins.spinnerDialog.hide();
                    // alert(getGPSErrorMsg());
                },
                { maximumAge: 600000, timeout: 9000, enableHighAccuracy: false });

        } else {
            alert(getGPSErrorMsg());

            successCallbackGeolocation(null);
        }
    }

    function successCallbackGeolocation(position) {
        if (position) {
            // Lat e Lng para teste: -22.9748244,-43.1934073
            $rootScope.user.setLat(position.coords.latitude);
            $rootScope.user.setLng(position.coords.longitude);
        }
        
        $scope.restaurants = RestaurantsFactory.findNearRestaurants($rootScope.user.lat, $rootScope.user.lng);
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
        return $rootScope.user.messages.GPS_ERROR;
    };
    $scope.getErrorMsg = function() {
        return $rootScope.user.messages.INTERNET_ERROR;
    };
    $scope.getTitle = function() {
        return $rootScope.user.messages.RESTAURANTS_TITLE;
    };
    $scope.getFilterText = function() {
        return $rootScope.user.messages.FILTER;
    };
    $scope.getMapText = function() {
        return $rootScope.user.messages.MAP;
    };
    $scope.getInfoListText = function() {
        return $rootScope.user.messages.INFO_LIST;
    };
    //

    // MODAL
    // $scope.showFilterModal = function() {
    //     document.getElementById('filterModal').classList.add('active');
    // }
    // $scope.hideFilterModal = function() {
    //     document.getElementById('filterModal').classList.remove('active');
    // }
    // $scope.toggleFilterAround = function() {
    //     $scope.filter.around = !$scope.filter.around;
    // }
    // $scope.toggleFilterCity = function(city) {
    //     if (city == $scope.filter.selectedCity) {
    //         $scope.filter.selectedCity = null;
    //         $scope.filter.around = true;
    //         $scope.filter.selectedNeighbourhoods = [];
    //     } else {
    //         $scope.filter.selectedCity = city;
    //         $scope.filter.around = false;
    //         $scope.filter.selectedNeighbourhoods = city.neighbourhoods;
    //     }
    //     console.log($scope.filter.selectedNeighbourhoods);
    // }
    // $scope.toggleFilterNeighbourhood = function(neighbourhood) {
    //     var index = $scope.filter.selectedNeighbourhoods.indexOf(neighbourhood);
    //     if (index > -1) {
    //         $scope.filter.selectedNeighbourhoods.splice(index, 1);
    //     } else {
    //         $scope.filter.selectedNeighbourhoods.push(neighbourhood);
    //     }
    // }
    // END MODAL

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
        // RestaurantsFactory.setOrigin(RestaurantsFactory.MAIN_PAGE);
        $location.path("/map");
    };

    $scope.refresh = function() {
        loadRestaurants();
    };

    $scope.goDetails = function(restaurant) {
        RestaurantsFactory.saveSelectedRestaurant(restaurant);
        // RestaurantsFactory.setOrigin(RestaurantsFactory.MAIN_PAGE);
        $location.path("/details");
    };
    
});