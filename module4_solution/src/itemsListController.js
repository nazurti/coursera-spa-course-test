(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsListController', ItemsListController);


ItemsListController.$inject = ['list'];
function ItemsListController(list) {
  var ctrl = this;

  ctrl.list = list.data.menu_items;
  ctrl.category = list.data.category;
}

})();
