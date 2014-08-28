function Price() {
	"use strict";
	

	this.getDescriptionFormated = function(description) {
		if (description != null) {
			return '('+description+')';
		}
		return '';
	}
}