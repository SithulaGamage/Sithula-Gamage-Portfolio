import SectionHeading from '../../../Components/SectionHeading/SectionHeading';
import ExperienceItem from '../../../Components/ExperienceItem/ExperienceItem';
import { experience } from '../../../data/experience';
import './ExperienceSection.css';

export const ExperienceSection = () => {
    return (
        <section id="experience" className="section container">
            <SectionHeading numeral="II" title="Experience" />

            {experience.length > 0 ? (
                <div className="experience-list">
                    {experience.map((item) => (
                        <ExperienceItem key={`${item.role}-${item.organisation}`} {...item} />
                    ))}
                </div>
            ) : (
                <p className="experience-empty-state">Experience details are coming soon.</p>
            )}
        </section>
    );
};

export default ExperienceSection;
