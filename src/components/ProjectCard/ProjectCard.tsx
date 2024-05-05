const ProjectCard = () => {
  return (
    <div className="min-w-[384px] w-96 h-fit shadow-md group shadow-gray-600 rounded-md transition-smooth hover:shadow-pink-500">
      <img
        src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg"
        alt="project_image"
        className="w-96 object-fill aspect-[16/10] rounded-t-md"
      />
      <div className="p-4">
        <p className="font-bold group-hover:text-pink-500 transition-smooth">
          Demo Project
        </p>
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
          commodi.
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
