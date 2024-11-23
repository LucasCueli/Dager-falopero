import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram, FaSpotify} from "react-icons/fa";

const socials = [
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/mariano-luis-villa/?locale=es_ES"},
    { icon: <FaGithub />, path: "https://www.github.com/MarianoVilla"},
    { icon: <FaYoutube />, path: "https://www.youtube.com/@DotDager"},
    { icon: <FaTwitter />, path: "https://twitter.com/Dager_32"},
    { icon: <FaInstagram />, path: "https://www.instagram.com/dager.32/"},
    { icon: <FaSpotify />, path: "https://open.spotify.com/intl-es/artist/6bkClBMJd4qKxJp0J5vHsz?si=Idsy85rwRDe1WPauGbxXmQ"},
];

const Social = ({containerStyles, iconStyles}) => {
    return(
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social