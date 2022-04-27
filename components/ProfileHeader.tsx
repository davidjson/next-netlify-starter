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

const Main = styled.div`
  background: red;
  // min-width: 5rem;
  // max-width: 20rem;
`;

export default function ProfileHeader() {
  return (
    <Main>
      <Image src={trevorBg} alt="banner" />
      <Image src={trevorProfile} alt="profilePic" />
      <h1>Trevor Munoz</h1>
      <p>
        We help busy men and women take control of their health, lose fat, and
        build muscle without giving up foods they love.
      </p>
    </Main>
  );
}
