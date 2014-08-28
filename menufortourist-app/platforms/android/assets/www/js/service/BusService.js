menufortouristApp.service('BusService', function($http){

	this.findStopsByRouteId = function(idRoute) {
		var params = {"params" : {"routeId" : idRoute}};

		//Stops list view
	    var promise = $http({
	        url : "https://dashboard.appglu.com/v1/queries/findStopsByRouteId/run",
	        method : "POST",
	        crossDomain : true,
	        data : JSON.stringify(params)
	    });

	    return promise;
	};

	this.findDeparturesByRouteId = function(idRoute) {
		var params = {"params" : {"routeId" : idRoute}};
		//Timetable view
        var promise = $http({
            url : "https://dashboard.appglu.com/v1/queries/findDeparturesByRouteId/run",
            method : "POST",
            crossDomain : true,
            data : JSON.stringify(params)
        });

        return promise;
    };

    this.findRoutesByStopName = function(stopName) {
    	//ajax post request
        var params = {"params" : {"stopName" : "%"+stopName+"%"}};

        var promise = $http({
            url : "https://dashboard.appglu.com/v1/queries/findRoutesByStopName/run",
            method : "POST",
            crossDomain : true,
            data : JSON.stringify(params)
        }).
        success(function(object) {
            if (object.rows.length == 0) {
                alert("Unfortunately, there is no route for the destination you want.");
                return;
            }
        }).
        error(function(object) {
            alert("We're having some troubles right now. Please try again later.");
            return;
        });

        return promise;
    }

    this.findNearRestaurants = function(lat, lng) {
        //ajax post request
        // var params = {"params" : {"stopName" : "%"+stopName+"%"}};

        var promise = $http({
            url : "http://localhost:3000/pt-BR/restaurantes.json",
            method : "GET",
            crossDomain : true
            // ,data : JSON.stringify(params)
        }).
        success(function(object) {
            if (object.rows.length == 0) {
                alert("Unfortunately, there is no route for the destination you want.");
                return;
            }
        }).
        error(function(object) {
            alert("We're having some troubles right now. Please try again later.");
            return;
        });

        return promise;
    }

});