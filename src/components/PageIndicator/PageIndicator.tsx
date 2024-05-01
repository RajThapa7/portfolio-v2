import { useSliderContext } from "../../layouts/SliderContext";

export default function PageIndicator() {
  const { currentIndex } = useSliderContext();
  return (
    <div className="font-bold text-lg absolute bottom-20 right-14 z-10">
      {currentIndex} <span className="text-gray-300">/</span> 5
    </div>
  );
}
