
(function(){
let deploy=false;
let adjust_p=0;
let urls=[
    {url:"https://bztd.github.io/mario/mm.png",pag:"https://triitugames.blogspot.com/p/canvas-mario-v01.html"},
	{url:"https://bztd.github.io/fire/fire.png",pag:"https://triitugames.blogspot.com/p/canvas-animacion-de-fuego.html"},
    {url:"https://bztd.github.io/img_cmn/mini-volcan.png",pag:"https://triitugames.blogspot.com/p/threejs-modelo-en-tres-dimenciones-de.html"},
    {url:"https://bztd.github.io/img_cmn/min-asteroids.png",pag:"http://triitugames.blogspot.com/p/canvas-asteroids.html"}
	];

function fillout(){
  let cont=document.getElementById("containerDropdown");
  let str="";
  
  for(let i=0;i<urls.length;i++){
     
	str+=`<a href="${urls[i].pag}"><img src="${urls[i].url}" class="imgsDropdown"></img></a>`;
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

if( !document.documentURI.endsWith("triitugames.blogspot.com/") ){

  fillout();
  adjust();

  var eyelash=document.getElementById("pressDropdown");
  eyelash.addEventListener("click", bif);

  window.addEventListener("resize",adjust);

}else{
	
  let elemento = document.getElementById('Dropdown');
  elemento.style.display="none";

}

})();
