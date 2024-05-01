import Slider from "react-slick";
import MainLayout from "./layouts/MainLayout";
import { useSliderContext } from "./layouts/SliderContext";
import AboutMe from "./pages/AboutMe/AboutMe";
import ContactMe from "./pages/ContactMe/ContactMe";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";

export default function App() {
  const { setCurrentIndex, sliderRef } = useSliderContext();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    vertical: true,
    afterChange: (index: number) => setCurrentIndex(index + 1),
  };
  return (
    <MainLayout>
      <Slider {...settings} ref={sliderRef}>
        <div className="flex flex-col justify-center items-center w-screen h-screen">
          <Home />
        </div>
        <div className="flex flex-col justify-center items-center w-screen h-screen">
          <AboutMe />
        </div>
        <div className="flex flex-col justify-center items-center w-screen h-screen">
          <Skills />
        </div>
        <div className="flex flex-col justify-center items-center w-screen h-screen">
          <ContactMe />
        </div>
      </Slider>
    </MainLayout>
  );
}
