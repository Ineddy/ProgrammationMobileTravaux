
var nomMembre;
var loginMembre;

var monTableauMembre = [
	new membre('membre1', 'pass1',[]),
	new membre('membre2', 'pass2',[]),	
	new membre('membre3', 'pass3',[]),
];

//La ligne ci-dessous fonctionne en dehors de cette méthode mais pas dans la méthode...
//monTableauMembre = [new membre('Eddy','psw',[]),];

//alert("test");

function verifForm(f)
{
	//Cette méthode fonctionne et vérifie les données correctement dans le cadre d'un jeu d'essai ou l'utilisateur 
	//effectue ses saisies dans le bon ordre. Des problèmes sont rencontrés losque l'on souhaite modifier le premier MDP après avoir fait la confirmation
	//En effet, ainsi un formulaire avec deux mots de passe différents peuvent être soumis !
	var pseudoOk = verifNom(f.nomUtilisateur);
	var nomOk = verifNom(f.nom);
	var prenomOk = verifNom(f.preNom);	
	var mailOk = verifMail(f.mail);
	var mail2Ok = verifMail2(f.mail2);
	var mdp1Ok = verifNom(f.mdp); 
	//var mdp2Ok = veriPSW2(f.confMDP); Cette ligne pose un problème alors la conditions du if est géré autrement document.getElementById("inscription").elements["mail"].value == document.getElementById("inscription").elements["mail2"].value
	//document.getElementById("inscription").elements["mdp"].value == document.getElementById("inscription").elements["ConfMDP"].value ne fait pas ce que je souhaite car quand les 2 mots de passes somt différents il efface toutes les fonnées données sans meme m'afficher de message 
	if(pseudoOk && nomOk && prenomOk && mailOk && mail2Ok && mdp1Ok && document.getElementById("inscription").elements["mail"].value == document.getElementById("inscription").elements["mail2"].value && document.getElementById("inscription").elements["mdp"].value == document.getElementById("inscription").elements["ConfMDP"].value) 
	{
	

		nomSaisi = f.nom.value;
		mdpSaisi = f.mdp.value;
		//alert(nomSaisi + " " + mdpSaisi);

		//La ligne ci-dessous fonctionne en dehors de cette méthode mais pas dans la méthode...
		monTableauMembre.push(new membre('Eddy','psw'));
		//monTableauMembre = [new membre(nomSaisi,mdpSaisi,[]),];
		
//		monTableauMembre[3].password_membre=membre.nomSaisi;
		
		
		
			
		alert("Inscription réussie");
		return false;
	}
	else
	{
		alert("Veuillez remplir correctement tous les champs");
		return false;
	}
}
	

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

//Cette fonction est utilisée pour le nom utilisateur, mot de passe, nom et prénom
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

function veriPSW2(psw2)
{
	psw1 = document.getElementById("inscription").elements["mdp"].value;
	//alert(psw1);
	if(psw2.value==psw1) 
	{
	surligne(psw2, false); 
	return true;
	} 
	else 
	{
		surligne(psw2, true); 
		return false; 
	}
}



function membre(nom_membre,password_membre)
{
	this.nom_membre=nom_membre;
	this.password_membre=password_membre;

}	


testMembre = monTableauMembre[0].nom_membre;
testPsw = monTableauMembre[0].password_membre;
//alert(testMembre + " " + testPsw);



//Deuxième formulaire

function EnrNomUser(champ){
	nomMembre = champ.value;
	//alert("Login " + nomMembre + "Mod de passe saisi : " + loginMembre);

}

function EnrPSWUser(champ){
	loginMembre = champ.value;
	//alert("Login " + nomMembre + "Mod de passe saisi : " + loginMembre);

}


function moduleConnexion(f)
{
	//alert("Module de connexion");
	//alert("Nom " + document.getElementById("connexion").elements["nomUtilisateur"].value + " Login" + document.getElementById("connexion").elements["mdp"].value );
	
	
	for(i=0;i<monTableauMembre.length;i++){
		
		//alert("Condition du if monTableauMembre[i].nom_membre " + monTableauMembre[i].nom_membre + " = nomMembre " + nomMembre);
		if(monTableauMembre[i].nom_membre==nomMembre){
		
			//alert("Login " + nomMembre + "Mod de passe saisi : " + loginMembre);
			//alert("Condition du if " + loginMembre  + " = " + monTableauMembre[i].password_membre);
			
			
			if(loginMembre == monTableauMembre[i].password_membre)
			{
			alert("Connexion établie ...");
			return false;		
			}
			else
			{
				//alert("Nom utilisateur " + monTableauMembre[0].nom_membre + "mdp saisi " + monTableauMembre[0].password_membre + "login de l'objet" + nom.login)
				alert("Login ou mot de passe invalide"); 
				return false;		
			}

		}
		else
		{
			if(i == monTableauMembre.length-1)
			{//Pour ne pas afficher plusieurs fois le meme message
				alert("Cet utilisateur n'existe pas");
			}
		}
	}
	return false;

}



