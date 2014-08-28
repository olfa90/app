menufortouristApp.factory('DetailsFactory', function(BusService){
    
    var factory = {};
    factory.getBusRouteDetails = function(busRoute){
        var bus = new BusRoute();
        bus.id = busRoute.id;
        bus.longName = busRoute.longName;


        BusService.findStopsByRouteId(busRoute.id).then(function(d) {
            bus.stops = d.data.rows;
        });

        BusService.findDeparturesByRouteId(busRoute.id).then(function(d) {
            var timetable = d.data.rows;
            bus.weektable = [];
            bus.saturdaytable = [];
            bus.sundaytable = [];

            for (var i = 0; i < timetable.length; i++) {
                var departureTime = timetable[i];
                
                if(departureTime.calendar == 'WEEKDAY') {
                    bus.weektable.push(departureTime.time);
                } else if(departureTime.calendar == 'SATURDAY') {
                    bus.saturdaytable.push(departureTime.time);
                } else {
                    bus.sundaytable.push(departureTime.time);
                }
            }
        });

        return bus;
    }

    return factory;
});