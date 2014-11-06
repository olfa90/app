// SearchController
menufortouristApp.controller('SearchController', function($rootScope, $scope, $location, $window, GeolocationFactory, RestaurantsFactory) {

    // $scope.locale = UserFactory.locale;
    // $scope.connected = UserFactory.connected;
    $scope.helpers = AppUtil.helpers;

    $scope.searching = true;
    $scope.searchText = '';

    $scope.restaurants = [];

    $scope.$watch(function() {
        return $rootScope.user.connected;
    }, function (newValue) {
        if ($rootScope.user.connected != newValue) {
            $rootScope.user.connected = newValue;
            init();
        }
    });

    init();

    function init(){
        // Pega os restaurantes carregados na consulta anterior.
        $scope.restaurants = RestaurantsFactory.getSearchResult();

        if ($scope.restaurants != null && $scope.restaurants.length > 0) {
            $scope.searching = false;
        }
        if (!$rootScope.user.connected) {
            return;
        }

        GeolocationFactory.getCurrentPosition(
            successCallbackGeolocation,
            errorCallbackGeolocationHighAccuracy,
            { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
    }

    function errorCallbackGeolocationHighAccuracy(error) {
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
                },
                { maximumAge: 60000, timeout: 9000, enableHighAccuracy: false });
        }
    }

    function successCallbackGeolocation(position) {
        // Lat e Lng para teste: -22.9748244,-43.1934073
        $rootScope.user.setLat(position.coords.latitude);
        $rootScope.user.setLng(position.coords.longitude);
    }

    // Methods for internationalization
    function getGPSErrorMsg() {
        if ($rootScope.user.locale == 'en') {
            return "Could not get the current position. Either GPS signals are weak or GPS has been switched off.";
        } else if ($rootScope.user.locale == 'es') {
            return 'No se pudo obtener la posición actual. O las señales GPS son débiles o GPS se ha desconectado.';
        } else {
            return 'Não foi possível obter a posição atual. Ou os sinais de GPS estão fracos ou o GPS foi desligado.';
        }
    };
    $scope.getErrorMsg = function() {
        if ($rootScope.user.locale == 'pt-BR') {
            return 'Sem conexão com a Internet';
        } else if ($rootScope.user.locale == 'es') {
            return 'No hay conexión a Internet';
        } else {
            return 'No Internet connection';
        }
    };
    $scope.getTitle = function() {
        if ($rootScope.user.locale == 'en') {
            return 'Search';
        } else if ($rootScope.user.locale == 'es') {
            return 'Búsqueda';
        } else if ($rootScope.user.locale.substring(0, 2) == 'fr') {
            return 'Recherche';
        } else if ($rootScope.user.locale.substring(0, 2) == 'de') {
            return 'Suche';
        } else {
            return 'Busca';
        }
    };
    $scope.getPlaceholder = function() {
        if ($rootScope.user.locale == 'en') {
            return "Restaurant's name or location";
        } else if ($rootScope.user.locale == 'es') {
            return 'Nombre o ubicación del restaurante';
        } else if ($rootScope.user.locale.substring(0, 2) == 'fr') {
            return "Le nom ou l'emplacement du restaurant";
        } else if ($rootScope.user.locale.substring(0, 2) == 'de') {
            return 'Namen oder Speicherort Restaurants';
        } else {
            return 'Nome ou localização do restaurante';
        }
    };
    $scope.getMapText = function() {
        if ($rootScope.user.locale == 'en') {
            return 'Map';
        } else if ($rootScope.user.locale == 'es') {
            return 'Mapa';
        } else if ($rootScope.user.locale.substring(0, 2) == 'fr') {
            return 'Carte';
        } else if ($rootScope.user.locale.substring(0, 2) == 'de') {
            return 'Landkarte';
        } else {
            return 'Mapa';
        }
    };
    //


    $scope.search = function(){
        if ($scope.searchText == null || $scope.searchText.trim() == '') {
            return;
        }
        if (!$rootScope.user.connected) {
            return;
        }

        $scope.restaurants = RestaurantsFactory.searchRestaurants($scope.searchText, $rootScope.user.lat, $rootScope.user.lng);
        $scope.searching = false;
    }

    $scope.goDetails = function(restaurant) {
        RestaurantsFactory.saveSelectedRestaurant(restaurant);
        // RestaurantsFactory.setOrigin(RestaurantsFactory.SEARCH_PAGE);
        $location.path("/details");
    };

    $scope.back = function() {
        RestaurantsFactory.cleanSearchResult();
        $location.path("/main");
        // $window.history.back();
    };

    $scope.showSearch = function() {
        $scope.searching = true;
    };

    $scope.goMap = function(restaurants) {
        RestaurantsFactory.saveRestaurantsList(restaurants);
        RestaurantsFactory.setOrigin(RestaurantsFactory.SEARCH_PAGE);
        $location.path("/map");
    };

    /**
     * Remove acentos de caracteres
     * @param  {String} stringComAcento [string que contem os acentos]
     * @return {String}                 [string sem acentos]
     */
    $scope.removerAcentos = function( newStringComAcento ) {
      var string = newStringComAcento;
        var mapaAcentosHex  = {
            A : /[\xE0-\xE6]/g,
            E : /[\xE8-\xEB]/g,
            I : /[\xEC-\xEF]/g,
            O : /[\xF2-\xF6]/g,
            U : /[\xF9-\xFC]/g,
            C : /\xE7/g,
            N : /\xF1/g
        };
        var mapaAcentos = {
            A : /[ÁÀÂÃáàâã]/g,
            E : /[ÉÈÊéèê]/g,
            I : /[ÍÌÎíìî]/g,
            O : /[ÓÒÔÕóòôõ]/g,
            U : /[ÚÙÛúùû]/g,
            C : /[Çç]/g,
            N : /\xF1/g
        };
     
        for ( var letra in mapaAcentos ) {
            var expressaoRegular = mapaAcentos[letra];
            string = string.replace( expressaoRegular, letra );
        }
     
        return string.toUpperCase();
    };
    
});