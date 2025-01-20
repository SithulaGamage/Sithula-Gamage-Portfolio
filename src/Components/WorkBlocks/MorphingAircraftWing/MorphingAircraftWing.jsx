import React, { useState, useEffect, useRef } from 'react';
import './MorphingAircraftWing.css';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Backdrop from '@mui/material/Backdrop';

import VideoThumbnail from './Images/MorphingWingFinalImages/videoThumbnail.svg';
import MorphingWingVideo from './Images/MorphingWingFinalImages/video.mp4';

import { useMediaQuery } from '@mui/material';

export const MorphingAircraftWing = () => {
    // =========================================================================
    // ================================ STYLES =================================
    // =========================================================================
    const dividerStyle = {
        flex: 1,
        borderBottomWidth: 5,
        borderColor: 'var(--highlight)',
        position: 'relative',
        borderRadius: 10,
    };

    const isSmallScreenOne = useMediaQuery('(max-width:780px)');
    const isSmallScreenTwo = useMediaQuery('(max-width:620px)');

    const morphingChipStyle = {
        backgroundColor: 'var(--highlight)',
        fontFamily: 'var(--main-font)',
        color: 'var(--body-text)',
        padding: isSmallScreenTwo ? '16px 4px' : '24px 5px',
        fontSize: isSmallScreenTwo ? '1rem' : (isSmallScreenOne ? '1.5rem' : '2rem'),
        borderRadius: '16px',
    };

    // =========================================================================
    // ============================== LOAD IMAGES ==============================
    // =========================================================================
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
    const [loadedImages, setLoadedImages] = useState({});

    useEffect(() => {
        const loadImages = async () => {
            const images = await Promise.all([
                import('./Images/CADImage.svg'),
                import('./Images/Simulation/simulationResultsOne.svg'),
                import('./Images/Simulation/simulationResultsTwo.svg'),
                import('./Images/Simulation/simulationResultsThree.svg'),
                import('./Images/CompliantMechanisms/compliantMechanismOne.svg'),
                import('./Images/CompliantMechanisms/compliantMechanismTwo.svg'),
                import('./Images/CompliantMechanisms/compliantMechanismThree.svg'),
                import('./Images/CompliantMechanisms/compliantMechanismFour.svg'),
                import('./Images/CompliantMechanisms/compliantMechanismFive.svg'),
                import('./Images/CompliantMechanisms/compliantMechanismSix.svg'),
                import('./Images/CompliantMechanisms/compliantMechanismSeven.svg'),
                import('./Images/CompliantMechanisms/compliantMechanismEight.svg'),
                import('./Images/CompliantMechanisms/compliantMechanismNine.svg'),
                import('./Images/MorphingWingFinalImages/morphingWingImageOne.svg'),
                import('./Images/MorphingWingFinalImages/morphingWingImageTwo.svg'),
                import('./Images/MorphingWingFinalImages/morphingWingImageThree.svg'),
                import('./Images/MorphingWingFinalImages/morphingWingImageFour.svg'),
                import('./Images/MorphingWingFinalImages/morphingWingImageFive.svg'),
                import('./Images/MorphingWingFinalImages/morphingWingImageSix.svg'),
            ]);

            const keys = [
                'CadImage',
                'SimulationResultsOne',
                'SimulationResultsTwo',
                'SimulationResultsThree',
                'CompliantMechanismOne',
                'CompliantMechanismTwo',
                'CompliantMechanismThree',
                'CompliantMechanismFour',
                'CompliantMechanismFive',
                'CompliantMechanismSix',
                'CompliantMechanismSeven',
                'CompliantMechanismEight',
                'CompliantMechanismNine',
                'FinalImageOne',
                'FinalImageTwo',
                'FinalImageThree',
                'FinalImageFour',
                'FinalImageFive',
                'FinalImageSix',
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

    // =========================================================================
    // ============================== NAVIGATION ===============================
    // =========================================================================
    const problemStatementRef = useRef(null);
    const aimRef = useRef(null);
    const simulationResultsRef = useRef(null);
    const compliantMechanismsRef = useRef(null);
    const finalProductRef = useRef(null);
    const finalProductVideoDemonstrationRef = useRef(null);

    const [activeSection, setActiveSection] = useState(null);

    const sectionRefs = [
        { ref: problemStatementRef, id: "problemStatment" },
        { ref: aimRef, id: "aim" },
        { ref: simulationResultsRef, id: "simulationResults" },
        { ref: compliantMechanismsRef, id: "compliantMechanism" },
        { ref: finalProductRef, id: "finalProduct" },
        { ref: finalProductVideoDemonstrationRef, id: "finalProductVideoDemonstration" },
    ];

    const handleScroll = () => {
        sectionRefs.forEach(({ ref, id }) => {
            const rect = ref.current.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
                setActiveSection(id);
            }
        });
    };

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);
        return () => {
            // Cleanup listener on component unmount
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = (id) => {
        setActiveSection(id);
    };

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };

    const ryanKwokClickHandle = () => { window.open('https://www.linkedin.com/in/ryan-kwok-8549452a5/', '_blank') }; 

    return (
        <div className='morphing-aircraft-wing-container'>
            {/* Contents */}
            <div className='contents-container'>
                <div className='contents-title'>Contents</div>
                <div className='contents-items-container'>
                    {sectionRefs.map(({ id, ref }) => (
                        <div
                            key={id}
                            onClick={() => {
                                scrollToSection(ref);
                                handleClick(id);
                            }}
                            className={`content ${activeSection === id ? "active" : ""}`}
                        >
                            {id.replace(/([A-Z])/g, " $1")} {/* Convert camelCase to readable text */}
                        </div>
                    ))}
                </div>
            </div>

            <div className='morphing-aircraft-wing-title-container'>
                <div className='morphing-aircraft-wing-title'>Morphing Aircraft Wing</div>
                <div className="underline">
                    <div className="divider-container">
                        <Divider sx={dividerStyle} />
                        <div className="small-circle" />
                        <div className="circle" />
                        <div className="small-circle" />
                        <Divider sx={dividerStyle} />
                    </div>
                </div>
            </div>

            <div className='extra-information'>
                <div className='my-role'>My Role: Primary CAD Designer –– Primary Tester –– Technical Recorder</div>
                <div className='team'>Team: Sithula Gamage, <span className='member-click' onClick={ryanKwokClickHandle}>Ryan Kwok</span>, Felix Pham, Madeline Chang, Samantha Chan</div>
            </div>

            {/* Dynamically Loaded CAD Image */}
            {loadedImages.CadImage && (
                <img 
                    src={loadedImages.CadImage} 
                    alt="CAD of Wing" 
                    className='cad-image'
                    loading='lazy'
                    onClick={() => handleOpen(loadedImages.CadImage)} 
                />
            )}

            <div className='morphing-labels-container'>
                <Chip style={morphingChipStyle} className='moprhing-labels' label="3D Printing" />
                <Chip style={morphingChipStyle} className='moprhing-labels' label="Solidworks + OnShape CAD Design" />
                <Chip style={morphingChipStyle} className='moprhing-labels' label="Innovation" />
                <Chip style={morphingChipStyle} className='moprhing-labels' label="Prototyping" />
            </div>

            <div className='main-information-container'>
                <div ref={problemStatementRef} id='problemStatment' className={`content-container ${activeSection === "problemStatment" ? "active" : ""}`}>
                    <div className='content-header-title'>Problem Statement</div>
                    <div className='content-information'>
                        The aviation industry loses millions of dollars annually to poor fuel efficiency in aircrafts, due to inefficient airfoil designs. Optimising airfoil performance is crucial for reducing fuel consumption and lowering emissions. The current market understands that through extensive research, morphing wings are the way of the future; a superior alternative to the traditional airfoils aerodynamically.
                    </div>
                </div>

                {/* Aim */}
                <div ref={aimRef} id='aim' className='content-container aim'>
                    <div className='content-header-title'>Aim</div>
                    <div className='content-information'>
                        <span>The aim of this project is to create a morphing wing system which adheres to the following objectives set out by our client:</span>
                        <li className='bullet-point'>Maximized lift-to-drag ratio for enhanced aerodynamic efficiency</li>
                        <li className='bullet-point'>A wide morphing range, allowing for significant deformation in the vertical direction</li>
                        <li className='bullet-point'>Minimized airflow separation to reduce stall occurrence, ensuring smoother flight</li>
                        <li className='bullet-point'>Lightweight wing structure to improve the overall efficiency and manoeuvrability</li>
                        <li className='bullet-point'>An electronic control system to allow for real-time adjustments based on the phase of flight</li>
                    </div>
                </div>

                {/* Dynamically Loaded Simulation Results */}
                <div ref={simulationResultsRef} id='simulationResults' className={`content-container ${activeSection === "simulationResults" ? "active" : ""}`}>
                    <div className='content-header-title'>Simulation Results</div>
                    <div className='simulation-results-images-container'>
                        {['SimulationResultsOne', 'SimulationResultsTwo', 'SimulationResultsThree'].map((key, index) => (
                            loadedImages[key] && (
                                <img 
                                    key={index}
                                    src={loadedImages[key]} 
                                    alt={`Simulation Results ${index + 1}`} 
                                    className='simulation-results-image'
                                    loading='lazy'
                                    onClick={() => handleOpen(loadedImages[key])}
                                />
                            )
                        ))}
                    </div>

                    {/* Description */}
                    <div className='content-information'>
                        The analysis of the NACA 2415 airfoil at a Reynolds Number of 18,000 shows smooth pressure distribution and moderate lift at lower angles of attack (2° and 5°), with increasing airflow deflection and lift at higher angles (10°). However, higher angles also result in increased drag and a greater risk of stall. Comparing multiple airfoils in XFLR5 confirmed that the NACA 2415 was the most suitable choice.
                    </div>
                </div>

                {/* Compliant Mechanism */}
                <div ref={compliantMechanismsRef} id='compliantMechanism' className={`content-container ${activeSection === "compliantMechanism" ? "active" : ""}`}>
                    <div className='content-header-title'>Compliant Mechanisms</div>
                    <div className='compliant-mechanism-images-container'>
                        {[
                            // { key: 'CompliantMechanismOne', caption: 'Cascading Model' },
                            { key: 'CompliantMechanismTwo', caption: 'Helical Model - Long Wavelength' },
                            { key: 'CompliantMechanismThree', caption: 'Helical Model - Short Wavelength' },
                            { key: 'CompliantMechanismFour', caption: 'Flanged S-Model' },
                            { key: 'CompliantMechanismFive', caption: 'Slanted S-Model' },
                            { key: 'CompliantMechanismSix', caption: 'Large V-Model' },
                            { key: 'CompliantMechanismSeven', caption: 'Helical V-Model' },
                            { key: 'CompliantMechanismEight', caption: 'S-Model' },
                            { key: 'CompliantMechanismNine', caption: 'Fishbone Model' },
                        ].map(({ key, caption }, index) => (
                            loadedImages[key] && (
                                <div key={index} className='compliant-mechanism-item'>
                                    <img 
                                        src={loadedImages[key]} 
                                        alt={caption} 
                                        className='compliant-mechanism-image'
                                        loading='lazy'
                                        onClick={() => handleOpen(loadedImages[key])}
                                    />
                                    <div className='compliant-mechanism-caption'>{caption}</div>
                                </div>
                            )
                        ))}
                    </div>

                    {/* Description */}
                    <div className='content-information'>
                        To test these compliant mechanisms, we employed additive manufacturing processes, specifically 3D printing. PLA and TPU materials were used to fabricate the mechanisms. As anticipated, the TPU prints were highly flexible; however, we determined that they were unsuitable for the intended application. Consequently, we opted for PLA prints instead.

                        Surprisingly, the S-Model exhibited the largest deflection, achieving a remarkable 180°. In contrast, the other models were either too rigid, failing to provide adequate deflection, or overly flimsy, raising concerns about fatigue and long-term durability. Based on these results, we selected the S-Model Compliant Mechanism as the optimal choice.
                    </div>
                </div>


                {/* Final Product */}
                <div ref={finalProductRef} id='finalProduct' className={`content-container ${activeSection === "finalProduct" ? "active" : ""}`}>
                    <div className='content-header-title'>Final Product</div>
                    <div className='final-results-images-container'>
                        {['FinalImageOne', 'FinalImageTwo', 'FinalImageThree', 'FinalImageFour', 'FinalImageFive', 'FinalImageSix'].map((key, index) => (
                            loadedImages[key] && (
                                <img 
                                    key={index}
                                    src={loadedImages[key]} 
                                    alt={`Final Product ${index + 1}`} 
                                    className={`final-results-image ${index === 5 ? 'bottom' : ''}`}
                                    loading='lazy'
                                    onClick={() => handleOpen(loadedImages[key])}
                                />
                            )
                        ))}
                    </div>
                </div>

                {/* Video */}
                <div ref={finalProductVideoDemonstrationRef} id='finalProductVideoDemonstration' className={`content-container ${activeSection === "finalProductVideoDemonstration" ? "active" : ""}`}>
                    <div className='content-header-title'>Final Product Video Demonstration</div>
                    <div className='video-container'>
                        <video src={MorphingWingVideo} controls className='video' loading='lazy' poster={VideoThumbnail} />
                    </div>
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
    );
};

export default MorphingAircraftWing;
