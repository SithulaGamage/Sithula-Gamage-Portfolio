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
        ltInitialSchematic: () => import('../../../assets/ltspice/lt1.png'),
        ltInitialGraph: () => import('../../../assets/ltspice/lt1_graph.png'),
        ltFinalSchematic: () => import('../../../assets/ltspice/ltfinal.png'),
        ltFinalGraph: () => import('../../../assets/ltspice/ltfinal_graph.png'),
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

            <CaseStudySection title="LTspice Simulation">
                <h3 className="case-study-subheading">Initial Iteration</h3>
                {images.ltInitialSchematic && (
                    <img
                        src={images.ltInitialSchematic}
                        alt="LTspice schematic of the initial impedance reflection simulation"
                        className="case-study-image"
                        loading="lazy"
                        onClick={() => lightbox.open(images.ltInitialSchematic)}
                    />
                )}
                {images.ltInitialGraph && (
                    <img
                        src={images.ltInitialGraph}
                        alt="LTspice waveform graph of the initial impedance reflection simulation"
                        className="case-study-image"
                        loading="lazy"
                        onClick={() => lightbox.open(images.ltInitialGraph)}
                    />
                )}
                <ul>
                    <li>
                        No real result: tried a constant 5 V data input, but no change in impedance was noticeable
                        on the external side.
                    </li>
                    <li>The K factor between the coupled inductors was likely too optimistic / too high.</li>
                    <li>
                        Blue is the external coil&apos;s voltage, green is the internal coil&apos;s voltage, and red
                        is the data input.
                    </li>
                    <li>There may also have been some incorrect grounding.</li>
                </ul>

                <h3 className="case-study-subheading">Final Iteration</h3>
                {images.ltFinalSchematic && (
                    <img
                        src={images.ltFinalSchematic}
                        alt="LTspice schematic of the final envelope-detection and ADC gain array simulation"
                        className="case-study-image"
                        loading="lazy"
                        onClick={() => lightbox.open(images.ltFinalSchematic)}
                    />
                )}
                {images.ltFinalGraph && (
                    <img
                        src={images.ltFinalGraph}
                        alt="LTspice waveform graph showing the five ADC gain channels responding to the data signal"
                        className="case-study-image"
                        loading="lazy"
                        onClick={() => lightbox.open(images.ltFinalGraph)}
                    />
                )}
                <p>
                    This iteration adds a proper front-end after the coupled coils: an LC tank and SCT switch feed a
                    half-bridge rectifier with a smoothing capacitor, which extracts the envelope of the reflected
                    signal. That envelope is buffered and protected, then passed through a logarithmic gain stage
                    (a matched BJT pair) to compress its wide dynamic range, before a low-pass and high-pass filter
                    stage and an output buffer clean it up.
                </p>
                <p>
                    The buffered signal then fans out into five parallel gain stages - 5x, 2x, 1x, 0.5x, and 0.2x -
                    each with its own op-amp, feedback resistor, and diode clamps for overvoltage protection, feeding
                    five separate ADC channels. Since the received signal&apos;s amplitude varies a lot with coupling
                    distance, having five gain options in parallel means at least one channel should land cleanly
                    within the STM32 ADC&apos;s 0-3.3 V range without clipping or being too small to resolve, rather
                    than needing a single gain stage to guess correctly. A charge pump (ICL7662/Si7661) generates the
                    negative rail the op-amps need, alongside a 3.3 V reference for the array.
                </p>
                <p>
                    The output graph shows this working: as the data switches high and low, all five ADC channels
                    track the same underlying waveform, just scaled differently - the 5x channel (ADC1) saturates
                    near the rails, while the 0.2x channel (ADC5) stays comfortably within range, showing how the
                    array covers a wide spread of input signal strengths.
                </p>
            </CaseStudySection>

            <CaseStudySection title="Prototyping &amp; Validation">
                <h3 className="case-study-subheading">Initial Breadboard Prototype</h3>
                <p>
                    I first built the LC circuit I&apos;d researched and simulated in LTspice on a breadboard, driving
                    the coupled coils with a high-frequency input to see whether a change on the secondary side would
                    show up as reflected impedance on the primary side. Moving the coils closer or further apart - or
                    just placing a hand between them - visibly changed the received amplitude, confirming how strongly
                    the link depended on coupling. The available inductors and capacitors only reached about 5 kHz,
                    though, which was too low to clearly see any change when the secondary MOSFET load was switched -
                    the circuit responded to coupling, but load modulation itself wasn&apos;t yet observable.
                </p>

                <h3 className="case-study-subheading">Observing Load Modulation</h3>
                <p>
                    Swapping in picofarad-range capacitors raised the tank&apos;s resonant frequency, and this time
                    switching 5 V onto the secondary MOSFET produced a visible change in primary-side amplitude - the
                    first clear evidence the load-modulation approach actually worked. The effect only held reliably
                    with the coils about 1-2 mm apart, and the received signal was small (around 100 mV) and noisy.
                    That pointed to the next problems to solve: extending the usable coupling distance and
                    conditioning/amplifying the signal, both important since a real transcutaneous link has to work
                    through tissue rather than air.
                </p>

                <h3 className="case-study-subheading">STM32-Driven Modulation</h3>
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
