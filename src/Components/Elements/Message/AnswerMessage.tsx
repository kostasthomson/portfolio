import TypingIndicator from './TypingIndicator';
import Message from './Message';
import { ParameterTypes } from '../../../Types';

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
  content?: ParameterTypes.ContentType;
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
            className="bg-primary rounded-tl-md pl-2.5 pb-1.5"
            text={answer}
            content={content}
          />
        )}
      </div>
    )
  );
}

export default AnswerMessage;
