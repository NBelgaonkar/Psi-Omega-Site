import React from 'react';
import styled from 'styled-components';
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

const BenefitsSection = styled.div`
  text-align: left;
  max-width: 460px;
  margin-top: 150px;
  margin-bottom: 300px;
  color: black;
  p {
    font-size: 24px;
  }
  h1 {
    font-size: 36px;
    margin-bottom: 30px;
  }
`;

const BenefitInfo = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 1.6;
`;

class MemberBenefitsPage extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          <BenefitsSection>
            <h1>Member Benefits</h1>
            <BenefitInfo>
              <strong>Access to our vast network of Alumni:</strong> Stay connected with alumni who can provide guidance and opportunities in your career.
            </BenefitInfo>
            <BenefitInfo>
              <strong>Access to the DKE Yale Club:</strong> Enjoy access to the prestigious club located at E 44th St and Park Ave.
            </BenefitInfo>
            <BenefitInfo>
              <strong>Opportunities for philanthropy and community service events:</strong> Engage in meaningful activities to give back to the community.
            </BenefitInfo>
            <BenefitInfo>
              <strong>Access to the DKE convention:</strong> Participate in the fraternity's convention to connect with members from across the organization.
            </BenefitInfo>
          </BenefitsSection>
        </Container>
      </>
    );
  }
}

export default MemberBenefitsPage;
