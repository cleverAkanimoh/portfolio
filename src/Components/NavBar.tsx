import { useCallback, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";
import logo from "../assets/images/logo.png";

const NavLinks: string[] = ['about', 'skills', 'projects'];

export const activeStyles = {
    color: "#D2691E",
    borderBottom: "3px solid #D2691E",
    opacity: 1
}

export default function NavBar() {
    const [menuClicked, setMenuClicked] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const toggleMenu = useCallback(() => setMenuClicked(prevState => !prevState), [])

    const onScrolling = useCallback(() => window.scrollY > 60 ? setScrolled(true) : setScrolled(false), [])

    useEffect(() => {
        window.onscroll = onScrolling

        return () => window.removeEventListener('scroll', onScrolling)
    }, [])


    const renderNavLinks = NavLinks.map((link, i) => (
        <li key={i} className="nav-list-style">
            <NavLink onClick={toggleMenu} to={link} className="nav-links-style" style={({ isActive }) => isActive ? activeStyles : undefined}>{link}</NavLink>
        </li>
    ))

    return (
        <nav className={`nav-style ${scrolled ? 'fixed-nav-style' : ''}`}>
            <div className="nav-div-style">
                <div className="nav-div-div-style">
                    <span>
                        <img src={logo} alt="logo" className="w-[30px] sm:w-[40px] rounded-lg" />
                        <Link
                            to="."
                            onClick={() => setMenuClicked(false)}
                            className="portfolio-logo-style">Portfolio <span className="portfolio-span-style"></span></Link>
                    </span>
                    <button className={`${menuClicked ? "bg-gradient-style" : ""} other-menu-btn-style`} onClick={toggleMenu}>
                        <VscMenu />
                    </button>
                </div>
                <ul className={`${menuClicked ? "animate-menu-list-show-style" : "animate-menu-list-hide-style"} other-animate-list-style`}>{renderNavLinks}</ul>
            </div>
        </nav>
    );
}