import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useSliderContext } from "../../layouts/SliderContext";

export default function SideIndicator() {
  const { currentIndex, sliderRef } = useSliderContext();
  return (
    <div className="absolute xl:right-12 z-10 xl:top-64 bottom-4 right-0 w-full xl:w-fit">
      <div className="flex flex-row xl:flex-col items-center gap-6 w-fit mx-auto">
        <button onClick={() => (sliderRef?.current as any)?.slickPrev()}>
          <IoIosArrowRoundBack className="text-3xl lg:text-5xl" />
        </button>
        <div className="flex flex-row xl:flex-col gap-10">
          <div
            onClick={() => (sliderRef?.current as any)?.slickGoTo(0)}
            className="bg-black lg:w-4 lg:h-4 w-3 h-3 rounded-full flex items-center justify-center ring-2 ring-gray-500"
          >
            <div
              className={`lg:w-3 lg:h-3 w-2 h-2 ${
                currentIndex >= 1 ? "bg-pink-500" : "bg-black"
              } rounded-full transition-smooth`}
            ></div>
          </div>

          <div
            onClick={() => (sliderRef?.current as any)?.slickGoTo(1)}
            className="bg-black lg:w-4 lg:h-4 w-3 h-3 rounded-full flex items-center justify-center ring-2 ring-gray-500"
          >
            <div
              className={`lg:w-3 lg:h-3 w-2 h-2 ${
                currentIndex >= 2 ? "bg-pink-500" : "bg-black"
              } rounded-full transition-smooth`}
            ></div>
          </div>
          <div
            onClick={() => (sliderRef?.current as any)?.slickGoTo(2)}
            className="bg-black lg:w-4 lg:h-4 w-3 h-3 rounded-full flex items-center justify-center ring-2 ring-gray-500"
          >
            <div
              className={`lg:w-3 lg:h-3 w-2 h-2 ${
                currentIndex >= 3 ? "bg-pink-500" : "bg-black"
              } rounded-full transition-smooth`}
            ></div>
          </div>
          <div
            onClick={() => (sliderRef?.current as any)?.slickGoTo(3)}
            className="bg-black lg:w-4 lg:h-4 w-3 h-3 rounded-full flex items-center justify-center ring-2 ring-gray-500"
          >
            <div
              className={`lg:w-3 lg:h-3 w-2 h-2 ${
                currentIndex >= 4 ? "bg-pink-500" : "bg-black"
              } rounded-full transition-smooth`}
            ></div>
          </div>
          <div
            onClick={() => (sliderRef?.current as any)?.slickGoTo(4)}
            className="bg-black lg:w-4 lg:h-4 w-3 h-3 rounded-full flex items-center justify-center ring-2 ring-gray-500"
          >
            <div
              className={`lg:w-3 lg:h-3 w-2 h-2 ${
                currentIndex >= 5 ? "bg-pink-500" : "bg-black"
              } rounded-full transition-smooth`}
            ></div>
          </div>
        </div>
        <button onClick={() => (sliderRef?.current as any)?.slickNext()}>
          <IoIosArrowRoundForward className="text-3xl lg:text-5xl" />
        </button>
      </div>
    </div>
  );
}
