import {
  PropsWithChildren,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";

type Value = {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  sliderRef: React.MutableRefObject<null>;
};

const Context = createContext<Value | undefined>(undefined);

export default function SliderContext({ children }: PropsWithChildren) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const sliderRef = useRef(null);
  const value = {
    currentIndex,
    setCurrentIndex,
    sliderRef,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export const useSliderContext = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useSliderContext must be used inside the provider");
  }
  return context;
};
