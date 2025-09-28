import { IconCaretDownFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";

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
          <p className="text-white font-semibold">{question}</p>

          {/* ANSWER */}
          <motion.div
            id={`faq-answer-${index}`}
            className={`mt-1 text-body-small`} //${isActive ? "block" : "hidden"}
            animate={{
              height: isActive ? "auto" : 0,
              opacity: isActive ? 1 : 0,
            }}
            style={{ overflow: "hidden" }}
          >
            {answer}
          </motion.div>
        </div>

        <div
          data-active={isActive}
          className="transition-all size-fit duration-200 data-[active=true]:rotate-180 "
          aria-hidden
        ></div>

        {/* ICON */}
        <motion.div
          className="w-fit h-fit hidden sm:block"
          animate={{ rotate: isActive ? 180 : 0 }}
        >
          <IconCaretDownFilled size={24} color="#505050" />
        </motion.div>
      </div>

      {/* DIVIDER */}
      {!isLast && <div className="bg-[#808080] h-[1px] w-full" />}
    </div>
  );
}

export { Question };
