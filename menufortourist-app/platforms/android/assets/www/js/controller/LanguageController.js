// LanguageController
menufortouristApp.controller('LanguageController', function($scope, $location, CordovaReadyFactory, UserFactory) {

	$scope.setLanguage = function(locale) {
        UserFactory.locale = locale;
        
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

 //    function loadUserLocale() {
 //    	if (navigator.globalization != null) {
	// 		navigator.globalization.getLocaleName(
	// 	        function (locale) {
	// 	        	if (locale != null && locale.value != null && locale.value != '') {
	// 	        		UserFactory.locale = locale.value.toUpperCase();
	// 	        	}
	// 	        },
	// 	        function () { console.log('Não foi possível carregar o idioma do celular do usuário.');	}
	// 		);
	// 	}
	// }
	//
    
});