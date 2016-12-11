angular.module('services.doctor', [])
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
});
