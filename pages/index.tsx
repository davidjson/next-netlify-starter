import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import Image from "next/image";
import styled from "styled-components";

import GlobalStyle from "styles/globalStyles";
import cardImage from "assets/card-image.png";
import ProfileHeader from "components/ProfileHeader";
import ProfileContent from "components/ProfileContent";

export default function Home() {
  const Main = styled.main`
    background: ${(props) => props.theme.colors.dark900};
    width: 100%;
    max-width: 500px:
  `;

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Head>
          <title>Next.js Starter!</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="//fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,400,600,700"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <GlobalStyle />
        <Main>
          <ProfileHeader />
          <ProfileContent />
        </Main>
      </div>
    </ThemeProvider>
  );
}
