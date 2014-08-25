menufortouristApp.factory('RestaurantsFactory', function(RestaurantService){

    var factory = {};

    var restaurants = [];
    var restaurant = null;
    
    factory.findRestaurants = function(){
        return RestaurantService.find().then(function(d) {
            console.log(d.data);
            restaurants = d.data;
            return restaurants;
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

    return factory;
});