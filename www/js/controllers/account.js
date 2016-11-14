angular.module('ctrl.settings', [])
  .controller('LoginCtrl', function ($scope, $location) {
    $scope.login = function () {
      $location.path('tab/events');
    }
  })
  .controller('SettingsCtrl', function ($scope, $ionicPopup, $ionicModal, PatientData, HealthInstitute, Krankenkassen) {
    $scope.kks = Krankenkassen.all();
    $scope.kk = $scope.kks[0];

    $scope.patient = PatientData.all();

    $scope.healthinstitutes = PatientData.getHealthinstitutes();

    $ionicModal.fromTemplateUrl('templates/tab-account-addDoctor.html', {
      scope: $scope,
      animation: 'slide-in-up',
    }).then(function(modal) {
      $scope.doctorModal = modal;
    });

    $scope.closeDoctorModal = function() {
      $scope.doctorModal.hide();
    };

    $scope.openDoctorModal = function() {
      $scope.doctorModal.show();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.doctorModal.remove();
    });

    $scope.setKK = function () {
      var addTagScope = $scope.$new();
      addTagScope.kks = $scope.kks;

      addTagScope.selected = {
        value: {}
      }

      var textPopup = $ionicPopup.confirm({
        title: 'Krankenkasse auswählen',
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
