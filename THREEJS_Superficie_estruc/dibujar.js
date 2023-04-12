import { OrbitControls } from 'OrbitControls';
import * as THREE from 'three';
import { PLYLoader } from 'https://bztd.github.io/Threejs/PLYLoader.js';

var idproceso;

function dibujar(){
	
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
	
	const renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize( window.innerWidth, window.innerHeight );
	contenedor.appendChild( renderer.domElement );


	const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(0, 10, 0);
    light.target.position.set(-5, 0, 0);
    scene.add(light);
    scene.add(light.target);
////////////////////////////////////////////////////////////////////////////////////
	const loader = new PLYLoader();
	loader.load( 'https://bztd.github.io/THREEJS_Superficie_estruc/13.ply', function ( geometry ) {

		geometry.computeVertexNormals();

		const material = new THREE.MeshStandardMaterial( { color: 0xA3B4D5, flatShading: true } );
		const mesh = new THREE.Mesh( geometry, material );

		mesh.scale.multiplyScalar( 1 );//scale

		mesh.castShadow = true;
		mesh.receiveShadow = true;

		scene.add( mesh );

	} );
// ///////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////

	camera.position.set( 10, 3, 10 );
	camera.lookAt( 0, 0, 0 );

	const orb = new OrbitControls( camera, renderer.domElement );
	orb.update();
	
	function animate() {
		
		idproceso=requestAnimationFrame( animate );
		const time = - performance.now() * 0.0003;

		camera.position.x = 10 * Math.cos( time );
		camera.position.z = 10 * Math.sin( time );
		
		
		orb.update();
		renderer.render( scene, camera );
	}

	animate()
}

//////////////////////////////////////////////////////////////////////////
var boton=document.getElementById('init');
boton.addEventListener('click', start, false);

var contenedor=document.getElementById("contenedor");
var imgx=document.getElementById("x");

function cerrar(){
	
	cancelAnimationFrame(idproceso);
	
	imgx.style='visibility: hidden;';
	contenedor.style='visibility: hidden;';
	contenedor.innerHTML='';
}

function start(){
	
	contenedor.style="position: fixed;top:0px;left:0px;z-index:1;visibility:visible;\
	margin:0px;padding:0px;width:100%;background: #01065F;height: 100%;";
	imgx.style='visibility: visible;z-index:2'
	
	imgx.addEventListener('click', cerrar, false);
	
	dibujar();
	
}

/////////////////////////////////////////////////////////////////
