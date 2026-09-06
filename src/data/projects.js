// Project metadata used to render the homepage Projects section.
// Full case-study content for each project lives in its own component
// under src/Components/WorkBlocks - this file only drives the cards.
export const projects = [
    {
        slug: 'transcutaneous-data-transfer',
        title: 'Transcutaneous Data Transfer',
        oneLiner:
            'Engineering an electronics architecture that transmits data from implanted electronics to the outside world across the inductive link of a Transcutaneous Energy Transfer (TET) system - without a wired skin penetration.',
        areas: ['Electronics'],
        tech: ['Altium', 'CAN Bus', 'Analog Front-End'],
        year: '2026',
        dates: 'March 2026 - Present',
        featured: true,
        cardImageClass: 'transcutaneous-data-transfer',
    },
    {
        slug: 'morphing-aircraft-wing',
        title: 'Morphing Aircraft Wing',
        oneLiner:
            'A morphing wing system using compliant mechanisms to improve lift-to-drag ratio and reduce fuel-inefficient airfoil design.',
        areas: ['Mechanical', 'Electronics', 'Software'],
        tech: ['Solidworks', 'OnShape', 'C++', 'Additive Manufacturing'],
        year: '2024',
        dates: 'September - December 2024',
        featured: true,
        cardImageClass: 'morphing-aircraft-wing',
    },
    {
        slug: 'tinkering',
        title: 'Tinkering',
        oneLiner:
            'Small 3D-printed household fixes - custom watch holders and a coat hanger rack - designed and iterated in OnShape.',
        areas: ['Mechanical'],
        tech: ['OnShape', 'Solidworks', '3D Printing'],
        year: '2024 - 2025',
        dates: 'December 2024 - February 2025',
        featured: true,
        cardImageClass: 'tinkering',
    },
];

export function getProjectBySlug(slug) {
    return projects.find((project) => project.slug === slug);
}

export default projects;
