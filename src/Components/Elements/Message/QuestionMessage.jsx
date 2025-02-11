import TypingIndicator from "./TypingIndicator";
import Message from "./Message";

function QuestionMessage({ question, show, isTyping, typingDelay, showAll }) {
	return (
		question && (
			<div className={`max-w-[80%] flex justify-end mb-5 px-2 self-end`}>
				{isTyping && !showAll && <TypingIndicator />}
				{(show || showAll) && (
					<Message
						className="bg-blue-600 text-white rounded-tr-md"
						text={question}
					/>
				)}
			</div>
		)
	);
}

export default QuestionMessage;
