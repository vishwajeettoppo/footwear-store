import Image from "next/image";
import Link from "next/link";
import React from "react";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact", label: "Contact Us" },
];

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link href={"/"}>
          <Image
            src={"/images/header-logo.svg"}
            alt="logo"
            width={100}
            height={0}
          />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className=" font-montserrat leading-normal text-lg text-slate-gray"
            >
              {link.label}
            </Link>
          ))}
          <Link href={"/"} className=" font-montserrat">
            Sign in / Explore now
          </Link>
        </ul>
        <div className=" hidden max-lg:block">
          <Image
            src={"/icons/hamburger.svg"}
            alt="menu"
            height={30}
            width={30}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
