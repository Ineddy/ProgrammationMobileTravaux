/*		
		var p = document.createElement("p");
		p.innerHTML="J'ai réussi !";
		document.body.appendChild(p);
*/

var ps = document.querySelectorAll('p');
console.log(ps);
for(var i in ps){
	ps[i].parentNode.removeChild(ps[i]);
}