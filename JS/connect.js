// accès impossible si déconnecté 
let connected = sessionStorage.getItem("Connected");
if (connected == 1 ){
    document.querySelector("img").click();
};

document.querySelector('.form').addEventListener('submit',Validateconnexion)
function Validateconnexion(e){
    console.log(e);
    e.preventDefault()
    let email = document.getElementById("email").value;
    let emailstock = window.sessionStorage.getItem("email");
    let password = document.getElementById("password").value;
    let passwordstock = window.sessionStorage.getItem("password");
    console.log(email, emailstock, password, passwordstock);
    if (email != emailstock){
        alert("Unknown email");
        return false;
    } else if (password != passwordstock){
        alert ("Wrong password");
        return false;
    }else {
        window.sessionStorage.setItem("Connected", 1);
        alert ("You're connected");
        window.location.assign("./account.html")
        return true;
    }
}