import ButtonSvg from "@/app/assets/svg/ButtonSvg"
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
    className?: string;
    href: string;
    onClick?: () => void;
    children: string | ReactNode;
    px?: number;
    white?: boolean;
}

const Buttons: React.FC<ButtonProps> = ({ className = "", href, onClick, children, px = 7, white = false }) => {
    const classes: string = `relative text-sans inline-flex items-center justify-center h-11 transition-color px-${px || " px-7"} hover:text-pink-200 ${white ? "text-n-8" : "text-n-1"} ${className || ""}  text-sm font-semibold leading-6 duration-700`;
    
    const spanClasses: string = `z-10 relative`;

    const renderButton = () => (
        <button className={classes} onClick={onClick}>
          <span className={spanClasses}>{children}</span>
          {ButtonSvg(white)}
        </button>
      );
    
      const renderLink = () => (
        <a href={href} className={classes}>
          <span className={spanClasses}>{children}</span>
          {ButtonSvg(white)}
        </a>
      );
    
      return href ? renderLink() : renderButton();
};

export default Buttons
