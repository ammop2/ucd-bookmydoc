angular.module('services.recipe', [])
  .factory('recipes', function () {
    var recipes = [
      {
        id: 0,
        titel: 'Ritalin',
        against: "Müdigkeit",
        datum: '1.1.2016',
        arzt: 'Dr. Aklin',
        img: '/img/ritalin.jpg'
      },
      {
        id: 1,
        titel: 'Malarone',
        against: "Malaria",
        datum: '1.1.2016',
        arzt: 'Dr. Aklin',
        img: '/img/malarone.jpg'
      },
      {
        id: 2,
        titel: 'Zeller Schlaf',
        against: "Schlafstörung",
        datum: '1.1.2016',
        arzt: 'Dr. Aklin',
        bezogen: '2.1.2016',
        img: '/img/zeller.jpg'
      }
    ];

    return {
      all: function () {
        return recipes;
      },
      get: function (id) {
        for (var i = 0; i < recipes.length; i++) {
          if (recipes[i].id === parseInt(id)) {
            return recipes[i];
          }
        }
        return null;
      }
    }
  });
