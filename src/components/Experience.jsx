import { CameraControls, Environment, Gltf } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useControls } from "leva";
import { useRef } from "react";
import { VRMAvatar } from "./VRMAvatar";

export const Experience = () => {
  const controls = useRef();

  const { avatar } = useControls("VRM", {
    avatar: {
      value: "porto_tes.vrm",
      options: [
        "3636451243928341470.vrm",
        "8087383217573817818.vrm",
        "porto_tes.vrm",
      ],
    },
  });

  return (
    <>
      <CameraControls
        ref={controls}
        maxPolarAngle={Math.PI / 2}
        minDistance={1}
        maxDistance={10}
      />
      <Environment preset="sunset" />
      <directionalLight intensity={2} position={[10, 10, 5]} />
      <directionalLight intensity={1} position={[-10, 10, 5]} />
      <group position-y={-1.25}>
        <VRMAvatar avatar={avatar} />
        <Gltf
          src="models/sound-stage-final.glb"
          position-z={-1.4}
          position-x={-0.5}
          scale={0.65}
        />
      </group>
      <EffectComposer>
        <Bloom mipmapBlur intensity={0.7} />
      </EffectComposer>
    </>
  );
};
