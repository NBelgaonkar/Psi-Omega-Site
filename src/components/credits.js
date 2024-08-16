import React, { useState } from 'react';

const authors = [
    {
        name: "Andy Chen",
        graduationYear: 2025,
        semesterWorked: "Fall",
        yearWorked: 2023
    },
    {
        name: "Nikhil Belgaonkar",
        graduationYear: 2026,
        semesterWorked: "Fall",
        yearWorked: 2023
    },
    {
        name: "Will Lewis",
        graduationYear: 2026,
        semesterWorked: "Fall",
        yearWorked: 2023
    },
    {
        name: "Jake Mandel",
        graduationYear: 2026,
        semesterWorked: "Fall",
        yearWorked: 2023
    },
    {
        name: "Jake Mandel",
        graduationYear: 2026,
        semesterWorked: "Summer",
        yearWorked: 2024
    },
    {
        name: "Nikhil Kaviraja",
        graduationYear: 2026,
        semesterWorked: "Summer",
        yearWorked: 2024
    },
    {
        name: "Henry Holt",
        graduationYear: 2026,
        semesterWorked: "Summer",
        yearWorked: 2024
    },
    // Add more authors as needed
];

// Group authors by year and semester
const groupedAuthors = authors.reduce((groups, author) => {
    const key = `${author.semesterWorked} ${author.yearWorked}`;
    if (!groups[key]) {
        groups[key] = [];
    }
    groups[key].push(author);
    return groups;
}, {});

const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div style={{ marginBottom: '10px' }}>
            <div 
                onClick={toggleAccordion} 
                style={{
                    cursor: 'pointer',
                    backgroundColor: '#f1f1f1',
                    padding: '20px',
                    fontWeight: 'bold',
                    border: '1px solid #ccc',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                {title}
            </div>
            {isOpen && (
                <div style={{ padding: '20px', border: '1px solid #ccc', borderTop: 'none' }}>
                    {children}
                </div>
            )}
        </div>
    );
};

const Credits = () => {
    return (
        <div style={{ padding: '50px', maxWidth: '600px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Website Credits</h1>
            {Object.keys(groupedAuthors).map((groupKey, index) => (
                <AccordionItem key={index} title={groupKey}>
                    {groupedAuthors[groupKey].map((author, idx) => (
                        <div key={idx} style={{ marginBottom: '10px' }}>
                            <h2>{author.name}</h2>
                            <p><strong>Graduation Year:</strong> {author.graduationYear}</p>
                        </div>
                    ))}
                </AccordionItem>
            ))}
        </div>
    );
};

export default Credits;
