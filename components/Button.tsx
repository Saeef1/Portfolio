import ButtonSvg from "@/app/assets/svg/ButtonSvg";
import { ReactElement } from "react";
import Link from "next/link";

interface ButtonProps {
  className: string;
  href: string;
  onClick?: () => void;
  children: ReactElement | string;
  px?: string;
  white?: boolean;
}

const Button = ({ className, href, onClick, children, px, white }: ButtonProps) => {
  const classes = `button relative inline-ex duration-500 items-center hover:text-red-700 justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white || false)}
    </button>
  );

  const renderLink = () => (
    <Link href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white || false)}
    </Link>
  );

  return href ? renderLink() : renderButton();
};


export default Button;
