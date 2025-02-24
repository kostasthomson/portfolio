import TypingIndicator from './TypingIndicator';
import Message from './Message';
import { ContentType } from '../../../Types/Parameters';

function AnswerMessage({
  answer,
  content,
  show,
  isTyping,
  typingDelay,
  showNext,
  showAll,
}: {
  answer: string;
  content?: ContentType;
  show: boolean;
  isTyping: boolean;
  typingDelay: number;
  showNext: () => void;
  showAll: boolean;
}) {
  return (
    answer && (
      <div className="max-w-[80%] flex justify-between mt-5 px-2">
        {isTyping && !showAll && <TypingIndicator />}
        {(show || showAll) && (
          <Message
            className="bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-tl-md"
            text={answer}
            content={content}
          />
        )}
      </div>
    )
  );
}

export default AnswerMessage;
