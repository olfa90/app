function MessagesFactory() {
	this.getMessages = function(locale) {
		var messageLocale;

		if (locale == 'pt-BR') {
	        messageLocale = new MessagesPTBR();
	    } else if (locale == 'es') {
	        messageLocale = new MessagesES();
	    } else if (locale.substring(0, 2) == 'fr') {
	        messageLocale = new MessagesFR();
	    } else if (locale.substring(0, 2) == 'de') {
	        messageLocale = new MessagesDE();
	    } else if (locale.substring(0, 2) == 'ja') {
	        messageLocale = new MessagesJA();
	    } else {
	        messageLocale = new MessagesEN();
	    }

	    messageLocale.locale = locale;
	    return messageLocale;
	}
};
