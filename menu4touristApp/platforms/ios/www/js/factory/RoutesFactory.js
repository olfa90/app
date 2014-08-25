floripabusApp.factory('RoutesFactory', function(BusService){

    var factory = {};

    var busRoutes = [];
    var busRoute = null;
    
    factory.getRoutes = function(stopName){
        return BusService.findRoutesByStopName(stopName).then(function(d) {
            busRoutes = d.data.rows;
            return busRoutes;
        });
    };

    factory.getSearchResult = function() {
        return busRoutes;
    };

    factory.saveSelectedBusRoute = function(selectedBusRoute) {
        busRoute = selectedBusRoute;
    };

    factory.getSelectedBusRoute = function() {
        return busRoute;
    };

    return factory;
});