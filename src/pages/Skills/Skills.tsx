import skillsCardData from "../../data/skillsData";
import useEnhanceText from "../../hooks/useEnhanceText";

const Skills = () => {
  useEnhanceText("skill");
  return (
    <div className="flex items-center h-full w-full justify-center text-3xl flex-col gap-12">
      <div className="flex flex-row items-center self-start gap-2">
        <div className="from-pink-500 bg-gradient-to-tr to-purple-500 w-32 h-2"></div>
        <p
          className="text-white text-5xl font-semibold uppercase fancy"
          id="skill"
        >
          Skills
        </p>
      </div>
      <div className="flex flex-wrap gap-x-10 gap-y-6 p-10 items-center justify-center">
        {skillsCardData.map(({ hoverClass, icon, iconClass, title }) => (
          <div key={title} className="flex flex-col items-center group">
            <div
              className={`${hoverClass} transition-smooth rounded-full p-8 flex items-center justify-center`}
            >
              <p
                className={`${iconClass} transition-smooth group-hover:text-white text-7xl`}
              >
                {icon}
              </p>
            </div>
            <p
              className={`text-xl group-hover:opacity-100 transition-smooth opacity-0 font-semibold mt-2`}
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
