import { BsGithub, BsTwitter } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { RiLinkedinFill } from "react-icons/ri";
import person from "../../../public/raj.png";
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
    <div className="relative flex justify-between w-full h-full">
      <div className="flex flex-col justify-center items-center xl:items-start w-full ">
        <div className="flex flex-col gap-y-12 pl-10 sm:pl-0">
          <HoverTextEffect />
          <div className="flex w-full xl:pl-36">
            <SocialLinks data={data} />
          </div>
        </div>
      </div>
      {/* image */}
      <div className="xl:flex hidden absolute -bottom-20 right-0">
        <img src={person} width={550} className="object-contain" />
      </div>
    </div>
  );
}
