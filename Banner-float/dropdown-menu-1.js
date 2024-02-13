
let deploy=false;
let adjust_p=0;
let urls=[
	"https://bztd.github.io/mario/mm.png",
	"https://bztd.github.io/mario/mm.png"
	];


function cssdeploy(){
  let temp=5+adjust_p;
  let floating=document.getElementById("floating");
  floating.style.marginLeft=`${temp}px`;
  
}

function csscontrac(){
  let temp=-270+adjust_p;
  let floating=document.getElementById("floating");
  floating.style.marginLeft=`${temp}px`;
  
}

function bif(){
  
	if(deploy==false){
    
    deploy=true;
    cssdeploy();
    
  } else{
    
    deploy=false;
    csscontrac();
    
  } 
}

function adjust(){

   let elemento = document.getElementById('Dropdown');

   let rect = elemento.getBoundingClientRect();

   if(deploy==false){
	adjust_p=-270-rect.left;
   }else{
	adjust_p=5-rect.left;
   }
}

adjust();
csscontrac();

var eyelash=document.getElementById("pressDropdown");
eyelash.addEventListener("click", bif);

window.addEventListener("resize",adjust);