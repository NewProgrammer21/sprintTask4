let users = [];

function registration() {
   let fullName = document.getElementById("fullNameId");
   let password = document.getElementById("passwordId");
   let email = document.getElementById("emailId");
   let country = document.getElementById("countryId");
   let birthDate = document.getElementById("dateId");
   
   let user = {
      "email": email.value,
      "password": password.value,
      "fullName": fullName.value,
      "country": country.value,
      "birthDate": birthDate.value
   }
   users.push(user);
   localStorage.setItem("users", JSON.stringify(users));
   email.value = "";
   password.value = "";
   fullName.value = "";
   country.value = "";
   birthDate.value = "";
}

function login(){
   let email = document.getElementById("emailId");
   let password = document.getElementById("passwordId");
   let users = JSON.parse(localStorage.getItem("users"));
   for(let i=0;i<users.length;i++){
      if(users[i].email==email.value && users[i].password==password.value){
         window.location.href="profile.html";
      }
   }
}

function showInfo(){
}