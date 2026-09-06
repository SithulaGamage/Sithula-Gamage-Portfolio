import Hero from '../../Components/Hero/Hero';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';

export const Home = () => {
    return (
        <>
            <Hero />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
        </>
    );
};

export default Home;
