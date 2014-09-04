// DetailsController
menufortouristApp.controller('DetailsController', function($scope, $location, UserFactory, RestaurantsFactory){

    $scope.locale = UserFactory.locale;

    $scope.restaurant = null;
    $scope.selectedItem = null;

    init();

    function init(){
        $scope.restaurant = RestaurantsFactory.getSelectedRestaurant();
        
        $scope.restaurant = RestaurantsFactory.getRestaurantCardapio($scope.restaurant);
    }

    // Metodos for internationalization
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

    $scope.getModalTitle = function() {
        if ($scope.locale == 'EN') {
            return 'Show to the waiter to order';
        } else if ($scope.locale == 'ES') {
            return 'Mostrar para el camarero para pedir';
        } else {
            return 'Mostre ao garçom para fazer o pedido';
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
        var origin = RestaurantsFactory.getOrigin();
        if (origin == 2) {
            $location.path("/search");
        } else {
            $location.path("/main");
        }
        
    };

    $scope.formatPriceDescription = function(description) {
        if (description != null) {
            return '('+description+')';
        }
        return '';
    }

    $scope.setSelectedItem = function(item) {
        $scope.selectedItem = item;
        document.getElementById('order_list_modal').classList.add('active');
        // document.getElementById('order_list_modal').classList.remove('active');
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