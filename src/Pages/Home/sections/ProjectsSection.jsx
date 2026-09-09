import SectionHeading from '../../../Components/SectionHeading/SectionHeading';
import ProjectCard from '../../../Components/ProjectCard/ProjectCard';
import { projects } from '../../../data/projects';
import './ProjectsSection.css';

const visibleProjects = projects.filter((project) => !project.hidden);
const featuredProjects = visibleProjects.filter((project) => project.featured);
const otherProjects = visibleProjects.filter((project) => !project.featured);

export const ProjectsSection = () => {
    return (
        <section id="projects" className="section container">
            <SectionHeading
                numeral="I"
                title="Projects"
            />

            <div className="projects-featured-grid">
                {featuredProjects.map((project) => (
                    <ProjectCard key={project.slug} project={project} variant="featured" />
                ))}
            </div>

            {otherProjects.length > 0 && (
                <div className="projects-secondary-grid">
                    {otherProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} variant="secondary" />
                    ))}
                </div>
            )}
        </section>
    );
};

export default ProjectsSection;
