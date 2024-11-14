import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
// Import alumni images
import troyUniversityImage from '../Images/troy-university.jpg'; // Replace with actual image file names
import admissionsImage from '../Images/old-admissions.png'; // Replace with actual image file names
import hiraiImage from '../Images/hirai.jpg'; // Replace with actual image file names
import martinImage from '../Images/martin.jpg';
import davisImage from '../Images/davis.jpg';
import davisImage2 from '../Images/davis2.jpg';
import trahanImage from '../Images/trahan.png';
import heffnerImage from '../Images/heffner.jpg';
import originalCrestImage from '../Images/old-crest.jpg'; // Replace with actual file name
import refreshedCrestImage from '../Images/Psi-Omega-Crest.png'; // Replace with actual file name


// Global styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Literata:wght@400;700&display=swap');

  body {
    font-family: 'Literata', serif;
    background-color: #F5F5F5;
    margin: 0;
    padding: 0;
  }
`;

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
  
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0px;
`;

const AlumniSection = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  text-align: left; 
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left; 
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  flex: 1;
  text-align: center; 
`;

const Image = styled.img`
  width: 150px;
  height: auto;
  margin-right: 20px;
  border-radius: 10px;
`;

const Caption = styled.p`
  font-size: 16px;
  margin-top: 5px;
  text-align: center; /* Ensures the caption is centered */
`;

const TroyUniversityImg = styled.img`
  width: 400px; /* Adjust this value as needed */
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
`;
const OldCrestImage = styled.img`
  width: 400px; /* Adjust this value as needed */
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
`;
const NewCrestImage = styled.img`
  width: 200px;
  height: auto;
  margin-right: 20px;
  border-radius: 10px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 28px;
  margin: 20px 0 10px;
  text-align: left;
`;

const Link = styled.a`
  color: #0047AB;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Quote = styled.blockquote`
  font-size: 20px;
  font-style: italic;
  margin: 20px 0;
  padding-left: 20px;
  border-left: 5px solid #221F73;
  color: #333;
  text-align: left; /* Ensures the quote is left-aligned */
