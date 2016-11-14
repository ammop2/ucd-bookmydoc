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

  .factory('PatientData',function(HealthInstitute){
    var patient = {
      img: "img/mila.png",
      fullname: "Mila Kunis",
      birthdate: "14.09.1983",
      placeOfBirth: "Ukraine",
      healthinstitutes: [HealthInstitute.get(0), HealthInstitute.get(1)]
    }
    return{
      all: function(){
        console.log(patient);
        return patient;
      },
      getHealthinstitutes: function(){
        return patient.healthinstitutes;
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
        img: "img/doktor1.jpg"
      },
      {
        id: 1,
        surname: "Müller",
        name: "Franziska",
        fullname: "F. Müller",
        img: "img/doktor2.jpg"
      },
      {
        id: 2,
        surname: "Meister",
        name: "Hans",
        fullname: "H. Meister",
        img: "img/doktor3.jpg"
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

    var doc1 = Doctors.get(0);
    var doc2 = Doctors.get(1);
    var doc3 = Doctors.get(2);

    var hi = [
      {
        id: 0,
        title: 'Spital Thun',
        img: 'img/spitalthun.jpg',
        doctors: [doc1,doc2]
      },
      {
        id: 1,
        title: 'Inselspital Bern',
        img: 'img/inselspital.jpg',
        doctors: [doc3]
      }
    ];
    return {
      all: function(){
        console.log(hi);
        return hi;
      },
      get: function(id){
        for (var i = 0; i < hi.length; i++){
          if(hi[i].id === parseInt(id)){
            return hi[i];
          }
        }
        return null;
      }
    }
  })
  .factory('Urgencies', function(){
    var urgencies = [
      'Notfall',
      'Dringend',
      'Normal'
    ];

    return {
      all: function () {
        return urgencies;
      }
    }

  })
  .factory('Events', function (HealthInstitute) {
    // get some hi to put in the events
    var hi1 = HealthInstitute.get(0);
    var hi2 = HealthInstitute.get(1);

    var events = [{
      id: 0,
      title: 'Bauchschmerzen',
      location: hi1.title,
      doctor: hi1.doctors[0].fullname,
      location_img: hi1.img,
      date: '23.12.2016',
      description: 'Nullam id dolor id nibh ultricies vehicula ut id elit.',
      status: 'declined',
      newMessages: 1,
      messages: [
        {
          id: 0,
          text: "Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
          sender: "doctor"
        }
      ]
    },
    {
      id: 1,
      title: 'Jährliche Untersuchung',
      location: hi2.title,
      doctor: hi2.doctors[0].fullname,
      location_img: hi2.img,
      date: '30.12.2016',
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
      location: hi1.title,
      doctor: hi1.doctors[1].fullname,
      location_img: hi1.img,
      date: '23.3.2017',
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
