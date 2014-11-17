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
        return $rootScope.user.messages.LANGUAGES_TITLE;
    };

    $scope.getLocaleHumanized = function(locale) {
        return localesMap[locale];
    };
    
});