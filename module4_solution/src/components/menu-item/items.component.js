(function () {
  'use strict';

  angular.module('MenuApp')
    .component('items', {
      bindings: {
        list: '<'
      },
      templateUrl: 'src/components/menu-item/items.template.html'
    })

})();
