import { useEffect, useState, useRef } from "react";
import { QuestionMessage, AnswerMessage } from "../Elements";

function Conversation({ conversation, showNext, showAll }) {
	const scrollRef = useRef(null);
	const [showQuestion, setShowQuestion] = useState(false);
	const [isTypingQ, setIsTypingQ] = useState(false);
	const [showAnswer, setShowAnswer] = useState(false);
	const [isTypingA, setIsTypingA] = useState(false);
	const { question, answer, content, sleepTime } = conversation;
	const typingDelay = 1000;
	const responseDelay = 500;
	const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
	useEffect(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [showQuestion, showAnswer, isTypingQ, isTypingA]);
	useEffect(() => {
		const startConversation = async () => {
			if (question) {
				setIsTypingQ(true);
				await sleep(typingDelay);
				setIsTypingQ(false);
				setShowQuestion(true);
				await sleep(responseDelay);
			}
			if (answer) {
				setIsTypingA(true);
				await sleep(typingDelay);
				setIsTypingA(false);
				setShowAnswer(true);
			}
			showNext();
		};
		const displayComponent = async () => {
			if (!showAll) {
				await sleep(sleepTime);
				await startConversation();
			} else {
				setShowQuestion(true);
				setShowAnswer(true);
			}
		};
		displayComponent();
	}, [showAll]);
	return (
		<li
			ref={scrollRef}
			className="flex flex-col my-5 transition-all duration-300 ease-out animate-slideIn"
		>
			<QuestionMessage
				question={question}
				show={showQuestion}
				isTyping={isTypingQ}
				typingDelay={typingDelay}
				showAll={showAll}
			/>
			<AnswerMessage
				answer={answer}
				content={content}
				show={showAnswer}
				isTyping={isTypingA}
				typingDelay={typingDelay}
				showNext={showNext}
				showAll={showAll}
			/>
		</li>
	);
}

export default Conversation;
