import { CaseStudyLayout, CaseStudySection } from '../../CaseStudy/CaseStudyLayout';
import { Lightbox } from '../../Lightbox/Lightbox';
import { useLightbox } from '../../../hooks/useLightbox';
import { useLazyImages } from '../../../hooks/useLazyImages';
import { getProjectBySlug } from '../../../data/projects';
import VideoThumbnail from './Images/MorphingWingFinalImages/videoThumbnail.svg';
import MorphingWingVideo from './Images/MorphingWingFinalImages/video.mp4';

const project = getProjectBySlug('morphing-aircraft-wing');

const SIMULATION_IMAGES = [
    { key: 'simOne', label: 'Simulation Results 1' },
    { key: 'simTwo', label: 'Simulation Results 2' },
    { key: 'simThree', label: 'Simulation Results 3' },
];

const COMPLIANT_MECHANISMS = [
    { key: 'mechTwo', caption: 'Helical Model - Long Wavelength' },
    { key: 'mechThree', caption: 'Helical Model - Short Wavelength' },
    { key: 'mechFour', caption: 'Flanged S-Model' },
    { key: 'mechFive', caption: 'Slanted S-Model' },
    { key: 'mechSix', caption: 'Large V-Model' },
    { key: 'mechSeven', caption: 'Helical V-Model' },
    { key: 'mechEight', caption: 'S-Model' },
    { key: 'mechNine', caption: 'Fishbone Model' },
];

const FINAL_IMAGES = ['finalOne', 'finalTwo', 'finalThree', 'finalFour'];

