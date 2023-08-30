import React from "react";

export interface LinkProps {
  label: string;
  href: string;
  icon?: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}
