angular.module('services.patientData', [])
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
  });
