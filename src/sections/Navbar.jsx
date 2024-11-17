import { useState } from "react";
import { navItems } from "../constants";


const NavItems = () => {

    return (
        <ul className="nav-ul">
            {
                navItems.map(({id, name, href}) => {
                    return (
                        <li key={id} className="nav-li">
                            <a href={href} className="nav-li_a" onClick={() => {}}>{name}</a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const toggleMenu = () => setToggle(prevToggle => !prevToggle);
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Anik
                    </a>
                    <button className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle Menu"
                        onClick={toggleMenu}
                    >
                        <img src={toggle ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className="w-6 h-6" />

                    </button>
                    {/* Desktop Navigation */}
                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>
            <div className={`nav-sidebar ${toggle ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems />
                </nav>
            </div>
        </header>
    )
}

export default Navbar;