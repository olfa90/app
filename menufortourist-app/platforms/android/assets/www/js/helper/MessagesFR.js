function MessagesFR() {
    this.GPS_ERROR = 'Could not get the current position. Either GPS signals are weak or GPS has been switched off.';
    this.INTERNET_ERROR = 'Pas de connexion Internet';

	this.LANGUAGES_TITLE = 'Choisissez votre langue';

	this.RESTAURANTS_TITLE = 'Restaurants';
	this.FILTER = 'Filters';
    this.MAP = 'Carte';
    this.INFO_LIST = 'By proximity';

    this.SEARCH_TITLE = 'Recherche';
    this.PLACE_HOLDER = "Le nom ou l'emplacement du restaurant";

    this.RESTAURANT_TITLE = 'Restaurant';
    this.LOCATION_TITLE = 'Localisation';
    this.LOCATION_INFO = 'à partir de votre emplacement';
    this.MENU_TITLE = 'Menu (Carte)';
    this.MENU_TERMS_CONDITIONS_TITLE = "termes et conditions d'utilisation";
    this.MENU_TERMS_CONDITIONS_CONTENT = "Les menus (cartes) et traductions mises à jour fournies ici sont des informations cohérentes transmis par les restaurants de temps en temps. <br/>" +
                "Nous ne sommes pas responsables de la variation dans le prix et la disponibilité des plats présentés ici dans cette application.<br/>" +
                "Les jours et les heures d'ouverture ainsi que la disponibilité des tables dans les restaurants doivent être confirmées directement avec chaque restaurant.";
    this.MENU_INFO = "Pour faire votre demande, appuyez sur l'image/nom et montrez au serveur.";
    this.MODAL_TITLE = 'Montrer au garçon de commander';
    this.MODAL_CONTENT = "S'il vous plaît, je voudrais demander:";
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
    var rioturSubtitle = 'Entreprise du Tourisme de la Commune du Rio de Janeiro';
    var riotur = [
    	{
            description:"Galeão - Aéroport International Tom Jobim", 
            address:"Aeroporto Internacional Tom Jobim, Rio de Janeiro", 
            lat:"-22.814759",
            lng:"-43.246675",
            phones:"Terminal 1 - 3398-4077 / Terminal 2 - 3367-6213", 
            openHours:"Tous les jours, 24h"
        },
        {
            description:"Aéroport Santos Dumont", 
            address:"Praça Senador Salgado Filho - Centro, Rio de Janeiro", 
            lat:"-22.911116",
            lng:"-43.167152",
            phones:"", 
            openHours:"Tous les jours, 6h-22h"
        },
        {
            description:"Barra", 
            address:"Av. do Pêpê (esquina con la Av. Olegário Maciel) - Barra da Tijuca, Rio de Janeiro", 
            lat:"-23.0151055",
            lng:"-43.3058162",
            phones:"", 
            openHours:"Tous les jours, 9h-18h"
        },
        {
            description:"Candelária", 
            lat:"-22.9019349",
            lng:"-43.1768286",
            phones:"", 
            openHours:"Lundi-Vendrendi, 9h-18h; Samedi, 9h-15h"
        },
        {
            description:"Copacabana - Centre Intégré d'Information Touristique", 
            lat:"-22.9635282",
            lng:"-43.1745114",
            phones:"+55 21 2541-7522", 
            openHours:"Lundi-Vendrendi, 9h-18h; Samedi, 9h-15h"
        },
        {
            description:"Copacabana", 
            lat:"-22.970091",
            lng:"-43.182621",
            phones:"+55 21 2547-4421", 
            openHours:"Tous les jours, 8h-21h"
        },
        {
            description:"Ipanema", 
            lat:"-22.9841973",
            lng:"-43.2050944",
            phones:"", 
            openHours:"Tous les jours, 8h-20h"
        },
        {
            description:"Lapa", 
            lat:"-22.9133375",
            lng:"-43.180747",
            phones:"", 
            openHours:"Tous les jours, 9h-18h"
        },
        {
            description:"Leblon", 
            lat:"-22.986086",
            lng:"-43.2283593",
            phones:"", 
            openHours:"Tous les jours, 8h-18h"
        },
        {
            description:"Pan de Azúcar", 
            lat:"-22.9551146",
            lng:"-43.1666199",
            phones:"", 
            openHours:"Tous les jours, 8h-20h"
        },
        {
            description:"Quinta da Boa Vista", 
            lat:"-22.9056874",
            lng:"-43.2249263",
            phones:"", 
            openHours:"Tous les jours, 9h-17h"
        },
        {
            description:"Rodoviária Novo Rio", 
            lat:"-22.8988872",
            lng:"-43.2096912",
            phones:"+55 21 2263-4857", 
            openHours:"Tous les jours, 24h"
        },
        {
            description:"Shopping da Gávea", 
            lat:"-22.975707",
            lng:"-43.228267",
            phones:"", 
            openHours:"Lundi - Samedi, 10h-22h; Dimanche, 12h-21h"
        },
    ];
}