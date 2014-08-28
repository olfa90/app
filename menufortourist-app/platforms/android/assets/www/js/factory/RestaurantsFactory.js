menufortouristApp.factory('RestaurantsFactory', function(RestaurantService){

    var factory = {};

    var restaurants = [];
    var restaurant = null;
    
    factory.findRestaurants = function(){
        return RestaurantService.find().then(function(d) {
            restaurants = d.data;
            return restaurants;
        });
    };

    factory.findNearRestaurants = function(lat, lng){
        return RestaurantService.findNear(lat, lng).then(function(collection) {
            console.log(collection);
            restaurants = collection;

            return restaurants;
        });
    };

    factory.getRestaurantCardapio = function(restaurantParam){
        if (restaurantParam == null) {
            return;
        }
        return RestaurantService.fetchCardapio(restaurantParam).then(function(object) {
            console.log(object);
            restaurant = object;
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

    factory.getSearchResult = function() {
        return restaurants;
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