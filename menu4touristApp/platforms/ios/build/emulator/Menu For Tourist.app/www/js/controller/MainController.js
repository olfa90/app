// MainController
floripabusApp.controller('MainController', function($scope, $location, RoutesFactory) {

    // init();

    // function init(){
    //     if (openingPage) {
    //         openingPage = false;
    //         $location.path("/opening");
    //     }
    // }

    $scope.goDetails = function() {
        $location.path("/details");
    };
});