`;

const HistoryPage = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Delta Kappa Epsilon Organization History</Title>
        <Paragraph>
          The primary purpose of this webpage is to document the history of DKE’s Psi Omega Chapter. To learn more about the DKE Organization History, please visit our International Headquarters <Link href="https://dke.org/about/organization-history/" target="_blank" rel="noopener noreferrer">website</Link>.
        </Paragraph>
        
        <Title>Delta Kappa Epsilon, Psi Omega Chapter History</Title>
        <FlexContainer>
          <Paragraph>
            <strong>1867 – Founding & Early History</strong><br/>
            The 37th Chapter of Delta Kappa Epsilon, Psi Omega, was founded at RPI in 1867, emerging in the post-Civil War era. The chapter’s inception followed the brief tenure of the Kappa Phi Chapter at Troy University (New York), which operated from 1858 until its closure in 1862 due to the university's financial strain from the war. Notably, Lt. E. S. P. Clapp, a Kappa Phi member, sacrificed his life for the Union in Virginia. His memory and final resting place at Oakwood Cemetery are honored by Psi Omega. 
            Psi Omega’s charter was granted during the 21st DKE Convention in New York under specific conditions:
            <Quote>
              “Such Charter shall not be granted until a suitable and permanent lodge shall be provided, and that such lodge shall be secured on or before 1st of Jan. 1868 in default of which this action shall be considered null and void.”
            </Quote>
          </Paragraph>
          <ImageWrapper>
            <TroyUniversityImg src={troyUniversityImage} alt="Troy University Photo" />
            <Caption>An old photo of RPI with the spires of the inactive Troy University in the background. The Folsom Library would later be constructed on this site.</Caption>
          </ImageWrapper>
        </FlexContainer>

        <Paragraph>
          Brother Virgil G. Bogue ‘68, who was the Grand Marshal of the student body, played a pivotal role in securing the charter. Initially, Psi Omega operated in secrecy until the members felt secure enough to publicly announce their presence. This revelation occurred dramatically at a ball game when Brother Bogue, leading cheers, revealed his DKE pin as his coat flared open. As recorded in DKE’s 1910 Catalog, 
          <Quote>
            “This caused a great sensation, for the other fraternities had not, up to this point, given up hope of getting some of the men who now wore the diamond pin.” 
          </Quote>
          For over two decades, the chapter convened at 271 River Street.
        </Paragraph>

        <Subtitle>1947 – Fraternity Expansion</Subtitle>
        <FlexContainer>
          <Paragraph>
            Following World War II, RPI, like many institutions, saw a surge in enrollment and faced challenges in housing the growing student body. To address this, RPI launched the Auxiliary Dormitory Plan: 
            <Quote>
              “The Institute offered to assume the mortgages and deeds of existing fraternity houses and construct new houses for fraternities who were able to raise forty percent of the total cost.”
            </Quote>
            Psi Omega’s house was the first built under this plan at 1480 Sage Ave, later repurposed by RPI as the Admissions Building. Other fraternity houses erected under this initiative include the current homes of Pi Beta Phi, Acacia, and Delta Tau Delta, as well as the former Delta Phi and Alpha Tau Omega houses.
          </Paragraph>
          <ImageWrapper>
            <TroyUniversityImg src={admissionsImage} alt="Admissions Building" />
            <Caption>The DKE House at 1480 Sage Ave. RPI later converted our home into the Admissions Building of today.</Caption>
          </ImageWrapper>
        </FlexContainer>


        <Subtitle>1965 – Mysterious Collapse</Subtitle>
        <Paragraph>
          In 1965, Psi Omega was suspended for three years and vanished from campus amid ambiguous circumstances. Research points to possible financial and academic challenges contributing to its decline. A Judicial Board case citing “illegal contact with a freshman” further complicated matters, though these charges were overturned by the Interfraternity Council. Regardless of the true nature of these events, Psi Omega today firmly denounces such behavior and strives to maintain a welcoming and safe environment for all.
        </Paragraph>

        <Subtitle>1978-1993 – Attempts to Return</Subtitle>
        <Paragraph>
          In 1978, DKE International shifted its focus to reestablishing closed chapters, prompting renewed efforts at RPI by 1981. Despite initial enthusiasm, the attempt fell through when nine members chose to join Phi Gamma Delta. In 1989, two student groups initiated refounding efforts, culminating in the April 25, 1993 initiation of 11 men as a colony. Unfortunately, the momentum waned, and the colony soon dissolved, plunging Psi Omega into another period of dormancy.
        </Paragraph>

        <Subtitle>2010 – Hope & Return</Subtitle>
        <Paragraph>
        Brother Samuel F. Heffner Jr. ’56, Chairman of the RPI Board of Trustees, and Brother John Broadbent ’59, Trustee, were instrumental advocates for Psi Omega's revival. Their support and the dedication of Psi Omega alumni were instrumental in bringing the chapter back. With the backing of alumni, Psi Omega returned on April 4, 2015 as a colony, when 17 men were initiated as the “Refounders of Psi Omega” during a banquet at the Sam Heffner Alumni House.
        </Paragraph>

        <Subtitle>2021 – Struggle & Rebirth</Subtitle>
        <Paragraph>
          RPI’s stringent pandemic policies severely impacted campus life, delaying a full return until Fall 2021. Psi Omega, already facing recruitment challenges pre-pandemic, was reduced to only two seniors and a few graduate members by 2021. It seemed Psi Omega might once again become inactive.
        </Paragraph>
        <Paragraph>
          However, the perseverance of these members revitalized the chapter, inspiring new recruits that led to a strong resurgence in the following academic year. By Spring 2023, Psi Omega had grown to 25 members and earned DKE International’s Delta Award for Most Improved Chapter, along with a new charter. Psi Omega officially regained its chapter status after 58 years.
        </Paragraph>

        <Subtitle>Distinguished Alumni</Subtitle>

        <AlumniSection>
          <Image src={hiraiImage} alt="Seijiro Hirai" />
          <Paragraph>
            <strong>Brother Seijiro Hirai ‘78</strong><br />
            Brother Hirai served as Director General of Imperial Railways of Japan, significantly advancing railway infrastructure in China and Japan, leveraging his engineering expertise from RPI. The RPI Class of 1935 honored him by dedicating their yearbook to his achievements, and Hirai’s legacy endures through the “Hirai Dorm” in E-Complex.
          </Paragraph>
        </AlumniSection>

        <AlumniSection>
          <Image src={martinImage} alt="Thomas L. Martin Jr." />
          <Paragraph>
            <strong>Brother Thomas L. Martin Jr. ’42</strong><br />
            Brother Martin served as Dean at three colleges and later as President of the Illinois Institute of Technology. Under his leadership, minority enrollment rose to 21%, and female enrollment increased by 150%. He promoted minority engineering initiatives and expanded the student body by 40%. A pioneer of distance education, he developed a microwave-based TV network enabling remote participation in classrooms. Martin also served as Director of seven corporations.
          </Paragraph>
        </AlumniSection>

        <AlumniSection>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Image src={davisImage} alt="Martin T. Davis" />
          <Image src={davisImage2} alt="Martin T. Davis Alternate" style={{ marginTop: '10px' }} /> {/* Second image with a margin for spacing */}
        </div>          
          <Paragraph>
            <strong>Brother Martin T. “Marty” Davis ’48</strong><br />
            Co-captain of Team USA’s lacrosse team at the 1948 London Summer Olympics, Brother Davis helped secure a gold medal for the team, which was comprised entirely of RPI students, primarily Psi Omega brothers. After returning from World War II in 1946, Davis restarted RPI’s lacrosse club with these brothers, leading it to remarkable seasons. A distinguished medical professional, Davis earned his M.D. from George Washington University, conducted research at Yale, and served as Chief of Anesthesiology at St. Mary’s and Samaritan Hospitals in Troy, NY. He held positions on the National Board of Medicine and the American Board of Anesthesiology.
          </Paragraph>
        </AlumniSection>

        <AlumniSection>
          <Image src={trahanImage} alt="Paul K. Trahan" />
          <Paragraph>
            <strong>Brother Paul K. Trahan</strong><br />
            Brother Trahan had a notable U.S. Navy career, becoming Head of the Radio and Television Branch of the Office of Information on September 2, 1955. By 1965, he was serving as Fleet Information Officer on the Commander-in-Chief, U.S. Pacific Fleet’s staff.
          </Paragraph>
        </AlumniSection>

        <AlumniSection>
          <Image src={heffnerImage} alt="Samuel F. Heffner Jr." />
          <TextContainer>
            <Paragraph>
              <strong>Brother Samuel F. Heffner Jr. ‘56</strong><br/>
              On December 9, 2011, after 33 years of dedicated service on the Rensselaer Polytechnic Institute Board of Trustees—15 as Chairman—Brother Sam Heffner retired. His retirement was marked by a grand celebration at the Curtis R. Priem Experimental Media and Performing Arts Center, attended by the Rensselaer community and special guests. The evening featured music, tributes, and skits in honor of Heffner’s legacy.
            </Paragraph>
            <Paragraph>
              Among the tributes were heartfelt words from fellow fraternity brothers, Trustee John Broadbent ’59 and Peter Goetz ‘56. University President Shirley Ann Jackson praised Heffner, saying:
            <Quote>
              “Leader, Partner, Builder, Philanthropist… In your program, you will see details of Samuel F. Heffner Jr.’s numerous accomplishments and contributions as a member of the Rensselaer Class of 1956. However, I would add other descriptors for Mr. Heffner: Visionary. Doer. Reliable supporter. And most importantly: Friend.”
            </Quote>
              The Board of Trustees conferred upon Heffner the titles of Honorary Trustee and Honorary Chairman, and he was presented with a special Trustee Medallion. Heffner’s legacy is also immortalized through the Samuel F. Heffner Jr. ‘56 Alumni House, a project led by Brother Heffner and fully designed, constructed, and funded by Rensselaer alumni.
            </Paragraph>
            <Paragraph>
              Beyond his contributions to RPI, Brother Heffner was the founder and President of Dickinson-Heffner, Inc., a building and land development firm serving the Baltimore-Washington area. Since 1965, his companies have designed, constructed, or renovated over 18 million square feet of commercial space, including facilities for the NSA, an annex to the Social Security Administration Headquarters, and numerous cinemas, hotels, office buildings, warehouses, and manufacturing facilities.
            </Paragraph>
            <Paragraph>
              Heffner also devoted significant energy to Delta Kappa Epsilon, serving as a Director and Chair of the Board. His commitment to DKE was unwavering until his untimely death in a motor vehicle accident on April 8, 2017, at the age of 82.
            </Paragraph>
          </TextContainer>
        </AlumniSection>
      </Container>
      <Container>
        <Subtitle>Arms, Crest, & Motto</Subtitle>
        <ImageSection>
          <ImageWrapper>
            <OldCrestImage src={originalCrestImage} alt="Original Crest of Psi Omega" className="old-crest" />
            <Paragraph>Original Crest of Psi Omega</Paragraph>
          </ImageWrapper>
          <ImageWrapper>
            <NewCrestImage src={refreshedCrestImage} alt="Refreshed Crest of Psi Omega" />
            <Paragraph>Refreshed Crest of Psi Omega (redrawn for digital use)</Paragraph>
          </ImageWrapper>
        </ImageSection>

        <Paragraph>
          <strong>Heraldic Description:</strong><br />
          Arms: Or, between two chevrons contrepoint, the upper gules and lower azure, as many men’s hearts, issuant thereout, and pendent over all a chain, the link in the base point in form of the Greek letters Ψ and Ω interlaced of the second; and upon an escutcheon of pretence, argent, a bend counterimbattled, sable.<br />
          Crest: A cross patonce argent.<br />
          Motto: Ψυχομαχέομεν Ὡρασιν.
        </Paragraph>

        <Paragraph>
          The English translation of our Motto is <em>Forever Striving</em>. This is a quote from Polybius, a Greek historian, in his description of the First Punic War. 
        </Paragraph>
      </Container>
    </>
  );
};

export default HistoryPage;
