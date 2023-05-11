import { useEffect, useRef } from "react";

export default function CursorShadow() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blob = blobRef.current;

    const handleMouseMove = (event: any) => {
      const { pageX, pageY } = event;
      // console.log(clientX, clientY);
      console.log(pageX, pageY);
      if (blob === null) return;

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
    };

    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div id="blob" ref={blobRef}></div>;
}
