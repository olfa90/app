// DetailsController
menufortouristApp.controller('DetailsController', function($scope, $location, RestaurantsFactory){

    $scope.restaurant = null;
    $scope.selectedItem = null;

    init();

    function init(){
        $scope.restaurant = RestaurantsFactory.getSelectedRestaurant();
        
        $scope.restaurant = RestaurantsFactory.getRestaurantCardapio($scope.restaurant);
    }

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
            if (translations[i].locale == locale) {
                return translations[i];
            }
        }
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