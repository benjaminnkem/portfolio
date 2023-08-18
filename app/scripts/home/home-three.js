import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const solarSystem = () => {
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const scene = new THREE.Scene();
  const cubeTextureLoader = new THREE.CubeTextureLoader();
  // scene.background = new THREE.TextureLoader().load("/textures/2k_stars_milky_way.jpg");
  scene.background = cubeTextureLoader
    .setPath("/textures/")
    .load(["stars.jpg", "stars.jpg", "stars.jpg", "stars.jpg", "stars.jpg", "stars.jpg"]);

  const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height, 0.1, 1000);
  camera.position.set(0, 30, 1.5);
  scene.add(camera);

  const ambientLight = new THREE.AmbientLight(0x555555);
  const light = new THREE.PointLight(0xffffff, 200);
  scene.add(light, ambientLight);

  const textureLoader = new THREE.TextureLoader();

  // const gridHelper = new THREE.GridHelper(200, 50);
  // scene.add(gridHelper);

  const createPlanet = (radius, roundness, color, distanceFromOrigin, textureFileName, ring, moon) => {
    const holder = new THREE.Object3D();

    const planetGeometry = new THREE.SphereGeometry(radius, roundness, roundness);
    const material = new THREE.MeshStandardMaterial({
      color: textureFileName ? 0xffffff : color,
      roughness: 20,
      map: textureLoader.load(textureFileName ? `/textures/${textureFileName}.jpg` : "/textures/2k_mercury.jpg"),
    });
    const planet = new THREE.Mesh(planetGeometry, material);
    planet.position.x = distanceFromOrigin;

    if (ring) {
      const ringGeo = new THREE.RingGeometry(1.8, 2.5);
      const material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        map: textureLoader.load("/textures/2k_saturn_ring_alpha.png"),
        side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(ringGeo, material);
      ring.rotation.x = Math.PI * -0.5;

      planet.add(ring);
    }

    holder.add(planet);
    scene.add(holder);
    return { holder, planet };
  };

  const sunGeo = new THREE.SphereGeometry(5, 30, 30);
  const sunMaterial = new THREE.MeshBasicMaterial({
    map: textureLoader.load("/textures/2k_sun.jpg"),
  });

  const sun = new THREE.Mesh(sunGeo, sunMaterial);
  scene.add(sun);

  // Planets
  const mercury = createPlanet(0.8, 30, 0xda4000, 8, "2k_mercury");
  const venus = createPlanet(0.9, 30, 0xda4000, 11, "2k_venus_surface");
  const earth = createPlanet(1.2, 30, 0x029340, 14, "2k_earth_daymap", false, true);
  const mars = createPlanet(0.9, 30, 0xfce2dc, 17, "2k_mars");
  const jupiter = createPlanet(1.8, 30, 0xbe123c, 20, "2k_jupiter");
  const saturn = createPlanet(1.8, 30, 0xffe103, 26, "2k_saturn", true);
  const uranus = createPlanet(1, 30, 0xa855f7, 30, "2k_uranus");
  const neptune = createPlanet(1.2, 30, 0xa855f7, 33, "2k_neptune");

  // Other Planet atrr
  saturn.planet.rotation.set(0, 0, 10);

  const canvas = document.querySelector(".canva");
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(sizes.width, sizes.height);

  const controls = new OrbitControls(camera, renderer.domElement);
  // controls.enableZoom = false;
  controls.enableDamping = true;
  // controls.enablePan = false;

  window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
  });

  function moveCamera() {
    const top = document.body.getBoundingClientRect().top;

    if (top <= -30) {
      camera.position.z = top * -0.05;
    }
  }

  document.body.onscroll = moveCamera;

  const animate = () => {
    requestAnimationFrame(animate);

    sun.rotation.y += 0.009;

    mercury.holder.rotation.y += 0.03;
    mercury.planet.rotation.y += 0.08;

    venus.holder.rotation.y += 0.02;
    venus.planet.rotation.y += 0.08;

    earth.holder.rotation.y += 0.01;
    earth.planet.rotation.y += 0.1;

    mars.holder.rotation.y += 0.011;
    mars.planet.rotation.y += 0.01;

    jupiter.holder.rotation.y += 0.001;
    jupiter.planet.rotation.y += 0.009;

    jupiter.holder.rotation.y += 0.009;
    jupiter.planet.rotation.y += 0.005;

    saturn.holder.rotation.y += 0.008;
    saturn.planet.rotation.y += 0.008;

    uranus.holder.rotation.y += 0.02;

    neptune.holder.rotation.y += 0.007;
    neptune.planet.rotation.y += 0.005;

    controls.update();
    renderer.render(scene, camera);
  };

  animate();
};

try {
  solarSystem();
} catch (e) {
  console.log(e);
}
