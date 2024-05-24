// Remplissage automatique
let firstname = document.querySelector("#Fname");
firstname.value = sessionStorage.getItem("firstname");
let lastname = document.querySelector("#Lname");
lastname.value = sessionStorage.getItem("lastname");
let email = document.querySelector("#email");
email.value = sessionStorage.getItem("email");
let address = document.querySelector("#address");
address.value = sessionStorage.getItem("address");
let city = document.querySelector("#city");
city.value = sessionStorage.getItem("city");

// accès impossible si déconnecté 
let connected = sessionStorage.getItem("Connected");
if (connected != 1 ){
    document.querySelector("img").click();
};

// modification infos
function Modif(){
    let firstname = document.getElementById("Fname").value;
    let lastname = document.getElementById("Lname").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    sessionStorage.setItem("firstname", firstname);
    sessionStorage.setItem("lastname", lastname);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("address", address);
    sessionStorage.setItem("city", city);
    return true;      
}    

function MdP(){
    let init = sessionStorage.getItem("password");
    let old = document.getElementById("old").value;
    let newmdp = document.getElementById("new").value;
    let check = document.getElementById("check").value;
    if (init != old ){
        alert ("Wrong password");
        return false;
    } else if (newmdp != check) { 
        alert("Please enter the same password twice");
        return false;
    } else {  //sinon connexion valide et stockage info dans session Storage
        sessionStorage.setItem("password", newmdp);
        return true;      
    }    
}
