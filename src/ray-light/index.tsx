import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerformanceMonitor } from "@react-three/drei";
import { Scene } from "./components/Scene";
import { Effects } from "./components/Effects";

export function App() {
  const [dpr, setDpr] = useState(2);

  return (
    <Canvas
      orthographic
      gl={{ antialias: false }}
      camera={{ position: [0, 0, 100], zoom: 70 }}
      dpr={dpr}
    >
      <color attach="background" args={["black"]} />
      <PerformanceMonitor
        onDecline={() => setDpr(1.5)}
        onIncline={() => setDpr(2)}
      >
        <Scene />
        <Effects />
      </PerformanceMonitor>
    </Canvas>
  );
}
