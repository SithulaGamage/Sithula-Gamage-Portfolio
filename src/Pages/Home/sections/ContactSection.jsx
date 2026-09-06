import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import Popover from '@mui/material/Popover';
import Clipboard from 'copy-to-clipboard';
import SectionHeading from '../../../Components/SectionHeading/SectionHeading';
import { social } from '../../../data/social';
import './ContactSection.css';

export const ContactSection = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [copyMessage, setCopyMessage] = useState('Click to copy');

    const handlePopoverOpen = (event) => setAnchorEl(event.currentTarget);
    const handlePopoverClose = () => {
        setAnchorEl(null);
        setTimeout(() => setCopyMessage('Click to copy'), 400);
    };
    const handleEmailClick = () => {
        Clipboard(social.email);
        setCopyMessage('Copied!');
    };

    return (
        <section id="contact" className="section container contact-section">
            <SectionHeading
                eyebrow="Get in touch"
                title="Contact"
                description="Open to internships, research roles, and engineering collaborations."
            />

            <div className="contact-links">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleEmailClick}
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                >
                    <EmailIcon fontSize="small" /> {social.email}
                </button>
                <Popover
                    sx={{ pointerEvents: 'none' }}
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                    disableScrollLock
                >
                    <span className="contact-popover-text">{copyMessage}</span>
                </Popover>

                {/* <a href={social.resume} target="_blank" rel="noreferrer" className="btn btn-secondary">
                    <DescriptionOutlinedIcon fontSize="small" /> Resume
                </a> */}
                <a href={social.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
                    <GitHubIcon fontSize="small" /> GitHub
                </a>
                <a href={social.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary">
                    <LinkedInIcon fontSize="small" /> LinkedIn
                </a>
            </div>

            <p className="contact-footnote">© {new Date().getFullYear()} Sithula Gamage. All rights reserved.</p>
        </section>
    );
};

export default ContactSection;
