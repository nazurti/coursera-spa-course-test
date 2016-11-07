(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'UserService'];
function SignupController(MenuService, UserService) {
  var $ctrl = this;
  $ctrl.dataSaved = false;
  $ctrl.favDishNotFound = true;
  $ctrl.menuService = MenuService;
  $ctrl.userService = UserService;

  $ctrl.checkMenuItemExists = function() {
    $ctrl.menuService.getItemByShortCode($ctrl.user.favDishShortCode.toUpperCase()).then(function (response) {
      $ctrl.favDishNotFound = false;
      $ctrl.user.favDish = response;
    }).catch(function(e) {
      $ctrl.favDishNotFound = true;
    });
  };

  $ctrl.saveUserData = function() {
    $ctrl.dataSaved = $ctrl.userService.setUserData($ctrl.user);
  };
}

})();
