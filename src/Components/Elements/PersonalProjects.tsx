import { ProjectContent } from '../../Types/Parameters';
import ProjectCard from './Links/Project/ProjectCard';

function PersonalProjects({
  visibleProject,
  projects,
}: {
  visibleProject: number;
  projects: ProjectContent[];
}) {
  return (
    <ul className="px-2">
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
