angular.module('ctrl.events', [])

  .controller('EventsCtrl', function ($scope, doctors, HealthInstitute, $stateParams,$ionicActionSheet, Events, $ionicModal, $ionicPopup, Urgencies, PatientData, Doctors, Symptoms, $location) {

    // Definition
    $scope.symptoms = [];
    $scope.title = {};
    $scope.doctor = {};
    $scope.doctors = doctors.all();

    $scope.patientHealthinstitutes = PatientData.getHealthinstitutes();
    $scope.allHealthinstitutes = HealthInstitute.getDummyData();

    $scope.selectDoc = {
      searchText: ''
    }

    $scope.spitalSelected = function(doctor) {
      $scope.doctor = doctor;
      $scope.searchDocModal.hide();
    }

    $scope.closeSelectDoc = function() {
      $scope.searchDocModal.hide();
    }

    $scope.urgencies = Urgencies.all();
    $scope.urgencies.selected = 'Normal';

    $scope.events = Events.all();

    // healthinstitute (Spitäler, "Hausarzt..."
    $scope.healthinstitutes = PatientData.getHealthinstitutes();
    $scope.healthinstitutes.selected = $scope.healthinstitutes[0];

    // ****** Show Messages Modal ******

    $ionicModal.fromTemplateUrl('templates/event-messages.html', {
      scope: $scope,
      animation: 'slide-in-right'
    }).then(function (modal) {
      $scope.messages = modal;
    });

    $scope.showMessages = function (eventId) {
      $scope.messages.data = Events.getMessages(eventId);
      $scope.messages.show();
      Events.resetMessageCounter(eventId);
    };

    $scope.closeMessages = function () {
      $scope.messages.hide();
    };


    $ionicModal.fromTemplateUrl('templates/tab-event-addDoctor.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.searchDocModal = modal;
    });

    $scope.selectArzt = function () {
      $scope.searchDocModal.show();
    };

    // ***************************

    // ****** Add Event Modal ******

    $ionicModal.fromTemplateUrl('templates/add-event.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $scope.addEvent = function () {
      $scope.modal.show();
    };

    $scope.save = function () {
      $scope.modal.hide();

      var event = {
        title: $scope.title.text,
        date: $scope.selectedDateTime,
        location: $scope.healthinstitutes.selected.title,
        location_img: $scope.healthinstitutes.selected.img,
        doctor: $scope.doctor.title,
        description: $scope.symptoms.toString(),
        newMessages: 0,
        status: 'pending',
        messages: {},
      }
      Events.add(event);
    };

    $scope.close = function () {
      $scope.modal.hide();
    };

    // ***************************

    function addTextSymptom() {
      var addTextScope = $scope.$new();
      addTextScope.text = {
        value: ''
      }

      var textPopup = $ionicPopup.confirm({
        title: 'Freitext',
        template: '<input type="text" ng-model="text.value" />',
        scope: addTextScope,
        buttons: [
          {text: 'Abbrechen'},
          {
            text: '<b>Speichern</b>',
            type: 'button-positive',
            onTap: function (e) {
              return addTextScope.text.value;
            }
          }]
      });

      textPopup.then(function (text) {
        if(text) {
          $scope.symptoms.push(text);
        }
      });
    }

    function addTagSymptom() {
      var addTagScope = $scope.$new();
      addTagScope.tags = Symptoms.all();
      addTagScope.selected = {
      }

      var textPopup = $ionicPopup.confirm({
        title: 'Freitext',
        template: '<ion-list><ion-checkbox ng-repeat="tag in tags" ng-model="tag.selected">{{tag.title}}</ion-checkbox></ion-list>',
        scope: addTagScope,
        buttons: [
          {text: 'Abbrechen'},
          {
            text: '<b>Speichern</b>',
            type: 'button-positive',
            onTap: function (e) {
              return addTagScope.tags;
            }
          }]
      });

      textPopup.then(function (res) {
        if(res) {

          res.forEach(function (item) {
            if(item.selected) {
              $scope.symptoms.push(item.title);
            }
          });

        }
      });
    }

    $scope.addSymptome = function() {
      // Show the action sheet
      $ionicActionSheet.show({
        buttons: [
          { text: 'Liste' },
          { text: 'Frei-text' }
        ],
        titleText: 'Symptom hinzufügen',
        cancelText: 'Abbrechen',
        cancel: function() {
          // add cancel code..
        },
        buttonClicked: function(index) {
          if(index == 0)
          {
            addTagSymptom();
          }
          else if(index == 1)
          {
            addTextSymptom();
          }
          return true;
        }
      });
    };


    $scope.cancel = function (event) {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Absagen',
        template: 'Wollen Sie diesen Termin wirklich absagen?',
        buttons: [
          {text: 'Abbrechen'},
          {
            text: '<b>Bestätigen</b>',
            type: 'button-positive',
            onTap: function (e) {
              return true;
            }
          }]
      });

      confirmPopup.then(function (res) {
        if (res) {
          Events.remove(event);
        } else {
        }
      });
    }


    $scope.selectDate = function (event) {
      var addScope = $scope.$new();


      addScope.dates = [];

      for (var i = 0; i < 90; i++) {
        var cDate = new Date();
        addScope.dates.push({
          times: [
            '08:00',
            '09:30',
            '10:30',
            '14:30',
            '17:30',
          ],
          date: {
            value: cDate
          },
          selectedTime: {
            value: {}
          }
        });
        cDate.setDate(cDate.getDate() + i);
      }


      addScope.selected =  addScope.dates[0];

      addScope.slideHasChanged = function (index) {
        addScope.selected =  addScope.dates[index];
      }


      var confirmPopup = $ionicPopup.confirm({
        title: 'Termin',
        templateUrl: 'templates/select-date.html',
        scope:  addScope,
        buttons: [
          {text: 'Abbrechen'},
          {
            text: '<b>Auswählen</b>',
            type: 'button-positive',
            onTap: function (e) {
              return  addScope.selected;
            }
          }]
      });

      confirmPopup.then(function (date) {
        if (date) {
          var datum = date.date.value;
          $scope.selectedDateTime = datum.getDate() + '.' +
            datum.getMonth() + '.' + datum.getFullYear() +
            ' - ' + date.selectedTime.value;
        } else {
        }
      });
    }
  });
