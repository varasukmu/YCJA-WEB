"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Navbar() {
  const pathname = usePathname();
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      setNavHeight(navbar.offsetHeight);
      document.documentElement.style.setProperty("--navbar-height", `${navbar.offsetHeight}px`);
    }
  }, []);
  
  return (
    <nav id="navbar" className="fixed w-full top-0 left-0 z-10 flex justify-between text-white p-5 font-bold text-xl bg-green-950 shadow-md">
      <div className="">YCJA</div>
      <div className="flex justify-between w-1/2 font-bold">
        {[
          { href: "/home", label: "HOME" },
          { href: "/whatWeDo", label: "What We Do" },
          { href: "/whatAreWe", label: "What Are We" },
          { href: "/Article", label: "Article" },
        ].map(({ href, label }) => (
          <Link 
            key={href} 
            href={href} 
            className={`relative ${href === "/home" ? "text-orange-400" : ""} 
            ${pathname === href ? "after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-orange-400 transition-all duration-300" : ""} hover:text-orange-400`}
          >
            {label}
          </Link>
        ))}
      </div>
      <Link href="/joinUs" className="button hover:text-orange-400">JOIN US</Link>
    </nav>
  );
}

export default Navbar;
