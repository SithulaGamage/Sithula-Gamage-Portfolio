import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Slide from '@mui/material/Slide';
import MenuIcon from '@mui/icons-material/Menu';

import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/AccountTreeRounded';
import BookIcon from '@mui/icons-material/Book';
import InfoIcon from '@mui/icons-material/Info';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import PaletteIcon from '@mui/icons-material/Palette';

export const Navbar = () => {    
    const location = useLocation();

    // =========================================================================
    // ============================== NAVIGATION ===============================
    // =========================================================================
    const navigate = useNavigate();
    const homeClick = () => {
        window.scrollTo(0, 0);
        navigate('/');
    }
    const workClick = () => {
        window.scrollTo(0, 0);
        navigate('/work');
    }
    const writingClick = () => {
        window.scrollTo(0, 0);
        navigate('/writing');
    }
    // const aboutClick = () => {
    //     window.scrollTo(0, 0);
    //     navigate('/about');
    // }
    const contactClick = () => {
        window.scrollTo(0, 0);
        navigate('/contact');
    }

    // =========================================================================
    // ============================ HAMBURGER MENU =============================
    // =========================================================================
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
    const toggleHamburgerMenu = () => setIsHamburgerMenuOpen((prev) => !prev);

    // ========================= ESCAPE HAMBURGER MENU =========================
    const hamburgerMenuRef = useRef(null);
    useEffect(() => {
        const handleHamburgerClickOutside = (event) => {
            // Ensure the click is outside the theme container
            if (hamburgerMenuRef.current && !hamburgerMenuRef.current.contains(event.target)) {
                setIsHamburgerMenuOpen(false);
            }
        };

        // Close the theme container when Escape key is pressed
        const handleHamburgerKeyDown = (event) => {
            if (event.key === 'Escape' && isHamburgerMenuOpen) {
                setIsHamburgerMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleHamburgerClickOutside);
        document.addEventListener('keydown', handleHamburgerKeyDown);

        return () => {
            document.removeEventListener('mousedown', handleHamburgerClickOutside);
            document.removeEventListener('keydown', handleHamburgerKeyDown);
        };
    }, [isHamburgerMenuOpen]); 

    // =========================================================================
    // ============================= THEME CHANGER =============================
    // =========================================================================
    const [selectedTheme, setSelectedTheme] = useState(0); // Index of selected theme
    const themeContentsRef = useRef(null); // Reference for the theme contents
    const handleThemeSelect = (index) => {
        setSelectedTheme(index);
        const selectedTheme = themes[index];
    
        // Update CSS variables
        Object.entries(selectedTheme.variables).forEach(([key, value]) => {
            document.documentElement.style.setProperty(key, value);
        });
    
        // Save selected theme to localStorage
        localStorage.setItem('selectedTheme', index);
    };
    
    useEffect(() => {
        // Load the saved theme from localStorage
        const savedThemeIndex = localStorage.getItem('selectedTheme');
        if (savedThemeIndex !== null) {
            handleThemeSelect(parseInt(savedThemeIndex, 10));
        } else {
            // Default to the first theme
            handleThemeSelect(0);
        }
    }, []);
    
    const [isVisible, setIsVisible] = useState(false);

    function handleThemeClick() {
        setIsVisible(!isVisible);
    }

    // =========================================================================
    // ======================== ESCAPE THEME FUNCTIONS =========================
    // =========================================================================
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Ensure the click is outside the theme container
            if (themeContentsRef.current && !themeContentsRef.current.contains(event.target)) {
                setIsVisible(false);
            }
        };

        // Close the theme container when Escape key is pressed
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && isVisible) {
                setIsVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isVisible]);    

    // =========================================================================
    // ================================ THEMES =================================
    // =========================================================================
    const themes = [
        {
            name: 'Classic',
            colors: ['#e94560', '#e6e6e6', '#030712', 'rgba(24, 24, 27, 0.8)', '#fafafa'],
            variables: {
                '--text': '#030712',
                '--body-text': '#030712',
                '--background': '#fafafa',
                '--highlight': '#e94560',
                '--highlight-opacity': '#e945608a',
                '--accent': '#e6e6e6',
                '--background-overlay': 'rgba(24, 24, 27, 0.8)',
            },
        },
        {
            name: 'Dark',
            colors: ['#e94560', '#e6e6e6', '#fafafa', 'rgba(24, 24, 27, 0.8)', '#030712'],
            variables: {
                '--text': '#fafafa',
                '--body-text': '#fafafa',
                '--background': '#030712',
                '--highlight': '#e94560',
                '--highlight-opacity': '#e945608a',
                '--accent': '#e6e6e6',
                '--background-overlay': 'rgba(24, 24, 27, 0.8)',
            },
        },
        {
            name: 'Retro',
            colors: ['#e3b23c', '#eb3d44', '#315da5', 'rgba(245, 185, 73, 0.8)', '#fafafa'],
            variables: {
                '--text': '#eb3b44',
                '--body-text': '#030712',
                '--background': '#fafafa',
                '--highlight': '#e3b23c',
                '--highlight-opacity': '#e3b23c8a',
                '--accent': '#315da5',
                '--background-overlay': 'rgba(245, 185, 73, 0.8)',
            },
        },
        {
            name: 'Forest',
            colors: ['#98a442', '#45523a', '#2d3e2c', 'rgba(69, 82, 58, 0.8)', '#fafafa'],
            variables: {
                '--text': '#536f42',
                '--body-text': '#030712',
                '--background': '#fafafa',
                '--highlight': '#98a442',
                '--highlight-opacity': '#98a4428a',
                '--accent': '#2d3e2c',
                '--background-overlay': 'rgba(69, 82, 58, 0.8)',
            },
        },
        {
            name: 'Neon Lights',
            colors: ['#ff84e2', '#9bffb3', '#ff4e9e', 'rgba(26, 37, 43, 0.8)', '#030712'],
            variables: {
                '--text': '#ff4e9e',
                '--body-text': '#fafafa',
                '--background': '#030712',
                '--highlight': '#ff84e2',
                '--highlight-opacity': '#ff84e28a',
                '--accent': '#9bffb3',
                '--background-overlay': 'rgba(26, 37, 43, 0.8)',
            },
        },
        // {
        //     name: 'Autumn',
        //     colors: ['#d77c4b', '#944e2f', '#5a6b48', 'rgba(90, 107, 72, 0.8)', '#030712'],
        //     variables: {
        //         '--text': '#c75d46',
        //         '--body-text': '#fafafa',
        //         '--background': '#030712',
        //         '--highlight': '#d77c4b',
        //         '--highlight-opacity': '#d77c4b8a',
        //         '--accent': '#944e2f',
        //         '--background-overlay': 'rgba(90, 107, 72, 0.8)',
        //     },
        // },
        // {
        //     name: 'Berry Bliss',
        //     colors: ['#ff6f61', '#ff9f68', '#d81b60', 'rgba(255, 111, 97, 0.8)', '#fafafa'],
        //     variables: {
        //         '--text': '#d81b60',
        //         '--body-text': '#030712',
        //         '--background': '#fafafa',
        //         '--highlight': '#ff6f61',
        //         '--highlight-opacity': '#ff6f618a',
        //         '--accent': '#ff9f68',
        //         '--background-overlay': 'rgba(255, 111, 97, 0.8)',
        //     },
        // },
        // {
        //     name: 'Copper Glow',
        //     colors: ['#cb6d51', '#dba24c', '#8c4a32', 'rgba(203, 109, 81, 0.8)', '#fafafa'],
        //     variables: {
        //         '--text': '#8c4a32',
        //         '--body-text': '#030712',
        //         '--background': '#fafafa',
        //         '--highlight': '#cb6d51',
        //         '--highlight-opacity': '#cb6d518a',
        //         '--accent': '#dba24c',
        //         '--background-overlay': 'rgba(203, 109, 81, 0.8)',
        //     },
        // },
        // {
        //     name: 'Amber Glow',
        //     colors: ['#e94560', '#ffc107', '#030712', 'rgba(255, 193, 7, 0.8)', '#fafafa'],
        //     variables: {
        //         '--text': '#030712',
        //         '--body-text': '#030712',
        //         '--background': '#fafafa',
        //         '--highlight': '#ffc107',
        //         '--highlight-opacity': '#ffc1078a',
        //         '--accent': '#e94560',
        //         '--background-overlay': 'rgba(255, 193, 7, 0.8)',
        //     },
        // },
        // {
        //     name: 'Golden Hour',
        //     colors: ['#ffa500', '#e94560', '#030712', 'rgba(255, 165, 0, 0.8)', '#fafafa'],
        //     variables: {
        //         '--text': '#ffa500',
        //         '--body-text': '#030712',
        //         '--background': '#fafafa',
        //         '--highlight': '#e94560',
        //         '--highlight-opacity': '#e945608a',
        //         '--accent': '#ffa500',
        //         '--background-overlay': 'rgba(255, 165, 0, 0.8)',
        //     },
        // },
        {
            name: 'Electric Night',
            colors: ['#ff4e9e', '#ff84e2', '#030712', 'rgba(255, 78, 158, 0.8)', '#fafafa'],
            variables: {
                '--text': '#ff4e9e',
                '--body-text': '#fafafa',
                '--background': '#030712',
                '--highlight': '#ff84e2',
                '--highlight-opacity': '#ff84e28a',
                '--accent': '#ff4e9e',
                '--background-overlay': 'rgba(255, 78, 158, 0.8)',
            },
        },
    ];

    // =========================================================================
    // ========================== LOGO COLOUR CHANGER ==========================
    // =========================================================================
    const root = document.documentElement;
    // Define the primary color
    const primaryColor = root.style.getPropertyValue('--highlight');

    // Helper function to adjust color brightness
    function adjustColor(color, redOffset, greenOffset, blueOffset) {
        const [r, g, b] = color.match(/\w\w/g).map((hex) => parseInt(hex, 16));
        const newR = Math.min(255, Math.max(0, r + redOffset));
        const newG = Math.min(255, Math.max(0, g + greenOffset));
        const newB = Math.min(255, Math.max(0, b + blueOffset));
        return `rgb(${newR}, ${newG}, ${newB})`;
    }

    // Calculate the secondary and tertiary colors
    const secondaryColor = adjustColor(primaryColor, -25, -39, -58);
    const tertiaryColor = adjustColor(primaryColor, +31, +32, +34);

    // Set CSS variables
    root.style.setProperty('--color-primary', primaryColor);
    root.style.setProperty('--color-secondary', secondaryColor);
    root.style.setProperty('--color-tertiary', tertiaryColor);

    return (
        <div className='header'>
            {/* Header Theme Container */}
            {isVisible && (
                <div className="header-theme-container">
                    {/* Close Button */}
                    <CloseIcon onClick={handleThemeClick} className="header-theme-close-button" fontSize="large" />
                    <Slide direction={isVisible ? "up" : "down"} in={isVisible} mountOnEnter unmountOnExit>
                        <div ref={themeContentsRef} className="header-theme-contents">
                            {/* Title */}
                            <div className="header-theme-title">Select Theme</div>

                            {/* Options */}
                            <div className="header-theme-options-container">
                                {themes.map((theme, index) => (
                                    <div
                                        key={index}
                                        className={`option ${selectedTheme === index ? 'selected' : ''}`}
                                        onClick={() => handleThemeSelect(index)}
                                    >
                                        {theme.name}
                                        <div className="avatar-container">
                                            {theme.colors.slice(0, -1).map((color, avatarIndex) => (
                                                <div
                                                    key={avatarIndex}
                                                    className="avatar"
                                                    style={{
                                                        backgroundColor: color,
                                                        zIndex: avatarIndex * -1,
                                                    }}
                                                />
                                            ))}
                                        </div>
                                        
                                        {/* Pointer Arrow */}
                                        {selectedTheme === index && (
                                            <ArrowDropUpIcon className="arrow-icon" fontSize="large" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Slide>
                </div>
            )}
            
            <div className='header-container'>
                <div onClick={homeClick} className='header-brand'>
                    {/* Logo */}
                    <svg className='header-brand-logo' width="106" height="93" viewBox="0 0 106 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="52" r="41" fill="var(--color-secondary)"/>
                        <circle cx="22" cy="67" r="22" fill="var(--color-tertiary)"/>
                        <path d="M106 32.5C106 50.4493 84.4493 65 66.5 65C48.5507 65 34 50.4493 34 32.5C34 14.5507 48.5507 0 66.5 0C84.4493 0 106 14.5507 106 32.5Z" fill="var(--color-primary)"/>
                    </svg>

                    {/* Logo Name */}
                    <span className='header-brand-name'>Sithula Gamage</span>
                </div>

                <div className='header-nav'>
                    {/* Desktop View */}
                    <div className='header-nav-links'>
                        {/* Home */}
                        <div onClick={homeClick} className={`header-nav-links-home ${location.pathname === '/' ? 'active' : ''}`}>
                            <HomeIcon className='header-nav-links-home-icon' fontSize='small' />
                            Home
                        </div>

                        {/* Work */}
                        <div onClick={workClick} className={`header-nav-links-work ${location.pathname === '/work' ? 'active' : ''}`}>
                            <WorkIcon className='header-nav-links-work-icon' fontSize='small' />
                            Work
                        </div>

                        {/* Writing */}
                        <div onClick={writingClick} className={`header-nav-links-writing ${location.pathname === '/writing' ? 'active' : ''}`}>
                            <BookIcon className='header-nav-links-writing-icon' fontSize='small' />
                            Writing
                        </div>

                        {/* About */}
                        {/* <div onClick={aboutClick} className={`header-nav-links-about ${location.pathname === '/about' ? 'active' : ''}`}>
                            <InfoIcon className='header-nav-links-about-icon' fontSize='small' />
                            About
                        </div> */}

                        {/* Contact */}
                        <div onClick={contactClick} className={`header-nav-links-contact ${location.pathname === '/contact' ? 'active' : ''}`}>
                            <ConnectWithoutContactIcon className='header-nav-links-contact-icon' fontSize='small' />
                            Contact
                        </div>
                    </div>

                    {/* Hamburger Menu Icon */}
                    <div className='hamburger-menu' onClick={toggleHamburgerMenu}>
                        <MenuIcon className='hamburger-menu-icon' fontSize="large" />
                    </div>

                    <div onClick={handleThemeClick} className='header-nav-toggle-theme-button'>
                        <PaletteIcon className='header-nav-toggle-theme-button-icon' fontSize='medium' />
                    </div>
                </div>
            </div>

            {/* Hamburger Menu Dropdown */}
            {isHamburgerMenuOpen && (
                <div className='hamburger-menu-container'>
                    <div ref={hamburgerMenuRef} className='hamburger-menu-links-container'>
                        <div onClick={() => {homeClick(); setIsHamburgerMenuOpen(false)}} className={`hamburger-menu-link ${location.pathname === '/' ? 'active' : ''}`}>
                            <HomeIcon className='hamburger-menu-links-icon' fontSize='small' /> Home
                        </div>
                        <div onClick={() => {workClick(); setIsHamburgerMenuOpen(false)}} className={`hamburger-menu-link ${location.pathname === '/work' ? 'active' : ''}`}>
                            <WorkIcon className='hamburger-menu-links-icon' fontSize='small' /> Work
                        </div>
                        <div onClick={() => {writingClick(); setIsHamburgerMenuOpen(false)}} className={`hamburger-menu-link ${location.pathname === '/writing' ? 'active' : ''}`}>
                            <BookIcon className='hamburger-menu-links-icon' fontSize='small' /> Writing
                        </div>
                        {/* <div onClick={() => {aboutClick(); setIsHamburgerMenuOpen(false)}} className={`hamburger-menu-link ${location.pathname === '/about' ? 'active' : ''}`}>
                            <InfoIcon className='hamburger-menu-links-icon' fontSize='small' /> About
                        </div> */}
                        <div onClick={() => {contactClick(); setIsHamburgerMenuOpen(false)}} className={`hamburger-menu-link ${location.pathname === '/contact' ? 'active' : ''}`}>
                            <ConnectWithoutContactIcon className='hamburger-menu-links-icon' fontSize='small' /> Contact
                        </div>

                        <div onClick={toggleHamburgerMenu} className='hamburger-menu-close-button'>
                            <CloseIcon fontSize="large" /> 
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;