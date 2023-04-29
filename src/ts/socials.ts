import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { SocialsProps } from "./portfolio.types";

export const socials: SocialsProps = [
  {
    id: 1,
    icon: faEnvelope,
    url: "mailto: cleverakanimoh@yahoo.com",
  },
  {
    id: 2,
    icon: faGithub,
    url: "https://github.com/cleverAkanimoh",
  },
  {
    id: 3,
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/cleverakanimoh",
  },
  {
    id: 4,
    icon: faTwitter,
    url: "https://twitter.com/cleverakanimoh3",
  },
];