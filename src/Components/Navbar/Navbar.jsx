import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useActiveSection } from '../../hooks/useActiveSection';
import './Navbar.css';

const NAV_LINKS = [
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact', emphasize: true },
];

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

function getInitialTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export const Navbar = () => {
    const [theme, setTheme] = useState(getInitialTheme);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const onHomePage = location.pathname === '/';
    const activeId = useActiveSection(onHomePage ? SECTION_IDS : []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    const closeMenu = () => setIsMenuOpen(false);

    const goToSection = (event, id) => {
        event.preventDefault();
        closeMenu();

        if (onHomePage) {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            window.history.replaceState(null, '', `#${id}`);
        } else {
            navigate(`/#${id}`);
        }
    };

    const goHome = (event) => {
        closeMenu();

        if (onHomePage) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.history.replaceState(null, '', '/');
        }
    };

    return (
        <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar-inner container">
                <Link to="/" className="navbar-brand" onClick={goHome}>
                    Sithula Gamage
                </Link>

                <nav className="navbar-links" aria-label="Primary">
                    {NAV_LINKS.map(({ id, label, emphasize }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={`nav-link ${emphasize ? 'nav-link--emphasis' : ''} ${onHomePage && activeId === id ? 'nav-link--active' : ''}`}
                            onClick={(event) => goToSection(event, id)}
                        >
                            {label}
                        </a>
                    ))}
                </nav>

                <div className="navbar-actions">
                    <button
                        type="button"
                        className="btn-icon"
                        onClick={toggleTheme}
                        aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                    >
                        {theme === 'dark' ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
                    </button>

                    <button
                        type="button"
                        className="btn-icon navbar-menu-toggle"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <CloseIcon fontSize="small" /> : <MenuIcon fontSize="small" />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <nav className="navbar-mobile-menu" aria-label="Primary mobile">
                    {NAV_LINKS.map(({ id, label, emphasize }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={`nav-link ${emphasize ? 'nav-link--emphasis' : ''} ${onHomePage && activeId === id ? 'nav-link--active' : ''}`}
                            onClick={(event) => goToSection(event, id)}
                        >
                            {label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Navbar;
