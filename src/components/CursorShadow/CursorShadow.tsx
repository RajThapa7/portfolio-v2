import { useEffect, useRef } from "react";
import useWindowDimensions from "../../hooks/useWIndowDimension";

export default function CursorShadow() {
  const blobRef = useRef<HTMLDivElement>(null);

  const { width } = useWindowDimensions();

  useEffect(() => {
    const blob = blobRef.current;

    const handleMouseMove = (event: any) => {
      const { pageX, pageY } = event;
      if (blob === null) return;

      if (width >= 1280) {
        blob.animate(
          {
            left: `${pageX}px`,
            top: `${pageY}px`,
          },
          {
            duration: 3000,
            fill: "forwards",
          }
        );
      }
    };

    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div id="blob" ref={blobRef}></div>;
}
