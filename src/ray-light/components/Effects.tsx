import { useState } from "react";
import { useLoader } from "@react-three/fiber";
import { Bloom, EffectComposer, LUT } from "@react-three/postprocessing";
import { LUTCubeLoader } from "postprocessing";
import { usePerformanceMonitor } from "@react-three/drei";

// The postprocessing effects that will be used for your render.
export function Effects() {
  // A switch that turns effects on and off.
  const [hasEffects, setHasEffects] = useState(true);

  // A callback destructuring for the onChange parameter.
  // `factor` is the current quality scale between 0 and 1.
  usePerformanceMonitor({
    onChange: ({ factor }) => {
      // If effects are currently enabled and
      // the factor is higher than average...
      if (hasEffects && factor > 0.5) {
        // ...decrease quality.
        // effect.qualityScale = round(0.5 + 0.5 * factor, 1);
      }

      // Handle other conditions
      // when PerformanceMonitor says
      // to decline or incline
    },
  });

  const texture = useLoader(
    LUTCubeLoader,
    "https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/DwlG-F-6800-STD.cube"
  );

  return (
    <EffectComposer disableNormalPass>
      <Bloom
        mipmapBlur
        levels={9}
        intensity={1.5}
        luminanceThreshold={1}
        luminanceSmoothing={1}
      />
      <LUT lut={texture} />
    </EffectComposer>
  );
}
