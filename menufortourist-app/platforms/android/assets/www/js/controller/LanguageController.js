// LanguageController
menufortouristApp.controller('LanguageController', function($scope, $location, UserFactory) {

	$scope.setLanguage = function(locale) {
        UserFactory.setLocale(locale);
        
        // Go to main page
        $location.path("/main");
    };

    // Metodos for internationalization
    $scope.getTitle = function() {
     	if (UserFactory.locale == 'PT-BR') {
            return 'Escolha o idioma';
        } else if (UserFactory.locale.substring(0, 2) == 'ES') {
            return 'Elija el idioma';
        } else {
            return 'Choose the language';
        }
    };
    
});