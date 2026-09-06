// Work experience, sourced directly from LinkedIn/resume - entries render via
// { role, organisation, dates, summary, bullets: [], tech: [], link: { label, url } } in the Experience section.
export const experience = [
    {
        role: 'Mechatronics Engineering Intern',
        organisation: 'Contactile',
        dates: 'Aug. 2026 - Present',
        tech: [],
    },
    {
        role: 'Casual Academic',
        organisation: 'UNSW',
        dates: 'Feb. 2026 - Present',
        bullets: [
            'ELEC2141 Digital Circuit Design - 26T1',
            'DESN1000 Introduction to Engineering Design and Innovation - 26T1 | 26T3',
            'DESN2000 Engineering Design and Professional Practice - 26T3',
        ],
        tech: ['ELEC2141', 'DESN1000', 'DESN2000'],
    },
    {
        role: 'Co-Founder',
        organisation: 'Project Beacon',
        dates: 'Nov. 2025 - Present',
        summary:
            'Co-founded a student-led robotics outreach initiative delivering hands-on Arduino workshops (Alarm Bot, Backpack Pal) to NSW high schools, pricing them accessibly for low-SES schools.',
        // tech: ['Arduino'],
        link: { label: 'projectbeacon.org.au', url: 'https://projectbeacon.org.au/' },
    },
    {
        role: 'Robotics Engineering Intern',
        organisation: 'aKin',
        dates: 'Sep. 2025 - Jan. 2026',
        summary:
            'Designed, prototyped, and manufactured emotionally intelligent robots supporting children with cognitive disabilities, building modular CAD enclosures and integrating sensing and interaction hardware.',
        tech: ['Fusion 360', 'Jetson Orin Nano', 'Arduino', 'RFID'],
    },
    {
        role: 'Workshops Director',
        organisation: 'UNSW Mechatronics Society',
        dates: 'Nov. 2024 - Nov. 2025',
        summary:
            'Directed Sumobots, a flagship competitive robotics event, running four weeks of Arduino, CAD, and manufacturing workshops for 350+ students across 80+ teams.',
        tech: ['Arduino', 'CAD', '3D Printing', 'Laser Cutting'],
    },
    {
        role: 'Engineering Intern',
        organisation: 'BGM Switchboards',
        dates: 'Apr. 2024 - Apr. 2025',
        summary:
            'Assembled large-scale switchboard systems and designed AC electrical systems for train carriage infrastructure, supporting power control arrangements for Western Sydney Airport and Singapore Changi Airport passport scanning systems.',
        tech: ['AC Electrical Design', 'Switchboard Assembly'],
    },
];

export default experience;
