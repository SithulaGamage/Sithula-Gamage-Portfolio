import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '../../hooks/useTheme';
import { useDailyFact } from '../../hooks/useDailyFact';
import './Hero.css';

const TOC_LINKS = [
    { id: 'projects', label: 'Projects', numeral: 'I' },
    { id: 'experience', label: 'Experience', numeral: 'II' },
    { id: 'contact', label: 'Contact', numeral: 'III' },
];

export const Hero = () => {
    const [theme, toggleTheme] = useTheme();
    const fact = useDailyFact();

    const scrollToSection = (event, id) => {
        event.preventDefault();
        const target = document.getElementById(id);
        if (!target) return;

        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.replaceState(null, '', `#${id}`);

        const heading = target.querySelector('.section-title');
        if (heading) {
            heading.classList.remove('section-title--pulse');
            void heading.offsetWidth;
            heading.classList.add('section-title--pulse');
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-inner">
                <h1 className="hero-title">Sithula Gamage</h1>

                <p className="hero-tagline">Robotics &amp; Mechatronics + Biomedical Engineering Student</p>
                <p className="hero-affiliation">UNSW Sydney</p>

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
