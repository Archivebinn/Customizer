import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect } from "react";

const modelPath = "models/Chair.glb";

const ModelViewer = ({ color, selectedPart }: any) => {
  const gltf = useLoader(GLTFLoader, modelPath);

  //   console.log(color, selectedPart, "color log");
  //   console.log(gltf, "gltf");

  useEffect(() => {
    if (gltf) {
      gltf.scene.traverse((child: any) => {
        console.log(child, "this is child");
        if (child.isMesh && child.name === selectedPart) {
          child.material.color = new THREE.Color(color);
        }
      });
    }
  }, [gltf, color, selectedPart]);

  return (
    <Canvas className="webgl">
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <primitive object={gltf.scene} scale={[4, 4, 4]} position-y={-1.2} rotation-x={0.2} />
      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;
