import { useEffect } from "react";

//helper function for adding animation to the text
const rand = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

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

const useEnhanceText = (id: string) => {
  useEffect(() => {
    enhance(id);
  }, [id]);
};

export default useEnhanceText;
