import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useHelper } from "@react-three/drei";
import { useRef, useState } from "react";

const Torus = () => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.y += delta;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[2, 0.5, 50, 50]} />
      <meshStandardMaterial color={"gold"} />
    </mesh>
  );
};

const Scene = () => {
  const ref = useRef();
  useHelper(ref);

  return (
    <>
      {/* <gridHelper args={[20, 20]} /> */}

      <ambientLight intensity={0.2} />
      <pointLight intensity={1} ref={ref} />

      <Torus />
      {/* <Cube color={"red"} position={[0, 0, 0]} size={[1, 1, 1]} /> */}

      <OrbitControls enableZoom={false} enableDamping={false} />
    </>
  );
};

const Cube = ({ position, size, color }) => {
  const ref = useRef();

  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta;

    // ref.current.position.z += delta;
  });

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerLeave={() => setHovered(false)}
    >
      <boxGeometry args={size} />
      <meshStandardMaterial color={hovered ? "green" : color} />
    </mesh>
  );
};

const AfterIntro3D = () => {
  return (
    <div className="h-[40rem]">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
};

export default AfterIntro3D;
