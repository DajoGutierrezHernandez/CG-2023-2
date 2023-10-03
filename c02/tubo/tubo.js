const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const curva = new THREE.CatmullRomCurve3([
    new THREE.Vector3(2,8, 0),
    new THREE.Vector3(1, 1, 0),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(-1, -1, 0),
    new THREE.Vector3(-2, -8, 0)
]);//se crea una curva usando el CatmullCurve3 y se insertan los puntos de la cuerva

const puntos = curva.getPoints(50);//se obtienen los puntos de la curva

const geometry = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(puntos), 100, 2, 20, false);// utilizando el TubeGeomtry se utilizan los siguientes parametros: puntos del tubo, segmentos, radio, segmentos radio, cerrado
const material = new THREE.MeshPhysicalMaterial({ color: 0x00ff00 });//se agrega un meterial usando un codigo de color
const tubo = new THREE.Mesh(geometry, material);// se crea un tubo con la geometría usada y el material
var pointColor = "#ff5808";//se añade el valor de la luz
var luz = new THREE.DirectionalLight(pointColor);//se crea una luz usando el valor asignado
luz.position.set(-40, 60, -10);// se posiciona la luz en x,y,z
luz.castShadow = true;//se habilita la proyección de la sombra
luz.shadowCameraNear = 2;//renderizado de la luz teniendo en cuenta la distancia ma cercana
luz.shadowCameraFar = 200;//renderizado de la luz teniendo en cuenta la distancia mas lejana
luz.shadowCameraLeft = -50;//alcance de la luz a la izquierda
luz.shadowCameraRight = 50;//alcance de la luz a la derecha
luz.shadowCameraTop = 50;//alcance de la luz arriba
luz.shadowCameraBottom = -50;//alcance de la luz abajo
 
luz.distance = 0;
luz.intensity = 5;//intensidad de la luz
luz.shadowMapHeight = 1024;//el alcance de la luz en altura
luz.shadowMapWidth = 1024;//el alcance de la luz en anchura
 
 
scene.add(luz);//se añade la luz a la escena
scene.add(tubo);//se añade la figura a la escena

const animate = function () {
    requestAnimationFrame(animate);

    tubo.rotation.x += 0.01;//cambia la rotación del tubo en x
    tubo.rotation.y += 0.01;//cambia la rotación del tubo en y

    renderer.render(scene, camera);
};//bucle que permite ver la animación del tubo

animate();//se llama la función a  cada rato