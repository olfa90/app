// MainController
floripabusApp.controller('OpeningController', function($scope, $location, $timeout, RoutesFactory) {
	
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