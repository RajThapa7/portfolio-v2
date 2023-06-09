import { useEffect } from "react";

const enhance = (id: string) => {
  const element = document.getElementById(id) as HTMLElement,
    text = element.innerText.split("");

  element.innerText = "";

  text.forEach((value, index) => {
    const outer = document.createElement("span");

    outer.className = "outer";

    const inner = document.createElement("span");

    inner.className = "inner";

    inner.style.animationDelay = `${rand(-5000, 0)}ms`;

    const letter = document.createElement("span");

    letter.className = "letter";

    letter.innerText = value;

    letter.style.animationDelay = `${index * 1000}ms`;

    inner.appendChild(letter);

    outer.appendChild(inner);

    element.appendChild(outer);
  });
};

const rand = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export default function HoverTextEffect() {
  useEffect(() => enhance("channel-link"), []);
  return (
    <div className="flex gap-x-4">
      <div className="from-pink-500 bg-gradient-to-tr to-purple-500 w-32 h-2 mt-5"></div>
      <div className="flex flex-col gap-y-4">
        <div className="">
          <p className="text-white text-5xl font-semibold uppercase">
            Hello, I am Raj Thapa
          </p>
        </div>

        <div className="">
          <p className="text-white font-bold text-8xl uppercase">
            I'm a <span className="text-pink-500">frontend</span>{" "}
          </p>
          <p
            className="fancy text-white font-bold text-8xl uppercase"
            id="channel-link"
          >
            developer
          </p>{" "}
        </div>
      </div>
    </div>
  );
}
