import {
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsRssFill as BlogIcon,
} from "react-icons/bs";
import { RiTwitterXFill as TwitterXIcon } from "react-icons/ri";

import { SocialItemProps } from "../types/socials";

const iconSize = 20;

export const SOCIAL_MEDIA: SocialItemProps[] = [
  {
    title: "Github",
    href: "https://github.com/aulianza",
    icon: <GithubIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Github",
    className: "text-slate-800 hover:bg-slate-800",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/aulianza/",
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Linkedin",
    className: "text-[#0b66c2] hover:bg-[#0b66c2]",
  },
  {
    title: "Instagram",
    href: "https://instagram.com/aulianza",
    icon: <InstagramIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Instagram",
    className: "text-pink-600 hover:bg-pink-600",
  },
  {
    title: "X",
    href: "https://x.com/aulianzaa",
    icon: <TwitterXIcon size={19} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: X",
    className: "hover:bg-black",
  },
  {
    title: "Blog",
    href: "https://aulianza.id/blog",
    icon: <BlogIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Blog",
    className: "text-orange-500 hover:bg-orange-500",
  },
];
