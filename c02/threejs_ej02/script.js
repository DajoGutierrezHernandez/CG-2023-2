
	const scene = new THREE.Scene();
	
	const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const camera1 = new THREE.OrthographicCamera( window.innerWidth/-100, window.innerWidth/100,window.innerHeight/-100,window.innerHeight/100,0.1, 1000)
	const renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
	
	const geometry = new THREE.BoxGeometry( 1, 1, 1 );
	const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	const cube = new THREE.Mesh( geometry, material );
	
	const geometry1= new THREE.SphereGeometry(1,32,16);
	const material1 = new THREE.MeshBasicMaterial( { color: 0x3300FF } );
	const sphere = new THREE.Mesh( geometry1, material1 );
	
	
	scene.add( cube );
	scene.add( sphere );
	
	camera.position.z = 5;
	camera.position.x = 5;

    camera1.position.x=5;
	
	sphere.position.x = 10;
	
	
	function animate() {
		requestAnimationFrame( animate );
		
		
	
		renderer.render( scene, camera );
	
	}
	
	animate();