export function SectionHeading({ eyebrow, title, description, align = 'left', as: Heading = 'h2' }) {
    return (
        <div className="section-heading" data-align={align}>
            {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
            <Heading className="section-title">{title}</Heading>
            {description && <p className="section-description">{description}</p>}
        </div>
    );
}

export default SectionHeading;
