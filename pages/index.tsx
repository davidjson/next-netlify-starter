import Head from "next/head";
import Footer from "components/Footer";
import { ThemeProvider } from "styled-components";
import Box from "components/styled/Box";
import theme from "styles/theme";
import Image from "next/image";
import styled from "styled-components";

import trevorBg from "assets/trevorbg.png";

const Header = styled(Box)`
  background: red;
  min-width: 5rem;
  max-width: 20rem;
`;

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Box color="black" bg="blue">
          Blue Box
          {/* <img src={trevorBg} /> */}
          <Image src={trevorBg} />
        </Box>
        <Header>testing</Header>
        <Head>
          <title>Next.js Starter!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          {/* <Header title="Welcome to my app!" /> */}
          <p className="description">
            Get started by editing <code>pages/index.js</code>
          </p>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
