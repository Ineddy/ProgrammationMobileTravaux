
	
	console.log("Exercice 3 !");
	
	nombre = getRandomInt(20);
	
	function getRandomInt(i){
		return Math.floor(Math.random()*i);
	}
	
	alert(nombre);
	
	do{
		choix = prompt("Devimnez quel nombre j'ai en tête (entre et 0 et 20) : ");
		if(choix>nombre){
			alert("Trop grand");
		}
		else if(choix<nombre){
			alert("Trop petit");
		}
		//else{alert("Vous avez trouvé !!!")}
	}while(nombre!=choix);
	alert("Vous avez trouvé !!");		
	


	
	
	