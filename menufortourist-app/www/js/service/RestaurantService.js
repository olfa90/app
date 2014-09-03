menufortouristApp.service( 'RestaurantService', function ( $http, $q ) {
  var url = 'http://www.menufortourist.com';
// var url = 'http://192.168.0.9:3000';
  return {
    get: function getRestaurant( id ) {
      // We create our own promise to return
      var deferred = $q.defer();

      // /restaurantes/1.json
      $http.get(url+'/restaurantes/'+id+'.json').then( function ( restaurant ) {
        deferred.resolve( restaurant );
      }, function getRestaurantError() { deferred.reject(); } );

      return deferred.promise;
    },

    find: function findRestaurants() {
      // We create our own promise to return
      var deferred = $q.defer();

      $http.get(url+'/restaurantes.json').then( function ( restaurants ) {
        // resolve the promise
        deferred.resolve( restaurants );

      }, function getRestaurantsError() { deferred.reject(); } );

      return deferred.promise;
    },

    search: function searchRestaurants(search) {
      // We create our own promise to return
      var deferred = $q.defer();

      $http.get(url+'/restaurantes/search.json', {
        params: {search: search}
      }).then( function ( object ) {
        if (object.data == null || object.data.length == 0) {
          alert("Nenhum restaurante foi encontrado.");
        }
        restaurants = object.data;
        // resolve the promise
        deferred.resolve( restaurants );

      }, function getRestaurantsError() { 
        alert("Não foi possível executar esta operação. Por favor, tente novamente mais tarde.");
        deferred.reject(); 
      });

      return deferred.promise;
    },

    findNear: function findNearRestaurants(lat, lng) {
      // We create our own promise to return
      var deferred = $q.defer();

      // url = 'http://192.168.0.7:3000'

      $http.get(url+'/restaurantes/around.json', {
        params: {lat: lat, lng: lng}
      }).then( function ( object ) {
        console.log(object);
        if (object.data == null || object.data.length == 0) {
          alert("Nenhum restaurante foi encontrado na proximidade.");
        }
        restaurants = object.data;
        // resolve the promise
        deferred.resolve( restaurants );

      }, function getRestaurantsError() { 
        alert("Não foi possível executar esta operação. Por favor, tente novamente mais tarde.");
        deferred.reject();
      });

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