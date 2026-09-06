import { CaseStudyLayout, CaseStudySection } from '../../CaseStudy/CaseStudyLayout';
import { Lightbox } from '../../Lightbox/Lightbox';
import { useLightbox } from '../../../hooks/useLightbox';
import { useLazyImages } from '../../../hooks/useLazyImages';
import { getProjectBySlug } from '../../../data/projects';
import FigmaIcon from './Images/FigmaIcon.svg';

const project = getProjectBySlug('personal-website');

const DESIGN_IMAGES = [
    { key: 'designOne', caption: 'Figma Design One' },
    { key: 'designThree', caption: 'Figma Design Two' },
    { key: 'designFour', caption: 'Figma Design Three' },
];

export const PersonalWebsite = () => {
    const images = useLazyImages({
        designOne: () => import('./Images/FigmaDesignOne.svg'),
        designThree: () => import('./Images/FigmaDesignThree.svg'),
        designFour: () => import('./Images/FigmaDesignFour.svg'),
    });

    const lightbox = useLightbox();

    return (
        <CaseStudyLayout project={project}>
            <CaseStudySection title="Tools">
                <div className="tag-row">
                    <img className="case-study-tool-icon" src={FigmaIcon} alt="Figma" />
                    <img className="case-study-tool-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />
                    <img className="case-study-tool-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" />
                    <img className="case-study-tool-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" />
                    <img className="case-study-tool-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" alt="Material UI" />
                </div>
            </CaseStudySection>

            <CaseStudySection title="Overview">
                <p>
                    When I was younger, I&apos;d watch people react to incredible portfolio and company websites -
                    elegant, rich, and captivating. As a teenager I wanted to build something like that myself.
                    &quot;How hard could it be?&quot; Turns out, quite hard.
                </p>
                <p>
                    Like many beginners I dove into HTML and CSS tutorials and got stuck in tutorial hell, eventually
                    burning out before finishing a first version. At the time I lacked the design vision and
                    front-end experience to pull it off.
                </p>
                <p>
                    A few years on, at university, I&apos;d picked up much more UI/UX knowledge from coursework and
                    my own exploration. In the 2024/25 summer break I decided to try again - this time starting in
                    Figma to plan layout and visual hierarchy before writing any code.
                </p>
            </CaseStudySection>

            <CaseStudySection title="Design Process">
                <p>
                    My first coded homepage didn&apos;t match what I&apos;d imagined, so I went back to the drawing
                    board more than once. Stepping away for a short break turned out to be the right call - coming
                    back with a clear head made the rest of the design come together quickly.
                </p>
                <div className="case-study-image-grid">
                    {DESIGN_IMAGES.map(({ key, caption }) => images[key] && (
                        <div key={key} className="case-study-image-item">
                            <img
                                src={images[key]}
                                alt={caption}
                                className="case-study-image"
                                loading="lazy"
                                onClick={() => lightbox.open(images[key])}
                            />
                            <span className="case-study-image-caption">{caption}</span>
                        </div>
                    ))}
                </div>
            </CaseStudySection>

            <CaseStudySection title="What I Learned">
                <p>
                    After roughly three weeks of designing, testing, and refining in the evenings, the site you&apos;re
                    reading now was the result - and a solid excuse to also learn React Router, Material UI, and
                    EmailJS along the way.
                </p>
            </CaseStudySection>

            <Lightbox image={lightbox.image} onClose={lightbox.close} />
        </CaseStudyLayout>
    );
};

export default PersonalWebsite;
