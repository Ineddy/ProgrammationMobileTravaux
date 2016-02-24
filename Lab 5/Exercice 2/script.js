

function surligne(champ, erreur)
{
		if(erreur)
		{
			champ.style.background="#fba";
		}else
		{
			champ.style.background="";
		}
	
}

function verifNom(champ)
{
	if(champ.value.length < 2|| champ.value.length >25)
	{
		surligne(champ,true);
		return false;
	}
	else
	{
		surligne(champ, false);
		return true;
	}
}

function verifMail(champ) 
{
	var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/; 
	if(!regex.test(champ.value)) 
	{
		surligne(champ, true); 
		return false; 
	} 
	else 
	{
		surligne(champ, false); 
		return true; 
	}
}
/* Peut servir si on veut ajouter la deuxième sasie de mail
function verifMail2(mail2) 
{
	mail1  = document.getElementById("inscription").elements["mail"].value;
	//alert(val);
	if(mail2.value==mail1) 
	{
	surligne(mail2, false); 
	return true;
	} 
	else 
	{
		surligne(mail2, true); 
		return false; 
	}
}
*/


function verifForm(f)
{

	//var nomProduitOk = TraiterNomProduit(f.nomProduit); Pas de controle car pas de mauvaise saisie
	//alert("test1");
	//var qteOk = traiterQte(f.qte); Pas de controle car pas de mauvaise saisie
	var nomClientOk = verifNom(f.nomClient);
	//alert("test2");
	var mailOk = verifMail(f.mail);
	//alert("test3");
	
	//if(nomProduitOk && qteOk && nomClientOk && mailOk) 
	if(nomClientOk && mailOk) 
	{
		//alert("Good");
		alert("Commande passée pour " + f.qte.value + " " + f.nomProduit.value + ", au prix de " + total + "$. La livraison se fera au " + f.adresse.value + " d’ici quelques jours. Merci beaucoup " + f.nomClient.value +" ! ");
		return true;
	}
	else
	{
		alert("Veuillez remplir correctement tous les champs");
		return false;
	}
}


//Traitement des données

//Variables globales
var label;
var prix = 500; //Valeur par défaut = prix du premier choix par défaut 
var qte = 1; //Valeur par défaut
var nom;
var soustotal;
var total;

function traiterQte(quantite)
{	
	qte = quantite.value;
	//alert(qte);
	calculSsTotal();
	//return qte;
}

function TraiterNomProduit(nomProduit)
{
	nom = nomProduit.value;
	//alert(nom);
	//alert(monTableauProduit[0].nom_produit);
	if(nom==monTableauProduit[0].nom_produit){
		prix = monTableauProduit[0].prix_produit;
			
	}
	else if(nom==monTableauProduit[1].nom_produit){
		prix = monTableauProduit[1].prix_produit;
	}
	else{prix = monTableauProduit[2].prix_produit;}
	calculSsTotal();
}

function calculSsTotal(){
	//alert(qte + " " + prix);
	soustotal = qte * prix;
	total = soustotal+soustotal*0.15;
	
	labelSousTotal = document.getElementById("lblSoustotal");
	labelTaxe = document.getElementById("lblTaxe");
	labelTotal = document.getElementById("lblTotal");
	
	labelSousTotal.innerHTML=soustotal + " $";	
	labelTaxe.innerHTML= soustotal*0.15 + " $";
	labelTotal.innerHTML= total + " $";
}

//Création d'objet

function produit(nom_produit,prix_produit)
{
	this.nom_produit=nom_produit;
	this.prix_produit=prix_produit;

}	

var monTableauProduit = [
	new produit('iPhone 5', 500,00,[]),
	new produit('iPhone 6', 600,00,[]),	
	new produit('iPhone 7', 700,00,[]),
];



//alert(monTableauProduit[0].nom_produit);


/* Avant le tableau
var iphone5=
{
	nom_produit : "iphone 5",
	prix_produit : "500,00 $"
}
var iphone6=
{
	nom_produit : "iphone 6",
	prix_produit : "600,00 $"
}

var iphone7 = new produit('iPhone 7', '700,00 $');
*/

//alert(iphone5.nom_produit);
//alert(iphone5.prix_produit);
//alert(iphone6.nom_produit);
//alert(iphone6.prix_produit);
//alert(iphone7.prix_produit);







