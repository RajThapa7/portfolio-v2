const subtitle = document.getElementsByClassName("card-subtitle")[0];

const createWord = (text: string, index: number) => {
  const word = document.createElement("span");
  word.innerHTML = `${text}`;
  word.classList.add("card-subtitle-word");
  word.style.transitionDelay = `${index * 40}ms`;
  return word;
};

const addWord = (text: string, index: number) => {
  subtitle.appendChild(createWord(text, index));
};

const createSubtitle = (text: string) => text.split(" ").map(addWord);

export default function GradientCard() {
  //   createSubtitle("But in a more real sense i don't know what i am doing");

  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">I know what i am doing</h3>
        <h4 className="card-subtitle"></h4>
      </div>
    </div>
  );
}
