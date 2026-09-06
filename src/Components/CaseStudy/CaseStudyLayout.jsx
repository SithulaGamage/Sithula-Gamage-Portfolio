import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../ProjectMedia.css';
import './CaseStudy.css';

export function CaseStudyLayout({ project, introMedia, children }) {
    return (
        <article className="case-study section">
            <div className="container">
                <Link to="/#projects" className="case-study-back">
                    <ArrowBackIcon fontSize="small" /> Back to projects
                </Link>
            </div>

            <div className="container case-study-hero-wrap">
                <div className={`case-study-hero project-media--${project.cardImageClass}`}>
                    <div className="case-study-hero-scrim" />
                    <div className="case-study-hero-content">
                        <h1 className="case-study-hero-title">{project.title}</h1>
                        <p className="case-study-hero-subtitle">
                            {project.areas.join(' • ')} &nbsp;|&nbsp; {project.dates}
                        </p>
                    </div>
                </div>
            </div>

            <div className="container case-study-inner">
                <p className="case-study-summary">{project.oneLiner}</p>

                <div className="tag-row">
                    {project.areas.map((area) => (
                        <span key={area} className="tag">{area}</span>
                    ))}
                    {project.tech.map((tech) => (
                        <span key={tech} className="tag tag-outline">{tech}</span>
                    ))}
                </div>

                {introMedia && <div className="case-study-intro-media">{introMedia}</div>}

                <div className="case-study-body">{children}</div>
            </div>
        </article>
    );
}

export function CaseStudySection({ title, id, children, className = '' }) {
    return (
        <section id={id} className={`case-study-section ${className}`}>
            {title && <h2 className="case-study-section-title">{title}</h2>}
            {children}
        </section>
    );
}

export default CaseStudyLayout;
