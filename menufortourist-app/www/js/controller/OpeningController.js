// MainController
menufortouristApp.controller('OpeningController', function($scope, $location, $timeout) {
	
	init();

    function init(){
    	if (openingPage) {
            openingPage = false;
           $timeout(function() {
	            $location.path("/main");
	        }, 4000);
        } else {
        	$location.path("/main");
        }
    }
});