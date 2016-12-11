angular.module('services.event', [])
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
});
