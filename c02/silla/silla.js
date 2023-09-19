const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer();


renderer.setSize( window.innerWidth, window.innerHeight );


document.body.appendChild( renderer.domElement );
var axesHelper = new THREE.AxesHelper(5); // El argumento es la longitud de los ejes
scene.add(axesHelper);

const geometry1 = new THREE.BoxGeometry( 2, 2, 2 );
const geometry2=new THREE.CylinderGeometry(0.4,0.4,0.2);



const material = new THREE.MeshNormalMaterial( { color: 0x00ff00 } );

const silla=new THREE.Mesh();
const asiento = new THREE.Mesh( geometry1, material );
const espaldar = new THREE.Mesh( geometry2, material );
const Patas=new THREE.Mesh();
const pata1= new THREE.Mesh( geometry1, material );;
const pata2= new THREE.Mesh( geometry1, material );;
const pata3= new THREE.Mesh( geometry1, material );;
const pata4= new THREE.Mesh( geometry1, material );;
Patas.add(pata1,pata2,pata3,pata4)
pata1.position.set(-7,-1,-7);
pata2.position.set(7,-1,7);
pata3.position.set(-7,-1,7);
pata4.position.set(7,-1,-7);

Patas.add(pata1,pata2,pata3,pata4)

Patas.scale.set(0.1,1,0.1);
asiento.scale.set(0.8,0.2,0.8);
espaldar.scale.set(2,2,2);
espaldar.position.z=-0.7;
espaldar.rotation.x=Math.PI/2;
espaldar.position.y=1;



silla.add(Patas,asiento,espaldar);
scene.add(silla);

camera.position.z = 10;
camera.position.x = 6;
camera.position.y = 5;
silla.position.y=2;



function animate() {
	requestAnimationFrame( animate );
	

	silla.rotation.x+=0.01
    silla.rotation.y+=0.01
    silla.rotation.z+=0.01
	

	renderer.render( scene, camera );
	

}

animate();