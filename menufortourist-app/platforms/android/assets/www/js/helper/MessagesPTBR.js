function MessagesPTBR() {
	this.GPS_ERROR = 'Não foi possível obter a posição atual. Ou os sinais de GPS estão fracos ou o GPS foi desligado.';
	this.INTERNET_ERROR = 'Sem conexão com a Internet';

	this.LANGUAGES_TITLE = 'Escolha o idioma';

	this.RESTAURANTS_TITLE = 'Restaurantes';
	this.FILTER = 'Filtros';
    this.MAP = 'Mapa';
    this.INFO_LIST = 'Por proximidade';

    this.SEARCH_TITLE = 'Busca';
    this.PLACE_HOLDER = 'Nome ou localização do restaurante';

    this.RESTAURANT_TITLE = 'Restaurante';
    this.LOCATION_TITLE = 'Localização';
    this.LOCATION_INFO = 'da sua localização';
    this.MENU_TITLE = 'Cardápio';
    this.MENU_TERMS_CONDITIONS_TITLE = 'termos e condições de uso';
    this.MENU_TERMS_CONDITIONS_CONTENT = "Os cardápios e traduções aqui disponibilizados são atualizadas conforme informações encaminhadas pelos restaurantes de tempos em tempos.<br/>" +
                "Não nos responsabilizamos pela variação de preço e pela disponibilidade dos pratos ora apresentados neste aplicativo.<br/>" +
                "Os dias e horários de funcionamento, bem como a disponibilidade de mesas nos restaurantes deverão ser confirmados diretamente com cada restaurante.";
    this.MENU_INFO = 'Para fazer o pedido, pressione o item escolhido e mostre ao garçom.';
    this.MODAL_TITLE = 'Mostre ao garçom para pedir';
    this.MODAL_CONTENT = 'Por favor, gostaria de pedir:';
    this.MODAL_EMTPY = 'Não foi possível carregar o idioma nativo deste item.';

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
    // Em Português
    var rioturSubtitle = 'Quiosque de informações turísticas';
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
    		openHours:"Diariamente, 9h-18h"
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
    		openHours:"Diariamente, 8h-18h"
    	},
    	{
    		description:"Pão de Açúcar", 
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
    		openHours:"Seg-Sáb, 10-22h; Dom, 12h-21h"
    	},
    ];
}