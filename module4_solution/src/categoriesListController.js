(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesListController', CategoriesListController);


CategoriesListController.$inject = ['list'];
function CategoriesListController(list) {
  var ctrl = this;
  ctrl.list = list.data;
}

})();
