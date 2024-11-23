import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter} from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "github.com/MarianoVilla"},
    { icon: <FaYoutube />, path: "www.youtube.com/@DotDager"},
    { icon: <FaTwitter />, path: "twitter.com/Dager_32"},
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