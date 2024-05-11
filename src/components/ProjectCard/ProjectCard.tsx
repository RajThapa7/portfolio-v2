const ProjectCard = ({
  title,
  description,
  link,
  img,
}: {
  title: string;
  description: string;
  link: string;
  img: string;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      className="w-full h-fit shadow-md group shadow-gray-600 rounded-md transition-smooth hover:shadow-pink-500 md:mr-10"
    >
      <img
        src={img}
        alt="project_image"
        className="w-auto object-fill aspect-[16/10] rounded-t-md"
      />
      <div className="p-4">
        <p className="font-bold group-hover:text-pink-500 transition-smooth">
          {title}
        </p>
        <p className="text-gray-300">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
