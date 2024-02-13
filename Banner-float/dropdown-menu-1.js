
let deploy=false;
let adjust_p=0;
let urls=[
	"https://bztd.github.io/mario/mm.png",
	"https://bztd.github.io/mario/mm.png"
	];


function cssdeploy(){
  let d=document.getElementById("Dropdown");
  let styles = window.getComputedStyle(d);

  //pixels
  let margin = parseInt(styles.marginLeft);

  let temp=margin+adjust_p;
  let d=document.getElementById("Dropdown");
  d.style.marginLeft=`${temp}px`;
  
}

function csscontrac(){

  let d=document.getElementById("Dropdown");
  let styles = window.getComputedStyle(d);

  //pixels
  let margin = parseInt(styles.marginLeft);
  
  let temp=margin+adjust_p;
  d.style.marginLeft=`${temp}px`;
  
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
	csscontrac();
   }else{
	adjust_p=5-rect.left;
  	cssdeploy();
   }
}

adjust();

var eyelash=document.getElementById("pressDropdown");
eyelash.addEventListener("click", bif);

window.addEventListener("resize",adjust);