import { BsGithub, BsTwitter } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { RiLinkedinFill } from "react-icons/ri";
import person from "../../../public/person.jpeg";
import HoverTextEffect from "../../components/HoverTextEffect/HoverTextEffect";
import SocialLinks from "../../components/SocialLinks/SocialLinks";

const data = [
  {
    id: 0,
    icon: <CgFacebook />,
    link: "https://www.facebook.com/raj.thappa.3",
    hover: "hover:bg-blue-600",
  },

  {
    id: 1,
    icon: <BsTwitter />,
    link: "https://twitter.com/rajthapa_7",
    hover: "hover:bg-sky-500",
  },

  {
    id: 2,
    icon: <RiLinkedinFill />,
    link: "https://www.linkedin.com/in/rajthapa7/",
    hover: "hover:bg-blue-800",
  },
  {
    id: 3,
    icon: <BsGithub />,
    link: "https://www.github.com/rajthapa7/",
    hover: "hover:bg-black",
  },
];

export default function Home() {
  return (
    <div className="relative flex justify-between">
      <div className="flex flex-col justify-center gap-y-12">
        <HoverTextEffect />
        <div className="flex justify-start w-full pl-36">
          <SocialLinks data={data} />
        </div>
      </div>
      {/* image */}
      <div className="flex">
        <img src={person} width={600} />
      </div>
      <button onClick={() => console.log("button clidked")} className="arrow">
        <span></span>
        <span></span>
      </button>
    </div>
  );
}
