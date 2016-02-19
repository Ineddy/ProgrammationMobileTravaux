

	var p = document.getElementById("pkeypress");
	//var i = 0;
	document.addEventListener("keypress",function(event)
	{

		if (event.keyCode == 13){
			p.innerHTML="Touche appuyée : entrée";
		}
		else if(event.keyCode == 32){
			p.innerHTML="Touche appuyée : Space";
		}
		

	}) 
	
	
	