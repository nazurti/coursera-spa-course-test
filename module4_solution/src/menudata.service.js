(function () {
  'use strict';

  angular.module('Data')
    .service('MenuDataService', MenuDataService)
    .constant('SERVER_URL_BASE', 'https://davids-restaurant.herokuapp.com/');

  MenuDataService.$inject = ['$http', 'SERVER_URL_BASE'];
  function MenuDataService($http, SERVER_URL_BASE) {
    var service = this;

    service.getAllCategories = function() {
      return $http({
          method: 'GET',
          url: SERVER_URL_BASE + 'categories.json'
      })
    }

    service.getItemsForCategory = function(categoryShortName) {
      return $http({
          method: 'GET',
          url: SERVER_URL_BASE + 'menu_items.json?category=' + categoryShortName
      })
    }
  }

})();
