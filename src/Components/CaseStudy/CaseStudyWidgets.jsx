// Small reusable pieces for building visual, diagram-driven case studies -
// used by TranscutaneousDataTransfer and available to future case studies.
import { Fragment } from 'react';
import './CaseStudyWidgets.css';

export function EngineeringValue({ label, value, badge }) {
    return (
        <div className="eng-value">
            <span className="eng-value-label">{label}</span>
            <span className="eng-value-value">{value}</span>
            {badge && <span className="eng-value-badge">{badge}</span>}
        </div>
    );
}

export function ParameterStrip({ items }) {
    return (
        <div className="parameter-strip">
            {items.map(({ label, value }) => (
                <span key={label} className="parameter-chip">
                    <span className="parameter-chip-label">{label}</span>
                    <span className="parameter-chip-value">{value}</span>
                </span>
            ))}
        </div>
    );
}

export function GainScale({ values, activeValue }) {
    return (
        <div className="gain-scale">
            {values.map((value) => (
                <span key={value} className={`gain-chip ${value === activeValue ? 'gain-chip--active' : ''}`}>
                    {value}
                </span>
            ))}
        </div>
    );
}

function SignalFlowRow({ steps }) {
    return (
        <div className="signal-diagram-row">
            {steps.map((step, index) => (
                <Fragment key={step.label ?? step}>
                    {index > 0 && <span className="signal-diagram-arrow">→</span>}
                    <span className={`signal-diagram-step ${step.accent ? 'signal-diagram-step--accent' : ''}`}>
                        {step.label ?? step}
                    </span>
                </Fragment>
            ))}
        </div>
    );
}

export function SignalFlow({ steps, direction = 'row' }) {
    return <div className={`signal-flow signal-flow--${direction}`}><SignalFlowRow steps={steps} /></div>;
}

export function TetLinkDiagram({
    implantLabel,
    implantSteps,
    externalLabel,
    externalSteps,
    couplingLabel = 'Inductive Coupling',
}) {
    return (
        <div className="signal-diagram">
            <div className="signal-diagram-side">
                <span className="signal-diagram-side-label">{implantLabel}</span>
                <SignalFlowRow steps={implantSteps} />
            </div>

            <div className="signal-diagram-coupling">
                <span className="signal-diagram-coupling-symbol">))&nbsp;((</span>
                <span>{couplingLabel}</span>
            </div>

            <div className="signal-diagram-side">
                <span className="signal-diagram-side-label">{externalLabel}</span>
                <SignalFlowRow steps={externalSteps} />
            </div>
        </div>
    );
}

export function HardwareCallouts({ items }) {
    return (
        <div className="hardware-callout-grid">
            {items.map(({ label, description }) => (
                <div key={label} className="hardware-callout">
                    <span className="hardware-callout-label">{label}</span>
                    <span className="hardware-callout-desc">{description}</span>
                </div>
            ))}
        </div>
    );
}

export function PCBShowcase({ eyebrow, title, subheading, hero, thumbs = [], callouts = [] }) {
    return (
        <div className="pcb-showcase">
            <div className="pcb-showcase-header">
                {eyebrow && <span className="pcb-showcase-eyebrow">{eyebrow}</span>}
                <h3 className="case-study-section-title">{title}</h3>
                {subheading && <p className="pcb-showcase-subheading">{subheading}</p>}
            </div>

            <div className="pcb-showcase-grid">
                <div className="pcb-showcase-hero-wrap" onClick={hero.onClick}>
                    <img src={hero.src} alt={hero.alt} className="pcb-showcase-hero" loading="lazy" />
                </div>

                {thumbs.length > 0 && (
                    <div className="pcb-showcase-thumbs">
                        {thumbs.map((thumb) => (
                            <img
                                key={thumb.src}
                                src={thumb.src}
                                alt={thumb.alt}
                                className="pcb-showcase-thumb"
                                loading="lazy"
                                onClick={thumb.onClick}
                            />
                        ))}
                    </div>
                )}
            </div>

            {callouts.length > 0 && <HardwareCallouts items={callouts} />}
        </div>
    );
}

export function StatusList({ items }) {
    return (
        <div className="status-list">
            {items.map(({ label, status }) => (
                <div key={label} className="status-row">
                    <span className="status-label">{label}</span>
                    <span className={`status-pill status-pill--${status === 'Complete' ? 'complete' : 'in-progress'}`}>
                        {status}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default {
    EngineeringValue,
    ParameterStrip,
    GainScale,
    SignalFlow,
    TetLinkDiagram,
    HardwareCallouts,
    PCBShowcase,
    StatusList,
};
