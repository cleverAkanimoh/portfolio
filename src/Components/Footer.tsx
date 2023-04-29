import { socials } from "../ts/socials"
import { BsHouse, BsPhone } from 'react-icons/bs'
import { FontAwesomeIcon } from "fontawesom"

export default function Footer() {
    const year = new Date().getFullYear()

    const displaySocials = socials.map(({ id, icon, url }) => (
        <li
            key={id}
            className="footer-ul2-li1-style"
        >
            <a href={url} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={icon} className="text-[1.7rem] sm:text-[1.55rem]"/></a></li>
    ))

    return (
        <footer
            className="footer-style"
        >
            <div className="footer-div-style">

                <ul className="footer-ul1-style">
                    <li className="footer-ul1-li1-style"><BsHouse /> <pre className="ml-1">uyo, akwa ibom state</pre></li>
                    <li className="footer-ul1-li2-style"><BsPhone /> <pre className="ml-1">08113530038</pre></li>
                </ul>

                <ul 
                    className="flex justify-center"
                >{displaySocials}</ul>
            </div>

            <samp className="footer-samp1-style">&#169; {year} <samp>Portfolio</samp> made by <samp className="text-blue"><a href="#" className="hover:underline">BlueArea</a></samp> Technologies</samp>
        </footer>
    )
}