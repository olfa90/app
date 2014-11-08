menufortouristApp.factory('RestaurantsFactory', function($filter, RestaurantService, UserFactory) {
    var factory = {};

    var restaurantsCount = []
    var restaurants = [];
    var restaurantsAround = [];
    var restaurantsSearch = [];
    var restaurant = null;
    var map = null;

    var filter = null;

    var origin = 1;

    factory.countRestaurants = function(){
        return RestaurantService.countRestaurants().then(function(data) {
            //console.log(data);
            restaurantsCount = data;

            if (restaurantsCount == null) {
              console.log('Something went wrong');
            } else {
                // Create new Array by prototype using filter method.
                newList = restaurantsCount.filter(function (object, index, array) {
                    return (object.count > 0);
                });
                restaurantsCount = newList;
            }

            return restaurantsCount;
        }, function(reason) {
            console.log('Failed: ' + reason);

            return restaurantsCount;
        });
    };

    factory.findNearRestaurants = function(lat, lng){
        return RestaurantService.findNear(lat, lng).then(function(collection) {
            //console.log(collection);
            restaurantsAround = collection;

            if (restaurantsAround == null || restaurantsAround.length == 0) {
              alert(getNoResultsFoundMsg());
            }
                // restaurantsAround = $filter('orderBy')(restaurantsAround, 'distance');

            // Hide spinner dialog
            window.plugins.spinnerDialog.hide();

            return restaurantsAround;
        }, function(reason) {
            console.log('Failed: ' + reason);
            alert(getErrorMsg());
            restaurantsAround = [];

            // Hide spinner dialog
            window.plugins.spinnerDialog.hide();
            return restaurantsAround;
        });
    };

    factory.loadFilters = function(){
        return RestaurantService.loadFilters().then(function(data) {
            console.log(data);
            filter = data;

            if (filter == null) {
              console.log('Something went wrong');
            }

            return filter;
        }, function(reason) {
            console.log('Failed: ' + reason);

            return filter;
        });
    };

    factory.searchRestaurants = function(search, lat, lng){
        // Show spinner dialog
        window.plugins.spinnerDialog.show();
        return RestaurantService.search(search, lat, lng).then(function(collection) {
            // console.log(collection);
            restaurantsSearch = collection;

            if (restaurantsSearch == null || restaurantsSearch.length == 0) {
              alert(getNoResultsFoundMsg());
            }

            // Hide spinner dialog
            window.plugins.spinnerDialog.hide();
            return restaurantsSearch;
        }, function(reason) {
            console.log('Failed: ' + reason);
            alert(getErrorMsg());
            restaurantsSearch = [];

            // Hide spinner dialog
            window.plugins.spinnerDialog.hide();
            return restaurantsSearch;
        });
    };

    factory.getRestaurantCardapio = function(restaurantParam){
        if (restaurantParam == null) {
            return;
        }
        // Show spinner dialog
        window.plugins.spinnerDialog.show();
        return RestaurantService.fetchCardapio(restaurantParam).then(function(object) {
            // console.log(object);
            restaurant = object;
            // Hide spinner dialog
            window.plugins.spinnerDialog.hide();
            return restaurant;
        }, function(reason) {
            console.log('Failed: ' + reason);
            alert(getErrorMsg());

            // Hide spinner dialog
            window.plugins.spinnerDialog.hide();
            return restaurant;
        });
    };

    // Save object for using when coming back
    // factory.saveRestaurantsCounting = function(restaurantsCounting) {
    //     restaurantsCount = restaurantsCounting;
    // };

    // //  Get object loaded when app starts
    factory.getRestaurantsCount = function() {
        return restaurantsCount;
    };

    // Save object for the next page
    factory.saveSelectedRestaurant = function(selectedRestaurant) {
        restaurant = selectedRestaurant;
    };

    // Get object saved from previous page
    factory.getSelectedRestaurant = function() {
        return restaurant;
    };

    // Save list for the next page
    factory.saveRestaurantsList = function(restaurantsList) {
        restaurants = restaurantsList;
    };

    // Get list saved from previous page
    factory.getRestaurantsList = function() {
        return restaurants;
    };

    factory.getAroundResult = function() {
        return restaurantsAround;
    };

    factory.getSearchResult = function() {
        return restaurantsSearch;
    };

    // When user change his language.
    factory.cleanMainResult = function() {
        restaurantsAround = [];
    };

    factory.cleanSearchResult = function() {
        restaurantsSearch = [];
    };

    // Save map for next time
    factory.saveMapState = function(mapState) {
        map = mapState;
    };

    factory.getMapState = function() {
        return map;
    };

    // Set origin page
    factory.setOrigin = function(page){
        origin = page;
    };

    factory.getOrigin = function(){
        return origin;
    };


    /*
    *   Private util methods
    */
    // Methods for internationalization
    function getErrorMsg() {
        if (UserFactory.locale == 'en') {
            return "Could not perform this operation. Please try again later";
        } else if (UserFactory.locale == 'es') {
            return 'No se pudo realizar esta operación. Por favor, inténtelo de nuevo más tarde';
        } else {
            return 'Não foi possível executar esta operação. Por favor, tente novamente mais tarde';
        }
    }
    function getNoResultsFoundMsg() {
        if (UserFactory.locale == 'en') {
            return "No restaurants found";
        } else if (UserFactory.locale == 'es') {
            return 'No hay restaurantes encontrados';
        } else {
            return 'Nenhum restaurante foi encontrado';
        }
    }
    //

    function setDistanceFromUser(restaurantParam, userLat, userLng) {
        if (restaurantParam.address == null) {
            return;
        }
        // Latitude/longitude spherical geodesy formulae & scripts (c) Chris Veness 2002-2011                   - www.movable-type.co.uk/scripts/latlong.html 
        // where R is earth’s radius (mean radius = 6,371km);
        // note that angles need to be in radians to pass to trig functions!
        var R = 6371; // km
        var dLat = toRad(userLat-restaurantParam.address.lat);
        var dLon = toRad(userLng-restaurantParam.address.lng);
        var lat1 = toRad(restaurantParam.address.lat);
        var lat2 = toRad(userLat);

        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c;

        restaurantParam.distance = d;
        return restaurantParam;
    }

    function toRad(Value) {
        /** Converts numeric degrees to radians */
        return Value * Math.PI / 180;
    }

    return factory;
});