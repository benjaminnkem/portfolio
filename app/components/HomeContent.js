"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const HomeContent = () => {
  useEffect(() => {
    try {
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

        // let moonBase;
        // if (moon) {
        //   // const moonMesh = new THREE.Mesh(
        //   //   new THREE.Sphere(1, 20, 20),
        //   //   new THREE.MeshStandardMaterial({
        //   //     color: 0xffffff,
        //   //   })
        //   // );
        //   // moonMesh.position.set(10, 0, 0);
        //   // planet.add(moonMesh);

        //   moonBase = new THREE.Object3D();

        //   const moonGeo = new THREE.SphereGeometry(0.3, 20, 20);
        //   const moonMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
        //   const moonMesh = new THREE.Mesh(moonGeo, moonMat);
        //   moonMesh.position.x = 2;

        //   moonBase.add(moonMesh);
        // }

        // if (moon) {
        //   console.log(moonBase);
        //   holder.add(planet, moonBase);
        // }
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

        mercury.holder.rotation.y += 0.01;
        mercury.planet.rotation.y += 0.08;

        venus.holder.rotation.y += 0.005;
        venus.planet.rotation.y += 0.08;

        earth.holder.rotation.y += 0.02;
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
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <section className="md:max-w-[1024px] w-11/12 flex justify-center mx-auto min-h-screen section" id="me">
        <div className="grid items-center w-full gap-4">
          <div className="max-w-3xl py-10 space-y-3 text-center md:text-start md:py-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, type: "linear" }}
            >
              <h2 className="text-5xl font-extrabold sm:text-6xl lg:text-8xl text-shadow">
                Hey, I&apos;m <span id="ben">Ben</span>
                <span className="text-orange-500">.</span>
              </h2>
              <p className="mt-1 text-xl select-none text-shadow md:text-3xl">
                I&apos;m a{" "}
                <span className="relative font-extrabold text-orange-400" id="stack">
                  <TypeAnimation
                    sequence={[
                      "Frontend Developer 🌎📺",
                      1000,
                      "Backend Developer ⚒👷",
                      1000,
                      "2D Unity Game Developer 🕹🎮",
                      1000,
                      "C# Developer 💙",
                      1000,
                      "Graphics Designer 🎨🖌",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.75, type: "linear" }}
            >
              <p className="text-lg text-shadow">
                I&apos;m A Computer Science Student at the Federal University of Agriculture, Abeokuta, Nigeria{" "}
                <span className="font-semibold">(FUNAAB)</span>. And I&apos;ve been into Fullstack Web development for
                about 3+ years.
              </p>
            </motion.div>

            <motion.div
              className="mt-4"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
            >
              <Link href={"/contact"}>
                <button className="px-3 py-1 text-orange-500 duration-200 border border-orange-500 hover:bg-orange-500 hover:text-black">
                  Get In Touch <i className="ri-rocket-line"></i>
                </button>
              </Link>
            </motion.div>
          </div>

          {/* <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1 }}
            className="bg-transparent border border-orange-500 rounded-3xl min-h-[18rem] md:min-h-[24rem] place-content-center -z-20 w-full"
            id="me1"
          ></motion.div> */}
        </div>
      </section>

      {/* <section className="my-10 section" id="about">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#3D3D3D"
            fillOpacity="1"
            d="M0,256L120,256C240,256,480,256,720,224C960,192,1200,128,1320,96L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
        <div style={{ backgroundColor: "#3D3D3D" }}>
          <div className="md:max-w-[1024px] w-11/12 mx-auto min-h-[32rem]">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 1.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "linear" }}
                className="flex items-center justify-center"
              >
                <span className="flex-1 h-1 bg-orange-500 rounded-md"></span>
                <h3 className="px-4 mb-5 text-4xl font-bold uppercase">
                  About Me<span className="text-orange-500">.</span>
                </h3>
                <span className="flex-1 h-1 bg-orange-500 rounded-md"></span>
              </motion.div>

              <div className="grid md:grid-cols-2">
                <div className="p-4 border-b border-opacity-50 md:border-r md:border-b-0 border-orange-50">
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: 0 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ type: "linear" }}
                    >
                      <p>
                        <span>Hi</span>, My name is <span className="font-bold text-white">Nkem Benjamin</span> and
                        I&apos;m a passionate Fullstack Web Develper, 2D Unity Game Developer residing in Nigeria.
                        I&apos;m also the Developer and Founder of{" "}
                        <Link
                          href={"https://ceelyrics.com"}
                          target="_blank"
                          className="font-bold text-orange-500 duration-200 hover:text-orange-400"
                        >
                          Ceelyrics
                        </Link>{" "}
                        I also enjoy exploring new technologies and frameworks to enhance my skills and deliver
                        innovative solutions to clients.
                        <br /> <br />
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 0 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ type: "linear" }}
                    >
                      <p>
                        I strive to create seamless user experiences by combining my strong problem-solving abilities
                        with a keen eye for design aesthetics. <br /> <br />
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 0 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ type: "linear" }}
                    >
                      <p>
                        Outside the coding/development space, I read books, play games, watch movies and explore
                        trending technologies.
                        <br /> <br />
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 0 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ type: "linear" }}
                    >
                      <p>
                        If you&apos;re interested in recruiting me to work on a project/company, I&apos;m open for
                        offers! Let&apos;s Connect <i className="ri-link-m"></i>
                      </p>
                    </motion.div>

                    <div className="mt-4">
                      <Link href={"/contact"}>
                        <motion.button
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="px-4 py-2 mt-4 duration-200 border border-orange-500 rounded-md hover:bg-orange-600 text-orange-50"
                        >
                          Contact Me <i className="ri-link-m"></i>
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, type: "linear" }}
                  >
                    <div className="flex items-center md:justify-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <h3 className="px-4 mb-2 text-2xl font-bold text-center">Skills</h3>
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    </div>

                    <motion.div>
                      <ul className="flex flex-wrap space-x-2 md:justify-center">
                        <li>
                          <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer hover:bg-white hover:text-black">
                            <i className="ri-html5-fill"></i> <span>HTML</span>
                          </div>
                        </li>
                        <li>
                          <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer hover:bg-white hover:text-black">
                            <i className="ri-css3-fill"></i> <span>CSS</span>
                          </div>
                        </li>
                        <li>
                          <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer hover:bg-white hover:text-black">
                            <i className="ri-css3-fill"></i> <span>Tailwind CSS</span>
                          </div>
                        </li>
                        <li>
                          <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer hover:bg-white hover:text-black">
                            <i className="ri-css3-fill"></i> <span>Bootstrap</span>
                          </div>
                        </li>
                        <li>
                          <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer hover:bg-white hover:text-black">
                            <i className="ri-javascript-fill"></i> <span>Javascript</span>
                          </div>
                        </li>
                        <li>
                          <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer hover:bg-white hover:text-black">
                            <i className="ri-node-tree"></i> <span>NodeJS</span>
                          </div>
                        </li>
                        <li>
                          <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer hover:bg-white hover:text-black">
                            <i className="ri-reactjs-fill"></i> <span>ReactJs</span>
                          </div>
                        </li>
                        <li>
                          <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer hover:bg-white hover:text-black">
                            <span>NextJs</span>
                          </div>
                        </li>
                        <li>
                          <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer hover:bg-white hover:text-black">
                            <span>VueJs</span>
                          </div>
                        </li>
                        <li>
                          <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer hover:bg-white hover:text-black">
                            <span>MongoDB</span>
                          </div>
                        </li>
                        <li>
                          <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer hover:bg-white hover:text-black">
                            <i className="ri-database-2-line"></i> <span>MySQL</span>
                          </div>
                        </li>

                        <li>
                          <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer hover:bg-white hover:text-black">
                            <i className="ri-gamepad-line"></i> <span>Unity 2D</span>
                          </div>
                        </li>
                        <li>
                          <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer hover:bg-white hover:text-black">
                            <span>Rest APIs</span>
                          </div>
                        </li>
                      </ul>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#3D3D3D"
            fillOpacity="1"
            d="M0,288L120,256C240,224,480,160,720,128C960,96,1200,96,1320,96L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
      </section> */}

      {/* Statistics */}
      <section className="my-10 section" id="stats__">
        <div className="md:max-w-[1024px] w-11/12 flex justify-center mx-auto min-h-[32rem]">
          <div>
            <motion.div
              initial={{ opacity: 0, x: 0, scale: 1.2 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, type: "linear" }}
            >
              <h3 className="mb-5 text-3xl font-bold text-center uppercase md:text-4xl md:text-start">
                Personal Statistics<span className="text-orange-500">.</span>
              </h3>
            </motion.div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, type: "linear" }}
              >
                <div className="p-4 border border-orange-500 rounded-md">
                  <div className="space-y-8">
                    <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 5fr 1fr" }}>
                      <p className="font-semibold">English</p>
                      <div className="w-full h-2 overflow-hidden border border-orange-500 rounded-md">
                        <div className="w-full h-2 duration-200 bg-orange-500 rounded-r-md progress"></div>
                      </div>
                      <p>100%</p>
                    </div>
                    <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 5fr 1fr" }}>
                      <p className="font-semibold">Igbo</p>
                      <div className="w-full h-2 overflow-hidden border border-orange-500 rounded-md">
                        <div className="w-3/5 h-2 duration-200 bg-orange-500 rounded-r-md progress1"></div>
                      </div>
                      <p>60%</p>
                    </div>
                    <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 5fr 1fr" }}>
                      <p className="font-semibold">Yoruba</p>
                      <div className="w-full h-2 overflow-hidden border border-orange-500 rounded-md">
                        <div className="w-4/5 h-2 duration-200 bg-orange-500 rounded-r-md progress2"></div>
                      </div>
                      <p>80%</p>
                    </div>
                    <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 5fr 1fr" }}>
                      <p className="font-semibold">Spanish</p>
                      <div className="w-full h-2 overflow-hidden border border-orange-500 rounded-md">
                        <div className="w-1/3 h-2 duration-200 bg-orange-500 rounded-r-md progress3"></div>
                      </div>
                      <p>33%</p>
                    </div>
                    <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 5fr 1fr" }}>
                      <p className="font-semibold">Turkish</p>
                      <div className="w-full h-2 overflow-hidden border border-orange-500 rounded-md">
                        <div className="w-1/3 h-2 duration-200 bg-orange-500 rounded-r-md progress3"></div>
                      </div>
                      <p>33%</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, type: "linear" }}
              >
                <div className="p-4 border border-orange-500 rounded-md">
                  <div className="space-y-8">
                    <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 5fr 1fr" }}>
                      <p className="font-semibold">Reading</p>
                      <div className="w-full h-2 overflow-hidden border border-orange-500 rounded-md">
                        <div className="w-full h-2 duration-200 bg-orange-500 rounded-r-md progress"></div>
                      </div>
                      <p>100%</p>
                    </div>
                    <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 5fr 1fr" }}>
                      <p className="font-semibold">Games</p>
                      <div className="w-full h-2 overflow-hidden border border-orange-500 rounded-md">
                        <div className="w-3/5 h-2 duration-200 bg-orange-500 rounded-r-md progress1"></div>
                      </div>
                      <p>60%</p>
                    </div>
                    <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 5fr 1fr" }}>
                      <p className="font-semibold">Traveling</p>
                      <div className="w-full h-2 overflow-hidden border border-orange-500 rounded-md">
                        <div className="w-4/5 h-2 duration-200 bg-orange-500 rounded-r-md progress2"></div>
                      </div>
                      <p>80%</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Three */}
      <div className="relative min-h-[10rem] grid place-content-center">
        <canvas className="bg-transparent border-none canva"></canvas>
      </div>

      {/* Projects */}
      <section className="md:max-w-[1024px] w-11/12  mx-auto min-h-[32rem] my-20 section" id="projects">
        <div>
          <motion.div
            initial={{ opacity: 0, x: 0, scale: 1.2 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.25, type: "linear" }}
          >
            <h3 className="mb-5 text-4xl font-bold uppercase">
              Projects<span className="text-orange-500">.</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "ease-in-out", duration: 0.2 }}
              className="z-10 self-start overflow-hidden border border-orange-500 rounded-md"
            >
              <div className="w-full h-32 overflow-hidden">
                <Image
                  src={"/images/projects/bstore/4.png"}
                  alt="BenCalc Screenshot"
                  width={500}
                  height={500}
                  className="object-cover w-full"
                ></Image>
              </div>
              <div className="p-4 space-y-3 bg-[#121212]">
                <div className="grid items-center gap-2" style={{ gridTemplateColumns: "6fr 1fr" }}>
                  <h4 className="text-lg font-bold text-orange-500">BStore</h4>
                  <div className="flex items-center space-x-1 text-xl">
                    <Link href={"https://github.com/benjaminnkem/bstore"} target="_blank" title="View On Github">
                      <i className="ri-github-fill" title="View On Github"></i>
                    </Link>
                  </div>
                </div>
                <p className="text-sm font-light">
                  BStore is an online store, where users find products and services, It comes with an
                  administrator&apos;s dashboard for creating, deleting, updating posts basically it performs CRUD
                  operations. Users can also sign up as a seller and sell products to other users. <br />
                  <br />
                  It also comes with a checkout functionality using stripe which makes it easy to pay for a purchase
                  online.
                </p>

                <Link href={"/projects#bstore"}>
                  <button className="w-full py-2 mt-2 text-gray-900 duration-200 bg-orange-500 hover:bg-orange-600 hover:rounded-md">
                    View
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "linear" }}
              className="z-10 self-start overflow-hidden border border-orange-500 rounded-md"
            >
              <div className="w-full h-32 overflow-hidden">
                <Image
                  src={"/images/projects/typimon/typimonreal.png"}
                  alt="BenCalc Screenshot"
                  width={500}
                  height={500}
                  className="object-cover w-full"
                ></Image>
              </div>
              <div className="p-4 space-y-3 bg-[#121212]">
                <div className="grid items-center gap-2" style={{ gridTemplateColumns: "6fr 1fr" }}>
                  <h4 className="text-lg font-bold text-orange-500">Typimon</h4>
                  <div className="flex items-center space-x-1 text-xl">
                    <Link href={"https://github.com/benjaminnkem/bjncalc"} target="_blank" title="View On Github">
                      <i className="ri-github-fill" title="View On Github"></i>
                    </Link>
                    <Link href={"https://adorable-biscuit-b109dd.netlify.app/"} target="_blank">
                      <i className="ri-link-m" title="View Live"></i>
                    </Link>
                  </div>
                </div>
                <p className="font-light">
                  Typimon: The typing challenge bot is a basic bot that challenge users to typing contents <br />
                  <br />
                  It was built using HTML, CSS, Vanilla Javascript and uses the <em>fetch</em> API to get random
                  words...
                </p>

                <Link href={"/projects#typimon"}>
                  <button className="w-full py-2 mt-2 text-gray-900 duration-200 bg-orange-500 hover:bg-orange-600 hover:rounded-md">
                    View
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "linear" }}
              className="z-10 self-start overflow-hidden border border-orange-500 rounded-md"
            >
              <div className="w-full h-32 overflow-hidden">
                <Image
                  src={"/images/projects/kaygrey/kaygrey.png"}
                  alt="BenCalc Screenshot"
                  width={500}
                  height={500}
                  className="object-cover w-full"
                ></Image>
              </div>
              <div className="p-4 space-y-3 bg-[#121212]">
                <div className="grid items-center gap-2" style={{ gridTemplateColumns: "6fr 1fr" }}>
                  <h4 className="text-lg font-bold text-orange-500">KaygreyKennel</h4>
                  <div className="flex items-center space-x-1 text-xl">
                    <Link href={"https://github.com/benjaminnkem/bjncalc"} target="_blank" title="View On Github">
                      <i className="ri-github-fill" title="View On Github"></i>
                    </Link>
                    <Link href={"https://adorable-biscuit-b109dd.netlify.app/"} target="_blank">
                      <i className="ri-link-m" title="View Live"></i>
                    </Link>
                  </div>
                </div>
                <p className="font-light">
                  KaygreyKennel is a lightweight pet store, mostly dogs. <br />
                  <br /> It comes with an administrator&apos;s dashboard for creating, deleting, updating posts about
                  pets...
                </p>

                <Link href={"/projects#kaygrey"}>
                  <button className="w-full py-2 mt-2 text-gray-900 duration-200 bg-orange-500 hover:bg-orange-600 hover:rounded-md">
                    View
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 0, y: 100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.1, type: "linear" }}
            className="mt-5 text-center"
          >
            <Link href={"/projects"}>
              <button className="px-3 py-1 text-orange-500 duration-200 border border-orange-500 rounded-sm hover:bg-orange-500 hover:text-black group">
                View More Projects <i className="ri-arrow-right-circle-line"></i>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomeContent;
