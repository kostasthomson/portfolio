import { useEffect, useState, useRef } from "react";
import { TypingIndicator, Message } from "../Elements";

function Conversation({ conversation }) {
	const { question, answer, content, sleepTime } = conversation;
	const typingDelay = 1000;
	const responseDelay = 500;
	const scrollRef = useRef(null);
	const [visible, setVisible] = useState(false);
	const [showQuestion, setShowQuestion] = useState(false);
	const [showAnswer, setShowAnswer] = useState(false);
	const [isTypingQ, setIsTypingQ] = useState(false);
	const [isTypingA, setIsTypingA] = useState(false);
	const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
	useEffect(() => {
		const startConversation = async () => {
			setIsTypingQ(true);
			await sleep(typingDelay);
			setShowQuestion(true);
			setIsTypingQ(false);
			await sleep(responseDelay);
			setIsTypingA(true);
			await sleep(typingDelay);
			setShowAnswer(true);
			setIsTypingA(false);
		};
		const displayComponent = async () => {
			await sleep(sleepTime);
			setVisible(true);
			await startConversation();
		};
		displayComponent();
	}, [sleepTime]);
	useEffect(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [showQuestion, showAnswer, isTypingQ, isTypingA]);
	return (
		<>
			{visible && (
				<li
					ref={scrollRef}
					className="flex flex-col my-5 transition-all duration-300 ease-out animate-slideIn"
				>
					<div className="max-w-[80%] flex justify-end mb-5 px-2 self-end">
						{isTypingQ && <TypingIndicator />}
						{showQuestion && (
							<Message
								className="bg-blue-600 text-white rounded-tr-md"
								text={question}
							/>
						)}
					</div>
					<div className="max-w-[80%] flex justify-between mt-5 px-2">
						{isTypingA && <TypingIndicator />}
						{showAnswer && (
							<Message
								className="bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-tl-md"
								text={answer}
								content={content}
							/>
						)}
					</div>
				</li>
			)}
		</>
	);
}

export default Conversation;
