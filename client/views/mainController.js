(function() {
    'use strict';

    angular
      .module('app')
      .controller('mainController', mainControllerFunction);

      function mainControllerFunction ($scope) {
        $scope.test = 'Testing!!!';
      }; 
})();