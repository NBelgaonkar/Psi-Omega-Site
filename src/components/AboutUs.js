import React, { useState, useEffect } from 'react';
import './AboutUs.css';

const eboardMembers = [
    { position: 'President', photo: '../Images/Jacob.jpg' },
    { position: 'Vice President', photo: '../Images/Gavin.jpg' },
    { position: 'Social Chair', photo: '../Images/Nikhil.jpg' },
    { position: 'Recruitment Chair', photo: '../Images/Alex.jpg' },
    { position: 'Health & Safety Chair', photo: '../Images/Dante.jpg' },
    { position: 'Treasurer', photo: '../Images/Dylan S.png' },
    { position: 'Philanthropy Chair', photo: '../Images/Ben.jpg' },
    { position: 'Alumni Relations Chair', photo: '../Images/Nat.png' },
    { position: 'Marketing Chair', photo: '../Images/Dylan.jpg' }
];

const AboutUs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % eboardMembers.length);
        }, 3000); // Change slides every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="about-us-container">
            <div className="about-us-content">
                <h2>About Us</h2>
                <h3>Delta Kappa Epsilon - Psi Omega Chapter</h3>
                <p>Located at Rensselaer Polytechnic Institute, our chapter emphasizes leadership, community involvement, and personal development.</p>
                <p>Learn more about our national organization at <a href="https://dke.org/" target="_blank" rel="noopener noreferrer">DKE Nationals</a>.</p>
                <h4>At A Glance</h4>
                <ul>
                    <li>Chapter Size: A vibrant group of 24 dedicated members, each bringing unique perspectives and skills.</li>
                    <li>GPA Average: A collective GPA of 3.34, showcasing our commitment to academic excellence.</li>
                    <li>Philanthropy: Over $1000 raised this year for various charitable causes, demonstrating our commitment to giving back.</li>
                    <li>Community Service: Each member dedicates at least 10 hours per semester to community service, fostering a spirit of community engagement.</li>
                    <li>Diverse Majors: Our members study across different fields, from Engineering to Humanities, representing a microcosm of the university's diverse academic environment.</li>
                </ul>
                <h4>Our Mission</h4>
                <p><strong>Academic Excellence:</strong> Our dedicated Academic Chair supports members in achieving academic goals and excelling in their studies.</p>
                <p><strong>Moral & Cultural Development:</strong> We grow holistically through leadership opportunities and engagement with diverse perspectives.</p>
                <p><strong>Community Engagement:</strong> Our active participation in community events reflects our core values and commitment to service.</p>
                <p><strong>Human Connection:</strong> Brotherhood is our cornerstone, built on mutual support and shared experiences.</p>
                <p><strong>Behind The Scenes:</strong> Our chapter is more than a fraternity; it's a legacy of intellectual excellence, honorable friendship, and unity.</p>
            </div>

            <div className="map-and-eboard">
                <div className="google-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2920.22522574596!2d-73.67892508451474!3d42.72940517916625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de0b4ad1f9da57%3A0x60c67c91b79a2038!2s901%20Peoples%20Ave%2C%20Troy%2C%20NY%2012180%2C%20USA!5e0!3m2!1sen!2sus!4v1634556527181!5m2!1sen!2sus"
                        width="400"
                        height="300"
                        allowFullScreen=""
                        loading="lazy"
                        title="Location of Delta Kappa Epsilon - Psi Omega Chapter"
                    ></iframe>
                </div>

                <div className="carousel">
                    <img src={eboardMembers[activeIndex].photo} alt={`${eboardMembers[activeIndex].position}'s Photo`} />
                    <h5>{eboardMembers[activeIndex].position}</h5>
                </div>

                <div className="special-photo-section">
                    <img src="../Images/Brothers+Doug.jpg" alt="Brothers and DKE National Director" />
                    <h5>Brothers & DKE National Director</h5>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
