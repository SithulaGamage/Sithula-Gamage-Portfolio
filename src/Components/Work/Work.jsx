import React, { useState } from 'react';
import './Work.css';
import { useNavigate } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Slide from '@mui/material/Slide';
import Chip from '@mui/material/Chip';

export const Work = () => {
    const [hoverState, setHoverState] = useState({
        one: false,
        two: false,
        three: false,
    });

    const handleMouseEnter = (option) => {
        setHoverState({ ...hoverState, [option]: true });
    };

    const handleMouseLeave = (option) => {
        setHoverState({ ...hoverState, [option]: false });
    };

    const dividerStyle = {
        flex: 1,
        borderBottomWidth: 5,
        borderColor: 'var(--highlight)',
        position: 'relative',
        borderRadius: 10,
    }

    const chipStyle = { 
        backgroundColor: 'var(--highlight)',
        color: 'var(--body-text)',
    }

    // =========================================================================
    // ============================== NAVIGATION ===============================
    // =========================================================================
    const navigate = useNavigate();
    const morphingAircraftWingClick = () => {
        window.scrollTo(0, 0);
        navigate('/work/morphing-aircraft-wing');
    }
    const personalWebsiteClick = () => {
        window.scrollTo(0, 0);
        navigate('/work/personal-website');
    }
    const tinkeringClick = () => {
        window.scrollTo(0, 0);
        navigate('/work/tinkering');
    }

    return (
        <div className='work-container'>
            {/* Work Title */}
            <div className='work-title-container'>
                <div className='work-title'>Work</div>
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

            {/* Work Information */}
            <div className='work-options-container'>
                {/* 2025 Projects */}
                {/* <div className='work-year-title'>2025</div> */}
                {/* Personal Website */}
                {/* <div
                    className='work-option three'
                    onMouseEnter={() => handleMouseEnter('three')}
                    onMouseLeave={() => handleMouseLeave('three')}
                    onClick={personalWebsiteClick}
                >
                    <div className='work-option-title'>Personal Website</div>
                    <div className='labels-container'>
                        <Chip style={chipStyle} className='labels' label="Frontend Design" />
                        <Chip style={chipStyle} className='labels' label="UI/UX Design" />
                        <Chip style={chipStyle} className='labels' label="Material UI" />
                        <Chip style={chipStyle} className='labels' label="EmailJS" />
                        <Chip style={chipStyle} className='labels' label="React" />
                        <Chip style={chipStyle} className='labels' label="Figma" />
                    </div>
                    <div className='work-option-information-container'>
                        <Slide direction="up" in={hoverState.three} timeout={200} mountOnEnter unmountOnExit>
                            <div className='work-option-information'>
                                Am I CS student? No am I not. Why did I make this? I am not quite sure to be honest - I thought it would be a fun thing to try out.
                            </div>
                        </Slide>
                    </div>
                </div> */}


                {/* 2024 Projects */}
                {/* <div className='work-year-title'>2024</div> */}
                {/* Morphing Aircraft Wing */}
                <div
                    className='work-option one'
                    onMouseEnter={() => handleMouseEnter('one')}
                    onMouseLeave={() => handleMouseLeave('one')}
                    onClick={morphingAircraftWingClick}
                >
                    <div className='work-option-title'>Morphing Aircraft Wing</div>
                    <div className='labels-container'>
                        <Chip style={chipStyle} className='labels' label="Solidworks + OnShape CAD Design" />
                        <Chip style={chipStyle} className='labels' label="Additive Manufacturing" />
                        <Chip style={chipStyle} className='labels' label="C++ Programming" />
                        <Chip style={chipStyle} className='labels' label="Electronics" />
                        <Chip style={chipStyle} className='labels' label="Prototyping" />
                    </div>
                    <div className='work-option-information-container'>
                        <Slide direction="up" in={hoverState.one} timeout={200} mountOnEnter unmountOnExit>
                            <div className='work-option-information'>
                                Poor fuel efficiency costs the aviation industry millions annually. Can we design morphing aircraft wings that replicate full-scale aerodynamics to enhance performance and reduce costs?
                            </div>
                        </Slide>
                    </div>
                </div>

                {/* Tinkering */}
                <div
                    className='work-option two'
                    onMouseEnter={() => handleMouseEnter('two')}
                    onMouseLeave={() => handleMouseLeave('two')}
                    onClick={tinkeringClick}
                >
                    <div className='work-option-title'>Tinkering</div>
                    <div className='labels-container'>
                        <Chip style={chipStyle} className='labels' label="Solidworks + OnShape CAD Design" />
                        <Chip style={chipStyle} className='labels' label="3D Printing" />
                        <Chip style={chipStyle} className='labels' label="Prototyping" />
                        <Chip style={chipStyle} className='labels' label="Innovation" />
                    </div>
                    <div className='work-option-information-container'>
                        <Slide direction="up" in={hoverState.two} timeout={200} mountOnEnter unmountOnExit>
                            <div className='work-option-information'>
                                Can we always get things right the first time? The simple answer is no. Tinkering and prototyping with 3D-prints is a great way to understand what changes may need to be made whilst being very cost effective.
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
