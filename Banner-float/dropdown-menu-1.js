var deploy=true;

function cssdeploy(){
  
  let floating=document.getElementById("floating");
  floating.style.marginLeft="5px";
  
}

function csscontrac(){
  
  let floating=document.getElementById("floating");
  floating.style.marginLeft="-270px";
  
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
  var eyelash=document.getElementById("eyelash");
  eyelash.addEventListener("click", bif);