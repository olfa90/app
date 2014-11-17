// DetailsController
menufortouristApp.controller('DetailsController', function($rootScope, $scope, $location, $window, $filter, RestaurantsFactory){

    // $scope.locale = UserFactory.locale;
    // $scope.connected = UserFactory.connected;
    $scope.helpers = AppUtil.helpers;

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
        
        if (!$rootScope.user.connected) {
            return;
        }
        
        var map = new GoogleMap();
        map.initialize($rootScope.user.lat, $rootScope.user.lng, $rootScope.user.locale, 14);
        map.addStaticMarkers($scope.restaurant);

        // Load restaurant's menu
        $scope.restaurant = RestaurantsFactory.getRestaurantCardapio($scope.restaurant);
    }

    // Metodos for internationalization
    $scope.getErrorMsg = function() {
        if ($rootScope.user.locale == 'en') {
            return 'No Internet connection';
        } else if ($rootScope.user.locale == 'es') {
            return 'No hay conexión a Internet';
        } else {
            return 'Sem conexão com a Internet';
        }
    };
    $scope.getTitle = function() {
        if ($rootScope.user.locale == 'en') {
            return 'Restaurant';
        } else if ($rootScope.user.locale == 'es') {
            return 'Restaurante';
        } else if ($rootScope.user.locale.substring(0, 2) == 'fr') {
            return 'Restaurants';
        } else if ($rootScope.user.locale.substring(0, 2) == 'de') {
            return 'Restaurants';
        } else {
            return 'Restaurante';
        }
    };

    $scope.getLocationTitle = function() {
        if ($rootScope.user.locale == 'en') {
            return 'Location';
        } else if ($rootScope.user.locale == 'es') {
            return 'Ubicación';
        } else if ($rootScope.user.locale.substring(0, 2) == 'fr') {
            return 'Localisation';
        } else if ($rootScope.user.locale.substring(0, 2) == 'de') {
            return 'Lokalisierung';
        } else {
            return 'Localização';
        }
    };

    $scope.getLocationInfo = function() {
        if ($rootScope.user.locale == 'en') {
            return 'from your location';
        } else if ($rootScope.user.locale == 'es') {
            return 'desde su ubicación';
        } else if ($rootScope.user.locale.substring(0, 2) == 'fr') {
            return 'à partir de votre emplacement';
        } else if ($rootScope.user.locale.substring(0, 2) == 'de') {
            return 'von Ihrem Standort';
        } else {
            return 'da sua localização';
        }
    };

    $scope.getMenuTitle = function() {
        if ($rootScope.user.locale == 'en') {
            return 'Menu';
        } else if ($rootScope.user.locale == 'es') {
            return 'Menú';
        } else if ($rootScope.user.locale.substring(0, 2) == 'fr') {
            return 'Menu (Carte)';
        } else if ($rootScope.user.locale.substring(0, 2) == 'de') {
            return 'Menükarte';
        } else {
            return 'Cardápio';
        }
    };

    $scope.getMenuTermsConditionsTitle = function() {
        if ($rootScope.user.locale == 'en') {
            return 'terms and conditions of use';
        } else if ($rootScope.user.locale == 'es') {
            return 'términos y condiciones de uso';
        } else if ($rootScope.user.locale.substring(0, 2) == 'fr') {
            return "termes et conditions d'utilisation";
        } else if ($rootScope.user.locale.substring(0, 2) == 'de') {
            return 'Bedingungen der Nutzung';
        } else {
            return 'termos e condições de uso';
        }
    };

    $scope.getModalTermsText = function() {
        var content = "";
        if ($rootScope.user.locale == 'en') {
            content = "The menus and translations displayed here are updated according to the information sent by the restaurants from time to time.<br/>" +
                "We don't take responsibility for price changes or the availability of the dishes presented in this application.<br/>" +
                "Restaurant hours, as well as the availability of tables must be confirmed directly with each restaurant.";
        } else if ($rootScope.user.locale == 'es') {
            content = "Los menús y traducciones aquí disponibles son actualizados según las informaciones enviadas periódicamente por los restaurantes. <br/>" +
                "No nos responsabilizamos de la variación de precio o de la disponibilidad de los platos presentados en esta aplicación.<br/>" +
                "Los días y horario de funcionamiento, así como la disponibilidad de mesa en los restaurantes, deberán ser confirmados directamente con cada restaurante.";
        } else if ($rootScope.user.locale.substring(0, 2) == 'fr') {
            content = "Les menus (cartes) et traductions mises à jour fournies ici sont des informations cohérentes transmis par les restaurants de temps en temps. <br/>" +
                "Nous ne sommes pas responsables de la variation dans le prix et la disponibilité des plats présentés ici dans cette application.<br/>" +
                "Les jours et les heures d'ouverture ainsi que la disponibilité des tables dans les restaurants doivent être confirmées directement avec chaque restaurant.";
        } else if ($rootScope.user.locale.substring(0, 2) == 'de') {
            content = "Die Menükarte und Überzetzungen haben aktualisiert genauso die Restaurants haben für uns  geschickt. <br/>" +
                "Wir beten nicht für die Varianten auf den Preis oder auf die verfügbare Tische, was gibt es in dieses Anwenderprogramm.<br/>" +
                "Die Öffnungszeiten und die Verfügbarkeit von der Tische müssen Sie im Restaurants bestätigen."
        } else {
            content = "Os cardápios e traduções aqui disponibilizados são atualizadas conforme informações encaminhadas pelos restaurantes de tempos em tempos.<br/>" +
                "Não nos responsabilizamos pela variação de preço e pela disponibilidade dos pratos ora apresentados neste aplicativo.<br/>" +
                "Os dias e horários de funcionamento, bem como a disponibilidade de mesas nos restaurantes deverão ser confirmados diretamente com cada restaurante.";
        }
        return content;
    };

    $scope.getMenuInfo = function() {
        if ($rootScope.user.locale == 'en') {
            return "Press the item you want and show it to the waiter to place your order.";
        } else if ($rootScope.user.locale == 'es') {
            return 'Presione el ítem elegido y muestre al camarero para hacer su pedido.';
        } else if ($rootScope.user.locale.substring(0, 2) == 'fr') {
            return "Pour faire votre demande, appuyez sur l'image/nom et montrez au serveur.";
        } else if ($rootScope.user.locale.substring(0, 2) == 'de') {
            return 'Wenn Sie bestellen möchten, drücken Sie bitte den Abschnitt und zeigen Sie zum Kellner.';
        } else {
            return 'Para fazer o pedido, pressione o item escolhido e mostre ao garçom.';
        }
    };

    $scope.getModalTitle = function() {
        if ($rootScope.user.locale == 'en') {
            return 'Show to the waiter to order';
        } else if ($rootScope.user.locale == 'es') {
            return 'Mostrar para el camarero para pedir';
        } else if ($rootScope.user.locale.substring(0, 2) == 'fr') {
            return "Montrer au garçon de commander";
        } else if ($rootScope.user.locale.substring(0, 2) == 'de') {
            return 'Dem Kellner zeigen, um zu bestellen';
        } else {
            return 'Mostre ao garçom para pedir';
        }
    };

    $scope.getModalText = function() {
        // Will show modal text in restaurant's native language
        if ($scope.restaurant.locale == 'en') {
            return "Please, I'd like to have:";
        } else if ($scope.restaurant.locale == 'es') {
            return 'Por favor, me gustaría tener:';
        } else if ($rootScope.user.locale.substring(0, 2) == 'fr') {
            return "S'il vous plaît, je voudrais demander:";
        } else if ($rootScope.user.locale.substring(0, 2) == 'de') {
            return 'Entschuldigung, ich möchte bestellen:';
        } else {
            return 'Por favor, gostaria de pedir:';
        }
    };

    $scope.getModalEmpty = function() {
        if ($rootScope.user.locale == 'en') {
            return 'ERROR: Unable to load the native language of this item.';
        } else if ($rootScope.user.locale == 'es') {
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