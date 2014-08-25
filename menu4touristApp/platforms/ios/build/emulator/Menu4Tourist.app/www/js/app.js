// Defining angular application model
var floripabusApp = angular.module('floripabusApp',[]);


// Setting default HTTP headers for post 
floripabusApp.config(function($httpProvider) {
    $httpProvider.defaults.headers.post['Authorization'] =
        'Basic V0tENE43WU1BMXVpTThWOkR0ZFR0ek1MUWxBMGhrMkMxWWk1cEx5VklsQVE2OA==';
    $httpProvider.defaults.headers.post['X-AppGlu-Environment'] =
        'staging';
    $httpProvider.defaults.headers.post['Content-Type'] =
        'application/json';
    $httpProvider.defaults.headers.post['Accept'] =
        'application/json';
});


//### ROUTING ###
// Defining $routeProvider for FloripaBUS
floripabusApp.config(function ($routeProvider) {
    $routeProvider.

        // main page
        when('/',
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


//### CONTROLERS ###
//
// Defined in separated files controller/*


//### FACTORIES ###
//
// Defined in separated files factory/*


//### SERVICES ###
//
// Defined in separated files service/*