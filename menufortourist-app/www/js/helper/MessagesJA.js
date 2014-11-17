function MessagesJA() {
    this.GPS_ERROR = 'Could not get the current position. Either GPS signals are weak or GPS has been switched off.';
    this.INTERNET_ERROR = 'No Internet connection';

	this.LANGUAGES_TITLE = '言語を選んでください。';

	this.RESTAURANTS_TITLE = 'レストラン';
	this.FILTER = 'Filters';
    this.MAP = '地図';
    this.INFO_LIST = 'By proximity';

    this.SEARCH_TITLE = '検索';
    this.PLACE_HOLDER = "レストランの名前や場所";

    this.RESTAURANT_TITLE = 'レストラン';
    this.LOCATION_TITLE = '場所';
    this.LOCATION_INFO = 'あなたの場所から';
    this.MENU_TITLE = 'メニュー';
    this.MENU_TERMS_CONDITIONS_TITLE = 'の使用規約';
    this.MENU_TERMS_CONDITIONS_CONTENT = "ここで利用できされるメニューと翻訳は折節にレストランにより受信された情報によって更新されます。<br/>" +
                "我々はこのアプリケーションで提示料理の値段と在庫の変動については責任を負いません。<br/>" +
                "日と営業時間だけでなく、レストラン内のテーブルの可用性は、各レストランに直接確認すべきである。";
    this.MENU_INFO = 'リクエストをするために、選択されたアイテムを押して、ウェーターを見せてください。';
    this.MODAL_TITLE = 'Show to the waiter to order';
    this.MODAL_CONTENT = "私のリクエストは";
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
    var rioturSubtitle = 'リオ・デ・ジャネイロ市の観光会社';
    var riotur = [
    	{
            description:"リオガレオン - アントニオ·カルロス·ジョビン国際空港 ", 
            address:"Aeroporto Internacional Tom Jobim, Rio de Janeiro", 
            lat:"-22.814759",
            lng:"-43.246675",
            phones:"ターミナル1 – 3398の4077 / ターミナル2 – 3367の6213", 
            openHours:"毎日、24時間"
        },
        {
            description:"サントスデュモン空港 ", 
            address:"Senador Salgado Filho Square - Centro, Rio de Janeiro", 
            lat:"-22.911116",
            lng:"-43.167152",
            phones:"", 
            openHours:"毎日、午前６時か～午後１０時"
        },
        {
            description:"Barra", 
            address:"Pêpê Av. (intersection with Olegário Maciel Av.) - Barra da Tijuca, Rio de Janeiro", 
            lat:"-23.0151055",
            lng:"-43.3058162",
            phones:"", 
            openHours:"毎日、 from 9am to 6pm"
        },
        {
            description:"Candelária", 
            lat:"-22.9019349",
            lng:"-43.1768286",
            phones:"", 
            openHours:"月〜金、午前９時～午後６時。土曜日、午前９時〜午後３時"
        },
        {
            description:"Copacabana - Centro Integrado de Atendimento ao Turista", 
            lat:"-22.9635282",
            lng:"-43.1745114",
            phones:"+55 21 2541の7522", 
            openHours:"月〜金、午前９時～午後６時。土曜日、午前９時〜午後３時"
        },
        {
            description:"Copacabana", 
            lat:"-22.970091",
            lng:"-43.182621",
            phones:"+55 21 2547の4421", 
            openHours:"毎日、午前８時～午後９時"
        },
        {
            description:"Ipanema", 
            lat:"-22.9841973",
            lng:"-43.2050944",
            phones:"", 
            openHours:"毎日、午前８時～午後８時"
        },
        {
            description:"Lapa", 
            lat:"-22.9133375",
            lng:"-43.180747",
            phones:"", 
            openHours:"毎日、午前９時～午後６時"
        },
        {
            description:"Leblon", 
            lat:"-22.986086",
            lng:"-43.2283593",
            phones:"", 
            openHours:"毎日、午前８時～午後６時"
        },
        {
            description:"Sugarloaf Mountain", 
            lat:"-22.9551146",
            lng:"-43.1666199",
            phones:"", 
            openHours:"毎日、午前８時～午後８時"
        },
        {
            description:"Quinta da Boa Vista", 
            lat:"-22.9056874",
            lng:"-43.2249263",
            phones:"", 
            openHours:"毎日、午前９時～午後５時"
        },
        {
            description:"ノヴォ・リオ・バスステーション", 
            lat:"-22.8988872",
            lng:"-43.2096912",
            phones:"+55 21 2263の4857", 
            openHours:"毎日、２４時間"
        },
        {
            description:"Shopping da Gávea", 
            lat:"-22.975707",
            lng:"-43.228267",
            phones:"", 
            openHours:"月〜土、午前１０時～午後１０時。日曜日、午後１２時～午後９時"
        },
    ];
}