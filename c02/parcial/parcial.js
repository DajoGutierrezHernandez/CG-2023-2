const scene = new THREE.Scene();
const camera = new
 THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,
 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const caja1 = new THREE.Geometry();
const caja2 = new THREE.Geometry();
const caja3 = new THREE.Geometry();//crea 3 cubos utilizando Geometry
const lado=1;//se asigna el lado del cubo
const escalado1=1;//tamaño del escalado para el cubo1
const escalado2=0.5;//tamaño del escalado para el cubo2
const escalado3=0.25;//tamaño del escalado para el cubo3

vertices(caja1,lado);//se llama la función vertices para crear el cubo1
vertices(caja2,lado);//se llama la función vertices para crear el cubo2
vertices(caja3,lado);//se llama la función vertices para crear el cubo3

const material1 = new THREE.MeshBasicMaterial({  color: 0x00ff00  ,wireframe: false,side: THREE.DoubleSide });
const material2 = new THREE.MeshBasicMaterial({  color: 0x009933  ,wireframe: false,side: THREE.DoubleSide });
const material3 = new THREE.MeshBasicMaterial({  color: 0xCC0033  ,wireframe: false,side: THREE.DoubleSide });//se crean 3 materiales con valores de colores distintos
const cubo1 = new THREE.Mesh(caja1, material1);//se crea objeto/cubo1
const cubo2 = new THREE.Mesh(caja2, material2);//se crea objeto/cubo2
const cubo3 = new THREE.Mesh(caja3, material3);//se crea objeto/cubo3
scene.add(cubo1);//Se añade cubo1 a la escena
scene.add(cubo2);//Se añade cubo2 a la escena
scene.add(cubo3);//Se añade cubo3 a la escena
trasformaciones(cubo1,escalado1,0);//se implementa la función transformaciones para el cubo1
trasformaciones(cubo2,escalado2,(lado+(lado*escalado2)));//se implementa la función transformaciones para el cubo2
trasformaciones(cubo3,escalado3,lado+(2*lado*escalado2)+(lado*escalado3));      //se implementa la función transformaciones para el cubo3
camera.position.z = 10;
camera.position.y = 4;
camera.position.x=2;
 
const loader=new THREE.TextureLoader();
loader.load('espada.jpeg',(texture)=>{
    material1.map=texture;
})//intento mapeo de texturas


function trasformaciones(geo,escalar,posicion){
    geo.scale.set(escalar,escalar,escalar);//escala el objeto utilizando el valor asignado
    geo.position.y=posicion;//se mueve el objeto a la poscición ingresada
}
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
       );//se definen los vertices del cubo en base al valor l (lado) ingresado
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
       );//añade y procesa las caras del cubo
       geometria.computeFaceNormals();

}

function animate() {
    requestAnimationFrame(animate);
   
    renderer.render(scene, camera);
   }
   animate();