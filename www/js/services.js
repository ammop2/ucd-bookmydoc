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
      titel: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'img/ben.png'
    }, {
      id: 1,
      titel: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'img/max.png'
    }, {
      id: 2,
      titel: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'img/adam.jpg'
    }, {
      id: 3,
      titel: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'img/perry.png'
    }, {
      id: 4,
      titel: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'img/mike.png'
    }];

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
  .factory('Krankenkassen', function () {
    var krankenkassen = [
      'Agrisano',
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
