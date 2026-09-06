import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { social } from '../../data/social';
import './Hero.css';

const FOCUS_AREAS = ['Mechanical', 'Electronics', 'Embedded Systems', 'Robotics', 'Software'];

export const Hero = () => {
    return (
        <section id="home" className="hero section">
            <div className="hero-backdrop" aria-hidden="true">
                <div className="hero-crosshair" />
            </div>

            <div className="container hero-inner">
                <div className="hero-marker" aria-hidden="true" />

                <span className="section-eyebrow">
                    Robotics &amp; Mechatronics Engineering + Biomedical Engineering
                </span>

                <h1 className="hero-title">Sithula Gamage</h1>

                <ul className="hero-focus-areas" aria-label="Engineering disciplines">
                    {FOCUS_AREAS.map((area, index) => (
                        <li key={area}>
                            {area}
                            {index < FOCUS_AREAS.length - 1 && <span aria-hidden="true"> / </span>}
                        </li>
                    ))}
                </ul>

                <div className="hero-rule" aria-hidden="true" />

                <div className="hero-actions">
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                    {/* <a href={social.resume} target="_blank" rel="noreferrer" className="btn btn-secondary">
                        <DescriptionOutlinedIcon fontSize="small" /> Resume
                    </a> */}
                    <div className="hero-social-group">
                        <a href={social.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
                            <GitHubIcon fontSize="small" />
                        </a>
                        <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                            <LinkedInIcon fontSize="small" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
