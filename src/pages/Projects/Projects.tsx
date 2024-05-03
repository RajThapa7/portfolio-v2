import useEnhanceText from "../../hooks/useEnhanceText";

const Projects = () => {
  useEnhanceText("project");
  return (
    <div className="flex h-full w-full justify-center flex-col gap-20">
      <div className="flex flex-row items-center self-start gap-2">
        <div className="from-pink-500 bg-gradient-to-tr to-purple-500 w-32 h-2"></div>
        <p
          className="text-white text-5xl font-semibold uppercase fancy"
          id="project"
        >
          Projects
        </p>
      </div>
    </div>
  );
};

export default Projects;
