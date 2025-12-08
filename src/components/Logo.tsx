import { useState } from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const Logo = ({ className = "", size = "md", showText = true }: LogoProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`flex items-center`}>
      {/* Logo Container */}
      <div
        className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0`}
      >
        <img
          src="/logo.png"
          alt="Saavi HR Logo"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Logo;
