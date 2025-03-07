import TypingIndicator from './TypingIndicator';
import Message from './Message';

function QuestionMessage({
  question,
  show,
  isTyping,
  typingDelay,
  showAll,
}: {
  question?: string;
  show: boolean;
  isTyping: boolean;
  typingDelay: number;
  showAll: boolean;
}) {
  return (
    question && (
      <div className={`max-w-[80%] flex justify-end mb-5 px-2 self-end`}>
        {isTyping && !showAll && <TypingIndicator />}
        {(show || showAll) && (
          <Message className="bg-secondary rounded-tr-md" text={question} />
        )}
      </div>
    )
  );
}

export default QuestionMessage;
