import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function StandingModel() {
  const gltf = useGLTF("/assets/StandingModel.glb"); // URL from public folder
  gltf.scene.scale.set(4, 4, 4);
  return <primitive object={gltf.scene} />;
}

export default function Hero3D() {
  return (
    <div style={{ width: "100%", height: "50vh" }}>
      <Canvas camera={{ position: [2, 2, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <StandingModel />
        <OrbitControls enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
