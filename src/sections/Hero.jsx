import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { PerspectiveCamera } from "@react-three/drei";
import { HackerRoom } from "../components/HackerRoom";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
// import { Leva, useControls } from "leva";

const Hero = () => {
    const isMobile = useMediaQuery({maxWidth:768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});
    const isSmall = useMediaQuery({maxWidth: 440});

    const size = calculateSizes(isSmall, isMobile, isTablet);

    /*const controls = useControls('HackerRoom', {
        positionX: {
            value: 0.9,
            min: -10,
            max: 10
        },
        positionY: {
            value: -3.3,
            min: -10,
            max: 10
        },
        positionZ: {
            value: 2.5,
            min: -10,
            max: 10
        },
        rotationX: {
            value: 0.3,
            min: -10,
            max: 10
        },
        rotationY: {
            value: 3.1,
            min: -10,
            max: 10
        },
        rotationZ: {
            value: 0,
            min: -10,
            max: 10
        },
        scale: 0.07
    });*/
    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hi, I am Anik <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Full Stack Developer</p>
            </div>
            <div className="w-full h-full absolute inset-0">
            {/* <Leva /> */}
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0,0,30]} />
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                // scale={0.07}
                                // position={[0.9,-3.3,2.5]}
                                // rotation={[0,-Math.PI,0]}
                                // position={[controls.positionX,controls.positionY,controls.positionZ]}
                                // rotation={[controls.rotationX,controls.rotationY,controls.rotationZ]}
                                // scale={controls.scale}
                                scale={size.deskScale}
                                position={size.deskPosition}
                                rotation={[0,-Math.PI,0]}
                            />
                        </HeroCamera>
                        <group>
                            <Target position={size.targetPosition} />
                            <ReactLogo position={size.reactLogoPosition} />
                            <Cube position={size.cubePosition} />
                            <Rings position={size.ringPosition} />
                        </group>
                        <ambientLight intensity={1} />
                        <directionalLight position={[10,10,10]} intensity={0.5}/>
                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#contact" className="w-fit">
                    <Button name="Let's work togather" isBeam={true} containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    )
}

export default Hero;