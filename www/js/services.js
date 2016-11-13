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
  .factory('Events', function () {
    var events = [{
      id: 0,
      title: 'Bauchschmerzen',
      location: 'Spital Thun',
      doctor: '',
      location_img: 'img/spitalthun.jpg',
      date: '23.12.2016',
      description: 'Melden Sie sich bitte am Empfang. Verlangen Sie nach Dr. Müller',
      status: 'declined',
      messages: 1
    },
    {
      id: 1,
      title: 'Jährliche Untersuchung',
      location: 'Inselspital Bern',
      doctor: 'F. Badetscher',
      location_img: 'img/doktor.jpg',
      date: '30.12.2016',
      description: 'Donec ullamcorper nulla non metus auctor fringilla.',
      status: 'accepted',
      messages: 0
    },
    {
      id: 1,
      title: 'Operation Kniegelenk',
      location: 'Inselspital Bern',
      doctor: '',
      location_img: 'img/inselspital.jpg',
      date: '23.3.2017',
      description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
      status: 'pending',
      messages: 1
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
