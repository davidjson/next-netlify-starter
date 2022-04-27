import Head from "next/head";
import Footer from "components/Footer";
import { ThemeProvider } from "styled-components";
import Box from "components/styled/Box";
import theme from "styles/theme";
import Image from "next/image";
import styled from "styled-components";

import trevorBg from "assets/trevorbg.png";
import trevorProfile from "assets/trevor.jpeg";
import cardImage from "assets/card-image.png";

const ProfileLink = styled.button`
  background: red;
  min-width: 1rem;
`;

const ProfileHeader = styled.div`
  background: red;
  // min-width: 5rem;
  // max-width: 20rem;
`;

const ContentCard = styled.div`
  background: white;
  min-width: 5rem;
`;

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Head>
          <title>Next.js Starter!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <ProfileLink>Coaching</ProfileLink>
          <ProfileLink>YouTube</ProfileLink>
          <ProfileLink>Facebook Group</ProfileLink>
          <ProfileLink>Supplements</ProfileLink>

          <ContentCard>
            Why there is NO such thing as a fat burning workout
            <Image src={cardImage} alt="profilePic" />
          </ContentCard>
        </main>
      </div>
    </ThemeProvider>
  );
}
