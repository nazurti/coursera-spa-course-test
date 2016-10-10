(function () {
  'use strict';

  angular.module('MenuApp')
    .component('categories', {
      bindings: {
        list: '<'
      },
      templateUrl: 'src/components/categories/categories.template.html'
    })

})();
