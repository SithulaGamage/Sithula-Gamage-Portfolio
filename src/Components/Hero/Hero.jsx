import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from '../../hooks/useTheme';
import { useDailyFact } from '../../hooks/useDailyFact';
import { social } from '../../data/social';
import './Hero.css';

const TOC_LINKS = [
    { id: 'projects', label: 'Projects', numeral: 'I' },
    { id: 'experience', label: 'Experience', numeral: 'II' },
    { id: 'contact', label: 'Contact', numeral: 'III' },
];

const NAVBAR_OFFSET = 96;

export const Hero = () => {
    const [theme, toggleTheme] = useTheme();
    const fact = useDailyFact();

    const scrollToSection = (event, id) => {
        event.preventDefault();
        const target = document.getElementById(id);
        if (!target) return;

        const top = target.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
        window.scrollTo({ top, behavior: 'smooth' });
        window.history.replaceState(null, '', `#${id}`);

        const heading = target.querySelector('.section-title');
        if (heading) {
            heading.classList.remove('section-title--pulse');
            void heading.offsetWidth;
            heading.classList.add('section-title--pulse');
        }
    };

    return (
        <section id="home" className="hero page-hero">
            <div className="hero-inner">
                <h1 className="hero-title">Sithula Gamage</h1>

                <p className="hero-tagline">Robotics &amp; Mechatronics + Biomedical Engineering Student</p>
                <p className="hero-affiliation">UNSW Sydney</p>

                <div className="hero-contact-icons">
                    <a href={`mailto:${social.email}`} aria-label="Email">
                        <EmailOutlinedIcon fontSize="small" />
                    </a>
                    <a href={social.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
                        <GitHubIcon fontSize="small" />
                    </a>
                    <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                        <LinkedInIcon fontSize="small" />
                    </a>
                </div>

                <nav className="hero-toc" aria-label="Page sections">
                    {TOC_LINKS.map(({ id, label, numeral }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className="hero-toc-row"
                            onClick={(event) => scrollToSection(event, id)}
                        >
                            <span className="hero-toc-label">{label}</span>
                            <span className="hero-toc-leader" aria-hidden="true" />
                            <span className="hero-toc-numeral">{numeral}</span>
                        </a>
                    ))}
                </nav>

                {fact && (
                    <p className="hero-fact">
                        <span className="hero-fact-label">Fact of the day</span>
                        {fact}
                    </p>
                )}

                <button
                    type="button"
                    className="hero-theme-toggle"
                    onClick={toggleTheme}
                    aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                >
                    {theme === 'dark' ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
                </button>
            </div>
        </section>
    );
};

export default Hero;
