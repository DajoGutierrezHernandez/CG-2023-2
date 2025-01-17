
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );
var axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableZoom = true;
controls.enableRotate = true;
controls.minDistance = 10;
controls.maxDistance = 500;

const geometry1 = new THREE.BoxGeometry( 2, 3, 2 );
const geometry2=new THREE.CylinderGeometry(0.2,0.2,1.5,30);
const geometry3 = new THREE.BoxGeometry( 1.3, 1, 1);

const material1 = new THREE.MeshLambertMaterial({  color: 0x006666  ,wireframe: false,side: THREE.DoubleSide });
const material2 = new THREE.MeshLambertMaterial({  color: 0x009999  ,wireframe: false,side: THREE.DoubleSide });
const material3 = new THREE.MeshLambertMaterial({  color: 0x99ffff  ,wireframe: false,side: THREE.DoubleSide });

const BMO=new THREE.Mesh();
const cuerpo=new THREE.Mesh(geometry1,material1);
const pantalla=new THREE.Mesh(geometry3,material3);
const brazo1=new THREE.Mesh(geometry2,material2);
const brazo2=new THREE.Mesh(geometry2,material2);
const pierna1=new THREE.Mesh(geometry2,material2);
const pierna2=new THREE.Mesh(geometry2,material2);

pierna1.rotation.x=Math.PI/2;
pierna2.rotation.x=Math.PI/2;
pierna1.position.y=-1.5;
pierna2.position.y=-1.5;
brazo1.position.x=1.2;
brazo2.position.x=-1.2;
brazo1.position.y=-0.6;
brazo2.position.y=-0.6;
pierna1.position.z=1;
pierna2.position.z=1;
pierna1.position.x=0.5;
pierna2.position.x=-0.5;
camera.position.z=10;
pantalla.position.z=0.6;
pantalla.position.y=0.5;

BMO.add(cuerpo,brazo1,brazo2,pierna1,pierna2,pantalla);

scene.add(BMO);


const light0 = new THREE.AmbientLight( 0x404040); // 10%
scene.add(light0);
 
const light1 = new THREE.PointLight( 0xffffff, 0.4 ); // 50%
light1.position.set( -10, 13, 7 );
scene.add(light1);
 
const light2 = new THREE.DirectionalLight( 0xffffff );
light2.position.set( 0, 100, 10 );
scene.add(light2);

function animate() {
	requestAnimationFrame( animate );
	
	BMO.rotation.y+=0.03;
    controls.update();

	renderer.render( scene, camera );
}

animate();