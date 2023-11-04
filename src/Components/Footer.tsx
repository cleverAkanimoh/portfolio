import { socials } from "../lib/socials"
import { BsMailbox, BsPhone } from 'react-icons/bs'
import { FontAwesomeIcon } from "fontawesom"
import { MdEditLocation } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer() {
    const year = new Date().getFullYear()

    const displaySocials = socials.map(({ id, icon, url }) => (
        <li
            key={id}
            className="footer-ul2-li1-style"
        >
            <a href={url} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={icon} className="text-[1.7rem] sm:text-[1.55rem]" /></a></li>
    ))

    return (
        <footer className="footer-style">
            <div className="footer-div-style container">

                <ul className="footer-ul1-style">
                    <h1 className="flex items-center gap-2 font-bold text-2xl font-sans"><MdEditLocation /> <span>Location</span></h1>
                    <li className="footer-ul1-li1-style"><BsMailbox /> <span className="ml-1">crushclever1@gmail.com</span></li>
                    <li className="footer-ul1-li1-style"><BsPhone /> <span className="ml-1">08113530038</span></li>
                </ul>

                <ul className="flex justify-center gap-4"> <Link to="connect" className=" ml-5 hover:text-white">Let&apos;s connect {'>>>'}</Link> {displaySocials}</ul>
            </div>

            <samp className="footer-samp1-style">&#169; {year} | Clever Akanimoh Portfolio</samp>
        </footer>
    )
}