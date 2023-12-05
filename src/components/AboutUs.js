// Importing necessary React hooks and external CSS
import React, { useState, useEffect } from 'react';
import './AboutUs.css';

// Array containing e-board members' information
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

// Functional component for the About Us page
const AboutUs = () => {
    // State to track the active index for the image carousel
    const [activeIndex, setActiveIndex] = useState(0);

    // useEffect hook to change the active index at a set interval
    useEffect(() => {
        const interval = setInterval(() => {
            // Update the active index, cycling back to 0 after the last member
            setActiveIndex((prevIndex) => (prevIndex + 1) % eboardMembers.length);
        }, 3000); // Change slides every 3 seconds

        // Cleanup function to clear the interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures effect runs only once on mount

    // JSX for the About Us page
    return (
        <div className="about-us-container">
            <div className="about-us-content">
                <h2>About Us</h2>
                <h3>Delta Kappa Epsilon - Psi Omega Chapter</h3>
                <p>Located at the heart of Rensselaer Polytechnic Institute, 901 Peoples Avenue, the Psi Omega Chapter of Delta Kappa Epsilon (DKE) stands as a beacon of brotherhood and excellence.</p>
                <p>Learn more about Delta Kappa Epsilon on the <a href="https://dke.org/" target="_blank" rel="noopener noreferrer">DKE Nationals Website</a>.</p>
                <h4>At A Glance</h4>
                <ul>
                    <li>Chapter Size: 24 dedicated members</li>
                    <li>GPA Average: A proud 3.34</li>
                    <li>Philanthropy: We raised over $1000 this year for charitable causes</li>
                    <li>Community Service: Each member commits to at least 10 hours of community service</li>
                    <li>Diverse Majors: Our brothers represent the School of Business, Engineering, Humanities, and Science.</li>
                </ul>
                <h4>Our Mission</h4>
                <p><strong>Academic Excellence:</strong> We prioritize our studies, with a dedicated Academic Chair supporting those who strive for academic greatness.</p>
                <p><strong>Moral & Cultural Development:</strong> Our leadership structures and external community involvement ensure our brothers grow holistically, absorbing diverse perspectives and fostering leadership skills.</p>
                <p><strong>Community Engagement:</strong> We actively serve our community, from our partnership with Oakwood Community Center to campus-wide events, always upholding our core values.</p>
                <p><strong>Human Connection:</strong> Brotherhood is the cornerstone of our fraternity. It's not just about spending time together but supporting one another academically, professionally, and personally.</p>
                <p><strong>Leadership Development:</strong> We provide opportunities for members to take on leadership roles within the fraternity, fostering skills that extend beyond the campus.</p>
                <p><strong>Social Responsibility:</strong> We're committed to making a positive impact on society through philanthropic activities and volunteer work, giving back to those in need.</p>
                <p><strong>Career Advancement:</strong> Our alumni network spans various industries, offering valuable connections and mentorship to help our brothers excel in their chosen careers.</p>
                <p><strong>Diversity and Inclusion:</strong> We celebrate diversity and ensure an inclusive environment where every member's background and perspective is respected and valued.</p>
                <p><strong>Personal Growth:</strong> Beyond academics, we focus on personal development, encouraging self-discovery, and providing resources for mental and emotional well-being.</p>
                <p><strong>Sports and Fitness:</strong> We promote an active lifestyle with sports events and fitness activities that promote physical health and camaraderie among our members.</p>
                <p><strong>Creative Expression:</strong> Whether it's through art, music, or other creative outlets, we encourage and support our members' artistic talents and passions.</p>
                <p><strong>Global Perspective:</strong> We offer opportunities for international experiences and cultural exchange, broadening our members' worldviews.</p>
                <p><strong>Networking Opportunities:</strong> Through our connections with alumni and other organizations, we provide networking opportunities that can open doors for future career success.</p>
                <p><strong>Behind The Scenes:</strong> The Psi Omega Chapter of DKE is not just a fraternity; it's a legacy. Upheld by our Objects, we believe in intellectual excellence, honorable friendship, tolerance, and the unity of kindred spirits.</p>
            </div>

            <div className="map-and-eboard">
                <div className="google-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2920.22522574596!2d-73.67892508451474!3d42.729405
                        17916625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de0b4ad1f9da57%3A0x60c67c91b79a2038!2s901%20
                        Peoples%20Ave%2C%20Troy%2C%20NY%2012180%2C%20USA!5e0!3m2!1sen!2sus!4v1634556527181!5m2!1sen!2sus"
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

// Exporting the AboutUs component for use in other parts of the application
export default AboutUs;
