import React, { useState, useEffect} from 'react';
import './PersonalWebsite.css';
import Divider from '@mui/material/Divider';
import Backdrop from '@mui/material/Backdrop';

import FigmaIcon from './Images/FigmaIcon.svg';

export const PersonalWebsite = () => {
    const dividerStyle = {
        flex: 1,
        borderBottomWidth: 5,
        borderColor: 'var(--highlight)',
        position: 'relative',
        borderRadius: 10,
    }

    // =========================================================================
    // ============================== LOAD IMAGES ==============================
    // =========================================================================
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
    const [loadedImages, setLoadedImages] = useState({});

    useEffect(() => {
        const loadImages = async () => {
            const images = await Promise.all([
                import('./Images/FigmaDesignOne.svg'),
                import('./Images/FigmaDesignTwo.svg'),
                import('./Images/FigmaDesignThree.svg'),
                import('./Images/FigmaDesignFour.svg'),
            ]);

            const keys = [
                'FigmaDesignOne',
                'FigmaDesignTwo',
                'FigmaDesignThree',
                'FigmaDesignFour',
            ];

            const loaded = keys.reduce((acc, key, index) => {
                acc[key] = images[index].default;
                return acc;
            }, {});

            setLoadedImages(loaded);
        };

        loadImages();
    }, []);

    const handleOpen = (image) => {
        setCurrentImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentImage(null);
    };

    return (
        <div className='personal-website-container'>
            <div className='personal-website-title-container'>
                <div className='personal-website-title'>Personal Website</div>
                <div className="underline">
                    <div className="divider-container">
                        <Divider sx={dividerStyle} />
                        <div className="small-circle" />
                        <div className="circle" />
                        <div className="small-circle" />
                        <Divider sx={dividerStyle}
                        />
                    </div>
                </div>
            </div>

            <div className='items-used-container'>
                <img className='icon' src={FigmaIcon}></img>
                <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" />
            </div>

            <div className='year'>January 2025</div>

            <div className='personal-website-content-information'>
                <div className='personal-website-content'>
                    When I was younger, I would watch videos of people reacting to incredible websites showcasing personal work or companies. These websites were extraordinary—elegant, rich, and captivating. It was clear why people were hooked; they just drew you in and made you want to explore every page. As a young teenager, I was determined to create something like that myself. &quot;How hard could it be?&quot; I thought. Little did young Sithula know what was in store.
                </div>

                <div className='personal-website-content'>
                    Like many beginners, I dove headfirst into the world of web development and found myself trapped in tutorial hell for HTML and CSS. Hours turned into days as I tried to learn how to build my dream website. Eventually, I burnt out, never making it past the initial stages. At the time, I lacked the experience, vision, and skills to create something elegant, and it was frustrating.
                </div>

                <div className='personal-website-content'>
                    Fast forward a few years, and here I am at university. During the gap between my first attempt and now, I’ve learned so much about UI and UX design—both from my high school education and from exploring the internet.
                </div>

                <div className='personal-website-content'>
                    In the summer holidays of 2024/25, I decided to take on the challenge of creating this very website. This time, I was determined to succeed. I started by using Figma to design layouts and plan the visual hierarchy. Looking back, I realize how crucial this step was—getting the structure and cohesion right can make or break a website.
                </div>

                <div className='personal-website-content'>
                    However, my first coded attempt at the homepage didn’t look as good as I had imagined. Disheartened but not defeated, I returned to the drawing board and redesigned it, only to face similar disappointment. It was a cycle of trial, error, and frustration, and I began losing hope.
                </div>

                <div className='personal-website-images-container'>
                    {[
                        // { key: 'CompliantMechanismOne', caption: 'Cascading Model' },
                        { key: 'FigmaDesignOne', caption: 'Figma Design One' },
                        // { key: 'FigmaDesignTwo', caption: 'Figma Design Two' },
                        { key: 'FigmaDesignThree', caption: 'Figma Design Two' },
                        { key: 'FigmaDesignFour', caption: 'Figma Design Three' },
                    ].map(({ key, caption }, index) => (
                        loadedImages[key] && (
                            <div key={index} className='figma-design-item'>
                                <img 
                                    src={loadedImages[key]} 
                                    alt={caption} 
                                    className='figma-design-image'
                                    loading='lazy'
                                    onClick={() => handleOpen(loadedImages[key])}
                                />
                                <div className='figma-design-caption'>{caption}</div>
                            </div>
                        )
                    ))}
                </div>

                <div className='personal-website-content'>
                    Taking a short break turned out to be the best decision. When I returned with a fresh mind, the ideas flowed effortlessly, and everything started to come together. I was thrilled with the new homepage and quickly got to work designing the other pages.
                </div>

                <div className='personal-website-content'>
                    Each day after work, I spent 3-4 hours experimenting with new ideas and adding small interactive elements to make the site engaging. After three weeks of designing, testing, and refining, I finally produced the website you’re exploring now.
                </div>

                <div className='personal-website-content'>
                    Thank you for taking the time to visit and read my story. I hope this website continues to grow as I share more of my work and experiences.
                </div>
            </div>

            {/* Backdrop */}
            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={open}
                onClick={handleClose}
            >
                {currentImage && <img src={currentImage} alt="Expanded View" style={{ width: '80%', maxHeight: '90%' }} />}
            </Backdrop>
        </div>
    )
}

export default PersonalWebsite;