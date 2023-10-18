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
            setActiveIndex((prevIndex) =>
                (prevIndex + 1) % eboardMembers.length
            );
        }, 3000);  // change slides every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2>About Us</h2>
            <h3>Delta Kappa Epsilon - Psi Omega Chapter</h3>
            <p>Located at the heart of Rensselaer Polytechnic Institute, 901 Peoples Avenue, the Psi Omega Chapter of Delta Kappa Epsilon (DKE) stands as a beacon of brotherhood and excellence. Since its inception, our fraternity has been devoted to upholding our cherished motto - “Friends from the heart forever.” As a post-pandemic fraternity, we've reemerged stronger, more enthusiastic, and steadfast in our core values.</p>

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
            <p><strong>Moral & Cultural Development:</strong> Our leadership structures and external community involvement ensures our brothers grow holistically, absorbing diverse perspectives and fostering leadership skills.</p>
            <p><strong>Community Engagement:</strong> We actively serve our community, from our partnership with Oakwood Community Center to campus-wide events, always upholding our core values.</p>
            <p><strong>Human Connection:</strong> Brotherhood is the cornerstone of our fraternity. It's not just about spending time together but supporting one another academically, professionally, and personally.</p>
            <p><strong>Behind The Scenes:</strong> The Psi Omega Chapter of DKE is not just a fraternity; it's a legacy. Upheld by our Objects, we believe in intellectual excellence, honorable friendship, tolerance, and the unity of kindred spirits.</p>

            <h4>Executive Board</h4>
            <div className="carousel">
                <img src={eboardMembers[activeIndex].photo} alt={`${eboardMembers[activeIndex].position}'s Photo`} />
                <h5>{eboardMembers[activeIndex].position}</h5>
            </div>
        </div>
    );
};

export default AboutUs;

// Add this CSS to style the carousel
/*
.carousel {
    width: 200px;  // or any desired width
    height: 300px;  // or any desired height
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
*/
