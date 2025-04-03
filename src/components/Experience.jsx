import {Environment, OrbitControls, useTexture} from "@react-three/drei";
import React from "react";
import {Avatar} from "./Avatar.jsx"
import {useThree} from "@react-three/fiber";

export const Experience = () => {

    const texture = useTexture("textures/Background.png");
    const viewport = useThree((state)=> state.viewport);

  return (
    <>
      <OrbitControls />
      <Avatar position={[0, -3, 5]} scale={2}/>
        <Environment preset="sunset"/>
        <mesh>
            <planeGeometry args={[viewport.width, viewport.height]} />
            <meshBasicMaterial map={texture}/>
        </mesh>
    </>
  );
};
