import Head from "next/head";
import Footer from "components/Footer";
import { ThemeProvider } from "styled-components";
import Box from "components/styled/Box";
import theme from "styles/theme";
import Image from "next/image";
import styled from "styled-components";

import trevorBg from "assets/trevorbg.png";
import trevorProfile from "assets/trevor.jpeg";

const ProfileLink = styled.button`
  background: red;
  min-width: 1rem;
`;

const Header = styled.div`
  background: red;
  min-width: 5rem;
  max-width: 20rem;
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
          <Box color="black" bg="blue">
            Blue Box
            {/* <img src={trevorBg} /> */}
            <Image src={trevorBg} alt="banner" />
          </Box>
          <Box color="black" bg="blue">
            Blue Box
            {/* <img src={trevorBg} /> */}
            <Image src={trevorProfile} alt="profilePic" />
          </Box>
          <Header>testing</Header>
          <h1>Trevor Munoz</h1>
          <p>
            We help busy men and women take control of their health, lose fat,
            and build muscle without giving up foods they love.
          </p>
          <ProfileLink>Coaching</ProfileLink>
          <ProfileLink>YouTube</ProfileLink>
          <ProfileLink>Facebook Group</ProfileLink>
          <ProfileLink>Supplements</ProfileLink>
        </main>
      </div>
    </ThemeProvider>
  );
}
