export function SectionHeading({ numeral, title, description, align = 'center', as: Heading = 'h2' }) {
    return (
        <div className="section-heading" data-align={align}>
            {numeral && <span className="section-numeral">{numeral}</span>}
            <Heading className="section-title">{title}</Heading>
            {description && <p className="section-description">{description}</p>}
        </div>
    );
}

export default SectionHeading;
