import ServiceCard from "./ServiceCard";
import {motion} from "framer-motion";
import {services} from "../constants/constants";
import {fadeIn, textVariant, staggerContainer } from "../utils/motion";

const About = () => {
    return (
        <motion.section id="about"
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.25}}
        >
            <div className="container">
                <motion.div
                    variants={textVariant()}
                >
                    <p className="section-sub-text">
                        Intriduction
                    </p>
                    <h2 className="section-head-text">
                        Overview.
                    </h2>
                </motion.div>
                <motion.p className="text-secondary mt-4 leading-7 max-w-3xl text-lg " variants={fadeIn("", "", 0.1, 1)}>
                    I&apos;m skilled software developer with experience in Javascript, and expertise in
                    frameworks like React and Tailwindcss. I&apos;m a quick learner and collaborate closely
                    with clients to create efficient, scalable, and user-friendly solutions that solve
                    real-world problems. Let&apos;s work together to bring your ideas to life!
                </motion.p>
                <div className="mt-20 grid grid-cols-1 gap-10 justify-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {services.map((service, i) => {
                        return <ServiceCard index={i} key={i} {...service} />
                    })}
                </div>
            </div>
        </motion.section>
    );
}

export default About;