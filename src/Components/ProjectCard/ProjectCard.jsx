import { Link } from 'react-router-dom';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import '../ProjectMedia.css';
import './ProjectCard.css';

export function ProjectCard({ project, variant = 'secondary' }) {
    return (
        <Link
            to={`/projects/${project.slug}`}
            className={`project-card card project-card--${variant}`}
        >
            <div className="project-card-media">
                <div className={`project-card-media-image project-media--${project.cardImageClass}`} />
            </div>

            <div className="project-card-body">
                <div className="project-card-heading">
                    <h3 className="project-card-title">{project.title}</h3>
                    <ArrowOutwardIcon className="project-card-arrow" fontSize="small" />
                </div>

                <p className="project-card-description">{project.oneLiner}</p>

                <div className="tag-row">
                    {project.areas.map((area) => (
                        <span key={area} className="tag">{area}</span>
                    ))}
                </div>

                <div className="tag-row project-card-tech">
                    {project.tech.map((tech) => (
                        <span key={tech} className="tag tag-outline">{tech}</span>
                    ))}
                </div>
            </div>
        </Link>
    );
}

export default ProjectCard;