export const MorphingAircraftWing = () => {
    const images = useLazyImages({
        cad: () => import('./Images/CADImage.svg'),
        simOne: () => import('./Images/Simulation/simulationResultsOne.svg'),
        simTwo: () => import('./Images/Simulation/simulationResultsTwo.svg'),
        simThree: () => import('./Images/Simulation/simulationResultsThree.svg'),
        mechTwo: () => import('./Images/CompliantMechanisms/compliantMechanismTwo.svg'),
        mechThree: () => import('./Images/CompliantMechanisms/compliantMechanismThree.svg'),
        mechFour: () => import('./Images/CompliantMechanisms/compliantMechanismFour.svg'),
        mechFive: () => import('./Images/CompliantMechanisms/compliantMechanismFive.svg'),
        mechSix: () => import('./Images/CompliantMechanisms/compliantMechanismSix.svg'),
        mechSeven: () => import('./Images/CompliantMechanisms/compliantMechanismSeven.svg'),
        mechEight: () => import('./Images/CompliantMechanisms/compliantMechanismEight.svg'),
        mechNine: () => import('./Images/CompliantMechanisms/compliantMechanismNine.svg'),
        finalOne: () => import('./Images/MorphingWingFinalImages/morphingWingImageOne.svg'),
        finalTwo: () => import('./Images/MorphingWingFinalImages/morphingWingImageTwo.svg'),
        finalThree: () => import('./Images/MorphingWingFinalImages/morphingWingImageThree.svg'),
        finalFour: () => import('./Images/MorphingWingFinalImages/morphingWingImageFour.svg'),
        finalFive: () => import('./Images/MorphingWingFinalImages/morphingWingImageFive.svg'),
        finalSix: () => import('./Images/MorphingWingFinalImages/morphingWingImageSix.svg'),
    });

    const lightbox = useLightbox();
    const linkedinClick = () => window.open('https://www.linkedin.com/in/ryan-kwok-8549452a5/', '_blank');

    return (
        <CaseStudyLayout project={project}>
            <CaseStudySection title="Team &amp; Role">
                <p>
                    My role: Primary CAD Designer, Primary Tester, Technical Recorder.
                </p>
                <p>
                    Team: Sithula Gamage,{' '}
                    <button type="button" className="case-study-inline-link" onClick={linkedinClick}>
                        Ryan Kwok
                    </button>
                    , Felix Pham, Madeline Chang, Samantha Chan.
                </p>
            </CaseStudySection>

            <CaseStudySection title="Problem">
                <p>
                    The aviation industry loses millions of dollars annually to poor fuel efficiency in aircraft, due
                    to inefficient airfoil designs. Optimising airfoil performance is crucial for reducing fuel
                    consumption and lowering emissions. Morphing wings - a superior aerodynamic alternative to
                    traditional airfoils - are widely regarded as the way of the future.
                </p>
            </CaseStudySection>

            <CaseStudySection title="Requirements">
                <p>The morphing wing system needed to meet the following objectives set by our client:</p>
                <ul>
                    <li>Maximised lift-to-drag ratio for enhanced aerodynamic efficiency</li>
                    <li>A wide morphing range, allowing for significant deformation in the vertical direction</li>
                    <li>Minimised airflow separation to reduce stall occurrence, ensuring smoother flight</li>
                    <li>Lightweight wing structure to improve overall efficiency and manoeuvrability</li>
                    <li>An electronic control system to allow real-time adjustments based on the phase of flight</li>
                </ul>
            </CaseStudySection>

            {images.cad && (
                <CaseStudySection title="CAD Design">
                    <div className="case-study-image-item">
                        <img
                            src={images.cad}
                            alt="CAD model of the morphing wing"
                            className="case-study-image"
                            loading="lazy"
                            onClick={() => lightbox.open(images.cad)}
                        />
                    </div>
                </CaseStudySection>
            )}

            <CaseStudySection title="Simulation &amp; Analysis">
                <p>
                    Analysis of the NACA 2415 airfoil at a Reynolds number of 18,000 shows smooth pressure
                    distribution and moderate lift at lower angles of attack (2° and 5°), with increasing airflow
                    deflection and lift at higher angles (10°). Higher angles also increase drag and stall risk.
                    Comparing multiple airfoils in XFLR5 confirmed the NACA 2415 as the most suitable choice.
                </p>
                <div className="case-study-image-grid">
                    {SIMULATION_IMAGES.map(({ key, label }) => images[key] && (
                        <img
                            key={key}
                            src={images[key]}
                            alt={label}
                            className="case-study-image"
                            loading="lazy"
                            onClick={() => lightbox.open(images[key])}
                        />
                    ))}
                </div>
            </CaseStudySection>

            <CaseStudySection title="Compliant Mechanisms">
                <p>
                    We tested compliant mechanisms via additive manufacturing, 3D-printing candidates in PLA and
                    TPU. TPU prints were highly flexible but unsuitable for the application, so we moved to PLA.
                    The S-Model exhibited the largest deflection - a remarkable 180° - while other models were
                    either too rigid or too flimsy for reliable long-term use. We selected the S-Model as the
                    optimal compliant mechanism.
                </p>
                <div className="case-study-image-grid">
                    {COMPLIANT_MECHANISMS.map(({ key, caption }) => images[key] && (
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

            <CaseStudySection title="Results">
                <div className="case-study-image-grid">
                    {FINAL_IMAGES.map((key, index) => images[key] && (
                        <img
                            key={key}
                            src={images[key]}
                            alt={`Final wing prototype ${index + 1}`}
                            className="case-study-image"
                            loading="lazy"
                            onClick={() => lightbox.open(images[key])}
                        />
                    ))}
                </div>

                {images.finalSix && (
                    <img
                        src={images.finalSix}
                        alt="Final wing prototype 5"
                        className="case-study-image"
                        loading="lazy"
                        onClick={() => lightbox.open(images.finalSix)}
                    />
                )}

                <video
                    src={MorphingWingVideo}
                    controls
                    className="case-study-video"
                    poster={VideoThumbnail}
                    aria-label="Final product video demonstration"
                >
                    <track kind="captions" />
                </video>
            </CaseStudySection>

            <Lightbox image={lightbox.image} onClose={lightbox.close} />
        </CaseStudyLayout>
    );
};

export default MorphingAircraftWing;
