// SearchController
menufortouristApp.controller('SearchController', function($scope, $location, UserFactory, RestaurantsFactory) {

    $scope.locale = UserFactory.locale;

    $scope.searchText = '';

    init();

    function init(){
        // Pega os restaurantes carregados na consulta anterior.
        $scope.restaurants = RestaurantsFactory.getSearchResult();
    }

    // Metodos for internationalization
    $scope.getPlaceholder = function() {
        if ($scope.locale == 'EN') {
            return "Restaurant's name or location";
        } else if ($scope.locale == 'ES') {
            return 'Nombre o ubicación del restaurante';
        } else {
            return 'Nome ou localização do restaurante';
        }
    };
    //


    $scope.search = function(){
        if ($scope.searchText == null || $scope.searchText.trim() == '') {
            return;
        }

        $scope.restaurants = RestaurantsFactory.searchRestaurants($scope.searchText);
    }

    $scope.goDetails = function(restaurant) {
        RestaurantsFactory.saveSelectedRestaurant(restaurant);
        RestaurantsFactory.setOrigin(RestaurantsFactory.SEARCH_PAGE);
        $location.path("/details");
    };

    $scope.back = function() {
        $location.path("/main");
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
     
        return string;
    };
    
});