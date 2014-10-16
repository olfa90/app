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


// function loadTheApp() {

//     // Hide splash screen if any
//     if (navigator && navigator.splashscreen) {
//         // navigator.splashscreen.hide();
//     }

//     // Initiate FastClick
//     FastClick.attach(document.body);

//     // Boot AngularJS
//     try {
//         angular.bootstrap(document, ['menufortouristApp']);
//     } catch (e) {
//         console.log('startup errrrrrrrrrrrrrr! ' + e);
//     }
// }

// Listen to device ready
// angular.element(document).ready(function() {
//     document.addEventListener('deviceready', loadTheApp, false);
// });


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

// Whitelisting
menufortouristApp.config(function($provide, $compileProvider) {
    $provide.factory('UserFactory', function() {
        var factory = {};

        factory.locale = 'EN';
        factory.connected = true;

        factory.setName = function(name) {
            factory.name = name;
        };
        factory.setLocale = function(locale) {
            factory.locale = locale;
        };
        factory.setLat = function(lat) {
            factory.lat = lat;
        };
        factory.setLng = function(lng) {
            factory.lng = lng;
        };
        factory.setConnected = function(connected) {
            factory.connected = connected;
        };

        return factory;
    });
    $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
});

//### ROUTING ###
// Defining $routeProvider for MenuForTourist App
menufortouristApp.config(function($routeProvider, $locationProvider) {
    $routeProvider.

        // first page
        when('/',
        {
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

        // use the HTML5 History API
        // $locationProvider.html5Mode(true);
});

menufortouristApp.run(function($rootScope, UserFactory) {
    // Will be available everywhere in the app
    $rootScope.user = UserFactory;
    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        //Initialize anything you need to. aka: Google analytics.

        //Set other events you need to listen to.
        document.addEventListener("online", onOnline, false);
        document.addEventListener("offline", onOffline, false);

        // loadUserLocale();
    }

    function loadUserLocale() {
        if (navigator.globalization != null) {
            navigator.globalization.getLocaleName(
                function (locale) {
                    if (locale != null && locale.value != null && locale.value != '') {
                        $rootScope.user.setLocale(locale.value.toUpperCase());
                    }
                },
                function () { console.log('Não foi possível carregar o idioma do celular do usuário.'); }
            );
        }
    }

    function onOnline(e) {
        // console.log("Called", e.type);
        $rootScope.user.setConnected(true);
        
        var msgElement = angular.element(document.getElementById('msg_error'));
        if (msgElement) {
            var $scope = msgElement.scope();
            if ($scope) {
                $scope.$apply(); //tell angular to check dirty bindings again
            }
        }
    }

    function onOffline(e) {
        // console.log("Called", e.type);
        $rootScope.user.setConnected(false);

        var msgElement = angular.element(document.getElementById('msg_error'));
        if (msgElement) {
            var $scope = msgElement.scope();
            if ($scope) {
                $scope.$apply(); //tell angular to check dirty bindings again
            }
        }

        // navigator.notification.alert("Sorry, you are offline.", function() {}, "Offline!");
    }
});

// var openingPage = true;

//### CONTROLERS ###
//
// Defined in separated files controller/*


//### FACTORIES ###
//
// Defined in separated files factory/*


//### SERVICES ###
//
// Defined in separated files service/*
