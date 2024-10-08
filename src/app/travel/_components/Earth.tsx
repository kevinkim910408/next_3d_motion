import { CoastLine, Pins } from ".";
import React from "react";

const EarthComponent = ({ radius }: { radius: number }) => {
  return (
    <>
      <mesh>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial
          color="white"
          emissive="#1E90FF"
          metalness={0.5}
          roughness={0.5}
        />
        <CoastLine radius={radius} />
        <Pins radius={radius} />
      </mesh>
    </>
  );
};

export const Earth = React.memo(EarthComponent, () => true);
