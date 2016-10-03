(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItems )
    .constant('SERVER_URL', 'https://davids-restaurant.herokuapp.com/menu_items.json');

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
      var ctrl = this;

      ctrl.search = function () {
        var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);

        promise.then(function(response) {
          ctrl.found = response;
        })
        .catch(function (error) {
          console.log('Error occured: ', error);
        });
      }

      ctrl.removeItem = function(index) {
        ctrl.found.splice(index, 1);
        console.log(ctrl.found.length);
      }
    }

    MenuSearchService.$inject = ['$http', 'SERVER_URL'];
    function MenuSearchService($http, SERVER_URL) {
      var service = this;

      service.getMatchedMenuItems = function(searchTerm) {
        var term = searchTerm.toLowerCase();
        return $http({
            method: 'GET',
            url: SERVER_URL
          })
          .then(function (result) {
            return result.data.menu_items.filter(function(value) {
              return value.description.toLowerCase().indexOf(term) !== -1;
            });
          })
          .catch(function (error) {
            console.log('Something went wrong while getting data form server');
          });
      }
    }

    function FoundItems() {
      return {
        restrict: 'A',
        scope: {
          found: '<',
          onRemove: '&'
        },
        templateUrl: 'menu-item-template.html'
      };
    }

 })();
