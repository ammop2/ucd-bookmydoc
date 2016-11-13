angular.module('ctrl.settings', [])
  .controller('LoginCtrl', function ($scope, $location) {
    $scope.login = function () {
      $location.path('tab/events');
    }
  })
  .controller('SettingsCtrl', function ($scope, $ionicPopup, HealthInstitute, Krankenkassen) {
    $scope.kks = Krankenkassen.all();
    $scope.kk = $scope.kks[0];

    $scope.healthinstitutes = HealthInstitute.all();

    $scope.setKK = function () {
      var addTagScope = $scope.$new();
      addTagScope.kks = $scope.kks;

      addTagScope.selected = {
        value: {}
      }

      var textPopup = $ionicPopup.confirm({
        title: 'Freitext',
        template: '<ion-list><ion-radio ng-repeat="kk in kks" ng-model="selected.value" ng-value="kk">{{kk}}</ion-radio></ion-list>',
        scope: addTagScope,
        buttons: [
          {text: 'Abbrechen'},
          {
            text: '<b>Speichern</b>',
            type: 'button-positive',
            onTap: function (e) {
              return addTagScope.selected.value;
            }
          }]
      });

      textPopup.then(function (res) {
        if (res) {
          $scope.kk = res;
      }
      });
    }
  });
