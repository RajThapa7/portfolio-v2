import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import useEnhanceText from "../../hooks/useEnhanceText";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipe: false,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 567,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Projects = () => {
  useEnhanceText("project");
  const sliderRef = useRef(null);
  return (
    <div className="flex h-full w-full justify-center flex-col xl:gap-20 gap-4">
      <div className="flex flex-row items-center justify-center xl:self-start gap-2">
        <div className="from-pink-500 xl:flex hidden bg-gradient-to-tr to-purple-500 w-32 h-2"></div>
        <p
          className="text-white xl:text-5xl text-3xl md:text-4xl font-semibold uppercase fancy"
          id="project"
        >
          Projects
        </p>
      </div>

      <div className="px-4 lg:px-20">
        <div className="flex items-center flex-row gap-2 mb-6">
          <IoIosArrowBack
            className="hover:text-pink-500 text-xl font-semibold transition-smooth cursor-pointer"
            onClick={() => (sliderRef?.current as any)?.slickPrev()}
          />
          <IoIosArrowForward
            className="hover:text-pink-500 text-xl font-semibold transition-smooth cursor-pointer"
            onClick={() => (sliderRef?.current as any)?.slickNext()}
          />
        </div>
        <Slider {...settings} ref={sliderRef}>
          <div className="!flex items-center justify-center">
            <ProjectCard />
          </div>
          <div className="!flex items-center justify-center">
            <ProjectCard />
          </div>
          <div className="!flex items-center justify-center">
            <ProjectCard />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
