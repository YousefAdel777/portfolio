
import {motion} from "framer-motion";
import { textVariant, staggerContainer } from "../utils/motion";
import { projects } from "../constants/constants";
import ProjectCard from "./ProjectCard";

const Works = () => {
    return (
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.25}}
            className="my-14"
            id="works"
        >
            <div className="container">
                <motion.div variants={textVariant()}>
                    <p className="section-sub-text">
                        My Work
                    </p>
                    <h2 className="section-head-text">
                        Projects
                    </h2>
                </motion.div>
                <div className="flex mb-20">
                    <motion.p className="max-w-3xl leading-8 mt-3 text-secondary text-lg">
                        Following projects showcase my skills and experience through
                        real-world examples of my work. Each project is briefly described with
                        links to code repositories and live demos in it. It reflects my ability to
                        solve complex problems, work with different technologies, and manage projects
                        effectively.
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {projects.map((project, i) => {
                        return <ProjectCard key={i} index={i} {...project} />
                    })}
                </div>
            </div>

        </motion.section>
    );
}

export default Works;