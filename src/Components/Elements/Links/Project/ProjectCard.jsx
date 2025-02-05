function ProjectCard({ isVisible, project }) {
	const { title, description, technologies, url } = project;
	return (
		<li className={`${!isVisible ? "hidden" : "block"} card project-card`}>
			<a href={url} target="_blank" rel="noreferrer">
				<h5 className="project-title">{title}</h5>
				<p className="project-description">{description}</p>
				<ul className="mt-2 italic font-bold flex justify-evenly flex-wrap">
					{technologies.map((technology, index) => (
						<li key={index}>
							<p className="project-technology">{technology}</p>
						</li>
					))}
				</ul>
			</a>
		</li>
	);
}

export default ProjectCard;
