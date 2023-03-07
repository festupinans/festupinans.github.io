//Importando THREEJS
import * as THREE from "https://unpkg.com/three@0.150.1/build/three.module.js";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
//import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
//import * as dat from "dat.gui";

//Texture Loader
const loardar = new THREE.TextureLoader();
const star = loardar.load("./img/star.png");

//Model Loader
// const loader = new GLTFLoader();

// loader.load("src/models/prueba.glb", function (gltf) {
//   const model = gltf.scene;
//   scene.add(model);

//   esfera = model;
// });

// Debug
//const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Objects
const particlesGeometry = new THREE.BufferGeometry();
const particles = 5000;

const posArray = new Float32Array(particles * 3);

for (let i = 0; i < particles * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * (Math.random() * 5);
}

particlesGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(posArray, 3)
);

// Materials
const particlesMaterial = new THREE.PointsMaterial({
  size: 0.01,
  map: star,
  color: "#ff6d0a",
  transparent: true,
});

// Mesh
const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

// Lights
const pointLight = new THREE.PointLight(0xffffff, 0.1);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 2;
scene.add(camera);

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(new THREE.Color("#FFFFFF"), 1);

// Mouse
document.addEventListener("mousemove", animationParticles);

let mouseX = 0;
let mouseY = 0;

function animationParticles(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
}

/**
 * Animate
 */

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  particlesMesh.rotation.y = 0.1 * elapsedTime;

  if (mouseX > 0) {
    particlesMesh.rotation.x = mouseY * (elapsedTime * 0.00005);
    particlesMesh.rotation.y = mouseX * (elapsedTime * 0.00005);
  }

  // Update Orbital Controls
  // controls.update()

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
