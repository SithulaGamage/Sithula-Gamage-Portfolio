import { CaseStudyLayout, CaseStudySection } from '../../CaseStudy/CaseStudyLayout';
import { Lightbox } from '../../Lightbox/Lightbox';
import { useLightbox } from '../../../hooks/useLightbox';
import { useLazyImages } from '../../../hooks/useLazyImages';
import { getProjectBySlug } from '../../../data/projects';

const project = getProjectBySlug('tinkering');

export const Tinkering = () => {
    const images = useLazyImages({
        watchOne: () => import('./Images/WatchHolder/WatchHolderOne.svg'),
        watchTwo: () => import('./Images/WatchHolder/WatchHolderTwo.svg'),
        watchThree: () => import('./Images/WatchHolder/WatchHolderThree.svg'),
        watchFour: () => import('./Images/WatchHolder/WatchHolderFour.svg'),
        watchFive: () => import('./Images/WatchHolder/WatchHolderFive.svg'),
        coatOne: () => import('./Images/CoatHanger/CoatHangerOne.svg'),
        coatTwo: () => import('./Images/CoatHanger/CoatHangerTwo.svg'),
        coatThree: () => import('./Images/CoatHanger/CoatHangerThree.svg'),
        coatFour: () => import('./Images/CoatHanger/CoatHangerFour.svg'),
    });

    const lightbox = useLightbox();

    const watchKeys = ['watchOne', 'watchTwo', 'watchThree', 'watchFour', 'watchFive'];
    const coatKeys = ['coatOne', 'coatTwo', 'coatThree', 'coatFour'];

    return (
        <CaseStudyLayout project={project}>
            <CaseStudySection title="Watch Holders" id="watch-holders">
                <p className="case-study-date">February 2025</p>
                <div className="case-study-image-grid">
                    {watchKeys.map((key, index) => images[key] && (
                        <img
                            key={key}
                            src={images[key]}
                            alt={`Watch holder prototype ${index + 1}`}
                            className="case-study-image"
                            loading="lazy"
                            onClick={() => lightbox.open(images[key])}
                        />
                    ))}
                </div>
                <p>
                    Noticing my watches cluttering my desk, I designed and 3D-printed custom holders to keep them
                    organised. Using OnShape, I took rough measurements to ensure a precise fit, then assembled the
                    printed parts into a sleek, functional storage solution.
                </p>
            </CaseStudySection>

            <CaseStudySection title="Coat Hanger Rack" id="coat-hanger-rack">
                <p className="case-study-date">December 2024</p>
                <div className="case-study-image-grid">
                    {coatKeys.map((key, index) => images[key] && (
                        <img
                            key={key}
                            src={images[key]}
                            alt={`Coat hanger rack prototype ${index + 1}`}
                            className="case-study-image"
                            loading="lazy"
                            onClick={() => lightbox.open(images[key])}
                        />
                    ))}
                </div>
                <p>
                    My parents&apos; wardrobe had an unused space that could be put to better use, so I designed and
                    3D-printed a coat hanger rack matching the existing ones. I modelled it in OnShape from rough
                    measurements, then secured the beam holders with M3 screws so the beam can still be removed
                    easily when needed.
                </p>
            </CaseStudySection>

            <Lightbox image={lightbox.image} onClose={lightbox.close} />
        </CaseStudyLayout>
    );
};

export default Tinkering;
