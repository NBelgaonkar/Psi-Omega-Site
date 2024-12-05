import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Literata:wght@400;700&display=swap');

  body {
    font-family: 'Literata', serif;
    background-color: #F5F5F5;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: center;
`;

const Section = styled.section`
  width: 100%;
  max-width: 800px;
  margin-top: 40px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
`;

const Poem = styled.div`
  margin-bottom: 30px;
`;

const PoemTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`;

const PoemContent = styled.pre`
  font-size: 18px;
  line-height: 1.6;
  white-space: pre-wrap;
  text-align: left;
`;

const TraditionsAndSymbols = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
      <SymbolList>
          <SymbolItem>
            <SymbolTitle>The Psi Omega Crest</SymbolTitle>
            <SymbolContent>
              The Psi Omega crest embodies the fraternity’s heritage, featuring symbols that represent honor,
              loyalty, and brotherhood. It is proudly displayed on official documents, banners, and regalia.
            </SymbolContent>
          </SymbolItem>
          <SymbolItem>
            <SymbolTitle>Ψυχομαχέομεν Ὡρασιν - Our Motto</SymbolTitle>
            <SymbolContent>
              Translated as "Forever Striving," this Greek phrase reflects the enduring commitment of Psi Omega members
              to excellence, resilience, and personal growth. It serves as an inspiration for all brothers.
            </SymbolContent>
          </SymbolItem>
          <SymbolItem>
            <SymbolTitle>Brotherhood Handshake</SymbolTitle>
            <SymbolContent>
              A secret handshake passed down through generations, symbolizing the trust and unity of our fraternity.
              This tradition strengthens the bond between members.
            </SymbolContent>
          </SymbolItem>
          <SymbolItem>
            <SymbolTitle>Founders’ Day</SymbolTitle>
            <SymbolContent>
              Each year, we gather to celebrate the founding of Psi Omega, honoring the vision and dedication of
              our founding brothers. It is a time of reflection and renewal of our commitment to fraternity values.
            </SymbolContent>
          </SymbolItem>
          <SymbolItem>
            <SymbolTitle>Song of Psi Omega</SymbolTitle>
            <SymbolContent>
              Our fraternity song is a heartfelt anthem sung at key ceremonies and events, uniting members
              in a shared expression of pride and camaraderie.
            </SymbolContent>
          </SymbolItem>
          <SymbolItem>
            <SymbolTitle>The Psi Omega Pin</SymbolTitle>
            <SymbolContent>
              Worn by all initiated members, the Psi Omega pin is a symbol of dedication and pride in our
              fraternity. It serves as a reminder of the values and responsibilities we uphold.
            </SymbolContent>
          </SymbolItem>
        </SymbolList>
        <CalendarContainer>
          <CalendarTitle>Important Events in Psi Omega History</CalendarTitle>
          <EventList>
            <EventItem>
              <EventDate>1867</EventDate>
              <EventDescription>The founding of Psi Omega, marking the beginning of our fraternity’s rich legacy.</EventDescription>
            </EventItem>
            <EventItem>
              <EventDate>1947</EventDate>
              <EventDescription>The expansion of the fraternity post-World War II, leading to significant growth in membership.</EventDescription>
            </EventItem>
            <EventItem>
              <EventDate>2015</EventDate>
              <EventDescription>The re-establishment of Psi Omega as a colony, revitalizing our presence on campus.</EventDescription>
            </EventItem>
            <EventItem>
              <EventDate>2023</EventDate>
              <EventDescription>Psi Omega regains full chapter status after years of dedication and hard work by members and alumni.</EventDescription>
            </EventItem>
          </EventList>
        </CalendarContainer>
        <Title>Traditions & Symbols</Title>
        <Paragraph>
          Discover the rich traditions and symbols that define Psi Omega. These cherished elements
          reflect our fraternity’s values, history, and the bonds that unite our brotherhood.
        </Paragraph>

        {/* Poems Section */}
        <Section>
          <SectionTitle>Fraternity Poems</SectionTitle>

          <Poem>
            <PoemTitle>Son of a DKE</PoemTitle>
            <PoemContent>
              "When I was a Freshman
              A freshman, soft and green
              I dreamt of Delta Kappa,
              Of College life the queen.
              And when upon the wooly goat ,
              They gently mounted me,
              I felt with jo I'd reached at last
              The Hall of DKE,

              CHORUS

              I'm the son of a, son of a, son of a, son of a.
              son of a DKE!
              I'm the sen of a, son of a, sen of a, son of a,
              son of a DKE!
              Like ev'ry college fellow.
              I like my whiskey free.
              For I'm a rambling rake of a college man,
              And the son of a DKE

              When I was a Sophomore
              So festive gay and tree.
              I were with pride the diamond pin
              Of our jolly fraternity.
              I thought I owned the campus,
              My style was great to see.
              And I paralyzed the Freshmen
              With my yarns of DKE.

              (REPEAT CHORUS)

              A sentimental junior,
              I sported a moustache;
              Among the innocent maidens
              I cut an awful dash!
              I broke a leg en the football field,
              But I only said "Oh! Gee!
              For I never swear, I'm a moral man
              And the son of a DKE!

              (REPEAT CHORUS)

              A grave and reverend Senior,
              I soothed my fevered brain
              By dreaming of Commencement Bay.
              Pipes, ladies and champagne!
              And when In happy years to come
              I sport my children three,
              I'll mark them each with a stencil plate
              One D! one K! one E!

              (REPEAT CHORUS)"
            </PoemContent>
          </Poem>

          <Poem>
            <PoemTitle>Vive la DKE</PoemTitle>
            <PoemContent>
              "A band of brothers in DKE.
              We march along tonight,
              Two by two with
              Arms locked firm and tight:
              Our leader signals with hat in hand.
              As we go marching on,
              Singing Delta Kappa Epsilon

              CHORUS

              So merrily sing we all to D K E,
              The mother of jollity,
              Whose children are gay and free,
              We'll sing to Phi
              And then we'll sing to
              Dear old Delta Kappa Epsilon.

              The stars are out, the moon is shining
              On our jolly crowd,
              As arm in arm,
              We march and sing aloud.
              We'll sing in honor of the tie
              That binds our hearts in one,
              Singing Delta Kappa Epsilon.

              (REPEAT CHORUS)

              The campus windows are lifted high
              As we go marching by,
              Bur torches flash
              In ev'ry lady's eye.
              Our trembling victims await our call,
              As we go marching on,
              Singing Delta Kappa Epsilon.

              (REPEAT CHORUS)"
            </PoemContent>
          </Poem>

          <Poem>
            <PoemTitle>Phi Marching Song</PoemTitle>
            <PoemContent>
              "O DELTA KAPPA EPSILON.
              VIVA LA DKE

              Let every good fellow of ev'ry degree,
              Vive la DKE!
              How drink to the health of DKE,
              Vive la DKE!

              Chorus

              Vive la, vive la. vive I'amour,
              Vive la. vive la, Vive l'amour,
              vive l'amour, Vive l'amour
              Vive la DKE!

              The present and past are full el her fame
              Vive la DKE!
              The future shall only emblazon her name
              Vive la DKE!

              Chorus

              Like the snow of the mountains, all stainless and pure,
              Vive la DKE!
              Her name and her glory will ever endure,
              Vive la DKE!

              Chorus

              Then fill up a bumper for DKE,
              Vive la DKE!
              And drink to her health with three times three,
              Vive la BKE!
              Chorus"
            </PoemContent>
          </Poem>
        </Section>
      </Container>
    </>
  );
};

export default TraditionsAndSymbols;
