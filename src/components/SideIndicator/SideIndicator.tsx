import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useSliderContext } from "../../layouts/SliderContext";

export default function SideIndicator() {
  const { currentIndex, sliderRef, setCurrentIndex } = useSliderContext();
  return (
    <div className="absolute xl:right-12 z-10 xl:top-64 bottom-4 right-0 w-full xl:w-fit">
      <div className="flex flex-row xl:flex-col items-center gap-6 w-fit mx-auto">
        <button onClick={() => (sliderRef?.current as any)?.slickPrev()}>
          <IoIosArrowRoundBack className="text-5xl" />
        </button>
        <div className="flex flex-row xl:flex-col gap-10">
          <div
            onClick={() => (sliderRef?.current as any)?.slickGoTo(0)}
            className="bg-black w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-gray-500"
          >
            <div
              className={`w-3 h-3 ${
                currentIndex >= 1 ? "bg-pink-500" : "bg-black"
              } rounded-full transition-smooth`}
            ></div>
          </div>

          <div
            onClick={() => (sliderRef?.current as any)?.slickGoTo(1)}
            className="bg-black w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-gray-500"
          >
            <div
              className={`w-3 h-3 ${
                currentIndex >= 2 ? "bg-pink-500" : "bg-black"
              } rounded-full transition-smooth`}
            ></div>
          </div>
          <div
            onClick={() => (sliderRef?.current as any)?.slickGoTo(2)}
            className="bg-black w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-gray-500"
          >
            <div
              className={`w-3 h-3 ${
                currentIndex >= 3 ? "bg-pink-500" : "bg-black"
              } rounded-full transition-smooth`}
            ></div>
          </div>
          <div
            onClick={() => (sliderRef?.current as any)?.slickGoTo(3)}
            className="bg-black w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-gray-500"
          >
            <div
              className={`w-3 h-3 ${
                currentIndex >= 4 ? "bg-pink-500" : "bg-black"
              } rounded-full transition-smooth`}
            ></div>
          </div>
          <div
            onClick={() => (sliderRef?.current as any)?.slickGoTo(4)}
            className="bg-black w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-gray-500"
          >
            <div
              className={`w-3 h-3 ${
                currentIndex >= 5 ? "bg-pink-500" : "bg-black"
              } rounded-full transition-smooth`}
            ></div>
          </div>
        </div>
        <button onClick={() => (sliderRef?.current as any)?.slickNext()}>
          <IoIosArrowRoundForward className="text-5xl" />
        </button>
      </div>
    </div>
  );
}
