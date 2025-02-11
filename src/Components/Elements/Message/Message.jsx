import { SocialLinks } from "../Links";
import ProjectsSection from "../../Containers/ProjectsSection";

function Message({ className, text, content }) {
	return (
		<div
			className={`${
				className ? className : ""
			} py-2 px-4 rounded-3xl flex flex-col h-max`}
		>
			<p className={`${className ? className : ""} text-wrap flex flex-col`}>
				{text}
			</p>
			{content?.links && <SocialLinks />}
			{content?.projects && <ProjectsSection projects={content.projects} />}
		</div>
	);
}

export default Message;
