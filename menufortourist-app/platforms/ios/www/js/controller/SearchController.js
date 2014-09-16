// SearchController
menufortouristApp.controller('SearchController', function($scope, $location, $window, UserFactory, RestaurantsFactory) {

    $scope.locale = UserFactory.locale;
    $scope.helpers = AppUtil.helpers;

    $scope.searching = true;
    $scope.searchText = '';

    $scope.restaurants = [];

    init();

    function init(){
        // Pega os restaurantes carregados na consulta anterior.
        $scope.restaurants = RestaurantsFactory.getSearchResult();

        console.log($scope.restaurants);
        console.log($scope.restaurants.length);
        if ($scope.restaurants != null && $scope.restaurants.length > 0) {
            $scope.searching = false;
        }
    }

    // Methods for internationalization
    $scope.getTitle = function() {
        if ($scope.locale == 'EN') {
            return 'Search';
        } else if ($scope.locale == 'ES') {
            return 'Búsqueda';
        } else {
            return 'Busca';
        }
    };
    $scope.getPlaceholder = function() {
        if ($scope.locale == 'EN') {
            return "Restaurant's name or location";
        } else if ($scope.locale == 'ES') {
            return 'Nombre o ubicación del restaurante';
        } else {
            return 'Nome ou localização do restaurante';
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


    $scope.search = function(){
        if ($scope.searchText == null || $scope.searchText.trim() == '') {
            return;
        }

        $scope.restaurants = RestaurantsFactory.searchRestaurants($scope.searchText);
        $scope.searching = false;
    }

    $scope.goDetails = function(restaurant) {
        RestaurantsFactory.saveSelectedRestaurant(restaurant);
        RestaurantsFactory.setOrigin(RestaurantsFactory.SEARCH_PAGE);
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