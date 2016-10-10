(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/categoriesList.template.html',
      controller: 'CategoriesListController as categoriesList',
      resolve: {
        list: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items', {
      url: '/category/{categoryShortName}',
      templateUrl: 'src/itemsList.template.html',
      controller: 'ItemsListController as itemsList',
      resolve: {
        list: ['$stateParams', 'MenuDataService',
          function ($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          }
        ]
      }
    });
}

})();
