const conts=document.getElementsByClassName("contayner0");
const container0=conts[0];
const canvas = document.createElement('canvas');
canvas.style="position: fixed;z-index: -1;width: 96%;height:100%;";
//container0.appendChild(canvas);
container0.insertBefore(canvas, container0.firstChild);


//const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function initPos(size){
	
	let r=random(0 ,1);
	let x=1,y=1;
	
	if( Boolean(r) ){
		
		y=0;
	}else{
		
		x=0;
	}
	
	x=x*random(0 + size,width - size)+(x == 0 ? width- size : 0);
	y=y*random(0 + size,height - size);
	
	return [x,y];
	
}

// function to generate random RGB color value
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {

   constructor(x, y, velX, velY, color, size) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
      
   }

   draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
   }
	
   update() {

      if ((this.x - this.size) <= 0) {
		  let p=initPos(this.size);
         this.x=p[0];this.y=p[1];
      }

      if ((this.y + this.size) >= height) {
         let p=initPos(this.size);
         this.x=p[0];this.y=p[1];
      }

      this.x += this.velX;
      this.y += this.velY;
   }
   
	asingColor(){
		
		this.color = randomRGB();
	}

}

const balls = [];

while (balls.length < 20) {
	
	let vxy=random(-7,-5);
   const size = random(1,7);
   let p=initPos(size);
   const ball = new Ball(
      p[0],//x
      p[1],//y
      vxy,					//vx
      -vxy,					//vy
      randomRGB(),
      size
   );

  balls.push(ball);
}


function loop() {
		
	ctx.fillStyle = 'RGB(0,0,0,0.2)';
	ctx.fillRect(0, 0,  width, height);


   for (const ball of balls) {
     ball.draw();
     ball.update();
     ball.asingColor();
   }

  requestAnimationFrame(loop);
}

loop();
