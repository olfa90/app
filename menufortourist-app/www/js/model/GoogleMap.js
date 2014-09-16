function GoogleMap() {
	var map = null;
	var markers = [];
	var infoWindow = new google.maps.InfoWindow();
	var that = null;

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
	    scaledSize: new google.maps.Size(28, 28)
	};
	var iconActiveMarker = {
		url: 'icon-marker.png',
	    scaledSize: new google.maps.Size(32, 32)
	};

	this.initialize = function(lat, lng, frozen){
		that = null;
		this.map = showMap(lat, lng, frozen);
		addUserLocation(this.map, lat, lng);
	}

	var showMap = function(lat, lng, frozen){
		var mapOptions = {
			zoom: (frozen ? 14 : 12),
			center: new google.maps.LatLng(lat, lng),
			draggable: !frozen,
			disableDoubleClickZoom: frozen,
			zoomControl: !frozen,
			disableDefaultUI: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}

		var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

		return map;
	}

	var addUserLocation = function(map, lat, lng){
		var userLatAndLong = new google.maps.LatLng(lat, lng);
		var marker = new google.maps.Marker({
			position: userLatAndLong,
			map: map,
			icon: userMarker,
			zIndex: 999
		});
	}


	/**
	*	Public methods
	*/
	this.addMarkers = function(place, selected){
		var latitudeAndLongitude = new google.maps.LatLng(place.address.lat, place.address.lng);
		
		var marker = new google.maps.Marker({
			position: latitudeAndLongitude,
			map: this.map,
			icon: iconMarker,
			// animation: google.maps.Animation.DROP,
			title: place.name
		});

		if (selected) {
			marker.setIcon(iconActiveMarker);
			that = marker;
			marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
			this.map.panTo(latitudeAndLongitude);
		}

		// marker.content = '<div class="infoWindowContent">' + (place.description == null ? '' : place.description) + '</div>';
        
		// When marker clicked
		google.maps.event.addListener(marker, 'click', function() {
			if (that) {
				that.setZIndex();
			}
			that = this;
			this.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);

			for (var i = 0; i < markers.length; i++) {
	           markers[i].setIcon(iconMarker);
	        }
	        marker.setIcon(iconActiveMarker);

			this.map.panTo(latitudeAndLongitude);
			var $scope = angular.element(document.getElementById('content_map_info')).scope();
	        $scope.restaurant = place;
	        $scope.$apply(); //tell angular to check dirty bindings again

	        // infoWindow.setContent('<h4 class="marker-info">' + marker.title + '</h4>' + marker.content);
            // infoWindow.open(this.map, marker);
		});

		markers.push(marker);
	}

	this.addStaticMarkers = function(place){
		var latitudeAndLongitude = new google.maps.LatLng(place.address.lat, place.address.lng);
		var icon = iconMarker;

		var marker = new google.maps.Marker({
			position: latitudeAndLongitude,
			map: this.map,
			icon: icon,
			animation: google.maps.Animation.DROP,
			title: place.name
		});

		this.map.panTo(latitudeAndLongitude);
	}

	// Sets the map on all markers in the array.
	this.setAllMap = function() {
	  for (var i = 0; i < markers.length; i++) {
	    markers[i].setMap(this.map);
	  }
	}

	// Removes the markers from the map, but keeps them in the array.
	this.clearMarkers = function () {
	  this.setAllMap(null);
	}

	// Shows any markers currently in the array.
	this.showMarkers = function() {
	  this.setAllMap();
	}

	// Deletes all markers in the array by removing references to them.
	this.deleteMarkers = function() {
	  this.clearMarkers();
	  markers = [];
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