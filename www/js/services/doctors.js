angular.module('services.doctors', [])
  .factory('doctors', function () {
    var doctors = [
      {
        id: 0,
        titel: 'Insel Spital Bern',
        searchText: 'Inselspital insel bern Bern BERN BE be'
      },
      {
        id: 1,
        titel: 'Unispital Basel',
        searchText: 'Inselspital insel bern Bern BERN BE be'
      },
      {
        id: 2,
        titel: 'Universitätsspital Zürich',
        searchText: 'Universitätsspital Zürich Unispital ZH zürich Zürich Spital'
      },
      {
        id: 3,
        titel: 'Spital Thun',
        searchText: 'Spital Thun'
      }
    ];

    return {
      all: function () {
        return doctors;
      },
    }
  });
