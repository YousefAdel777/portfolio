/* eslint-disable react/no-unknown-property */
import { Suspense, useRef } from "react";
import { Preload, PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import CanvasLoader from "../Loader";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = () => {
    const ref = useRef();

    const sphere = random.inSphere(new Float32Array(5001), { radius: 1.2 })

    useFrame((_, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points 
                ref={ref} 
                positions={sphere} 
                stride={3} 
                frustumCulled
            >
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.002}
                    sizeAttenuation={true}
                    depyhWrite={false}
                />
            </Points>
        </group>
    );
}

const StarsCanvas = () => {
    return (
        <div className="absolute inset-0 w-full h-full -z-10">
            <Canvas
                frameloop="demand"
                gl={{ preserveDrawingBuffer: true }}
                camera={{position: [0, 0, 1]}}
            >
                <Suspense fallback={<CanvasLoader />}>
                    <Stars />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>  
    );
}

export default StarsCanvas;