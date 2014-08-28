function Restaurant() {
	"use strict";

 	var id = null;
  	var created_at = null;
	var updated_at = null;
	var distance = null;
	
	var name = null;
	var description = null;

	var specialty = null;

	var locale = null;

	var address = new Address();

	var phone = null;
	var openHours = null;
	var homepage = null;

	var imageUrl = null;

	var menuUrl = null;

	var secoes = [];

	this.getFullAddress = function() {
		return address.street +', '+ address.number +', '+ address.neighbourhood +', '+ address_city +', '+ address.state
	}

	this.getImage = function() {
		if (imageUrl == null) {
			return 'http://localhost:8000/#img/75x60.gif';
		}
		return imageUrl;
	}

}