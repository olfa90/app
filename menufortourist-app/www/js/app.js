// Defining angular application model
var menufortouristApp = angular.module('menufortouristApp',[]);


// Setting default HTTP headers for post 
menufortouristApp.config(function($httpProvider) {
    // $httpProvider.defaults.headers.post['Authorization'] =
    //     'Basic V0tENE43WU1BMXVpTThWOkR0ZFR0ek1MUWxBMGhrMkMxWWk1cEx5VklsQVE2OA==';
    // $httpProvider.defaults.headers.post['X-AppGlu-Environment'] =
    //     'staging';
    // $httpProvider.defaults.headers.post['Content-Type'] =
    //     'application/json';
    // $httpProvider.defaults.headers.post['Accept'] =
    //     'application/json';
    delete $httpProvider.defaults.headers.common['X-Requested-With']
});


//### ROUTING ###
// Defining $routeProvider for MenuForTourist App
menufortouristApp.config(function ($routeProvider) {
    $routeProvider.

        // opening page
        when('/',
        {
            controller: 'OpeningController',
            templateUrl: 'views/opening.html'

        }).

        // main page
        when('/main',
        {
            controller: 'MainController',
            templateUrl: 'views/main.html'

        }).

        // details page
        when('/details',
        {
            controller: 'DetailsController',
            templateUrl: 'views/details.html'

        }).

        // if non of the above
        // redirect to the MainController
        otherwise({ redirectTo: '/'});
});

var openingPage = true;

//### CONTROLERS ###
//
// Defined in separated files controller/*


//### FACTORIES ###
//
// Defined in separated files factory/*


//### SERVICES ###
//
// Defined in separated files service/*