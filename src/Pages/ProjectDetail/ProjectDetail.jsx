import { Navigate, useParams } from 'react-router-dom';
import MorphingAircraftWing from '../../Components/WorkBlocks/MorphingAircraftWing/MorphingAircraftWing';
import PersonalWebsite from '../../Components/WorkBlocks/PersonalWebsite/PersonalWebsite';
import Tinkering from '../../Components/WorkBlocks/Tinkering/Tinkering';
import TranscutaneousDataTransfer from '../../Components/WorkBlocks/TranscutaneousDataTransfer/TranscutaneousDataTransfer';
import { getProjectBySlug } from '../../data/projects';

const CASE_STUDIES = {
    'morphing-aircraft-wing': MorphingAircraftWing,
    'personal-website': PersonalWebsite,
    tinkering: Tinkering,
    'transcutaneous-data-transfer': TranscutaneousDataTransfer,
};

export const ProjectDetail = () => {
    const { slug } = useParams();
    const project = getProjectBySlug(slug);
    const CaseStudy = project && CASE_STUDIES[slug];

    if (!project || !CaseStudy) {
        return <Navigate to="/#projects" replace />;
    }

    return <CaseStudy />;
};

export default ProjectDetail;
