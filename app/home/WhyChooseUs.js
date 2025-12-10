import React from "react";
import { StaggeredContainer, AnimatedWrapper } from "../animation/animation";
import LinkButton from "../button/Button";

const whyChooseUsData = [
  {
    img: "/Community.png",
    title: "Built-in Career Community",
    desc: "Engage with students, mentors, recruiters, and alumni in a dynamic career-focused community. Share knowledge, build networks, and grow together.",
  },
  {
    img: "/monetization.png",
    title: "Seamless Monetization Opportunities",
    desc: "Turn your expertise into income through branded content, creator ads, premium learning resources, and referral programs — rewarding every contribution.",
  },
  {
    img: "/built-in-ats.png",
    title: "AI-Powered ATS & Hiring Engine",
    desc: "Streamline recruitment with AI-driven job matching, automated applications, and smart recruiter tools designed for faster and smarter hiring.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className=" space-y-20  px-10 md:px-28 md:py-20  mx-auto ">
      <div className="max-w-5xl space-y-12 py-16  mx-auto text-start md:text-center">
        <AnimatedWrapper direction="left">
          <h3 className="text-4xl text-[#100e0e]  md:text-[64px]  font-bold">
            Choose Your Circle Choose your Destiney
          </h3>
        </AnimatedWrapper>
        <AnimatedWrapper
          direction="right"
          className="text-[#373840] font-[jost]  text-xl space-y-3"
        >
          India’s Career, Creator & Community Platform for the Next Generation.
          Because your voice deserves more than likes — it deserves legacy.
          Spreads is where creators, job seekers, and communities come to grow,
          connect, and rise.
        </AnimatedWrapper>
        {/* <AnimatedWrapper direction="up">
          <LinkButton href="/signup" name="Grow with Your Circle" />
        </AnimatedWrapper> */}
      </div>

      <div className="overflow-hidden max-w-7xl my-10 w-full md:h-[400px] lg:h-[600px] mx-auto relative rounded-2xl">
        <video
          src="/Section.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover "
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <StaggeredContainer
          className="mt-12 px-3.5 py-14
       grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7"
        >
          {whyChooseUsData.map((item, index) => (
            <AnimatedWrapper
              delay={index * 0.4}
              direction="up"
              key={index}
              className="rounded-4xl   hover:translate-y-2  p-4 transition duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[260px]  object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold mt-3 text-lg mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className=" text-[#565656] font-[jost] ">{item.desc}</p>
            </AnimatedWrapper>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  );
}
