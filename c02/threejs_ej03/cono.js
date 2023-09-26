
const scene = new THREE.Scene();
const camera = new
 THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,
 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const geometry = new THREE.Geometry();
const angulo1= Math.PI/4;
const r=5;
// Definir los vértices del prisma
geometry.vertices.push(
 new THREE.Vector3(0, r, 0),
 new THREE.Vector3(r, 0, 0),
 new THREE.Vector3(0, 0, r),
 new THREE.Vector3(-r, 0, 0),
 new THREE.Vector3(0, 0, -r),
 new THREE.Vector3(r*Math.cos(Math.PI/4), 0, r*Math.sin(Math.PI/4)),
 new THREE.Vector3(-r*Math.cos(Math.PI/4), 0, r*Math.sin(Math.PI/4)),
 new THREE.Vector3(-r*Math.cos(Math.PI/4), 0,-r*Math.sin(Math.PI/4)),
 new THREE.Vector3(r*Math.cos(Math.PI/4), 0, -r*Math.sin(Math.PI/4)),
);
// Definir las caras del prisma
geometry.faces.push(
 new THREE.Face3(0, 1, 5),
 new THREE.Face3(0, 5, 4),
 new THREE.Face3(1, 2, 6),
 new THREE.Face3(1, 6, 5),
 new THREE.Face3(2, 3, 7),
 new THREE.Face3(2, 7, 6),
 new THREE.Face3(3, 0, 4),
 new THREE.Face3(3, 4, 7),
 new THREE.Face3(4, 5, 6),
 new THREE.Face3(4, 6, 7),
 new THREE.Face3(0, 3, 2),
 new THREE.Face3(0, 2, 1)
);
// Calcular normales para las caras
geometry.computeFaceNormals();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00,wireframe: true });
const customMesh = new THREE.Mesh(geometry, material);
scene.add(customMesh);    
camera.position.z = 10;
camera.position.y = 3;


function animate() {
 requestAnimationFrame(animate);
 renderer.render(scene, camera);
}
animate();
