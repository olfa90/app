function MessagesEN() {
    this.GPS_ERROR = 'Could not get the current position. Either GPS signals are weak or GPS has been switched off.';
    this.INTERNET_ERROR = 'No Internet connection';

	this.LANGUAGES_TITLE = 'Choose the language';

	this.RESTAURANTS_TITLE = 'Restaurants';
	this.FILTER = 'Filters';
    this.MAP = 'Map';
    this.INFO_LIST = 'By proximity';

    this.SEARCH_TITLE = 'Search';
    this.PLACE_HOLDER = "Restaurant's name or location";

    this.RESTAURANT_TITLE = 'Restaurant';
    this.LOCATION_TITLE = 'Location';
    this.LOCATION_INFO = 'from your location';
    this.MENU_TITLE = 'Menu';
    this.MENU_TERMS_CONDITIONS_TITLE = 'terms and conditions of use';
    this.MENU_TERMS_CONDITIONS_CONTENT = "The menus and translations displayed here are updated according to the information sent by the restaurants from time to time.<br/>" +
                "We don't take responsibility for price changes or the availability of the dishes presented in this application.<br/>" +
                "Restaurant hours, as well as the availability of tables must be confirmed directly with each restaurant.";
    this.MENU_INFO = 'Press the item you want and show it to the waiter to place your order.';
    this.MODAL_TITLE = 'Show to the waiter to order';
    this.MODAL_CONTENT = "Please, I'd like to have:";
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
            description:"Galeão - Tom Jobim International Airport", 
            address:"Aeroporto Internacional Tom Jobim, Rio de Janeiro", 
            lat:"-22.814759",
            lng:"-43.246675",
            phones:"Terminal 1 - 3398-4077 / Terminal 2 - 3367-6213", 
            openHours:"Daily, 24/7"
        },
        {
            description:"Santos Dumont Airport", 
            address:"Senador Salgado Filho Square - Centro, Rio de Janeiro", 
            lat:"-22.911116",
            lng:"-43.167152",
            phones:"", 
            openHours:"Daily, from 6am to 10pm"
        },
        {
            description:"Barra", 
            address:"Pêpê Av. (intersection with Olegário Maciel Av.) - Barra da Tijuca, Rio de Janeiro", 
            lat:"-23.0151055",
            lng:"-43.3058162",
            phones:"", 
            openHours:"Daily, from 9am to 6pm"
        },
        {
            description:"Candelária", 
            lat:"-22.9019349",
            lng:"-43.1768286",
            phones:"", 
            openHours:"Monday to Friday, 9am to 6pm; Saturday, 9am to 3pm"
        },
        {
            description:"Copacabana - Centro Integrado de Atendimento ao Turista", 
            lat:"-22.9635282",
            lng:"-43.1745114",
            phones:"+55 21 2541-7522", 
            openHours:"Monday to Friday, 9am to 6pm; Saturday, 9am to 3pm"
        },
        {
            description:"Copacabana", 
            lat:"-22.970091",
            lng:"-43.182621",
            phones:"+55 21 2547-4421", 
            openHours:"Daily, 8am to 9pm"
        },
        {
            description:"Ipanema", 
            lat:"-22.9841973",
            lng:"-43.2050944",
            phones:"", 
            openHours:"Daily, from 8am to 8pm"
        },
        {
            description:"Lapa", 
            lat:"-22.9133375",
            lng:"-43.180747",
            phones:"", 
            openHours:"Daily, from 9am to 6pm"
        },
        {
            description:"Leblon", 
            lat:"-22.986086",
            lng:"-43.2283593",
            phones:"", 
            openHours:"Daily, from 8am to 6pm"
        },
        {
            description:"Sugarloaf Mountain", 
            lat:"-22.9551146",
            lng:"-43.1666199",
            phones:"", 
            openHours:"Daily, from 8am to 8pm"
        },
        {
            description:"Quinta da Boa Vista", 
            lat:"-22.9056874",
            lng:"-43.2249263",
            phones:"", 
            openHours:"Daily from 9am to 5pm"
        },
        {
            description:"Novo Rio Bus Terminal", 
            lat:"-22.8988872",
            lng:"-43.2096912",
            phones:"+55 21 2263-4857", 
            openHours:"Daily, 24/7"
        },
        {
            description:"Shopping da Gávea", 
            lat:"-22.975707",
            lng:"-43.228267",
            phones:"", 
            openHours:"Monday to Saturday, from 10am to 10pm; Sunday from 12am to 9pm"
        },
    ];
}