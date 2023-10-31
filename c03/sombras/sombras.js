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
controls.minDistance = 3;
controls.maxDistance = 500;

const geometry1 = new THREE.SphereGeometry(2,16,16);

const material1 = new THREE.MeshBasicMaterial({color: 0x006666,wireframe: true});
const material2 = new THREE.MeshLambertMaterial({  color: 0x006666  ,wireframe: false });
const material3 = new THREE.MeshPhongMaterial({  color: 0x006666  ,wireframe: false });
const material4 = new THREE.MeshPhongMaterial({  color: 0x006666  ,wireframe: false });
const sombra1 = new THREE.ShaderMaterial();
const vertexShader = /*glsl*/`
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = /*glsl*/`
void main() {
  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}
`;

const material = new ShaderMaterial({
  fragmentShader: fragmentShader,
  vertexShader: vertexShader
});

const cubo=new THREE.Mesh(geometry1,material1);

scene.add(cubo);

const light1 = new THREE.PointLight( 0xffffff, 1 ); 
light1.position.set( -10, 13, 7 );
scene.add(light1);

function animate() {
	requestAnimationFrame( animate );
    controls.update();
	renderer.render( scene, camera );
}

animate();