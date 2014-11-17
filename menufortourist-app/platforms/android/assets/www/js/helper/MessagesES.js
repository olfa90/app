function MessagesES() {
    this.GPS_ERROR = 'No se pudo obtener la posición actual. O las señales GPS son débiles o GPS se ha desconectado.';
	this.INTERNET_ERROR = 'No hay conexión a Internet';

    this.LANGUAGES_TITLE = 'Escolha o idioma';

	this.RESTAURANTS_TITLE = 'Restaurantes';
	this.FILTER = 'Filtros';
    this.MAP = 'Mapa';
    this.INFO_LIST = 'Por proximidade';

    this.SEARCH_TITLE = 'Búsqueda';
    this.PLACE_HOLDER = 'Nombre o ubicación del restaurante';

    this.RESTAURANT_TITLE = 'Restaurante';
    this.LOCATION_TITLE = 'Ubicación';
    this.LOCATION_INFO = 'desde su ubicación';
    this.MENU_TITLE = 'Ménu';
    this.MENU_TERMS_CONDITIONS_TITLE = 'términos y condiciones de uso';
    this.MENU_TERMS_CONDITIONS_CONTENT = "Los menús y traducciones aquí disponibles son actualizados según las informaciones enviadas periódicamente por los restaurantes. <br/>" +
                "No nos responsabilizamos de la variación de precio o de la disponibilidad de los platos presentados en esta aplicación.<br/>" +
                "Los días y horario de funcionamiento, así como la disponibilidad de mesa en los restaurantes, deberán ser confirmados directamente con cada restaurante.";
    this.MENU_INFO = 'Presione el ítem elegido y muestre al camarero para hacer su pedido.';
    this.MODAL_TITLE = 'Mostrar para el camarero para pedir';
    this.MODAL_CONTENT = 'Por favor, me gustaría tener:';
    this.MODAL_EMTPY = 'ERROR: No se puede cargar la lengua nativa de este artículo.';


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
    var rioturSubtitle = 'Información turística quiosco';
    var riotur = [
        {
            description:"Galeão - Aeropuerto Internacional Tom Jobim", 
            address:"Aeroporto Internacional Tom Jobim, Rio de Janeiro", 
            lat:"-22.814759",
            lng:"-43.246675",
            phones:"Terminal 1 - 3398-4077 / Terminal 2 - 3367-6213", 
            openHours:"Diariamente, 24h"
        },
        {
            description:"Aeropuerto Santos Dumont", 
            address:"Praça Senador Salgado Filho - Centro, Rio de Janeiro", 
            lat:"-22.911116",
            lng:"-43.167152",
            phones:"", 
            openHours:"Diariamente, 6h-22h"
        },
        {
            description:"Barra", 
            address:"Av. do Pêpê (esquina con la Av. Olegário Maciel) - Barra da Tijuca, Rio de Janeiro", 
            lat:"-23.0151055",
            lng:"-43.3058162",
            phones:"", 
            openHours:"Diariamente, 9h-18h"
        },
        {
            description:"Candelária", 
            lat:"-22.9019349",
            lng:"-43.1768286",
            phones:"", 
            openHours:"De lunes a viernes: 9h – 18h; Sábado: 9h - 15h"
        },
        {
            description:"Copacabana - Centro Integrado de Atendimento ao Turista", 
            lat:"-22.9635282",
            lng:"-43.1745114",
            phones:"+55 21 2541-7522", 
            openHours:"De lunes a viernes: 9h – 18h; Sábado: 9h - 15h"
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
            openHours:"Diariamente, 8h-18h"
        },
        {
            description:"Pan de Azúcar", 
            lat:"-22.9551146",
            lng:"-43.1666199",
            phones:"", 
            openHours:"Diariamente, 8h-20h"
        },
        {
            description:"Quinta da Boa Vista", 
            lat:"-22.9056874",
            lng:"-43.2249263",
            phones:"", 
            openHours:"Diariamente, 9h-17h"
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
            openHours:"De lunes a sábado: 10h – 22h; Domingo: 12h - 21h"
        },
    ];
}