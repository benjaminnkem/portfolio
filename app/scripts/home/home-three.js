import * as THREE from "three";

try {
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  console.log(sizes.width, sizes.height);
  const scene = new THREE.Scene();

  const geometry = new THREE.SphereGeometry(1, 20, 20);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
  camera.position.z = 5;
  scene.add(camera);

  const canvas = document.querySelector(".canva");
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(sizes.width, sizes.height);

  window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
  });

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };

  animate();
} catch (e) {
  console.log(e);
}
