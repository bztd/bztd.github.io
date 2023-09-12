function initialize_fire_buffer(fire_buffer){

    for(let i = 0; i < T; i++) {

        fire_buffer[i] = 0;
    }
}

function fill_bottom_with_random_ashes(fire_buffer){

    for(let i = 0; i < width; i++) {

        var j=start_last_row+ i;
        fire_buffer[j] = Math.round(Math.random()*255);
    }
}

function calculate_next_fire_frame(fire_buffer) {

    let old_fire_buffer = Array.from(fire_buffer);

    for(let y=1; y < (height-1); y++) {

        let p = y*width;
        for(let x=1; x < (width-1); x++) {

            let i = p+x;
            fire_buffer[i] =Math.floor((
               10 * old_fire_buffer[i - 1]
            +  20 * old_fire_buffer[i + 0]
            +  10 * old_fire_buffer[i + 1]
            + 160 * old_fire_buffer[i - 1 + width]
            + 320 * old_fire_buffer[i + 0 + width]
            + 160 * old_fire_buffer[i + 1 + width]
            )/680);

        }
    }

}

function convert_fire_buffer_to_screen(pixels, palette, fire_buffer) {

    for(let i = 0; i < T*4; i+=4) {

        var n=i/4;

        pixels[i]   = palette[fire_buffer[n]].r;
        pixels[i+1] = palette[fire_buffer[n]].g;
        pixels[i+2] = palette[fire_buffer[n]].b;
        pixels[i+3] = palette[fire_buffer[n]].a;
    }
}

function draw_next_frame(pixels,palette,fire_buffer) {

    fill_bottom_with_random_ashes(fire_buffer);
    calculate_next_fire_frame(fire_buffer);
    convert_fire_buffer_to_screen(pixels, palette, fire_buffer);
}

function generate_palette(palette){

    function _color(r,g,b,a){

        this.r=r;
        this.g=g;
        this.b=b;
        this.a=a;
    }

    for(let i = 0; i <= 84; i++) {

        let red = Math.round( i * (0xFF / 84) );
        palette[i] = new _color(red,0x00,0x00,0xFF);
    }

    for(let i = 85; i <= 169; i++) {

        let green = Math.round( (i - 84) * (0xFF / 84) );
        palette[i] = new _color(0xFF,green,0x00,0xFF);
    }

    for(let i = 170; i <= 256; i++) {

        let blue = Math.round( (i - 170) * (0xFF / 85) );
        palette[i] = new _color(0xFF,0xFF,blue,0xFF);
    }

}


//////////////////////////////////////////////MAIN
var canvas = document.getElementById('miCanvas');
var ctx = canvas.getContext('2d');

const width = 400;
const height = 300;
const T=width*height;
const start_last_row=T-width;

let loopId;

canvas.width=width;
canvas.height=height;
canvas.style.color= "#000";
canvas.style.border= "#2e18c8 solid 1px";

var imageData = ctx.createImageData(width, height);
var pixels = imageData.data;

var palette=new Array(256);
var fire_buffer=new Array(T);
initialize_fire_buffer(fire_buffer);

generate_palette(palette);

function loopW(){

    draw_next_frame(pixels,palette,fire_buffer);
    ctx.putImageData(imageData, 0, 0);

    loopId=requestAnimationFrame(loopW);
}

loopW();
//////////////////////////////////////////////ENDMAIN

function stoploop() {

  cancelAnimationFrame(loopId);
}
