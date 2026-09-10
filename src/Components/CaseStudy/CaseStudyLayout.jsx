import { Children, isValidElement } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { slugify } from '../../utils/slugify';
import '../ProjectMedia.css';
import '../Hero/Hero.css';
import './CaseStudy.css';

const ROMAN_NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
const toNumeral = (index) => ROMAN_NUMERALS[index] ?? String(index + 1);
const NAVBAR_OFFSET = 96;

// Walks the children tree (including plain wrapper elements like a split-row
// div) to find CaseStudySection nodes, so sections can be grouped in layout
// wrappers without dropping out of the hero table of contents.
function collectSections(node, acc = []) {
    Children.forEach(node, (child) => {
        if (!isValidElement(child)) return;

        if (child.type === CaseStudySection) {
            if (child.props.title) acc.push(child);
            return;
        }

        if (child.props?.children) {
            collectSections(child.props.children, acc);
        }
    });
    return acc;
}

export function CaseStudyLayout({ project, introMedia, children }) {
    const tocLinks = collectSections(children).map((child) => ({
        id: child.props.id || slugify(child.props.title),
        label: child.props.title,
    }));

    const scrollToSection = (event, id) => {
        event.preventDefault();
        const target = document.getElementById(id);
        if (!target) return;

        const top = target.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
        window.scrollTo({ top, behavior: 'smooth' });
        window.history.replaceState(null, '', `#${id}`);

        const heading = target.querySelector('.case-study-section-title');
        if (heading) {
            heading.classList.remove('section-title--pulse');
            void heading.offsetWidth;
            heading.classList.add('section-title--pulse');
        }
    };

    return (
        <article className="case-study">
            <section className="hero page-hero case-hero">
                <div className="hero-inner">
                    <Link to="/#projects" className="case-study-back">
                        <ArrowBackIcon fontSize="small" /> Back to projects
                    </Link>

                    <h1 className="hero-title case-hero-title">{project.title}</h1>

                    <div className="tag-row case-hero-areas">
                        {project.areas.map((area) => (
                            <span key={area} className="tag tag-accent">{area}</span>
                        ))}
                    </div>

                    <div className="tag-row case-hero-tech">
                        {project.tech.map((tech) => (
                            <span key={tech} className="tag tag-tech">{tech}</span>
                        ))}
                    </div>

                    <p className="hero-tagline">{project.oneLiner}</p>
                    <p className="hero-affiliation">{project.dates}</p>

                    {tocLinks.length > 0 && (
                        <nav className="hero-toc" aria-label="Case study sections">
                            {tocLinks.map(({ id, label }, index) => (
                                <a
                                    key={id}
                                    href={`#${id}`}
                                    className="hero-toc-row"
                                    onClick={(event) => scrollToSection(event, id)}
                                >
                                    <span className="hero-toc-label">{label}</span>
                                    <span className="hero-toc-leader" aria-hidden="true" />
                                    <span className="hero-toc-numeral">{toNumeral(index)}</span>
                                </a>
                            ))}
                        </nav>
                    )}
                </div>
            </section>

            <div className="container case-study-inner section">
                {introMedia && <div className="case-study-intro-media">{introMedia}</div>}

                <div className="case-study-body">{children}</div>
            </div>
        </article>
    );
}

export function CaseStudySection({ title, id, children, className = '' }) {
    const sectionId = id || (title ? slugify(title) : undefined);
    return (
        <section id={sectionId} className={`case-study-section ${className}`}>
            {title && <h2 className="case-study-section-title">{title}</h2>}
            {children}
        </section>
    );
}

export default CaseStudyLayout;
