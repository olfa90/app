// LanguageController
menufortouristApp.controller('LanguageController', function($scope, $location, UserFactory) {

    $scope.setLanguage = function(locale) {
        UserFactory.locale = locale;
        
        // Go to main page
        $location.path("/main");
    };
    
});