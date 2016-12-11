angular.module('services.healthInstitute', [])
  .factory('HealthInstitute',function(Doctors){
    var hi = [
      {
        id: 0,
        title: 'Spital Thun',
        img: 'img/spitalthun.jpg',
        doctors: []
      },
      {
        id: 1,
        title: 'Inselspital Bern',
        img: 'img/inselspital.jpg',
        doctors: []
      }
    ];
    return {
      all: function(){
        return hi;
      },
      get: function(id){
        for (var i = 0; i < hi.length; i++){
          if(hi[i].id === parseInt(id)){
            return hi[i];
          }
        }
        return null;
      },
      getPatientDummyData: function(){
        var doc1 = Doctors.get(0);

        var hi = [
          {
            id: 0,
            title: 'Spital Thun',
            img: 'img/spitalthun.jpg',
            doctors: [doc1]
          }
        ];
        return hi;
      },
      getDummyData: function(){
        var doc1 = Doctors.get(0);
        var doc2 = Doctors.get(1);
        var doc3 = Doctors.get(2);
        var doc4 = Doctors.get(3);

        var hi = [
          {
            id: 0,
            title: 'Spital Thun',
            img: 'img/spitalthun.jpg',
            doctors: [doc1, doc2]
          },
          {
            id: 1,
            title: 'Inselspital Bern',
            img: 'img/inselspital.jpg',
            doctors: [doc3, doc4]
          }
        ];
        return hi;
      }
    }
  })
    .factory('Urgencies', function(){
      var urgencies = [
        'Normal',
        'Notfall',
        'Dringend'
      ];

      return {
        all: function () {
          return urgencies;
        }
      }
    });
