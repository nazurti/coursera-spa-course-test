(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller("LunchCheckController", LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    var lunchItemsCount = 0;

    $scope.checkPerformed = false;
    $scope.emptyInputFlag = false;
    $scope.successMessage = "Enjoy!";
    $scope.unsuccessMessage = "Too much!";

    $scope.checkLunch = function () {
      if ($scope.lunchItems) {
        var arr = $scope.lunchItems.split(',').filter(function(el) {
          return el.trim() != "";
        });
        lunchItemsCount = arr.length;
        $scope.checkPerformed = true;
        $scope.emptyInputFlag = false;
      }
      else {
        $scope.emptyInputFlag = true;
      }
    }

    $scope.getMessage = function () {
      return (lunchItemsCount > 3) ? $scope.unsuccessMessage : $scope.successMessage;
    }
  }

 })();
