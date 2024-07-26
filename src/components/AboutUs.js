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
                <p>Learn more about our national organization at <a href="https://dke.org/" target="_blank" rel="noopener noreferrer">DKE Nationals</a>.</p>
                <p><strong>Chapter Size:</strong> A vibrant group of 25 dedicated members, each bringing unique perspectives and skills.</p>
                <p><strong>GPA Average:</strong> A collective GPA of 3.34, showcasing our commitment to academic excellence.</p>
                <p><strong>Philanthropy:</strong> Over $1000 raised this year for various charitable causes, demonstrating our commitment to giving back.</p>
                <p><strong>Service:</strong> Each member dedicates at least 10 hours per semester to community service, fostering a spirit of community engagement.</p>
                <p><strong>Diversity</strong> Our members study across different fields, from Engineering to Humanities, representing a microcosm of the university's diverse academic environment.</p>
            </div>

            <div className="map-and-eboard">
                <div className="google-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2931.0104139044392!2d-73.67642178889061!3d42.72467031186912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de0f74640015fd%3A0x96e5b54d34da6091!2s1599%20Tibbits%20Ave%2C%20Troy%2C%20NY%2012180!5e0!3m2!1sen!2sus!4v1722012036838!5m2!1sen!2sus"
                        width="400"
                        height="300"
                        allowFullScreen=""
                        loading="lazy"
                        title="Location of Delta Kappa Epsilon - Psi Omega Chapter"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
