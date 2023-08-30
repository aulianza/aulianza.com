import { BiAt as ThreadsIcon } from "react-icons/bi";
import {
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsRssFill as BlogIcon,
  BsTwitter as TwitterIcon,
} from "react-icons/bs";

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
    className: "hover:text-black",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/aulianza/",
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Linkedin",
    className: "hover:text-blue-700",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/aulianzaa",
    icon: <TwitterIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Twitter",
    className: "hover:text-sky-500",
  },
  {
    title: "Instagram",
    href: "https://instagram.com/aulianza",
    icon: <InstagramIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Instagram",
    className: "hover:text-amber-800",
  },
  {
    title: "Threads",
    href: "https://www.threads.net/@aulianza",
    icon: <ThreadsIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Threads",
    className: "hover:text-black",
  },
  {
    title: "Blog",
    href: "https://aulianza.id/blog",
    icon: <BlogIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Blog",
    className: "hover:text-orange-600",
  },
];
