angular.module('ctrl.docs', [])
  .controller('DocsCtrl', function ($scope, recepte) {
    $scope.items = recepte.all();
  })
  .controller('DocsDetailCtrl', function ($scope, recepte, $stateParams) {
    $scope.doc = recepte.get($stateParams.docId);

    $scope.markAsOrdered = function () {
      var date = new Date();
      $scope.doc.bezogen = "" + date.getDay() + "." + date.getMonth() + "." + date.getFullYear();
    }

  });
