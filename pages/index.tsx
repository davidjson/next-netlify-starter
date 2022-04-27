import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import Image from "next/image";
import styled from "styled-components";

import GlobalStyle from "styles/globalStyles";
import cardImage from "assets/card-image.png";
import ProfileHeader from "components/ProfileHeader";

const ContentCard = styled.div`
  background: white;
  min-width: 5rem;
`;

const TestCard = styled.div`
  background: red;
  min-width: 100%;
`;

const Main = styled.main``;

export default function Home() {
  return (
    // <Main>
    //   <TestCard>hello</TestCard>
    // </Main>

    <ThemeProvider theme={theme}>
      <div className="container">
        <Head>
          <title>Next.js Starter!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <GlobalStyle />

        <Main>
          <ProfileHeader />
          <ContentCard>
            Why there is NO such thing as a fat burning workout
            <Image src={cardImage} alt="profilePic" />
          </ContentCard>
        </Main>
      </div>
    </ThemeProvider>
  );
}