// import { Canvas, useFrame } from "@react-three/fiber";
// import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
// import { useRef } from "react";
// import * as THREE from "three";

// const AnimatedObject = () => {
//   const meshRef = useRef<THREE.Mesh>(null);

//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
//       meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
//     }
//   });

//   return (
//     <Float speed={2} rotationIntensity={1} floatIntensity={2}>
//       <Sphere ref={meshRef} args={[1, 100, 100]} scale={2}>
//         <MeshDistortMaterial
//           color="#6c6cff"
//           distort={0.45}
//           speed={2}
//           roughness={0.15}
//           metalness={0.85}
//         />
//       </Sphere>
//     </Float>
//   );
// };

// export default function Scene3D() {
//   return (
//     <div className="absolute inset-0 z-[3] pointer-events-none">
//       <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <AnimatedObject />
//       </Canvas>
//     </div>
//   );
// }
