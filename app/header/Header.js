"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Community", href: "/community" },
  { label: "Companies", href: "/companies" },
  { label: "Jobs", href: "/jobs" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (

    <header 
    className="fixed top-0 left-0 right-0  bg-[#fff]  border-b border-gray-200 z-50">
      <div className="bg-[#fff">
 <div className="max-w-7xl mx-auto flex items-center  justify-between py-3 px-4">

        {/* LEFT: LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/spreads.svg"
            alt="Logo"
            width={48}
            height={48}
            className="object-contain"
          />
        </Link>

        {/* CENTER NAV – Desktop Only */}
        {/* <nav className="hidden md:flex gap-10 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-black transition"
            >
              {link.label}
            </Link>
          ))}
        </nav> */}

        {/* RIGHT AUTH BUTTONS – Desktop Only */}
        <div className="hidden md:flex items-center gap-3">
          {/* <Link
            href="/signin"
            className="px-4 py-1.5 rounded-full text-gray-700 font-medium hover:bg-gray-100 transition"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="px-4 py-1.5 rounded-full bg-blue-700 text-white font-medium hover:bg-blue-700 transition"
          >
            Sign Up
          </Link> */}
          <h5 className="text-gray-900  text-lg font-semibold">We are coming very  Soon</h5>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden p-2 rounded-lg border border-gray-600 text-gray-600 hover:cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

   {/* MOBILE DRAWER */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[70%] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Image src="/spreads.svg" alt="Logo" width={35} height={35} />
          <button onClick={() => setOpen(false)}>
            <X size={20} className="text-gray-600 hover:cursor-pointer"/>
          </button>
        </div>

        {/* <div className="flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-700 text-lg border-b pb-2"
            >
              {link.label}
            </Link>
          ))}

          <div className="flex flex-col gap-3 mt-4">
            <Link
              href="/signin"
              onClick={() => setOpen(false)}
              className="py-2 text-center border border-gray-400 rounded-lg"
            >
              Login
            </Link>

            <Link
              href="/signup"
              onClick={() => setOpen(false)}
              className="py-2 text-center bg-blue-600 text-white rounded-lg"
            >
              Sign Up
            </Link>
          </div>
        </div> */}
          <h5 className="text-gray-600 font-semibold p-3">We are very  Soon</h5>

      </div>

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      </div>
     

   
    </header>
  );
}
