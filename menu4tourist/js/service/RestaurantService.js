menufortouristApp.service( 'RestaurantService', function ( $http, $q ) {
  return {
    get: function getRestaurant( id ) {
      // We create our own promise to return
      var deferred = $q.defer();

      var url = 'http://localhost:3000';

      // /restaurantes/1.json
      $http.get('/restaurantes/'+id+'.json').then( function ( restaurant ) {
        deferred.resolve( restaurant );
      }, function getRestaurantError() { deferred.reject(); } );

      return deferred.promise;
    },

    find: function findRestaurants() {
      // We create our own promise to return
      var deferred = $q.defer();

      var url = 'http://localhost:3000';

      $http.get(url+'/restaurantes.json').then( function ( restaurants ) {
        // resolve the promise
        deferred.resolve( restaurants );

      }, function getRestaurantsError() { deferred.reject(); } );

      return deferred.promise;
    },

    fetchCardapio: function getSecoes( restaurant ) {
      // We create our own promise to return
      var deferred = $q.defer();

      $http.get(restaurant.menuUrl).then( function ( object ) {
        collection = object.data;
        
        var secoes = [];
        collection.forEach(function (secao) {
          secoes.push(secao);
        });

        restaurant.secoes = secoes;
        // resolve the promise
        deferred.resolve( restaurant );

      }, function getRestaurantsError() { deferred.reject(); } );

      return deferred.promise;
    }
  };
});