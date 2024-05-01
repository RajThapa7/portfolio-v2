import { ReactElement } from "react";
import { BsGit } from "react-icons/bs";
import { DiCss3 } from "react-icons/di";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

interface ISkillCard {
  title: string;
  icon: ReactElement;
  hoverClass: string;
  iconClass: string;
}

const skillsCardData: ISkillCard[] = [
  {
    title: "CSS",
    icon: <DiCss3 />,
    hoverClass: "group-hover:bg-blue-400 dark:group-hover:bg-blue-700",
    iconClass: "text-blue-500",
  },
  {
    title: "JavaScript",
    icon: <SiJavascript />,
    hoverClass: "dark:group-hover:bg-yellow-600 group-hover:bg-[#f0db4f]",
    iconClass: "text-[#f0db4f]",
  },
  {
    title: "Typescript",
    icon: <SiTypescript />,
    hoverClass: "group-hover:bg-blue-500 dark:group-hover:bg-blue-900",
    iconClass: "text-blue-500",
  },
  {
    title: "React",
    icon: <FaReact />,
    hoverClass: "dark:group-hover:bg-cyan-600 group-hover:bg-cyan-400",
    iconClass: "text-cyan-500",
  },
  {
    title: "Next Js",
    icon: <SiNextdotjs />,
    hoverClass: "dark:group-hover:bg-black group-hover:bg-black",
    iconClass: "text-white",
  },
  {
    title: "Git",
    icon: <BsGit />,
    hoverClass: "dark:group-hover:bg-orange-700 group-hover:bg-orange-500",
    iconClass: "text-orange-500",
  },
  {
    title: "Tailwind",
    icon: <SiTailwindcss />,
    hoverClass: "dark:group-hover:bg-cyan-700 group-hover:bg-cyan-500",
    iconClass: "text-cyan-500",
  },
  {
    title: "MongoDB",
    icon: <SiMongodb />,
    hoverClass: "dark:group-hover:bg-[#03913f] group-hover:bg-[#01ed64]",
    iconClass: "text-[#00ed64]",
  },
  {
    title: "Node Js",
    icon: <FaNodeJs />,
    hoverClass: "dark:group-hover:bg-[#58a149] group-hover:bg-[#58a149]",
    iconClass: "text-[#58a149]",
  },
  {
    title: "Express Js",
    icon: <SiExpress />,
    hoverClass: "dark:group-hover:bg-black group-hover:bg-black",
    iconClass: "text-white",
  },
];

export default skillsCardData;
