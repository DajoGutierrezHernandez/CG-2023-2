const scene = new THREE.Scene();
const camera = new
 THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,
 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const caja1 = new THREE.Geometry();
const caja2 = new THREE.Geometry();
const caja3 = new THREE.Geometry();
const lado=1;

vertices(caja1,lado);
vertices(caja2,lado);
vertices(caja3,lado);

const material1 = new THREE.MeshBasicMaterial({  color: 0x00ff00  ,wireframe: true,side: THREE.DoubleSide });
const material2 = new THREE.MeshBasicMaterial({  color: 0x009933  ,wireframe: true,side: THREE.DoubleSide });
const material3 = new THREE.MeshBasicMaterial({  color: 0xCC0033  ,wireframe: true,side: THREE.DoubleSide });
const cubo1 = new THREE.Mesh(caja1, material1);
const cubo2 = new THREE.Mesh(caja2, material2);
const cubo3 = new THREE.Mesh(caja3, material3);
scene.add(cubo1);
scene.add(cubo2);
scene.add(cubo3);    
camera.position.z = 10;
camera.position.y = 2;
   

function vertices(geometria,l){
    geometria.vertices.push(
        new THREE.Vector3(-l, -l, -l),
        new THREE.Vector3( l, -l, -l),
        new THREE.Vector3( l, -l, l),
        new THREE.Vector3(-l, -l, l),
        new THREE.Vector3(-l, l, -l),
        new THREE.Vector3( l, l, -l),
        new THREE.Vector3( l, l, l),
        new THREE.Vector3(-l, l, l)
       );
       geometria.faces.push(
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
       geometria.computeFaceNormals();

}

function animate() {
    requestAnimationFrame(animate);
   
    renderer.render(scene, camera);
   }
   animate();