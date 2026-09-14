import { CaseStudyLayout, CaseStudySection } from '../../CaseStudy/CaseStudyLayout';
import { getProjectBySlug } from '../../../data/projects';

const project = getProjectBySlug('micromouse');

export const Micromouse = () => {
    return (
        <CaseStudyLayout project={project}>
            <CaseStudySection title="Coming Soon">
                <p>This case study is still being written up - check back soon.</p>
            </CaseStudySection>
        </CaseStudyLayout>
    );
};

export default Micromouse;
