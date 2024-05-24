// Barre de navigation sticky
var stickypart = document.querySelector('.Stickypart');
var stickypartOffset = stickypart.offsetTop;
window.onscroll = function() {
    makeSticky();
};
function makeSticky() {
    if (window.pageYOffset > stickypartOffset) {
        stickypart.classList.add("sticky");
    } else {
        stickypart.classList.remove("sticky");
    }
}

//Différences co / déco  
let logo = document.querySelector('.btn-secondary.dropdown-toggle');
let connexion = sessionStorage.getItem("Connected")
let uncoSrc = "./img/uncoLogo1.png"
let Src = "./img/logop1.png";
if (connexion == 1 ){
    logo.src = Src;
    let prout = document.querySelector(".UnCo");
    prout.remove();
}else {
    logo.src = uncoSrc;
    let roger = document.querySelector(".Connected"); 
    roger.remove();
}

//Logo du plongeur qui bouge la tête
// stock les noms des images 
let newSrc = "./img/logop2.png";
if (connexion == 1){
    logo.addEventListener('mouseover', function() {
        logo.src = newSrc;
    });
    logo.addEventListener('mouseout', function() {
        logo.src = Src;
    });
}
//Déconnexion
function deconnexion(){
    sessionStorage.setItem("Connected", 0);
    document.location.reload();
}