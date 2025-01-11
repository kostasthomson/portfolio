import "./App.css";
import conversation from "./Data/content.json";
import { Header, Conversation } from "./Elements/Structure";

function App() {
	return (
		<>
			{/* <Header /> */}
			<div className="flex flex-col items-center justify-center">
				<ul className="w-[60%] mx-5 flex flex-col justify-center">
					{conversation.map((element, index) => {
						return <Conversation key={index} conversation={element} />;
					})}
				</ul>
			</div>
			{/* <Footer /> */}
		</>
	);
}

export default App;
