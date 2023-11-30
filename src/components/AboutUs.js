import React, { useState, useEffect } from 'react';

const eboardMembers = [
    { position: 'President', photo: 'path_to_photo' },
    { position: 'Vice President', photo: 'path_to_photo' },
    { position: 'Social Chair', photo: 'path_to_photo' },
    { position: 'Recruitment Chair', photo: 'path_to_photo' },
    { position: 'Health & Safety Chair', photo: 'path_to_photo' },
    { position: 'Treasurer', photo: 'path_to_photo' },
    { position: 'Philanthropy Chair', photo: 'path_to_photo' },
    { position: 'Alumni Relations Chair', photo: 'path_to_photo' },
    { position: 'Marketing Chair', photo: 'path_to_photo' }
];

const AboutUs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % eboardMembers.length);
        }, 3000);  // change slides every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="about-us-container">
            <div className="about-us-content">
                <h2>About Us</h2>
                <h3>Delta Kappa Epsilon - Psi Omega Chapter</h3>
                <p>Located at the heart of Rensselaer Polytechnic Institute, 901 Peoples Avenue, the Psi Omega Chapter of Delta Kappa Epsilon (DKE) stands as a beacon of brotherhood and excellence.</p>

                {/* Link to DKE Nationals */}
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
                <p><strong>Behind The Scenes:</strong> The Psi Omega Chapter of DKE is not just a fraternity; it's a legacy. Upheld by our Objects, we believe in intellectual excellence, honorable friendship, tolerance, and the unity of kindred spirits.</p>
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
            </div>

            <style jsx>{`
              .about-us-container {
                display: flex;
                justify-content: space-between;
                width: 100%;
              }

              .about-us-content {
                flex: 1;
                margin-right: 20px;
              }

              .map-and-eboard {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 400px;
              }

              .google-map {
                margin-bottom: 20px;
              }

              .carousel {
                width: 200px;
                height: 300px;
                position: relative;
                overflow: hidden;
              }

              .carousel img {
                width: 100%;
                height: 80%;
                object-fit: cover;
              }

              .carousel h5 {
                text-align: center;
                padding: 10px 0;
              }
            `}</style>
        </div>
    );
};

export default AboutUs;
