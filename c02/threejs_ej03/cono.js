
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
const h=7
// Definir los vértices del prisma
geometry.vertices.push(
 new THREE.Vector3(0, h, 0),//0
 new THREE.Vector3(r, 0, 0),//1
 new THREE.Vector3(r*Math.cos(Math.PI/4), 0, r*Math.sin(Math.PI/4)),//2
 new THREE.Vector3(0, 0, r),//3
 new THREE.Vector3(-r*Math.cos(Math.PI/4), 0, r*Math.sin(Math.PI/4)),//4
 new THREE.Vector3(-r, 0, 0),//5
 new THREE.Vector3(-r*Math.cos(Math.PI/4), 0,-r*Math.sin(Math.PI/4)),//6
 new THREE.Vector3(0, 0, -r),//7
 new THREE.Vector3(r*Math.cos(Math.PI/4), 0, -r*Math.sin(Math.PI/4)),//8


);
// Definir las caras del prisma
geometry.faces.push(
 new THREE.Face3(0, 1, 2),
 new THREE.Face3(0, 2, 3),
 new THREE.Face3(0, 3, 4),
 new THREE.Face3(0, 4, 5),
 new THREE.Face3(0, 5, 6),
 new THREE.Face3(0, 6, 7),
 new THREE.Face3(0, 7, 8),
 new THREE.Face3(0, 8, 1),
 
);
// Calcular normales para las caras
geometry.computeFaceNormals();

//const loader=new THREE.TextureLoader();
//const textura= loader.load("textura.jpeg");
const material = new THREE.MeshBasicMaterial({  color: 0x00ff00  ,wireframe: false,side: THREE.DoubleSide });
const customMesh = new THREE.Mesh(geometry, material);
scene.add(customMesh);    
camera.position.z = 15;
camera.position.y = 3;

document.addEventListener('keydown',(event)=>{
    if(event.key==='a'||event.key==='A'){
        customMesh.position.x-=0.1;
    }else if(event.key==='d'||event.key==='D'){
        customMesh.position.x+=0.1;
    }else if(event.key==='w'||event.key==='W'){
        customMesh.position.y+=0.1;
    }else if(event.key==='s'||event.key==='S'){
        customMesh.position.y-=0.1;
    }else if(event.key==='q'||event.key==='Q'){
        customMesh.position.z-=0.1;
    }else if(event.key==='e'||event.key==='E'){
        customMesh.position.z+=0.1;
    }else if(event.key==='j'||event.key==='J'){
        customMesh.rotation.x+=0.1;
    }else if(event.key==='k'||event.key==='K'){
        customMesh.rotation.y+=0.1;
    }else if(event.key==='l'||event.key==='L'){
        customMesh.rotation.z+=0.1;
    }
})

function animate() {
 requestAnimationFrame(animate);

 renderer.render(scene, camera);
}
animate();
