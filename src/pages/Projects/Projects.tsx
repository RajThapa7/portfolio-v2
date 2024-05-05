import ProjectCard from "../../components/ProjectCard/ProjectCard";
import useEnhanceText from "../../hooks/useEnhanceText";

const Projects = () => {
  useEnhanceText("project");
  return (
    <div className="flex h-full w-full justify-center flex-col gap-20">
      <div className="flex flex-row items-center justify-center xl:self-start gap-2">
        <div className="from-pink-500 xl:flex hidden bg-gradient-to-tr to-purple-500 w-32 h-2"></div>
        <p
          className="text-white xl:text-5xl text-3xl md:text-4xl font-semibold uppercase fancy"
          id="project"
        >
          Projects
        </p>
      </div>
      <div className="flex flex-row gap-8 px-32">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
