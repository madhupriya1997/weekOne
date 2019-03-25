/*$(document).ready(function(){
    $("#form").hide();
    $("button").click(function(){
     $("#form").show();
  });
});*/

  $(document).ready(() => {
    $("#form").hide();
    $("#show-modal").click(() => {
     $("#form").show()
  });
  $(".modal__close-bar span").click(() => {
    $("#form").hide()
 });
 $("#cancel").click(() => {
    $("#form").hide()
 });

});

var config = {
    apiKey: "AIzaSyCahum85Gb8wPHB2wtr7CkqICkab-F0Mnc",
    authDomain: "mpmdb-210ff.firebaseapp.com",
    databaseURL: "https://mpmdb-210ff.firebaseio.com",
    projectId: "mpmdb-210ff",
    storageBucket: "mpmdb-210ff.appspot.com",
    messagingSenderId: "690631103859"
  };
  firebase.initializeApp(config);

  var product = firebase.database().ref('productForm');

document.getElementById('productForm').addEventListener('submit',(e) =>
{
    e.preventDefault();
    //console.log(123); 

      const firstName = document.getElementById('fname').value;
      const lastName = document.getElementById('lname').value;
      const contact = document.getElementById('phone').value;
      const emailId = document.getElementById('emailId').value;
      const company = document.getElementById('company').value;
      const country = document.getElementById('country').value;
      const interest = document.getElementById('Interest').value;
      const role = document.getElementById("roles").value;
     
      console.log(firstName);
      applyForProduct(firstName, lastName,contact,emailId, company, country, interest,role);

      document.querySelector('.alert').style.display = 'block';

      setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
      },3000);
    
      document.getElementById('productForm').reset();

    });
    var applyForProduct = (firstName, lastName,contact,emailId, company, country, interest,role) => {
        var newProduct = product.push();
        newProduct.set({
          firstName: firstName,
          lastName: lastName,
          contact: contact,
          emailId : emailId,
          company: company,
          country : country,
          interest : interest,
          role : role
        });
    }
  
