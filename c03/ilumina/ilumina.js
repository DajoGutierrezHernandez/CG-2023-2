const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();


renderer.setSize( window.innerWidth, window.innerHeight );


document.body.appendChild( renderer.domElement );
var axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

const geometry1 = new THREE.BoxGeometry( 2, 3, 2 );
const geometry2=new THREE.CylinderGeometry(0.2,0.2,1.5,30);

const material1 = new THREE.MeshBasicMaterial({  color: 0x006666  ,wireframe: false,side: THREE.DoubleSide });
const material2 = new THREE.MeshBasicMaterial({  color: 0x009999  ,wireframe: false,side: THREE.DoubleSide });

const BMO=new THREE.Mesh();
const cuerpo=new THREE.Mesh(geometry1,material1);
const brazo1=new THREE.Mesh(geometry2,material2);
const brazo2=new THREE.Mesh(geometry2,material2);
const pierna1=new THREE.Mesh(geometry2,material2);
const pierna2=new THREE.Mesh(geometry2,material2);

pierna1.rotation.x=Math.PI/2;
pierna2.rotation.x=Math.PI/2;
brazo1.position.x=1;
brazo2.position.x=-1;
pierna1.position.z=1;
pierna2.position.z=1;
pierna1.position.x=0.5;
pierna2.position.x=-0.5;
camera.position.z=10;
camera.position.x=2;

scene.add(pierna1);
scene.add(pierna2);
scene.add(brazo1);
scene.add(brazo2);
scene.add(cuerpo);


function makeLights() {
 
    const light0 = new THREE.AmbientLight( 0x202020 ); // 10%
    scene.add(light0);
 
    const light1 = new THREE.PointLight( TW.WHITE, 0.5 ); // 50%
    light1.position.set( -12, 15, 10 );
    scene.add(light1);
 
    const light2 = new THREE.DirectionalLight( TW.WHITE, 0.3 );
    light2.position.set( 0, 100, 10 );
    scene.add(light2);
}

function animate() {
	requestAnimationFrame( animate );
	
	

	renderer.render( scene, camera );
}

animate();