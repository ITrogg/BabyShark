// accès impossible si déconnecté 
let connected = sessionStorage.getItem("Connected");
if (connected == 1 ){
    document.querySelector("img").click();
};
document.querySelector('.form').addEventListener('submit',validateForm)
function validateForm(e){
    console.log(e);
    e.preventDefault()
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let checkpassword = document.getElementById("passwordcheck").value;
    if (password != checkpassword) { // vérification du mot de passe 
        alert("Please enter the same password twice");
        return false;
    } else {  //sinon connexion valide et stockage info dans session Storage
        sessionStorage.setItem("firstname", firstname);
        sessionStorage.setItem("lastname", lastname);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("password", password);
        sessionStorage.setItem("address", "");
        sessionStorage.setItem("city", "");
        alert("Subscription Success");
        window.location.assign("./homepage.html");
        return true;   
    }    
}

