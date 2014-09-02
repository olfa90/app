// MainController
menufortouristApp.controller('MainController', function($scope, $location, RestaurantsFactory, GeolocationFactory) {

	//$scope.locationDone = false;
	$scope.restaurants = RestaurantsFactory.getSearchResult();
	
    init();

    function init(){
        // $scope.restaurants = RestaurantsFactory.findRestaurants();
        //$scope.restaurants = RestaurantsFactory.findNearRestaurants(-22.9748244,-43.1934073);
        if ($scope.restaurants == null || $scope.restaurants.length < 1) {
        	GeolocationFactory.getCurrentPosition(function(position) {
        		$scope.restaurants = RestaurantsFactory.findNearRestaurants(position.coords.latitude, position.coords.longitude);
				//$scope.locationDone = true;
        	}, function onError(error) {
		    	console.log('onError');
		        alert('code: '    + error.code    + '\n' +
		              'message: ' + error.message + '\n');
		    });
        }
	}

    $scope.goDetails = function(restaurant) {
        RestaurantsFactory.saveSelectedRestaurant(restaurant);
        $location.path("/details");
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