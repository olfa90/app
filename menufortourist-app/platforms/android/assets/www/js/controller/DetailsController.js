// DetailsController
menufortouristApp.controller('DetailsController', function($rootScope, $scope, $location, $window, $filter, RestaurantsFactory){

    // $scope.locale = UserFactory.locale;
    // $scope.connected = UserFactory.connected;
    $scope.helpers = AppUtil.helpers;

    var modalContent = "";

    $scope.restaurant = null;
    $scope.selectedItem = null;

    $scope.$watch(function() {
        return $rootScope.user.connected;
    }, function (newValue) {
        if ($rootScope.user.connected != newValue) {
            $rootScope.user.connected = newValue;
        }
    });

    init();

    function init(){
        $scope.restaurant = RestaurantsFactory.getSelectedRestaurant();
        modalContent = (new MessagesFactory).getMessages($scope.restaurant.locale).MODAL_CONTENT
        
        if (!$rootScope.user.connected) {
            return;
        }
        
        var map = new GoogleMap();
        map.initialize($rootScope.user, 14);
        map.addStaticMarkers($scope.restaurant);

        // Load restaurant's menu
        $scope.restaurant = RestaurantsFactory.getRestaurantCardapio($scope.restaurant);
    }

    // Metodos for internationalization
    function getGPSErrorMsg() {
        return $rootScope.user.messages.GPS_ERROR;
    };
    $scope.getErrorMsg = function() {
        return $rootScope.user.messages.INTERNET_ERROR;
    };
    $scope.getTitle = function() {
        return $rootScope.user.messages.RESTAURANT_TITLE;
    };
    $scope.getLocationTitle = function() {
        return $rootScope.user.messages.LOCATION_TITLE;
    };
    $scope.getLocationInfo = function() {
        return $rootScope.user.messages.LOCATION_INFO;
    };
    $scope.getMenuTitle = function() {
        return $rootScope.user.messages.MENU_TITLE;
    };
    $scope.getMenuTermsConditionsTitle = function() {
        return $rootScope.user.messages.MENU_TERMS_CONDITIONS_TITLE;
    };
    $scope.getModalTermsText = function() {
        return $rootScope.user.messages.MENU_TERMS_CONDITIONS_CONTENT;
    };
    $scope.getMenuInfo = function() {
        return $rootScope.user.messages.MENU_INFO;
    };
    $scope.getModalTitle = function() {
        return $rootScope.user.messages.MODAL_TITLE;
    };
    $scope.getModalText = function() {
        return modalContent;
    };
    $scope.getModalEmpty = function() {
        return $rootScope.user.messages.MODAL_EMTPY;
    };
    //


    $scope.back = function() {
        $window.history.back();
    };

    $scope.getPrice = function(valor) {
        if (valor == null || valor == '0.1') {
            return null;
        }
        return $filter('currency')(valor, 'R$ ');
    }

    $scope.formatPriceDescription = function(description) {
        if (description != null) {
            return '('+description+')';
        }
        return '';
    }

    $scope.showModal = function(item, secao, secaoPai) {
        $scope.selectedItem = item;
        $scope.selectedItem.section = secao.title;
        if (secaoPai) {
            $scope.selectedItem.mainSection = secaoPai.title;
        }
        document.getElementById('order_list_modal').classList.add('active');
    }

    $scope.hideModal = function() {
        $scope.selectedItem = null;
        document.getElementById('order_list_modal').classList.remove('active');
    }

    $scope.showTermsModal = function() {
        document.getElementById('termsconditionsModal').classList.add('active');
    }

    $scope.hideTermsModal = function() {
        document.getElementById('termsconditionsModal').classList.remove('active');
    }

    $scope.getSelectedItem = function() {
        return $scope.selectedItem;
    }

    $scope.getFullAddress = function(address) {
        if (address == null) {
            return;
        }
        if (address.complement != null && address.complement !== '') {
            return address.street +', '+ address.number +', '+ address.complement +', ' + address.neighbourhood +', '+ address.city +', '+ address.state
        }
        return address.street +', '+ address.number +', '+ address.neighbourhood +', '+ address.city +', '+ address.state
    }

    $scope.openUrl = function(url) {
        console.log('openUrl: '+url);
        $window.open(url, '_system');
    }

    $scope.getTranslation = function(object, clear) {
        if (object == null || object.traducoes == null) {
            return;
        }
        var translation = object.text;
        for (var i = 0; i < object.traducoes.length; i++) {
            if (object.traducoes[i].locale.toUpperCase() == $rootScope.user.locale.toUpperCase()) {
                translation = object.traducoes[i].text;
            }
        }
        if (clear) {
            return translation.replace(/\./g,'');
        }
        return translation;
    }


    // Acordion Collapse solution
      
      /*
       * if given group is the selected group, deselect it
       * else, select the given group
       */
      $scope.toggleGroup = function(group) {
        if ($scope.isGroupShown(group)) {
          $scope.shownGroup = null;
        } else {
          $scope.shownGroup = group;
        }
      };
      $scope.isGroupShown = function(group) {
        return $scope.shownGroup === group;
      };
    //


    // Private util methods
    function getItemTranslated(item, locale) {
        if (item == null || locale == null) {
            return;
        }
        var itemTranslated = {identifier: item.identifier, title:"", description:""};

        var tTraducoes = item.titulo.traducoes;
        for (var i = 0; i < tTraducoes.length; i++) {
            if (tTraducoes[i].locale == locale) {
                itemTranslated.title = tTraducoes[i].text;
                break;
            }
        }

        if (item.descricao != null) {
            var dTraducoes = item.descricao.traducoes;
            for (var i = 0; i < dTraducoes.length; i++) {
                if (dTraducoes[i].locale == locale) {
                    itemTranslated.description = dTraducoes[i].text;
                    break;
                }
            }
        }
        return itemTranslated;
    }

});