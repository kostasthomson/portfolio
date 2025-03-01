import ProjectCard from './Links/Project/ProjectCard';
import { ParameterTypes } from '../../Types';

function PersonalProjects({
  visibleProject,
  projects,
}: {
  visibleProject: number;
  projects: ParameterTypes.ProjectContent[];
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
