

	var p = document.getElementById("compteur");
	var i = 0;
	
	document.getElementById("bouton").addEventListener("click",function(event)
	{
		i++;
		p.innerHTML="Vous avez cliqué " + i + " fois !";

	}) 
	
	