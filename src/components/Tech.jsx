import {useState, useEffect} from "react";
import BallCanvas from "./canvas/BallCanvas";
import { staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import { technologies } from "../constants/constants";

const Tech = () => {

    return (
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.25}}
            className="my-10"
        >
            <div className="container">
                <div className="flex flex-row flex-wrap gap-10 justify-center">
                    {
                        technologies.map(technology => {
                            return (
                                <div className="w-28 h-28" key={technology.name}>
                                    <BallCanvas icon={technology.icon} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </motion.section>
    );
}

export default Tech;
