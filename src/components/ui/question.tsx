import { IconCaretDownFilled } from "@tabler/icons-react";

interface QuestionProps {
  question: string;
  answer: string;
  index: number;
  isLast: boolean;
  activeQuestion: number;
  setActiveQuestion: (index: number) => void;
}

function Question({
  question,
  answer,
  index,
  isLast,
  activeQuestion,
  setActiveQuestion,
}: QuestionProps) {
  const isActive = activeQuestion === index;
  const handleClick = () => {
    setActiveQuestion(isActive ? -1 : index);
  };

  return (
    <div className="relative">
      <div
        onClick={handleClick}
        className="flex justify-between gap-4 cursor-pointer select-none py-2"
        role="button"
        aria-expanded={isActive}
        aria-controls={`faq-answer-${index}`}
      >
        <div className="flex-1 overflow-hidden flex flex-col">
          {/* QUESTION */}
          <p className="text-body font-semibold">{question}</p>

          {/* ANSWER */}
          <div
            id={`faq-answer-${index}`}
            className={`mt-1 ${isActive ? "block" : "hidden"} text-body-small`}
          >
            {answer}
          </div>
        </div>

        <div
          className={`transition-transform duration-200 ${
            isActive ? "rotate-180" : ""
          }`}
          aria-hidden
        ></div>

        {/* ICON */}
        <div className="w-fit h-fit hidden sm:block">
          <IconCaretDownFilled size={24} color="#505050" />
        </div>
      </div>

      {/* DIVIDER */}
      {!isLast && <div className="bg-[#808080] h-[1px] w-full" />}
    </div>
  );
}

export { Question };
