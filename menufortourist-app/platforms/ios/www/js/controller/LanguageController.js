// LanguageController
menufortouristApp.controller('LanguageController', function($rootScope, $scope, $location) {

	$scope.setLanguage = function(locale) {
        $rootScope.user.setLocale(locale);
        
        // Go to main page
        $location.path("/main");
    };

    // Metodos for internationalization
    $scope.getTitle = function() {
     	if ($rootScope.user.locale == 'PT-BR') {
            return 'Escolha o idioma';
        } else if ($rootScope.user.locale.substring(0, 2) == 'ES') {
            return 'Elija el idioma';
        } else {
            return 'Choose the language';
        }
    };
    
});