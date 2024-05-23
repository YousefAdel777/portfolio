import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { staggerContainer, slideIn } from "../utils/motion";
import EarthCanvas from "./canvas/EarthCanvas";
import emailjs from "@emailjs/browser";
const service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const API_KEY = import.meta.env.VITE_EMAILJS_API_KEY;

const Contact = () => {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!formData.name) {
            toast.error("Name can't be empty.", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }
        if (!formData.message) {
            toast.error("Message can't be empty.", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }
        if (!emailRegex.test(formData.email)) {
            toast.error("Invalid Email!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }
        setIsLoading(true);
        try {
            emailjs.send(
                service_id,
                template_id,
                {
                    to_name: "Youssef",
                    from_name: formData.name,
                    from_email: formData.email,
                    to_email: "www.yoyoadel@gmail.com",
                    message: formData.message,
                },
                API_KEY
            );
            setFormData({
            email: "",
            name: "",
            message: "",
            });
            toast.success("Thank you! I will get back to you as soon as possible.", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        catch (error) {
            toast.error(error, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        finally {
            setIsLoading(false);
        }
    }

    return (
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.25}} 
            className="mt-10 pb-10"
            id="contact"
        >
            <div className="container">
                <div className="flex flex-col-reverse gap-10 overflow-hidden xl:flex-row xl:mt-12">
                    <motion.div className="bg-black-100 p-8 rounded-2xl xl:w-2/5" variants={slideIn("left", "tween", 0.2, 1)}>
                        <p className="section-sub-text">Get in touch</p>
                        <h3 className="section-head-text">Contact</h3>
                        <form noValidate onSubmit={handleSubmit} className="mt-12 flex flex-col gap-10">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-white block font-medium">Your Name</label>
                                <input 
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="What's your name ?"
                                    className="bg-tertiary w-full rounded-md py-4 px-6 outline-none text-white placeholder:text-secondary font-medium"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-white block font-medium">Your Email</label>
                                <input 
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="What's your email ?"
                                    className="bg-tertiary w-full rounded-md py-4 px-6 outline-none text-white placeholder:text-secondary font-medium"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-white block font-medium">Your Message</label>
                                <textarea 
                                    name="message"
                                    id="message"
                                    placeholder="What do you want to say ?"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="h-48 bg-tertiary w-full rounded-md resize-none py-4 px-6 outline-none text-white placeholder:text-secondary font-medium"
                                />
                            </div>
                            <button 
                                className="block w-fit rounded-xl font-bold bg-tertiary py-3 px-8 shadow-md shadow-primary text-white" 
                                type="submit"
                            >
                                {isLoading ? "Sending..." : "Send"}
                            </button>
                        </form>
                    </motion.div>
                    <motion.div
                        variants={slideIn("right", "tween", 0.2, 1)}
                        className="h-96 xl:w-3/5 xl:h-auto"
                    >
                        <EarthCanvas />
                    </motion.div>
                </div>
            </div>
            <ToastContainer />
        </motion.section>
    );
} 

export default Contact;