(function() {
    'use strict';
  
    angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
  
    function LunchCheckController($scope) {
      $scope.lunchItems = "";
      $scope.message = "";
      $scope.messageClass = "";
  
      $scope.checkIfTooMuch = function() {
        if ($scope.lunchItems.trim() === "") {
          $scope.message = "Please enter data first";
          $scope.messageClass = "red";
          return;
        }
  
        var items = $scope.lunchItems.split(',');
        var itemCount = items.filter(item => item.trim() !== "").length;
  
        if (itemCount <= 3) {
          $scope.message = "Enjoy!";
          $scope.messageClass = "green";
        } else {
          $scope.message = "Too much!";
          $scope.messageClass = "green";
        }
      };
    }
  })();
  