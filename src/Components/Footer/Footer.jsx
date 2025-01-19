import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Footer.css'

import Divider from '@mui/material/Divider';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


export const Footer = () => {
    // =========================================================================
    // ============================== NAVIGATION ===============================
    // =========================================================================
    const navigate = useNavigate();

    const homeClick = () => { 
        window.scrollTo(0, 0); 
        navigate('/') 
    }; 
    const workClick = () => { 
        window.scrollTo(0, 0); 
        navigate('/work') 
    }; 
    const writingClick = () => { 
        window.scrollTo(0, 0); 
        navigate('/writing') 
    }; 
    // const aboutClick = () => { 
    //     window.scrollTo(0, 0); 
    //     navigate('/about') 
    // }; 
    const contactClick = () => { 
        window.scrollTo(0, 0); 
        navigate('/contact') 
    }; 
    // const emailClick = () => { navigate('/') }; 
    
    const githubClick = () => { window.open('https://github.com/SithulaGamage', '_blank') }; 
    const linkedinClick = () => { window.open('https://www.linkedin.com/in/sithulagamage', '_blank') }; 
    const facebookClick = () => { window.open('https://www.facebook.com/profile.php?id=61558540310010', '_blank') }; 

    return (
        <div className='footer'>
            <Divider className='divider' flexItem variant='fullWidth' /> 
            <div className='footer-container'>
                <div className='footer-links-container'>
                    <div onClick={homeClick} className='footer-link'>Home</div>
                    <div onClick={workClick} className='footer-link'>Work</div>
                    <div onClick={writingClick} className='footer-link'>Writing</div>
                    {/* <div onClick={aboutClick} className='footer-link'>About</div> */}
                    <div onClick={contactClick} className='footer-link'>Contact</div>
                </div>

                <div className='footer-quick-link-icons-container'>
                    {/* <EmailIcon onClick={emailClick} className='footer-email-icon'/> */}
                    <GitHubIcon onClick={githubClick} className='footer-github-icon'/>
                    <LinkedInIcon onClick={linkedinClick} className='footer-linkedin-icon'/>
                    <FacebookIcon onClick={facebookClick} className='footer-facebook-icon'/>
                </div>
                

            </div>
            
            <div className='footer-text-container'>
                <div>© 2024 Sithula gamage. All Rights Reserved </div>
                <div>Last Updated on the 19th of January 2025</div>
            </div>
        </div>
    )
}

export default Footer