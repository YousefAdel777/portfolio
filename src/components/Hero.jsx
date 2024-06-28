import {useState, useEffect} from "react"
import {motion} from "framer-motion";
import ReactCanvas from "./canvas/ReactCanvas";

const Hero = () => {
    
    return (
        <section className="relative h-[100svh]">
            <div className="container flex items-start absolute inset-0 top-32 gap-6">
                <div className="flex flex-col justify-center items-center">
                    <div className="w-5 h-5 bg-violet-700 rounded-full" />
                    <div className="w-1 h-40 bg-violet-700 violet-gradient md:h-80" />
                </div>
                <div>
                    <h1 className="hero-head-text">Hi, I&apos;m <span className="text-violet-700">Youssef</span></h1>
                    <p className="hero-sub-text">I am a front-end web developer.</p>
                </div>
            </div>
            <ReactCanvas />
            <div className='absolute bottom-12 w-full flex justify-center items-center md:bottom-6'>
                <a href='#about'>
                    <div className='w-8 h-16 rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div
                            animate={{
                                y: [0, 28, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className='w-3 h-3 rounded-full bg-secondary'
                        />
                    </div>
                </a>
            </div>
        </section>
    );
}

export default Hero;
