var loopId;
var contenedor=document.getElementById("contenedor");
var f=function{};
////////////////
var imgx=document.getElementById("x");
var boton=document.getElementById('init');
///////////////////////////////////////////////////////////////
//////////////functions
function cerrar(){

	cancelAnimationFrame(loopId);

	imgx.style='visibility: hidden;';
	contenedor.style='visibility: hidden;';
	contenedor.innerHTML='';
    cont=false;
}

function start(){

	contenedor.style="position: fixed;top:0px;left:0px;z-index:1;visibility:visible;\
	margin:0px;padding:0px;width:100%;background: #01065F;height: 100%;";
	imgx.style='visibility: visible;z-index:2'

	imgx.addEventListener('click', cerrar, false);

	dibujar();

}
//////////////functions

///////////////////////////////////////////////////////////////
//////////////events
boton.addEventListener('click', start, false);
//////////////events
