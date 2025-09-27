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
      <div className={`w-24  h-24 rounded-lg flex items-center justify-center  overflow-hidden`}>
 
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