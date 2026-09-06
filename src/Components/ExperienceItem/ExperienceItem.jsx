import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './ExperienceItem.css';

export function ExperienceItem({ role, organisation, dates, summary, bullets = [], tech = [], link }) {
    return (
        <article className="experience-row">
            <div className="experience-row-when">{dates}</div>

            <div className="experience-row-main">
                <h3 className="experience-row-role">
                    {role} <span className="experience-row-org">- {organisation}</span>
                </h3>

                {summary && <p className="experience-row-summary">{summary}</p>}

                {bullets.length > 0 && (
                    <ul className="experience-row-bullets">
                        {bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                        ))}
                    </ul>
                )}

                {link && (
                    <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-secondary experience-row-link"
                    >
                        <OpenInNewIcon fontSize="small" /> {link.label}
                    </a>
                )}

                {tech.length > 0 && (
                    <div className="tag-row">
                        {tech.map((item) => (
                            <span key={item} className="tag tag-outline">{item}</span>
                        ))}
                    </div>
                )}
            </div>
        </article>
    );
}

export default ExperienceItem;
