
var config = {
    apiKey: "AIzaSyCahum85Gb8wPHB2wtr7CkqICkab-F0Mnc",
    authDomain: "mpmdb-210ff.firebaseapp.com",
    databaseURL: "https://mpmdb-210ff.firebaseio.com",
    projectId: "mpmdb-210ff",
    storageBucket: "mpmdb-210ff.appspot.com",
    messagingSenderId: "690631103859"
  };
  firebase.initializeApp(config);

  var career = firebase.database().ref('careerForm');

document.getElementById('careerForm').addEventListener('submit',(e) =>
{
    e.preventDefault();
    //console.log(123);

      const name = document.getElementById('name').value;
      const emailId = document.getElementById('emailId').value;
      const degree = document.getElementById('degree').value;
      const role = document.getElementById('Role').value;
      const experience = document.getElementById('exposure').value;
      const contact = document.getElementById('contact').value;
      var resume = document.getElementById("resume").value;
     
      //console.log(name);
      applyCareer(name, emailId, degree, role, experience,contact,resume);

      document.querySelector('.alert').style.display = 'block';

      setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
      },3000);
    
      document.getElementById('careerForm').reset();

    });
    var applyCareer = (name, email, degree, role, experience,contact,resume) => {
        var newCareer = career.push();
        newCareer.set({
          name: name,
          email:emailId,
          degree : degree,
          role : role,
          experience : experience,
          contact : contact,
          resume : resume
        });
    }


  