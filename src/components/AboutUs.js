import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Executive board members data
const eboardMembers = [
    { name: 'Jacob', position: 'President', photo: '../Images/Jacob.jpg' },
    { name: 'Gavin', position: 'Vice President', photo: '../Images/Gavin.jpg' },
    { name: 'Nikhil', position: 'Social Chair', photo: '../Images/Nikhil.jpg' },
    { name: 'Alex', position: 'Recruitment Chair', photo: '../Images/Alex.jpg' },
    { name: 'Dante', position: 'Health & Safety Chair', photo: '../Images/Dante.jpg' },
    { name: 'Dylan S.', position: 'Treasurer', photo: '../Images/Dylan S.png' },
    { name: 'Ben', position: 'Philanthropy Chair', photo: '../Images/Ben.jpg' },
    { name: 'Nat', position: 'Alumni Relations Chair', photo: '../Images/Nat.png' },
    { name: 'Dylan', position: 'Marketing Chair', photo: '../Images/Dylan.jpg' }
];

// Styled-components for enhanced styling
const AboutUsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    max-width: 1200px;
    margin: 0 auto;
    background-color: #f8f8f8;
`;

const AboutUsContent = styled.div`
    text-align: center;
    margin-bottom: 40px;

    h2 {
        font-size: 2.5rem;
        margin-bottom: 20px;
        color: #333;
    }

    p {
        font-size: 1.1rem;
        margin-bottom: 15px;
        color: #555;
    }

    a {
        color: #1e88e5;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`;

const MapContainer = styled.div`
    margin-top: 40px;
`;

const SlideShowContainer = styled.div`
    position: relative;
    width: 300px;
    height: 300px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;
`;

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

const Slide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: ${(props) => (props.active ? 1 : 0)};
    transition: opacity 0.5s ease-in-out;
    animation: ${fadeIn} 1s ease-in-out;
`;

const SlideImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
`;

const SlideCaption = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 10px;
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    border-radius: 0 0 10px 10px;
`;

const AboutUs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % eboardMembers.length);
        }, 3000); // Change slides every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <AboutUsContainer>
            <AboutUsContent>
                <h2>About Us</h2>
                <p>Learn more about our national organization at <a href="https://dke.org/" target="_blank" rel="noopener noreferrer">DKE Nationals</a>.</p>
                <p><strong>Chapter Size:</strong> A vibrant group of 25 dedicated members, each bringing unique perspectives and skills.</p>
                <p><strong>GPA Average:</strong> A collective GPA of 3.34, showcasing our commitment to academic excellence.</p>
                <p><strong>Philanthropy:</strong> Over $1000 raised this year for various charitable causes, demonstrating our commitment to giving back.</p>
                <p><strong>Service:</strong> Each member dedicates at least 10 hours per semester to community service, fostering a spirit of community engagement.</p>
            </AboutUsContent>

            <SlideShowContainer>
                {eboardMembers.map((member, index) => (
                    <Slide key={index} active={index === activeIndex}>
                        <SlideImage src={member.photo} alt={`${member.name} - ${member.position}`} />
                        <SlideCaption>
                            <strong>{member.name}</strong> - {member.position}
                        </SlideCaption>
                    </Slide>
                ))}
            </SlideShowContainer>

            <MapContainer>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2931.0104139044392!2d-73.67642178889061!3d42.72467031186912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de0f74640015fd%3A0x96e5b54d34da6091!2s1599%20Tibbits%20Ave%2C%20Troy%2C%20NY%2012180!5e0!3m2!1sen!2sus!4v1722012036838!5m2!1sen!2sus"
                    width="400"
                    height="300"
                    allowFullScreen=""
                    loading="lazy"
                    title="Location of Delta Kappa Epsilon - Psi Omega Chapter"
                ></iframe>
            </MapContainer>
        </AboutUsContainer>
    );
};

export default AboutUs;
