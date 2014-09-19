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
	var rioturMarker = {
		url: 'img/riotur.png',
	    scaledSize: new google.maps.Size(16, 16)
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

	this.initialize = function(lat, lng, frozen, zoom){
		that = null;
		this.map = showMap(lat, lng, frozen, zoom);
		addUserLocation(this.map, lat, lng);
		addUtilitiesLocations(this.map);
	}

	var showMap = function(lat, lng, frozen, zoom){
		var mapOptions = {
			zoom: (zoom ? zoom : 12),
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

	var addUtilitiesLocations = function(map){
		for (var i = 0; i < riotur.length; i++) {
			riotur[i].title = 'Riotur - Posto de informações turísticas';
			riotur[i].site = 'http://www.rioguiaoficial.com.br';
			riotur[i].icon = rioturMarker;
			addUtilitiesMarkers( map, riotur[i] );
		};
	}

	var addUtilitiesMarkers = function(map, place){
		var latitudeAndLongitude = new google.maps.LatLng(place.lat, place.lng);
		
		var marker = new google.maps.Marker({
			position: latitudeAndLongitude,
			map: map,
			icon: place.icon,
			title: place.title
		});

		marker.content = '<div class="infoWindowContent">' +
							place.description + 
							'<br/>' +
							place.phones +
							'<br/>' +
							place.openHours +
							'<br/>' +
							place.site +
						 '</div>';
        
		// When marker clicked
		google.maps.event.addListener(marker, 'click', function() {
			this.map.panTo(latitudeAndLongitude);
			
	        infoWindow.setContent('<h5 class="marker-info">' + marker.title + '</h5>' + marker.content);
            infoWindow.open(this.map, marker);
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

 	function codeAddress() {
 		var address = document.getElementById('address').value;
	    geocoder.geocode( { 'address': address}, function(results, status) {
	    	if (status == google.maps.GeocoderStatus.OK) {
	    		console.log('Riotur location: '+results[0].geometry.location);
	    		// map.setCenter(results[0].geometry.location);
	    		var marker = new google.maps.Marker({
	    			map: this.map,
	    			position: results[0].geometry.location
	    		});
	    	} else {
	    		console.log('Geocode was not successful for the following reason: ' + status);
	    	}
	    });
    }


    /*
    *	Riotur agencies
    */
    // Riotur - Empresa de Turismo do Município do Rio de Janeiro 
    // www.rioguiaoficial.com.br 
    var riotur = [
    	{
    		description:"Galeão - Aeroporto Internacional Tom Jobim", 
    		address:"Aeroporto Internacional Tom Jobim, Rio de Janeiro", 
    		lat:"-22.814759",
    		lng:"-43.246675",
    		phones:"Terminal 1 - 3398-4077 / Terminal 2 - 3367-6213", 
    		openHours:"Diariamente, 24h"
    	},
    	{
    		description:"Aeroporto Santos Dumont", 
    		address:"Praça Senador Salgado Filho - Centro, Rio de Janeiro", 
    		lat:"-22.911116",
    		lng:"-43.167152",
    		phones:"", 
    		openHours:"Diariamente, 6h-22h"
    	},
    	{
    		description:"Barra", 
    		address:"Av. do Pêpê (esquina com a Av. Olegário Maciel) - Barra da Tijuca, Rio de Janeiro", 
    		lat:"-23.0151055",
    		lng:"-43.3058162",
    		phones:"", 
    		openHours:"Diariamente, 6h-22h"
    	},
    	{
    		description:"Candelária", 
    		lat:"-22.9019349",
    		lng:"-43.1768286",
    		phones:"", 
    		openHours:"Seg-Sex, 9h-18h; Sáb, 9h-15h"
    	},
    	{
    		description:"Copacabana - Centro Integrado de Atendimento ao Turista", 
    		lat:"-22.9635282",
    		lng:"-43.1745114",
    		phones:"+55 21 2541-7522", 
    		openHours:"Seg-Sex, 9h-18h; Sáb, 9h-15h"
    	},
    	{
    		description:"Copacabana", 
    		lat:"-22.970091",
    		lng:"-43.182621",
    		phones:"+55 21 2547-4421", 
    		openHours:"Diariamente, 8h-21h"
    	},
    	{
    		description:"Ipanema", 
    		lat:"-22.9841973",
    		lng:"-43.2050944",
    		phones:"", 
    		openHours:"Diariamente, 8h-20h"
    	},
    	{
    		description:"Lapa", 
    		lat:"-22.9133375",
    		lng:"-43.180747",
    		phones:"", 
    		openHours:"Diariamente, 9h-18h"
    	},
    	{
    		description:"Leblon", 
    		lat:"-22.986086",
    		lng:"-43.2283593",
    		phones:"", 
    		openHours:"Diariamente 8h-18h"
    	},
    	{
    		description:"Pão de Açúcar", 
    		lat:"-22.9551146",
    		lng:"-43.1666199",
    		phones:"", 
    		openHours:"Diariamente 8h-20h"
    	},
    	{
    		description:"Quinta da Boa Vista", 
    		lat:"-22.9056874",
    		lng:"-43.2249263",
    		phones:"", 
    		openHours:"Diariamente 9h-17h"
    	},
    	{
    		description:"Rodoviária Novo Rio", 
    		lat:"-22.8988872",
    		lng:"-43.2096912",
    		phones:"+55 21 2263-4857", 
    		openHours:"Diariamente, 24h"
    	},
    	{
    		description:"Shopping da Gávea", 
    		lat:"-22.975707",
    		lng:"-43.228267",
    		phones:"", 
    		openHours:"Seg-Sáb, 10-22h; Dom, 12h-21h"
    	},
    ];

}