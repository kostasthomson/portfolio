import Conversation from "../Containers/Conversation";

function Main({ conversation }) {
	return (
		<main className="flex flex-col items-center justify-center">
			<ul className="px-5 sm:px-28 md:px-36 lg:px-56 xl:px-72 2xl:px-96 w-full flex flex-col justify-center">
				{conversation.map((element, index) => {
					return <Conversation key={index} conversation={element} />;
				})}
			</ul>
		</main>
	);
}

export default Main;
