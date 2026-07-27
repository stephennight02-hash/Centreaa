import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logos/logoblanc.jpg";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

export function Logo({ className, variant = "default" }: LogoProps) {
  return (
    <Link 
      href="/" 
      className={cn(
        "flex items-center justify-center transition-opacity hover:opacity-80",
        className
      )}
    >
      <div className="relative w-8 h-8 md:w-10 md:h-10 overflow-hidden rounded-full mr-2">
        <Image 
          src={logoImg} 
          alt="Centreaa Logo" 
          fill 
          className="object-cover"
        />
      </div>
      <span className={cn(
        "text-base md:text-lg font-bold tracking-widest uppercase",
        variant === "light" ? "text-foreground" : "text-card-foreground"
      )}>
        Centreaa
      </span>
    </Link>
  );
}
