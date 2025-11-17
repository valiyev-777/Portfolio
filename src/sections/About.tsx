"use client";
import Image from "next/image";
import JavaScript from "@/assets/icons/square-js.svg";
import HTML5 from "@/assets/icons/html5.svg";
import CSS3 from "@/assets/icons/css3.svg";
import REACT from "@/assets/icons/react.svg";
import CHROME from "@/assets/icons/chrome.svg";
import GITHUB from "@/assets/icons/github.svg";
import MyBooks from "@/assets/images/book-cover.png";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavaScript,
  },
  {
    title: "HTML5 ",
    iconType: HTML5,
  },
  {
    title: "CSS3",
    iconType: CSS3,
  },

  {
    title: "REACT",
    iconType: REACT,
  },
  {
    title: "CHROME",
    iconType: CHROME,
  },
  {
    title: "GITHUB",
    iconType: GITHUB,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },

  {
    title: "Gaming",
    emoji: "🎮",
    left: "50%",
    top: "5%",
  },
  {
    title: "Football",
    emoji: "⚽",
    left: "65%",
    top: "45%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "35%",
    top: "40%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "10%",
    top: "35%",
  },

  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    left: "5%",
    top: "65%",
  },

  {
    title: "Traveling",
    emoji: "✈️",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          title={"A Glimpse Into My World"}
          eyebrow={"About Me"}
          description={
            "Learn more about who I am, What I do, and what inspires me."
          }
        />
        <div className="mt-20 flex flex-col gap-6 ">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title={"My Reads"}
                description={"Explore the books shapping my perspectives."}
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={MyBooks} alt="My Books" />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title={"My Toolbox"}
                description={
                  " Explore the technologies and tools I use to craft exceptional digital experiences"
                }
                className=""
              />

              <ToolboxItems
                itmes={toolboxItems}
                className=""
                itmesWrapperClassName=""
                direction="left"
                duration={30}
              />
              <ToolboxItems
                itmes={toolboxItems}
                className="mt-6 "
                itmesWrapperClassName=""
                direction="right"
                duration={30}
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5  lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title={"Beyond the Code"}
                description={
                  "Explore my interests and hobbies beyond the digital realm."
                }
                className="px-6 py-6"
              />

              <div className=" relative  flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 
                  bg-linear-to-r from-emerald-300 to-sky-400
                   rounded-full py-1.5 absolute "
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-green-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover object-top-left"
              />
              <div
                className=" absolute top-1/2 left-1/2
               -translate-x-1/2 -translate-y-1/2 size-20
               rounded-full 
               after:content-[''] after:absolute after:inset-0  after:outline-2
               after:-outline-offset-2 after:outline-gray-950/30 after:rounded-full"
              >
                <div className=" absolute inset-0 rounded-full bg-linear-to-r from-emerald-300 to-sky-400 -z-10 animate-ping [animation-duration:2s]"></div>
                <div className=" absolute inset-0 rounded-full bg-linear-to-r from-emerald-300 to-sky-400 -z-20"></div>
                <Image
                  src={smileMemoji}
                  alt="smile-memoji "
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
