// DetailsController
floripabusApp.controller('DetailsController', function($scope, $location, RoutesFactory, DetailsFactory){

    // $scope.busRoute = null;

    //init();

    // function init(){
    //     var bus = RoutesFactory.getSelectedBusRoute();
    //     $scope.busRoute = DetailsFactory.getBusRouteDetails(bus);
    // }

    $scope.back = function() {
        $location.path("/main");
    };
});