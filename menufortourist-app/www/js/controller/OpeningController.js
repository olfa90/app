// MainController
menufortouristApp.controller('OpeningController', function($scope, $location, $timeout) {
	
    var time = 4000;
	init();

    function init(){
    	if (openingPage) {
            openingPage = false;
           $timeout(function() {
	            $location.path("/language");
	        }, time);
        } else {
        	$location.path("/main");
        }
    }
});