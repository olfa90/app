function MessagesDE() {
    this.GPS_ERROR = 'Could not get the current position. Either GPS signals are weak or GPS has been switched off.';
    this.INTERNET_ERROR = 'No Internet connection';

	this.LANGUAGES_TITLE = 'Wählen Sie deine Sprache';

	this.RESTAURANTS_TITLE = 'Restaurants';
	this.FILTER = 'Filters';
    this.MAP = 'Landkarte';
    this.INFO_LIST = 'By proximity';

    this.SEARCH_TITLE = 'Suche';
    this.PLACE_HOLDER = "Namen oder Speicherort Restaurants";

    this.RESTAURANT_TITLE = 'Restaurant';
    this.LOCATION_TITLE = 'Lokalisierung';
    this.LOCATION_INFO = 'von Ihrem Standort';
    this.MENU_TITLE = 'Menükarte';
    this.MENU_TERMS_CONDITIONS_TITLE = 'Bedingungen der Nutzung';
    this.MENU_TERMS_CONDITIONS_CONTENT = "Die Menükarte und Überzetzungen haben aktualisiert genauso die Restaurants haben für uns  geschickt. <br/>" +
                    "Wir beten nicht für die Varianten auf den Preis oder auf die verfügbare Tische, was gibt es in dieses Anwenderprogramm.<br/>" +
                    "Die Öffnungszeiten und die Verfügbarkeit von der Tische müssen Sie im Restaurants bestätigen."
    this.MENU_INFO = 'Wenn Sie bestellen möchten, drücken Sie bitte den Abschnitt und zeigen Sie zum Kellner.';
    this.MODAL_TITLE = 'Dem Kellner zeigen, um zu bestellen';
    this.MODAL_CONTENT = "Entschuldigung, ich möchte bestellen:";
    this.MODAL_EMTPY = 'ERROR: Unable to load the native language of this item.';

    this.getRioturList = function() {
        return riotur;
    }
    this.getRioturSubtitle = function() {
        return rioturSubtitle;
    }

    //----
    /*
    *	Riotur agencies
    */
    // Riotur - Empresa de Turismo do Município do Rio de Janeiro 
    // www.rioguiaoficial.com.br 
    var rioturSubtitle = 'Tourist information kiosk';
    var riotur = [
        {
            description:"Galeão - International Flughafen Tom Jobim", 
            address:"Aeroporto Internacional Tom Jobim, Rio de Janeiro", 
            lat:"-22.814759",
            lng:"-43.246675",
            phones:"Terminal 1 - 3398-4077 / Terminal 2 - 3367-6213", 
            openHours:"Täglich, 24 Stunden"
        },
        {
            description:"Flughafen Santos Dumont", 
            address:"Praça Senador Salgado Filho - Centro, Rio de Janeiro", 
            lat:"-22.911116",
            lng:"-43.167152",
            phones:"", 
            openHours:"Täglich, 6 bis 22 Uhr"
        },
        {
            description:"Barra", 
            address:"Av. do Pêpê (an der Ecke mit Av. Olegário Maciel) - Barra da Tijuca, Rio de Janeiro", 
            lat:"-23.0151055",
            lng:"-43.3058162",
            phones:"", 
            openHours:"Täglich, 9 bis 18 Uhr"
        },
        {
            description:"Candelária", 
            lat:"-22.9019349",
            lng:"-43.1768286",
            phones:"", 
            openHours:"Montag bis Freitag: 9 bis 18 Uhr; Samstag: 9 bis 15 Uhr"
        },
        {
            description:"Copacabana - Centro Integrado de Atendimento ao Turista", 
            lat:"-22.9635282",
            lng:"-43.1745114",
            phones:"+55 21 2541-7522", 
            openHours:"Montag bis Freitag: 9 bis 18 Uhr; Samstag: 9 bis 15 Uhr"
        },
        {
            description:"Copacabana", 
            lat:"-22.970091",
            lng:"-43.182621",
            phones:"+55 21 2547-4421", 
            openHours:"Täglich, 8 bis 21 Uhr"
        },
        {
            description:"Ipanema", 
            lat:"-22.9841973",
            lng:"-43.2050944",
            phones:"", 
            openHours:"Täglich, 8 bis 20 Uhr"
        },
        {
            description:"Lapa", 
            lat:"-22.9133375",
            lng:"-43.180747",
            phones:"", 
            openHours:"Täglich, 9 bis 18 Uhr"
        },
        {
            description:"Leblon", 
            lat:"-22.986086",
            lng:"-43.2283593",
            phones:"", 
            openHours:"Täglich, 8 bis 18 Uhr"
        },
        {
            description:"Pan de Azúcar", 
            lat:"-22.9551146",
            lng:"-43.1666199",
            phones:"", 
            openHours:"Täglich, 8 bis 20 Uhr"
        },
        {
            description:"Quinta da Boa Vista", 
            lat:"-22.9056874",
            lng:"-43.2249263",
            phones:"", 
            openHours:"Täglich, 9 bis 17 Uhr"
        },
        {
            description:"Rodoviária Novo Rio", 
            lat:"-22.8988872",
            lng:"-43.2096912",
            phones:"+55 21 2263-4857", 
            openHours:"Täglich, 24 Stunden"
        },
        {
            description:"Shopping da Gávea", 
            lat:"-22.975707",
            lng:"-43.228267",
            phones:"", 
            openHours:"Montag bis Samstag: 10 bis 22 Uhr; Sonntag: 12 bis 21 Uhr"
        },
    ];
}