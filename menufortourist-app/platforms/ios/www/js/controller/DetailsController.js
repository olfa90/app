// DetailsController
menufortouristApp.controller('DetailsController', function($scope, $location, RestaurantsFactory){

    $scope.restaurant = null;
    $scope.selectedItem = null;

    init();

    function init(){
        $scope.restaurant = RestaurantsFactory.getSelectedRestaurant();
        restaurant = RestaurantsFactory.getRestaurantCardapio($scope.restaurant);
        if (restaurant != null) {
        	$scope.restaurant = restaurant;
        }
    }

    $scope.back = function() {
        $location.path("/main");
    };

    $scope.formatPriceDescription = function(description) {
        if (description != null) {
            return '('+description+')';
        }
        return '';
    }

    $scope.setSelectedItem = function(item) {
        $scope.selectedItem = getItemTranslated(item, 'EN');
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

    $scope.getTranslation = function(translations, locale) {
        if (translations == null) {
            return;
        }
        for (var i = 0; i < translations.length; i++) {
            if (translations[i].idioma == locale) {
                return translations[i];
            }
        }
    }

    function getItemTranslated(item, locale) {
        if (item == null || locale == null) {
            return;
        }
        var itemTranslated = {identifier: item.identifier, titulo:"", descricao:""};

        var tTraducoes = item.tituloTraducoes;
        for (var i = 0; i < tTraducoes.length; i++) {
            if (tTraducoes[i].idioma == locale) {
                itemTranslated.titulo = tTraducoes[i].traducao;
                break;
            }
        }

        if (item.descricao != null) {
            var dTraducoes = item.descricaoTraducoes;
            for (var i = 0; i < dTraducoes.length; i++) {
                if (dTraducoes[i].idioma == locale) {
                    itemTranslated.descricao = dTraducoes[i].traducao;
                    break;
                }
            }
        }
        return itemTranslated;
    }

});