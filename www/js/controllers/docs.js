angular.module('ctrl.docs', [])
  .controller('DocsCtrl', function ($scope, $location) {
    $scope.login = function () {
      $location.path('tab/events');
    }
  });
