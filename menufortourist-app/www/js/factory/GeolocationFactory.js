menufortouristApp.factory('GeolocationFactory', function ($rootScope, CordovaReadyFactory) {
  return {
    // getCurrentPosition: function (onSuccess, onError, options) {
	   //  document.addEventListener('deviceready', function () {
	   //  	console.log('deviceready');
	   //      navigator.geolocation.getCurrentPosition(onSuccess, onError);
	   //  }, false);
    // }

    getCurrentPosition: CordovaReadyFactory(function (onSuccess, onError, options) {
      navigator.geolocation.getCurrentPosition(function () {
        var that = this,
          args = arguments;

        if (onSuccess) {
          $rootScope.$apply(function () {
            onSuccess.apply(that, args);
          });
        }
      }, function () {
        var that = this,
          args = arguments;

        if (onError) {
          $rootScope.$apply(function () {
            onError.apply(that, args);
          });
        }
      },
      options);
    })
  };
});