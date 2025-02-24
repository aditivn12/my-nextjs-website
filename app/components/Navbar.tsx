import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-2 border-black-500 flex justify-between items-center max-container padding-container relative z-30 py-5">

      <div className="flex gap-6">
        <Link href="/" className="text-lg font-semibold">
          Home
        </Link>
        <Link href="/about" className="text-lg font-semibold">
          About Me
        </Link>
        <Link href="/connect" className="text-lg font-semibold">
          Connect With Me
        </Link>
      </div>

      <div className="flex gap-4">
        <Link href="https://www.linkedin.com/in/aditi-nayak1/" target="_blank">
          <Image 
            src="/image.png"  
            alt="LinkedIn Logo" 
            width={40} 
            height={40} 
            className="hover:opacity-80 transition-opacity"
          />
        </Link>
        
        <Link href="https://github.com/aditivn12" target="_blank">
          <Image 
            src="/githublogo.png" 
            alt="GitHub Logo" 
            width={40} 
            height={40} 
            className="hover:opacity-80 transition-opacity"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
