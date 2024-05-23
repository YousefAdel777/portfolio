import {Link} from "react-router-dom";
import {navLinks} from "../constants/constants";
import {logo, menu, close} from "../assets";
import { useEffect, useState } from "react";

const Navbar  = () => {

    const [active, setActive] = useState("");
    const [showLinks, setShowLinks] = useState(false);

    useEffect(() => {
        if (showLinks) {
            document.body.className = "overflow-y-hidden md:overflow-y-visible";
        }
        else {
            document.body.className = "";
        }
    }, [showLinks]);


    return (
        <nav className="navbar bg-primary z-10 fixed top-0 w-full py-6">
            <div className="container flex items-center justify-between">
                <Link
                    to="/"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <div className="logo">
                        <img className="w-8 h-8" src={logo} alt="logo image" />
                    </div>
                </Link>
                <img className="w-8 h-8 md:hidden" src={menu} alt="Menu icon" onClick={() => setShowLinks(true)} />
                <div className={`absolute flex items-center justify-center bg-primary z-10 left-0 top-0 duration-300 w-full h-[100svh] ${showLinks ? "translate-x-0" : "translate-x-full"} md:static md:h-auto md:translate-x-0 md:block`}>
                    <img className="w-8 h-8 absolute top-6 left-6 ml-auto md:hidden" src={close} alt="Close icon" onClick={() => setShowLinks(false)} />
                    <ul className="flex items-center flex-col gap-10 text-tertiary md:flex-row md:justify-end">
                        {navLinks.map(link => {
                            return (
                                <li 
                                    key={link.id}
                                    className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white cursor-pointer text-lg font-medium`}
                                    onClick={() => {
                                        setActive(link.title);
                                        setShowLinks(false);
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;