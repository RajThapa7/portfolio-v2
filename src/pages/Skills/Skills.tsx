import skillsCardData from "../../data/skillsData";
import useEnhanceText from "../../hooks/useEnhanceText";

const Skills = () => {
  useEnhanceText("skill");
  return (
    <div className="flex items-center h-full w-full justify-center text-3xl flex-col xl:gap-12 gap-4">
      <div className="flex flex-row items-center xl:self-start gap-2 justify-center">
        <div className="from-pink-500 bg-gradient-to-tr to-purple-500 w-32 h-2 xl:flex hidden"></div>
        <p
          className="text-white text-3xl md:text-4xl xl:text-5xl font-semibold uppercase fancy"
          id="skill"
        >
          Skills
        </p>
      </div>
      <div className="flex flex-wrap md:gap-x-10 gap-x-6 gap-y-2 md:gap-y-6 p-10 md:p-12 items-center justify-center">
        {skillsCardData.map(({ hoverClass, icon, iconClass, title }) => (
          <div key={title} className="flex flex-col items-center group">
            <div
              className={`${hoverClass} transition-smooth rounded-full md:p-8 p-4 flex items-center justify-center`}
            >
              <p
                className={`${iconClass} transition-smooth group-hover:text-white text-5xl md:text-7xl`}
              >
                {icon}
              </p>
            </div>
            <p
              className={`text-lg xl:text-xl group-hover:opacity-100 transition-smooth opacity-0 font-semibold mt-2`}
            >
              {title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
