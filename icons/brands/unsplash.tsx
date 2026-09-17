import type React from "react";

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  color?: string;
};

export const Unsplash = ({
  size = 24,
  color = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    className={className}
    {...props}
  >
    <path d="M8.625 8.063V3h6.75v5.063zm6.75 2.812H21V21H3V10.875h5.625v5.063h6.75z"></path>
  </svg>
);

export const Unplash = Unsplash;
