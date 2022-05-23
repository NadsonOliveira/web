import { CloseButton } from "./CloseButton";
import bugImage from "../assets/bug.svg";
import ideiaImage from "../assets/idea.svg";
import thoughtImage from "../assets/thought.svg";
import { useState } from "react";

const feedBackText = {
  BUG: {
    title: "problema",
    image: {
      source: bugImage,
      alt: "bug",
    },
  },
  IDEA: {
    title: "Ideia",
    image: { source: ideiaImage, alt: "Idéia" },
  },
  OTHER: {
    title: "outro",
    image: {
      source: thoughtImage,
      alt: "Outro",
    },
  },
};

type feedbackType = keyof typeof feedBackText;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<feedbackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6 ">Deixe seu FeedBack</span>
        <CloseButton />
      </header>

      {!feedbackType ? (
        <div className="flex py-8 gap-2 w-full">
          {Object.entries(feedBackText).map(([key, value]) => {
            return (
              <button
                type="button"
                onClick={() => setFeedbackType(key as feedbackType)}
                key={key}
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span>
              </button>
            );
          })}
        </div>
      ) : (
        <p>hello word</p>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{" "}
        <a
          className="undeline underline-offset-2"
          href="https://www.rocketseat.com.br/"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
