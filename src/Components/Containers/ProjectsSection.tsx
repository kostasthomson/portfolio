import { useState } from 'react';
import { PersonalProjects, ArrowButton } from '../Elements';
import { ProjectContent } from '../../Types/Parameters';

function ProjectsSection({ projects }: { projects: ProjectContent[] }) {
  const [visibleProject, setVisibleProject] = useState(0);
  const handleLeftClick = () => {
    setVisibleProject((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const handleRightClick = () => {
    setVisibleProject((prev) =>
      prev < projects?.length - 1 ? prev + 1 : prev
    );
  };
  return (
    <div className="relative flex items-center">
      <ArrowButton className="left-0" handler={handleLeftClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-center h-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </ArrowButton>
      <PersonalProjects visibleProject={visibleProject} projects={projects} />
      <ArrowButton className="right-0 " handler={handleRightClick}>
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
      </ArrowButton>
    </div>
  );
}

export default ProjectsSection;
