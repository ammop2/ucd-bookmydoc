angular.module('services.recipe', [])
  .factory('recipes', function () {
    var recipes = [
      {
        id: 0,
        titel: 'Ritalin',
        against: "Müdigkeit",
        datum: '1.1.2016',
        date_end: '',
        arzt: 'Dr. Aklin',
        img_medicine: '/img/ritalin.jpg',
        img_recipe: '/img/recipe.png',
        medicine_desc: "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper."
      },
      {
        id: 1,
        titel: 'Malarone',
        against: "Malaria",
        datum: '1.1.2016',
        date_end: '12.1.2017',
        arzt: 'Dr. Aklin',
        img_medicine: '/img/malarone.jpg',
        img_recipe: '/img/recipe.png',
        medicine_desc: "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper."
      },
      {
        id: 2,
        titel: 'Zeller Schlaf',
        against: "Schlafstörung",
        datum: '1.1.2016',
        date_end: '',
        arzt: 'Dr. Aklin',
        bezogen: '2.1.2016',
        img_medicine: '/img/zeller.jpg',
        img_recipe: '/img/recipe.png',
        medicine_desc: "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper."
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
