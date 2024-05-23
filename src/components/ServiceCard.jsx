/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import {fadeIn} from "../utils/motion";

const ServiceCard = ({title, index, icon}) => {
    return (
        <Tilt>
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="p-0.5 w-full shadow-card green-pink-gradient rounded-3xl"
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className="flex px-12 py-5 rounded-3xl bg-tertiary h-64 items-center flex-col gap-6 justify-center"
                >
                    <img className="w-16 h-16 object-contain" src={icon} alt={title} />
                    <h3 className="text-white font-bold text-center text-xl">
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    );
}

export default ServiceCard;