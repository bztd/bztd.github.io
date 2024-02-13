
let deploy=false;
let adjust_p=0;
let urls=[
	"https://bztd.github.io/mario/mm.png",
	"https://bztd.github.io/mario/mm.png"
	];

function fillout(){
  let cont=document.getElementById("containerDropdown");
  let str="";
  
  for(let i=0;i<urls.length;i++){
     
	str+=`<a href="${urls[i]}"><img src="${urls[i]}" class="imgsDropdown"></img></a>`;	
  }

  cont.innerHTML=str;
}

function cssdeploy(){
  let d=document.getElementById("Dropdown");
  let styles = window.getComputedStyle(d);

  //pixels
  let margin = parseInt(styles.marginLeft);

  let temp=margin+adjust_p;
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
    
  } else{
    
    deploy=false;
    
  } 
  adjust();
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

fillout();
adjust();

var eyelash=document.getElementById("pressDropdown");
eyelash.addEventListener("click", bif);

window.addEventListener("resize",adjust);