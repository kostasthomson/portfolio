import ProjectCard from "../Links/Project/ProjectCard";

function PersonalProjects({ visibleProject, projects }) {
	return (
		<ul className="px-2 flex flex-col justify-evenly">
			{projects.map((project, index) => (
				<ProjectCard
					key={index}
					isVisible={index === visibleProject}
					project={project}
				/>
			))}
		</ul>
	);
}

export default PersonalProjects;
