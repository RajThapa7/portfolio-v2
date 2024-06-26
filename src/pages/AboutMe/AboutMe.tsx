import { BiSolidMoviePlay } from "react-icons/bi";
import { FaBookOpen, FaHiking } from "react-icons/fa";
import { IoFootball } from "react-icons/io5";
import useEnhanceText from "../../hooks/useEnhanceText";

const AboutMe = () => {
  useEnhanceText("aboutme");
  return (
    <div className="flex h-full w-full xs:pt-0 pt-8 xs:justify-center flex-col xl:gap-16 gap-0">
      <div className="flex flex-row items-center justify-center xl:self-start gap-2">
        <div className="from-pink-500 bg-gradient-to-tr to-purple-500 w-32 h-2 hidden xl:flex"></div>
        <p
          className="text-white text-3xl xl:text-5xl font-semibold uppercase fancy"
          id="aboutme"
        >
          about&nbsp;me
        </p>
      </div>

      <div className="flex flex-col md:flex-row xl:px-32 xl:gap-32 gap-4 justify-between xl:justify-normal p-4 md:p-8 xl:p-0">
        {/* hobbies */}
        <div className="basis-1/2 flex flex-col md:gap-12 gap-4">
          <div>
            <p className="xs:text-lg xl:text-xl">
              Front End Developer with about 2 years of experience specializing
              in building responsive and visually engaging interfaces. My
              greatest strength is my collaborative spirit and my commitment to
              continuous learning, which drives me forward every single day.
            </p>
          </div>
          <div className="w-fit">
            <p className="text-lg xs:text-xl md:text-3xl uppercase font-semibold underline decoration-pink-500 underline-offset-8">
              Hobbies & Interests
            </p>
            <div className="grid grid-cols-4 xl:grid-cols-2 gap-6 place-items-center mt-6">
              <div className="flex flex-col items-center">
                <div className="border-2 rounded-full w-fit p-1">
                  <IoFootball className="text-2xl md:text-3xl" />
                </div>
                <p>Sports</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="border-2 rounded-full w-fit p-1">
                  <BiSolidMoviePlay className="md:text-3xl text-2xl" />
                </div>
                <p>Movies</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="border-2 rounded-full w-fit p-1">
                  <FaBookOpen className="md:text-3xl text-2xl" />
                </div>
                <p>Reading</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="border-2 rounded-full w-fit p-1">
                  <FaHiking className="text-2xl md:text-3xl" />
                </div>
                <p>Hiking</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 xl:gap-10">
          <div>
            <p className="text-lg xs:text-xl md:text-3xl uppercase font-semibold underline decoration-pink-500 underline-offset-8">
              Experience
            </p>
            <div className="mt-6 gap-2 flex flex-col">
              <div className="flex flex-row gap-4 items-center">
                <div className="from-pink-500 bg-gradient-to-tr to-purple-500 flex-col rounded-full break-words w-fit aspect-square p-2 md:p-3 text-xs md:text-sm font-semibold flex items-center justify-center">
                  <p>May 2023</p>
                  <p>to</p>
                  <p>Present</p>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold xs:text-lg">
                    Silk Innovation Pvt. Ltd
                  </p>
                  <p>Frontend Developer</p>
                </div>
              </div>
              <div className="h-6 xs:h-8 md:h-12 w-1 bg-white ml-9 md:ml-11"></div>
              <div className="flex flex-row gap-4 items-center">
                <div className=" from-pink-500 bg-gradient-to-tr to-purple-500 flex-col rounded-full break-words w-fit aspect-square p-2 md:p-3 text-xs md:text-sm font-semibold flex items-center justify-center">
                  <p>Nov 2022</p>
                  <p>to</p>
                  <p>May 2023</p>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold xs:text-lg">
                    Paywell Nepal Pvt. Ltd
                  </p>
                  <p>Frontend Developer</p>
                </div>
              </div>
            </div>
          </div>
          {/* education */}
          <div className="hidden md:flex flex-col">
            <p className="text-2xl uppercase font-semibold underline decoration-pink-500 underline-offset-8">
              Education
            </p>
            <div className="mt-4">
              <p className="font-semibold">Bachelors in Computer Science</p>
              <p className="text-gray-200">Tribhuwan University</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
