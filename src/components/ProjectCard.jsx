/* eslint-disable react/prop-types */
import { github, linkIcon } from "../assets"
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ProjectCard = ({index, name, description, source_code_link, live_url, tags, image}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary rounded-2xl p-5 w-full"
            >
                <div className="relative w-full h-60">
                    <img src={image} alt={name} className="rounded-2xl w-full h-full object-cover" />
                    <div className="flex w-full justify-end pr-4 absolute left-0 top-3 gap-3">
                        <div 
                            onClick={() => window.open(source_code_link, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
                        </div>
                        <div 
                            onClick={() => window.open(live_url, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <img src={linkIcon} alt="live url link" className="w-1/2 h-1/2 object-contain" />
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="text-white font-bold text-2xl">{name}</h3>
                    <p className="mt-2 text-secondary text-sm">{description}</p>
                </div>
                <div className="mt-4 flex flex-row flex-wrap gap-2">
                    {tags.map(tag => {
                        return (
                            <p key={tag.name} className={`text-sm ${tag.color}`}>
                                #{tag.name}
                            </p>
                        );
                    })}
                </div>
            </Tilt>
        </motion.div>
    );
}

export default ProjectCard;