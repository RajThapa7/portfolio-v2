import { useEffect } from "react";

export default function HackerTextEffect({ label }: { label: string }) {
  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const element = document.querySelector("h1") as HTMLElement;
    element.onmouseover = (event: any) => {
      let iterations = 0;
      const interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter: string, index: number) => {
            if (index < iterations) {
              return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iterations >= event.target.dataset.value.length)
          clearInterval(interval);

        iterations += 1 / 3;
      }, 30);
    };
  }, []);

  return <h1 data-value={label}>{label}</h1>;
}
