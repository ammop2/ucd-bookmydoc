angular.module('services.symptom', [])
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
});
