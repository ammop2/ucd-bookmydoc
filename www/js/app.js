angular.module('starter', [
  'ionic',
  'services.symptom',
  'services.event',
  'services.doctor',
  'services.recipe',
  'services.healthInstitute',
  'services.patientData',
  'services.healthInsurance',
  'starter.controllers',
  'ctrl.event',
  'ctrl.settings',
  'ctrl.recipes'
])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      })
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })
      .state('tab.events', {
        url: '/events',
        views: {
          'tab-events': {
            templateUrl: 'templates/tab-events.html',
            controller: 'EventsCtrl as ctrl'
          }
        }
      })
      .state('tab.docs-detail', {
        url: '/docs/:docId',
        views: {
          'tab-docs': {
            templateUrl: 'templates/recipe-detail.html',
            controller: 'DocsDetailCtrl'
          }
        }
      })
      .state('tab.docs', {
        url: '/docs',
        views: {
          'tab-docs': {
            templateUrl: 'templates/tab-recipes.html',
            controller: 'DocsCtrl'
          }
        }
      })
      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'SettingsCtrl'
          }
        }
      });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

  })
  .filter("filterText", function() {
  return function (values, value) {
    return values.filter(function (item) {
      return item.surname.indexOf(value) !== -1 || item.name.indexOf(value) !== -1;
    });
  };
}).filter("filterType", function() {
  return function (values, value) {
    return values.filter(function (item) {
      return item.typ.indexOf(value) !== -1;
    });
  };
})
  .filter('range', function() {
  return function(input, total) {
    total = parseInt(total);

    for (var i=0; i<total; i++) {
      input.push(i);
    }

    return input;
  };
});
