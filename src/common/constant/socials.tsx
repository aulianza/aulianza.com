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
    className: "hover:bg-black",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/aulianza/",
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Linkedin",
    className: "hover:bg-blue-600",
  },
  {
    title: "X",
    href: "https://x.com/aulianzaa",
    icon: <TwitterXIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: X",
    className: "hover:bg-black",
  },
  {
    title: "Instagram",
    href: "https://instagram.com/aulianza",
    icon: <InstagramIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Instagram",
    className: "hover:bg-amber-700",
  },
  {
    title: "Blog",
    href: "https://aulianza.id/blog",
    icon: <BlogIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Blog",
    className: "hover:bg-orange-500",
  },
];
