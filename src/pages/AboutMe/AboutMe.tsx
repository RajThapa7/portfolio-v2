import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import image from "../../../public/programming.svg";
const AboutMe = () => {
  return (
    <div className="flex items-center h-full w-full justify-center text-3xl flex-col gap-12">
      <div className="flex flex-row items-center self-start gap-2">
        <div className="from-pink-500 bg-gradient-to-tr to-purple-500 w-32 h-2"></div>
        <p className="text-white text-5xl font-semibold uppercase">about me</p>
      </div>
      <div className="flex flex-row gap-8">
        <div className="flex basis-1/3">
          <img src={image} />
        </div>
        <div className="flex flex-col gap-8 text-justify basis-2/3 pr-24">
          <p>
            I'm a Web Developer from Kathmandu, Nepal. I am currently studying
            bachelor's in Computer Science at Amrit Science College (ASCOL). I
            love Coding, Designing and solving problems.
          </p>
          <p>
            My hobbies are playing sports like football, table tennis,
            basketball. I also enjoy watching movies and sports.{" "}
          </p>
          <p>
            If i were to describe myself in three words, it would be
            'Enthusiastic', 'Easygoing' and 'Reliable'
          </p>
          <div className="flex flex-row gap-2 mt-2">
            <RiDoubleQuotesL />
            <p className="italic text-4xl">
              Push harder than yesterday if you want a different tommorow
            </p>
            <RiDoubleQuotesR />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
