angular.module('starter.services', [])

  .factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'img/ben.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'img/max.png'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'img/adam.jpg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'img/perry.png'
    }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'img/mike.png'
    }];

    return {
      all: function () {
        return chats;
      },
      remove: function (chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function (chatId) {
        for (var i = 0; i < chats.length; i++) {
          if (chats[i].id === parseInt(chatId)) {
            return chats[i];
          }
        }
        return null;
      }
    };
  })

  .factory('PatientData',function(HealthInstitute, Doctors){

    var patient = {
      img: "img/mila.png",
      fullname: "Mila Kunis",
      birthdate: "14.09.1983",
      placeOfBirth: "Ukraine",
      ahvNr: "756.3588.6565.21",
      healthinstitutes: HealthInstitute.getPatientDummyData()
    }
    return{
      all: function(){
        console.log(patient);
        return patient;
      },
      getHealthinstitutes: function(){
        return patient.healthinstitutes;
      },
      addDoctor: function(healthinstituteId, doctorId){
        var i = 0;
        var doctor = Doctors.get(doctorId);
        for(i; i < patient.healthinstitutes.length; i++){
          if(patient.healthinstitutes[i].id == healthinstituteId){
            patient.healthinstitutes[i].doctors.push(doctor);
            return;
          }
        }
        // looks like healthinstitute is not yet added to array
        var hiData = HealthInstitute.get(healthinstituteId);
        hiData.doctors.push(doctor)
        patient.healthinstitutes.push(hiData);
        return;
      },
      removeDoctor: function (doctorId) {
        for(var i = 0; i < patient.healthinstitutes.length; i++){
          for(var j = 0; j < patient.healthinstitutes[i].doctors.length; j++){
            if(patient.healthinstitutes[i].doctors.id = doctorId){
              patient.healthinstitutes[i].doctors.splice(j, 1);
            }
          }
        }
      }
    }
  })
  .factory('Doctors', function(){
    var docs = [
      {
        id: 0,
        surname: "Schweizer",
        name: "Hans",
        fullname: "H. Schweizer",
        img: "img/doktor1.jpg",
        typ: "Hausarzt",
        rating: 5,
      },
      {
        id: 1,
        surname: "Müller",
        name: "Franziska",
        fullname: "F. Müller",
        img: "img/doktor2.jpg",
        typ: "Anästhesist",
        rating: 2,
      },
      {
        id: 2,
        surname: "Meister",
        name: "Hans",
        fullname: "H. Meister",
        img: "img/doktor3.jpg",
        typ: "Dermatologe",
        rating: 2,
      },
      {
        id: 3,
        surname: "Launer",
        name: "Lukas",
        fullname: "L. Launer",
        img: "img/doktor3.jpg",
        typ: "Endokrinologe",
        rating: 4,
      },
    ];
    return {
      all: function(){
        return docs;
      },
      get: function(id){
        for (var i = 0; i < docs.length; i++){
          if(docs[i].id === parseInt(id)){
            return docs[i];
          }
        }
        return null;
      }
    }
  })
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

  })
  .factory('Events', function (PatientData, HealthInstitute) {
    // get some hi to put in the events
    var hi = PatientData.getHealthinstitutes();
    hi1 = hi[0];
    hi2 = hi[1];

    var events = [{
      id: 0,
      title: 'Fieber & Ausschlag',
      location: hi1.title,
      doctor: hi1.doctors[0],
      location_img: hi1.img,
      date: '23.12.2016 - 10:00',
      description: 'Nullam id dolor id nibh ultricies vehicula ut id elit.',
      status: 'declined',
      newMessages: 1,
      messages: [
        {
          id: 0,
          text: " Titel: Fieber & Ausschlag<br>" +
          "Dringlichkeit: Normal <br> " +
          "Symptome: Fieber, Ausschlag",
          sender: "patient"
        },
        {
          id: 1,
          text: '<img src="/img/ausschlag.jpg" width="200px" />',
          sender: "patient"
        },
        {
          id: 2,
          text: "Hallo Frau Kunis. Bitte rufen Sie uns an 079 316 33 44",
          sender: "doctor"
        }
      ]
    },
    {
      id: 1,
      title: 'Jährliche Untersuchung',
      location: hi1.title,
      doctor: hi1.doctors[0],
      location_img: hi1.img,
      date: '30.12.2016 - 09:30',
      description: 'Donec ullamcorper nulla non metus auctor fringilla.',
      status: 'accepted',
      newMessages: 0,
      messages: [
        {
          id: 0,
          text: "Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
          sender: "doctor"
        },
        {
          id: 1,
          text: "Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
          sender: "patient"
        },
        {
          id: 2,
          text: "Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
          sender: "doctor"
        }
      ]
    },
    {
      id: 2,
      title: 'Operation Kniegelenk',
      doctor: hi1.doctors[0],
      location: hi1.title,
      location_img: hi1.img,
      date: '23.3.2017 - 15:30',
      description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
      status: 'pending',
      newMessages: 1,
      messages: [
        {
          id: 0,
          text: "Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
          sender: "doctor"
        },
        {
          id: 1,
          text: "Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
          sender: "patient"
        },
        {
          id: 2,
          text: "Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
          sender: "doctor"
        }
      ]
    }

    ];

    return {
      all: function () {
        return events;
      },
      remove: function (event) {
        events.splice(events.indexOf(event), 1);
      },
      get: function (id) {
        for (var i = 0; i < events.length; i++) {
          if (events[i].id === parseInt(id)) {
            return events[i];
          }
        }
        return null;
      },
      resetMessageCounter: function (id) {
        for (var i = 0; i < events.length; i++) {
          if (events[i].id === parseInt(id)) {
            events[i].newMessages = 0;
          }
        }
      },
      getMessages: function (id) {
        for (var i = 0; i < events.length; i++) {
          if (events[i].id === parseInt(id)) {
            return events[i].messages;
          }
        }
        return null;
      },
      add: function (event) {
        events.splice(0, 0, event);
      }
    }
  })
  .factory('Symptoms',function(){
    var symptoms = [
      {
        selected: false,
        title: 'Übelkeit',
      },
      {
        selected: false,
        title: 'Schwindel',
      },
      {
        selected: false,
        title: 'Fieber',
      },
      {
        selected: false,
        title: 'Herzrasen',
      }
    ];
    return {
      all: function(){
        return symptoms;
      }
    }
  })



  .factory('Krankenkassen', function () {
    var krankenkassen = [
      'Agrisano',
      'Concordia',
      'Compact',
      'Easy Sana Krankenversicherung AG ',
      'INTRAS',
      'PROVITA',
      'sana24',
      'Sanitas',
      'Sanagate',
      'Simplon',
      'SLKK',
      'sodalis',
      'Stoffel',
      'SWICA',
    ];

    return {
      all: function () {
        return krankenkassen;
      }
    }
  });
