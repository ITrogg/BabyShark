function Calcul(){
    let total = 0;
    // recupèrer les prix dans tableau
    let prixElements = document.querySelectorAll(".Price") ;
    let prixArray = [];
    prixElements.forEach(function(prixElement){
        let prixText = prixElement.textContent;
        let prixValue = parseFloat(prixText.substring(8));
        prixArray.push(prixValue);
    });
    // recuperer quantités dans tableau 
    let quantityElements = document.querySelectorAll(".quantity-input");
    let quantityArray = [];
    quantityElements.forEach(function (quantityElement) {
        let quantityValue = parseInt(quantityElement.value);
        quantityArray.push(quantityValue);
    });
    
    // Calcul et suppression li 
    let panier = document.querySelector(".cart ul");
    for (let i = 0; i < prixArray.length; i++) {
        let prix = prixArray[i];
        let quantity = quantityArray[i];
        let subtotal = prix * quantity;
        total += subtotal;
        // Supprimer li si input = 0
        if (quantity == 0){
            panier.removeChild(quantityElements[i].closest("li"));
        } 
    }
    
    // Affichage du total
    document.querySelector(".total").innerHTML = '<div class="total"> Total: $' + total.toFixed(2) + '</div>';
}
// Calcul au chargement de la page 
Calcul();

// Event listener pour recalculer en cas de modif'
let Inputs = document.querySelectorAll(".quantity-input");
Inputs.forEach(function (Input){
    Input.addEventListener("input", Calcul);
});

