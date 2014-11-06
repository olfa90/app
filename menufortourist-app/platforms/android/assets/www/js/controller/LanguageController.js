// LanguageController
menufortouristApp.controller('LanguageController', function($rootScope, $scope, $location, RestaurantsFactory) {

    var localesMap = {};
    init();

    function init(){
        $scope.countingResults = RestaurantsFactory.getRestaurantsCount();

        // add a item
        localesMap["pt-BR"] = "Português";
        localesMap["en"] = "English";
        localesMap["es"] = "Español";
        localesMap["fr"] = "Français";
        localesMap["it"] = "Italiano";
        localesMap["de"] = "Deutsch";
        localesMap["ja"] = "日本の";
        localesMap["ru"] = "русский";
        localesMap["zh-CN"] = "普通话";
        localesMap["gr"] = "ελληνικά";
        localesMap["he"] = "עברית";
        localesMap["nl"] = "Nederlands";
        localesMap["pl"] = "polski";
        localesMap["ar"] = "عربي";
    }

	$scope.setLanguage = function(locale) {
        if ($rootScope.user.locale != locale) {
            RestaurantsFactory.cleanMainResult();
            $rootScope.user.setLocale(locale);
        }
        
        // Go to main page
        $location.path("/main");
    };

    // Methods for internationalization
    $scope.getTitle = function() {
     	if ($rootScope.user.locale == 'pt-BR') {
            return 'Escolha o idioma';
        } else if ($rootScope.user.locale.substring(0, 2) == 'es') {
            return 'Elija el idioma';
        } else if ($rootScope.user.locale.substring(0, 2) == 'fr') {
            return 'Choisissez votre langue';
        } else if ($rootScope.user.locale.substring(0, 2) == 'de') {
            return 'Wählen Sie deine Sprache';
        } else {
            return 'Choose the language';
        }
    };

    $scope.getLocaleHumanized = function(locale) {
        return localesMap[locale];
    };
    
});