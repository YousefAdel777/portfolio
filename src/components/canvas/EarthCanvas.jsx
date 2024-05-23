/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
    const earth = useGLTF("./planet/scene.gltf");

    return (
        <mesh>
            <pointLight intensity={1} />
            <primitive 
                object={earth.scene}
                scale={2.5}
                position-y={0}
                rotation-y={0}
            />
        </mesh>
    );
}


const EarthCanvas = () => {
    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 20 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    autoRotate
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />
            </Suspense>
            <Preload all />
        </Canvas>
    );
}

export default EarthCanvas;