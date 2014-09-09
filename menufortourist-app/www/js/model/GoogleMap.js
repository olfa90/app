function GoogleMap() {
	var map = null;
	var infoWindow = new google.maps.InfoWindow();
	this.initialize = function(lat, lng){
		this.map = showMap(lat, lng);
	}

	var showMap = function(lat, lng){
		var mapOptions = {
			zoom: 13,
			center: new google.maps.LatLng(lat, lng),
			disableDefaultUI: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}

		var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

		return map;
	}

	//public
	this.addMarkersToMap = function(lat, lng, info, selected){
		var latitudeAndLongitude = new google.maps.LatLng(lat, lng);
		 
		var marker = new google.maps.Marker({
			position: latitudeAndLongitude,
			map: this.map,
			title: info.name
		});

		marker.content = '<div class="infoWindowContent">' + (info.specialty == null ? '' : info.specialty) + '</div>';
        
		// When marker clicked
		google.maps.event.addListener(marker, 'click', function() {
			infoWindow.setContent('<h4 class="marker-info">' + marker.title + '</h4>' + marker.content);
            infoWindow.open(this.map, marker);

			this.map.setCenter(latitudeAndLongitude);
			var $scope = angular.element(document.getElementById('content_map_info')).scope();
	        $scope.restaurant = info;
	        $scope.$apply(); //tell angular to check dirty bindings again
        	// onclick.apply(this, info);
		});

		if (selected) {
        	this.map.setCenter(latitudeAndLongitude);
		}
	}

	this.fitBounds = function(latOne, lngOne, latTwo, lngTwo){
		var latitudeAndLongitudeOne = new google.maps.LatLng(latOne, lngOne);
		var latitudeAndLongitudeTwo = new google.maps.LatLng(latTwo, lngTwo);
		var mapBounds = new google.maps.LatLngBounds();
		mapBounds.extend(latitudeAndLongitudeOne);
		mapBounds.extend(latitudeAndLongitudeTwo);

		this.map.fitBounds(mapBounds);
	}

}