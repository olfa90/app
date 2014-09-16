var AppUtil = AppUtil || {};

AppUtil.helpers = {
    isNotString: function(str) {
     return (typeof str !== "string");
    },

    capitaliseFirstLetter: function(string) {
        if (string == null || string.length < 1) {
            return;
        }
        if (string.charAt(1) == string.charAt(1).toUpperCase()) {
            string = string.toLowerCase();
            string = string.charAt(0).toUpperCase() + string.slice(1);
        }
        return string;
    },

    /**
     * Remove acentos de caracteres
     * @param  {String} stringComAcento [string que contem os acentos]
     * @return {String}                 [string sem acentos]
     */
    removerAcentos: function(newStringComAcento) {
        if (newStringComAcento == null || newStringComAcento == '') {
            return;
        }
        var string = newStringComAcento;
        var mapaAcentos = {
            A : /[ÁÀÂÃáàâã]/g,
            E : /[ÉÈÊéèê]/g,
            I : /[ÍÌÎíìî]/g,
            O : /[ÓÒÔÕóòôõ]/g,
            U : /[ÚÙÛúùû]/g,
            C : /[Çç]/g,
            N : /\xF1/g
        };
     
        for ( var letra in mapaAcentos ) {
            var expressaoRegular = mapaAcentos[letra];
            string = string.replace( expressaoRegular, letra );
        }
     
        return string.toUpperCase();
    }
};


// Defining angular application model
var menufortouristApp = angular.module('menufortouristApp',[]);


// Setting default HTTP headers for post 
menufortouristApp.config(function($httpProvider) {
    // $httpProvider.defaults.headers.post['Authorization'] =
    //     'Basic V0tENE43WU1BMXVpTThWOkR0ZFR0ek1MUWxBMGhrMkMxWWk1cEx5VklsQVE2OA==';
    // $httpProvider.defaults.headers.post['X-AppGlu-Environment'] =
    //     'staging';
    // $httpProvider.defaults.headers.post['Content-Type'] =
    //     'application/json';
    // $httpProvider.defaults.headers.post['Accept'] =
    //     'application/json';
    delete $httpProvider.defaults.headers.common['X-Requested-With']
});


//### ROUTING ###
// Defining $routeProvider for MenuForTourist App
menufortouristApp.config(function ($routeProvider) {
    $routeProvider.

        // opening page
        when('/',
        {
            // controller: 'OpeningController',
            // templateUrl: 'views/opening.html'
            controller: 'LanguageController',
            templateUrl: 'views/language.html'

        }).

        // language page
        when('/language',
        {
            controller: 'LanguageController',
            templateUrl: 'views/language.html'

        }).

        // main page
        when('/main',
        {
            controller: 'MainController',
            templateUrl: 'views/main.html'

        }).

        // search page
        when('/search',
        {
            controller: 'SearchController',
            templateUrl: 'views/search.html'

        }).

        // map page
        when('/map',
        {
            controller: 'MapController',
            templateUrl: 'views/map.html'

        }).

        // details page
        when('/details',
        {
            controller: 'DetailsController',
            templateUrl: 'views/details.html'

        }).

        // if non of the above
        // redirect to the MainController
        otherwise({ redirectTo: '/'});
});

var openingPage = true;

//### CONTROLERS ###
//
// Defined in separated files controller/*


//### FACTORIES ###
//
// Defined in separated files factory/*


//### SERVICES ###
//
// Defined in separated files service/*