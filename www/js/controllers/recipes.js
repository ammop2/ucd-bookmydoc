angular.module('ctrl.recipes', [])
  .controller('DocsCtrl', function ($scope, recipes) {
    $scope.items = recipes.all();
  })
  .controller('DocsDetailCtrl', function ($scope, recipes, $stateParams) {
    $scope.doc = recipes.get($stateParams.docId);

    $scope.markAsOrdered = function () {
      var date = new Date();
      $scope.doc.bezogen = "" + date.getDay() + "." + date.getMonth() + "." + date.getFullYear();
    }

  });
