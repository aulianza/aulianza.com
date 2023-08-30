import { ReactNode } from "react";

export interface SocialItemProps {
  title: string;
  href: string;
  icon: ReactNode;
  isShow: boolean;
  isExternal: boolean;
  eventName: string;
  className?: string;
}
