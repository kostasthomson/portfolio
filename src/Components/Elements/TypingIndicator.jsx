function TypingIndicator() {
	return (
		<div className="flex justify-start animate-fadeIn">
			<div className="bg-white dark:bg-zinc-800 rounded-2xl p-4 shadow-sm">
				<div className="flex space-x-2">
					{[...Array(3)].map((_, i) => (
						<div
							key={i}
							className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"
							style={{
								animationDelay: `${i * 150}ms`,
								animationDuration: "600ms",
							}}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default TypingIndicator;
