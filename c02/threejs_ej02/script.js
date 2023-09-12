    //llama al metodo constructor .Scene para crear un escenario. No usa parámetros
	const scene = new THREE.Scene();
	
    //llama al metodo PerspectiveCamera cuyos parametros son:
    //1)Campo de visión  en grados
    //2)relación de aspecto en pixeles
    //3)que tan cerca están los objetos para renderizarlos coordenadas (float)
    //4)que tan lejos están para renderizarlos coordenadas(float)
	const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    //llama al metodo PerspectiveCamera cuyos para,etros son:
    //1)borde izquierdo de la camara
    //2)borde derecho de la camara
    //3)borde superior de la camara
    //4)borde inferior de la camara
    //5)que tan lejos están los objetos para renderizarlos coordenadas (float)
    //6)que tan cerca están los objetos para renderizarlos coordenadas (float)
    const camera1 = new THREE.OrthographicCamera( window.innerWidth/-100, window.innerWidth/100,window.innerHeight/-100,window.innerHeight/100,0.1, 1000)

    //llama al metodo WebGLRenderer para crear el render del objeto. Parametros:
	const renderer = new THREE.WebGLRenderer();

    // ajusta el tamaño del renderer dependiendo de las dimensiones de la pantalla
	renderer.setSize( window.innerWidth, window.innerHeight );

    // añade el renderer al codigo en html y al cuerpo del archivo
	document.body.appendChild( renderer.domElement );
	
    //crea un objeto geometrico con vertices en las coordenadas dadas. Parametros:
    // (ancho,alto,profundo,segmentos ancho, segmentos alto, segmentos profundo)
	const geometry = new THREE.BoxGeometry( 1, 1, 1 );

    //crea un objeto el cual no se ve afectado por las luces,  a demás de agregar color
	const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

    //crea un cubo utilizando la figura y el material
	const cube = new THREE.Mesh( geometry, material );
	
    //crea una esfera utilizando el radio, la cantidad de segmentos en el ancho, cantidad de segmentos en el alto
	const geometry1= new THREE.SphereGeometry(1,32,16);

    //crea un objeto el cual no se ve afectado por las luces, a demás de agregar color
	const material1 = new THREE.MeshNormalMaterial( { color: 0x3300FF } );
    //crea una esfera utilizando el geometry1 y el material1
	const sphere = new THREE.Mesh( geometry1, material1 );
	
	//añade el cubo  y la esfera al escenario que se va a presentar
	scene.add( cube );
	scene.add( sphere );
	
    //cambia la posición de la camara en perspectiva
	camera.position.z = 5;
	camera.position.x = 5;

    //cambia la posición de la camara ortogonal
    camera1.position.x=5;
    camera1.position.z= 5;
	
    //cambia la posición de la esfera
	sphere.position.x = 10;
    cube.rotation.x=50;
    cube.rotation.y=30;

    //crea una variable para cambiar la camara
	let cambio=camera;

    //llama a la funcion addEventListener para detectar la tecla a y así cambiar la camara/vista
    document.addEventListener('keydown',(event)=>{
        if(event.key==='a'||event.key==='A'){
            if(cambio===camera){
                cambio=camera1;
            }else{
                cambio=camera;
            }
        }
    })
	
    //crea una función para refrescar los frames de la animación
	function animate() {
		requestAnimationFrame( animate );
		
		
	
		renderer.render( scene, cambio );
	
	}
    
	
	animate();