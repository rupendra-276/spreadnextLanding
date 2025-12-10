
import Link from "next/link";
import {  socials } from "../constents/constents";

export default function Footer() {
  return (
    <div className="bg-[#f9fafc] ">
      <hr className="text-gray-300 " />
      <footer className="max-w-7xl lg:mx-auto sm:mx-25  text-gray-800 px-5 py-5  ">
       
        {/* Bottom Links */}
        <div className=" mt-3">
          <div className="flex flex-col md:flex-row justify-between items-center  space-y-4 md:space-y-0">
            {/* Left Side */}
            <div className="text-center  text-[12px] md:text-left">
              <p>Spreads © 2025 — All rights reserved.</p>
              <p className="mt-1">Made in Bharat, Built for the World.</p>
            </div>

           <div className="flex items-center justify-center space-x-6 mt-4 me-2">
                {socials.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-md hover:scale-110 transition`}
                  >
                    <span className={`${item.bg}`}>{item.icon}</span>
                  </a>
                ))}
              </div>
            {/* Right Side */}
            <div className="text-center text-[12px] md:text-right">
              <p className=" ">
                Contact Us:{" "}
                <a href="mailto:support@spreads.in" className="hover:underline">
                  support@spreads.in
                </a>{" "}
                | Rewa HQ
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
