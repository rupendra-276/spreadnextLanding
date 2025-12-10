import React from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import LinkButton from "../button/Button";

export default function SpreadsHeroSection() {
  return (
    <section className="bg-[#ffffff]">
      <div className=" py-16 px-4 md:px-8 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl  font-bold text-gray-900 leading-tight">
                Where Careers, Creators & Communities Rise Together
              </h1>

              <p className="text-[17px] text-gray-600 leading-relaxed max-w-lg font-[jost]">
                Spreads is India's new-age microblogging job platform — where
                your story, your skills, and your circle matter. Whether you're
                shaping your voice, landing your next role, or building a brand
                — this is your space to rise.
              </p>

              {/* <LinkButton href="/join" name="Grow with Your Circle" /> */}
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="">
                <Image
                  src="/where-careers.png"
                  alt="Five diverse young people sitting together on a bench outdoors, smiling and laughing in casual hoodies and clothing"
                  width={771}
                  height={771}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
