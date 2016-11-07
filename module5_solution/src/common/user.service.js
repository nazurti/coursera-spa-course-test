(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

function UserService() {
  var service = this;
  service.userData = {};

  service.setUserData = function (data) {
    service.userData = data;
    return true;
  };

  service.getUserData = function () {
    return service.userData;
  };
}

})();
