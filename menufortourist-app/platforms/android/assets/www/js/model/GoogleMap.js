function GoogleMap() {
	var map = null;
	var markers = [];
	var infoWindow = new google.maps.InfoWindow();
	var userMarker = {
		url: 'img/current-location.png',
	    size: new google.maps.Size(22, 22),
		origin: new google.maps.Point(0, 18),
	    anchor: new google.maps.Point(11, 11)
	};
	var iconMarker = {
		url: 'icon.png',
	    // This marker is 25 pixels wide by 25 pixels tall.
	    // size: new google.maps.Size(128, 128),
	    // The origin for this image is 0,0.
	    // origin: new google.maps.Point(0, 0),
	    // the anchor where the icon's hotspot should be located (which is based on the origin)
	    // anchor: new google.maps.Point(0, 15),
	    // Scale the image to get the right size
	    scaledSize: new google.maps.Size(25, 25)
	};
	var iconActiveMarker = {
		url: 'icon-marker.png',
	    // This marker is 25 pixels wide by 25 pixels tall.
	    // size: new google.maps.Size(128, 128),
	    // The origin for this image is 0,0.
	    // origin: new google.maps.Point(0, 0),
	    // the anchor where the icon's hotspot should be located (which is based on the origin)
	    // anchor: new google.maps.Point(0, 15),
	    // Scale the image to get the right size
	    scaledSize: new google.maps.Size(28, 28)
	};

	this.initialize = function(lat, lng){
		this.map = showMap(lat, lng);
		addUserLocation(this.map, lat, lng);
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

	var addUserLocation = function(map, lat, lng){
		console.log("addUserLocation");
		var userLatAndLong = new google.maps.LatLng(lat, lng);
		var marker = new google.maps.Marker({
			position: userLatAndLong,
			map: map,
			icon: userMarker,
			zIndex: 999
		});
	}


	//public
	this.addMarkersToMap = function(lat, lng, info, selected){
		var latitudeAndLongitude = new google.maps.LatLng(lat, lng);
		
		var marker = new google.maps.Marker({
			position: latitudeAndLongitude,
			map: this.map,
			icon: iconMarker,
			animation: google.maps.Animation.DROP,
			title: info.name
		});

		marker.content = '<div class="infoWindowContent">' + (info.specialty == null ? '' : info.specialty) + '</div>';
        
		// When marker clicked
		google.maps.event.addListener(marker, 'click', function() {
			infoWindow.setContent('<h4 class="marker-info">' + marker.title + '</h4>' + marker.content);
            // infoWindow.open(this.map, marker);

            for (var i = 0; i < markers.length; i++) {
	           // markers[i].setOpacity(0.6);
	           markers[i].setIcon(iconMarker);
	        }
	        // marker.setOpacity(1.0);
	        marker.setIcon(iconActiveMarker);

			this.map.panTo(latitudeAndLongitude);
			var $scope = angular.element(document.getElementById('content_map_info')).scope();
	        $scope.restaurant = info;
	        $scope.$apply(); //tell angular to check dirty bindings again
		});

		if (selected) {
			marker.setIcon(iconActiveMarker);
			this.map.panTo(latitudeAndLongitude);
		}

		markers.push(marker);
	}

	this.fitBounds = function(latOne, lngOne, latTwo, lngTwo){
		var latitudeAndLongitudeOne = new google.maps.LatLng(latOne, lngOne);
		var latitudeAndLongitudeTwo = new google.maps.LatLng(latTwo, lngTwo);
		var mapBounds = new google.maps.LatLngBounds();
		mapBounds.extend(latitudeAndLongitudeOne);
		mapBounds.extend(latitudeAndLongitudeTwo);

		this.map.fitBounds(mapBounds);
	}

	// To get visible markers
	// if map.getBounds().contains(markers[i]){
 //        // markers[i] in visible bounds
 //      } else {
 //        // markers[i] is not in visible bounds
 //      }

}