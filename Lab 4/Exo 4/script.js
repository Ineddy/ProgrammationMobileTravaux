

//var position = document.getElementById('plan');
var position = document.getElementById('plan');
//alert("test");
document.addEventListener('mousemove',function(e){
	position.innerHTML='Abscisse X :' + e.clientX + ' px</br>Ordonné Y :' + e.clientY + 'px';
},false);