// DetailsController
menufortouristApp.controller('DetailsController', function($scope, $location, $window, $filter, UserFactory, RestaurantsFactory){

    $scope.locale = UserFactory.locale;
    $scope.connected = UserFactory.connected;
    $scope.helpers = AppUtil.helpers;

    $scope.restaurant = null;
    $scope.selectedItem = null;

    $scope.$watch(function() {
        return UserFactory.connected;
    }, function (newValue) {
        if ($scope.connected != newValue) {
            $scope.connected = newValue;
        }
    });

    init();

    function init(){
        $scope.restaurant = RestaurantsFactory.getSelectedRestaurant();
        
        if (!UserFactory.connected) {
            return;
        }
        
        var map = new GoogleMap();
        map.initialize(UserFactory.lat, UserFactory.lng, true);
        map.addStaticMarkers($scope.restaurant);

        // Load restaurant's menu
        $scope.restaurant = RestaurantsFactory.getRestaurantCardapio($scope.restaurant);
    }

    // Metodos for internationalization
    $scope.getErrorMsg = function() {
        if ($scope.locale == 'EN') {
            return 'No Internet connection';
        } else if ($scope.locale == 'ES') {
            return 'No hay conexión a Internet';
        } else {
            return 'Sem conexão com a Internet';
        }
    };
    $scope.getTitle = function() {
        if ($scope.locale == 'EN') {
            return 'Restaurant';
        } else if ($scope.locale == 'ES') {
            return 'Restaurante';
        } else {
            return 'Restaurante';
        }
    };

    $scope.getLocationTitle = function() {
        if ($scope.locale == 'EN') {
            return 'Location';
        } else if ($scope.locale == 'ES') {
            return 'Ubicación';
        } else {
            return 'Localização';
        }
    };

    $scope.getLocationInfo = function() {
        if ($scope.locale == 'EN') {
            return 'from your location';
        } else if ($scope.locale == 'ES') {
            return 'desde su ubicación';
        } else {
            return 'da sua localização';
        }
    };

    $scope.getMenuTitle = function() {
        if ($scope.locale == 'EN') {
            return 'Menu';
        } else if ($scope.locale == 'ES') {
            return 'Menú';
        } else {
            return 'Cardápio';
        }
    };

    $scope.getMenuInfo = function() {
        if ($scope.locale == 'EN') {
            return "Press the item you want and show it to the waiter to place your order.";
        } else if ($scope.locale == 'ES') {
            return 'Presione el ítem elegido y muestre al camarero para hacer su pedido.';
        } else {
            return 'Para fazer o pedido, pressione o item escolhido e mostre ao garçom.';
        }
    };

    $scope.getModalTitle = function() {
        if ($scope.locale == 'EN') {
            return 'Show to the waiter to order';
        } else if ($scope.locale == 'ES') {
            return 'Mostrar para el camarero para pedir';
        } else {
            return 'Mostre ao garçom para pedir';
        }
    };

    $scope.getModalText = function() {
        // Will show modal text in restaurant's native language
        if ($scope.restaurant.locale == 'EN') {
            return "Please, I'd like to have:";
        } else if ($scope.restaurant.locale == 'ES') {
            return 'Por favor, me gustaría tener:';
        } else {
            return 'Por favor, gostaria de pedir:';
        }
    };

    $scope.getModalEmpty = function() {
        if ($scope.locale == 'EN') {
            return 'ERROR: Unable to load the native language of this item.';
        } else if ($scope.locale == 'ES') {
            return 'ERROR: No se puede cargar la lengua nativa de este artículo.';
        } else {
            return 'ERRO: Não foi possível carregar o idioma nativo deste item.';
        }
    };
    //


    $scope.back = function() {
        // var origin = RestaurantsFactory.getOrigin();
        // if (origin == RestaurantsFactory.SEARCH_PAGE) {
        //     $location.path("/search");
        // } else if (origin == RestaurantsFactory.MAIN_MAP_PAGE || origin == RestaurantsFactory.SEARCH_MAP_PAGE) {
        //     $location.path("/map");
        // } else {
        //     $location.path("/main");
        // }
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

    $scope.getTranslation = function(object) {
        if (object == null || object.traducoes == null) {
            return;
        }
        var translation = object.text;
        for (var i = 0; i < object.traducoes.length; i++) {
            if (object.traducoes[i].locale == $scope.locale) {
                translation = object.traducoes[i].text;
            }
        }
        return translation.replace(/\./g,'')
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