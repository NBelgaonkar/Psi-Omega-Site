import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import background from '../Images/pic.png';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-attachment: fixed;
  background-position: center top;
  color: black;
  flex-grow: 1;
  min-height: 100vh;
  padding-top: 60px;
  padding: 50px;
  margin-top: 60px;
`;

const Section = styled.div`
  text-align: left;
  max-width: 800px;
  margin-top: 50px;
  margin-bottom: 50px;
  color: black;

  h1 {
    font-size: 42px;
    margin-bottom: 30px;
  }

  h2 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 800px;
  margin-bottom: 30px;
  border-radius: 10px;
`;

const Button = styled.a`
  display: inline-block;
  background-color: #003366;
  color: #fff;
  padding: 15px 25px;
  margin-top: 20px;
  text-decoration: none;
  font-size: 18px;
  border-radius: 5px;

  &:hover {
    background-color: #002244;
  }
`;

class RushDKEPage extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          <Section>
            <h1>Rush DKE</h1>
            <Image src="https://via.placeholder.com/800x400" alt="DKE Brotherhood" />
            <p>
              Welcome to Delta Kappa Epsilon. Rushing DKE is an opportunity to join a brotherhood committed to leadership, scholarship, and service. We invite you to learn more about what makes our fraternity unique.
            </p>
            <Button href="/rush-signup">Sign Up for Rush Events</Button>
          </Section>

          <Section>
            <h2>About Us</h2>
            <Image src="https://via.placeholder.com/800x400" alt="About DKE" />
            <p>
              Founded in 1844, Delta Kappa Epsilon has a rich history of fostering personal growth and lifelong friendships. Our chapter focuses on academic excellence, community involvement, and personal development.
            </p>
          </Section>

          <Section>
            <h2>Upcoming Rush Events</h2>
            <Image src="https://via.placeholder.com/800x400" alt="Rush Events" />
            <ul>
              <li><strong>Info Session:</strong> Date & Time – Learn more about DKE and meet the brothers.</li>
              <li><strong>Game Night:</strong> Date & Time – Join us for an evening of fun and games.</li>
              <li><strong>Community Service:</strong> Date & Time – Participate in our volunteer initiatives.</li>
            </ul>
            <Button href="/events-calendar">View Full Calendar</Button>
          </Section>

          <Section>
            <h2>Contact Us</h2>
            <Image src="https://via.placeholder.com/800x400" alt="Contact" />
            <p>
              If you have any questions about rushing DKE, please reach out to our recruitment chair at <a href="mailto:recruitment@dkechapter.edu">recruitment@dkechapter.edu</a>. We look forward to hearing from you!
            </p>
          </Section>
        </Container>
      </>
    );
  }
}

export default RushDKEPage;
