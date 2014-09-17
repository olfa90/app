menufortouristApp.factory('RestaurantsFactory', function(RestaurantService){

    var factory = {};

    var restaurants = [];
    var restaurantsAround = [];
    var restaurantsSearch = [];
    var restaurant = null;
    var map = null;

    // CONSTANTS:
    factory.MAIN_PAGE = 1;
    factory.SEARCH_PAGE = 2;
    factory.MAIN_MAP_PAGE = 3;
    factory.SEARCH_MAP_PAGE = 4;
    var origin = 1;
    
    factory.findRestaurants = function(){
        return RestaurantService.find().then(function(d) {
            restaurants = d.data;
            return restaurants;
        });
    };

    factory.searchRestaurants = function(search, lat, lng){
        // Show spinner dialog
        window.plugins.spinnerDialog.show();
        return RestaurantService.search(search, lat, lng).then(function(collection) {
            // console.log(collection);
            restaurantsSearch = collection;

            // Hide spinner dialog
            window.plugins.spinnerDialog.hide();
            return restaurantsSearch;
        }, function(reason) {
            console.log('Failed: ' + reason);
            alert("Não foi possível executar esta operação. Por favor, tente novamente mais tarde.");
            restaurantsSearch = [];

            // Hide spinner dialog
            window.plugins.spinnerDialog.hide();
            return restaurantsSearch;
        });
    };

    factory.findNearRestaurants = function(lat, lng){
        return RestaurantService.findNear(lat, lng).then(function(collection) {
            // console.log(collection);
            restaurantsAround = collection;

            // Hide spinner dialog
            window.plugins.spinnerDialog.hide();

            return restaurantsAround;
        }, function(reason) {
            console.log('Failed: ' + reason);
            alert("Não foi possível executar esta operação. Por favor, tente novamente mais tarde.");
            restaurantsAround = [];

            // Hide spinner dialog
            window.plugins.spinnerDialog.hide();
            return restaurantsAround;
        });
    };

    factory.getRestaurantCardapio = function(restaurantParam){
        // Show spinner dialog
        window.plugins.spinnerDialog.show();
        if (restaurantParam == null) {
            // Hide spinner dialog
            window.plugins.spinnerDialog.hide();
            return;
        }
        return RestaurantService.fetchCardapio(restaurantParam).then(function(object) {
            // console.log(object);
            restaurant = object;
            // Hide spinner dialog
            window.plugins.spinnerDialog.hide();
            return restaurant;
        });
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


    // Private util methods
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