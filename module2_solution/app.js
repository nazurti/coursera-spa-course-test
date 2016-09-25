(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller("ToBuyShoppingController", ToBuyShoppingController)
    .controller("AlreadyBoughtShoppingController", AlreadyBoughtShoppingController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyShoppingController(ShoppingListCheckOffService) {
      var ctrl = this;

      ctrl.list = ShoppingListCheckOffService.getBuyList();
      ctrl.buyItem = function (index) {
        ShoppingListCheckOffService.buyItem(index);
      }
    }

    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
      var ctrl = this;

      ctrl.list = ShoppingListCheckOffService.getBoughtList();
    }

    function ShoppingListCheckOffService() {
      var service = this,
        toBuyList = [
          { name: "cookies", quantity: 10 },
          { name: "candies", quantity: 20 },
          { name: "olives", quantity: 2 },
          { name: "bread", quantity: 1 },
          { name: "Coca Cola", quantity: 5 },
          { name: "Jack Daniels", quantity: 3 },
        ],
        alreadyBoughtList = [];

        service.getBuyList = function () {
          return toBuyList;
        }

        service.getBoughtList = function () {
          return alreadyBoughtList;
        }

        service.buyItem = function (index) {
          alreadyBoughtList.push(toBuyList.splice(index, 1)[0]);
        }
    }

 })();
