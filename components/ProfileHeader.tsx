import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Box from "components/styled/Box";
import Image from "next/image";
import styled from "styled-components";

import trevorBg from "assets/trevorbg.png";
import trevorProfile from "assets/trevor.jpeg";
import cardImage from "assets/card-image.png";

const Main = styled.div`
  background: ${(props) => props.theme.colors.dark700};
  // min-width: 5rem;
  // max-width: 20rem;
`;

const ProfileLink = styled.button`
  background: red;
  min-width: 1rem;
`;

const Banner = styled.div``;

const HStack = styled.div`
  display: flex;
  flex-direction: row;
`;

const VStack = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function ProfileHeader() {
  return (
    <Main>
      <Banner>
        <Image src={trevorBg} alt="banner" />
      </Banner>
      <HStack>
        <Image src={trevorProfile} alt="profilePic" />
        <VStack>
          <h1>Trevor Munoz</h1>
          <p>
            We help busy men and women take control of their health, lose fat,
            and build muscle without giving up foods they love.
          </p>
        </VStack>
      </HStack>
      <ProfileLink>Coaching</ProfileLink>
      <ProfileLink>YouTube</ProfileLink>
      <ProfileLink>Facebook Group</ProfileLink>
      <ProfileLink>Supplements</ProfileLink>
    </Main>
  );
}
