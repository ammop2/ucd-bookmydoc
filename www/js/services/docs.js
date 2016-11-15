angular.module('services.docs', [])
  .factory('recepte', function () {
    var recepte = [
      {
        id: 0,
        titel: 'Ritalin',
        datum: '1.1.2016',
        arzt: 'Dr. Aklin'
      },
      {
        id: 1,
        titel: 'Ritalin',
        datum: '1.1.2016',
        arzt: 'Dr. Aklin',
        bezogen: '2.1.2016'
      }
    ];

    return {
      all: function () {
        return recepte;
      },
      get: function (id) {
        for (var i = 0; i < recepte.length; i++) {
          if (recepte[i].id === parseInt(id)) {
            return recepte[i];
          }
        }
        return null;
      }
    }
  });
