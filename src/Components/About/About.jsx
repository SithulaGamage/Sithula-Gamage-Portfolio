import React from 'react';
import './About.css';
import Divider from '@mui/material/Divider';

export const About = () => {
    const dividerStyle = {
        flex: 1,
        borderBottomWidth: 5,
        borderColor: 'var(--highlight)',
        position: 'relative',
        borderRadius: 10,
    }

    return (
        <div className='about-container'>
            <div className='about-title-container'>
                <div className='about-title'>About</div>
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
        </div>
    )
}

export default About;