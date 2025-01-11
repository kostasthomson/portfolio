import { useState } from "react";
import { PersonalProjects } from "../Utils";

function ProjectsSection({ projects }) {
	const [visibleProject, setVisibleProject] = useState(0);
	const handleLeftClick = (event) => {
		setVisibleProject((prev) => (prev > 0 ? prev - 1 : prev));
	};
	const handleRightClick = (event) => {
		setVisibleProject((prev) =>
			prev < projects?.length - 1 ? prev + 1 : prev
		);
	};
	return (
		<div className="flex items-center">
			<button className="carousel-button" onClick={handleLeftClick}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-6 text-center"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.75 19.5 8.25 12l7.5-7.5"
					/>
				</svg>
			</button>
			<PersonalProjects visibleProject={visibleProject} projects={projects} />
			<button className="carousel-button" onClick={handleRightClick}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-6 text-center"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m8.25 4.5 7.5 7.5-7.5 7.5"
					/>
				</svg>
			</button>
		</div>
	);
}

export default ProjectsSection;
