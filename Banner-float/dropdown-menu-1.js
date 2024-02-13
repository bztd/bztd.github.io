let deploy=false;
let adjust_p=0;
let urls=[
	"https://bztd.github.io/mario/mm.png",
	"https://bztd.github.io/mario/mm.png"
	];


function cssdeploy(){
  let temp=5+ajust;
  let floating=document.getElementById("floating");
  floating.style.marginLeft="5px";
  
}

function csscontrac(){
  let temp=-270+ajust;
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
	ajust=-270-rect.left;
   }else{
	ajust=5-rect.left;
   }
}

adjust();
csscontract();

var eyelash=document.getElementById("pressDropdown");
eyelash.addEventListener("click", bif);

window.addEventListener("resize",adjust);