import { CaseStudyLayout, CaseStudySection } from '../../CaseStudy/CaseStudyLayout';
import { TetLinkDiagram, PCBShowcase } from '../../CaseStudy/CaseStudyWidgets';
import { Lightbox } from '../../Lightbox/Lightbox';
import { useLightbox } from '../../../hooks/useLightbox';
import { useLazyImages } from '../../../hooks/useLazyImages';
import { getProjectBySlug } from '../../../data/projects';

const project = getProjectBySlug('transcutaneous-data-transfer');

export const TranscutaneousDataTransfer = () => {
    const images = useLazyImages({
        externalIsometric: () => import('./Images/External/ExternalIsometric.png'),
        externalTopRender: () => import('./Images/External/ExternalTopRender.png'),
        externalTopSilkscreen: () => import('./Images/External/ExternalTopSilkscreen.png'),
        externalTopCopper: () => import('./Images/External/ExternalTopCopper.png'),
        externalBottomCopper: () => import('./Images/External/ExternalBottomCopper.png'),
        internalIsometric: () => import('./Images/Internal/InternalIsometric.png'),
        internalTopRender: () => import('./Images/Internal/InternalTopRender.png'),
        internalTopSilkscreen: () => import('./Images/Internal/InternalTopSilkscreen.png'),
        internalBottomCopper: () => import('./Images/Internal/InternalBottomCopper.png'),
    });

    const lightbox = useLightbox();

    const introMedia = images.externalTopRender && (
        <img
            src={images.externalTopRender}
            alt="Top-down render of the external data transfer PCB"
            onClick={() => lightbox.open(images.externalTopRender)}
            style={{ cursor: 'zoom-in' }}
        />
    );

    return (
        <CaseStudyLayout project={project} introMedia={introMedia}>
            {/* <CaseStudySection title="The Challenge">
                <div className="challenge-block">
                    <p className="challenge-question">
                        Power already crosses the skin wirelessly through the Total Artificial Heart&apos;s
                        inductive TET link. How can data from the implanted electronics cross that same boundary,
                        without adding another physical connection through the skin?
                    </p>
                    <span className="challenge-arrow">↓</span>
                    <span className="challenge-answer">Load Modulation / Reflected Impedance</span>
                </div>
            </CaseStudySection> */}

            {/* <CaseStudySection title="How Data Transfer Works">
                <p>
                    The implanted side switches its electrical load; that change reflects through the coupled coils
                    as an impedance shift the external side can detect and interpret.
                </p>
                <TetLinkDiagram
                    implantLabel="Implanted / Secondary Side"
                    implantSteps={['MCU', { label: 'Switchable Load', accent: true }, 'Secondary Coil']}
                    externalLabel="External / Primary Side"
                    externalSteps={[
                        'Primary Coil',
                        'Analogue Front End',
                        'Filter',
                        'Gain',
                        { label: 'Detection', accent: true },
                        'External MCU',
                    ]}
                />
            </CaseStudySection> */}

            <CaseStudySection title="Prototyping &amp; Validation">
                <h3 className="case-study-section-title">Initial Breadboard Prototype</h3>
                <p className="case-study-date">May 2026</p>
                <p>
                    I first built the LC circuit I&apos;d researched and simulated in LTspice on a breadboard, driving
                    the coupled coils with a high-frequency input to see whether a change on the secondary side would
                    show up as reflected impedance on the primary side. Moving the coils closer or further apart - or
                    just placing a hand between them - visibly changed the received amplitude, confirming how strongly
                    the link depended on coupling. The available inductors and capacitors only reached about 5 kHz,
                    though, which was too low to clearly see any change when the secondary MOSFET load was switched -
                    the circuit responded to coupling, but load modulation itself wasn&apos;t yet observable.
                </p>

                <h3 className="case-study-section-title">Observing Load Modulation</h3>
                <p className="case-study-date">May 2026</p>
                <p>
                    Swapping in picofarad-range capacitors raised the tank&apos;s resonant frequency, and this time
                    switching 5 V onto the secondary MOSFET produced a visible change in primary-side amplitude - the
                    first clear evidence the load-modulation approach actually worked. The effect only held reliably
                    with the coils about 1-2 mm apart, and the received signal was small (around 100 mV) and noisy.
                    That pointed to the next problems to solve: extending the usable coupling distance and
                    conditioning/amplifying the signal, both important since a real transcutaneous link has to work
                    through tissue rather than air.
                </p>

                <h3 className="case-study-section-title">STM32-Driven Modulation</h3>
                <p className="case-study-date">June 2026</p>
                <p>
                    I then had an STM32 generate a data sequence and switch the secondary MOSFET directly, which
                    produced clearly distinguishable high/low amplitude states on the primary waveform matching the
                    transmitted bits - the reflected-impedance effect was now driven digitally rather than by hand.
                    Bench testing also measured the resonant frequency at around 265 kHz, against a calculated
                    ~330 kHz, a reminder to characterise the real circuit rather than trust the ideal design values.
                    The waveform was visible on the oscilloscope but fell outside the STM32 ADC&apos;s 0-3.3 V input
                    range, which is what motivated the external analogue front-end PCB below: conditioning the
                    signal, keeping it in range, and providing gain before it can be digitised and demodulated.
                </p>
            </CaseStudySection>

            <CaseStudySection title="External Board">
                {images.externalIsometric && (
                    <PCBShowcase
                        eyebrow="Primary Side"
                        title="External Board"
                        subheading="Detection & signal conditioning"
                        hero={{
                            src: images.externalIsometric,
                            alt: '3D render of the external data transfer PCB',
                            onClick: () => lightbox.open(images.externalIsometric),
                        }}
                        thumbs={[
                            { src: images.externalTopRender, alt: 'External PCB top render', onClick: () => lightbox.open(images.externalTopRender) },
                            { src: images.externalTopSilkscreen, alt: 'External PCB silkscreen/outline view', onClick: () => lightbox.open(images.externalTopSilkscreen) },
                            { src: images.externalTopCopper, alt: 'External PCB top copper layer', onClick: () => lightbox.open(images.externalTopCopper) },
                            { src: images.externalBottomCopper, alt: 'External PCB bottom copper layer', onClick: () => lightbox.open(images.externalBottomCopper) },
                        ]}
                    />
                )}
            </CaseStudySection>

            <CaseStudySection title="Internal Board">
                {images.internalIsometric && (
                    <PCBShowcase
                        eyebrow="Secondary Side"
                        title="Internal Board"
                        subheading="Load modulation"
                        hero={{
                            src: images.internalIsometric,
                            alt: '3D render of the internal data transfer PCB',
                            onClick: () => lightbox.open(images.internalIsometric),
                        }}
                        thumbs={[
                            { src: images.internalTopRender, alt: 'Internal PCB top render', onClick: () => lightbox.open(images.internalTopRender) },
                            { src: images.internalTopSilkscreen, alt: 'Internal PCB silkscreen/outline view', onClick: () => lightbox.open(images.internalTopSilkscreen) },
                            { src: images.internalBottomCopper, alt: 'Internal PCB bottom copper layer', onClick: () => lightbox.open(images.internalBottomCopper) },
                        ]}
                    />
                )}
            </CaseStudySection>

            <Lightbox image={lightbox.image} onClose={lightbox.close} />
        </CaseStudyLayout>
    );
};

export default TranscutaneousDataTransfer;
