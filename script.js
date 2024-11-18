// Fonction panier 

let nombreDeProduits = 0;

function commander(produit, prix) {
    nombreDeProduits++;
    document.getElementById("nombreProduits").innerText = 
        "Nombre de produits commandés : " + nombreDeProduits;
}


/*Vue en cours (testé mais n'a pas fonctionner)

function panier(nombreDeProduits){
    document.getElementsByClassName("Panier") 
    if (nombreDeProduits>0) {
        console.log("Vous avez commandé "+ nombreDeProduits +" produits pour un total de "+ prix +"€")
    }else{
        console.log("Vous n'avez rien commandé")
    }
} */

