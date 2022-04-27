import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Box from "components/styled/Box";
import Image from "next/image";
import styled from "styled-components";

import trevorBg from "assets/trevorbg.png";
import trevorProfile from "assets/trevor.jpeg";
import cardImage from "assets/card-image.png";

import VStack from "./styled/VStack";

const Main = styled.div``;

const ProfilePic = styled.div`
  width: 150px;
  height: 100%;
  aspect-ratio: 1;
  border-radius: 20px;
  overflow: hidden;
  background: black;
`;

const ProfileLink = styled.button`
  background: red;
  min-width: 1rem;
`;

const ProfileBox = styled.div`
  background: ${(props) => props.theme.colors.dark700};
  padding: 10px;
  padding-right: 20px;
  border-radius: 20px;
`;

const Banner = styled.div``;

const HStack = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function ProfileHeader() {
  return (
    <Main>
      <Banner>
        <Image src={trevorBg} alt="banner" />
      </Banner>
      <ProfileBox>
        <HStack>
          <ProfilePic>
            <Image src={trevorProfile} />
          </ProfilePic>
          <VStack pl={10}>
            <h1>Trevor Munoz</h1>
            <p>
              We help busy men and women take control of their health, lose fat,
              and build muscle without giving up foods they love.
            </p>
          </VStack>
        </HStack>
      </ProfileBox>
      <ProfileLink>Coaching</ProfileLink>
      <ProfileLink>YouTube</ProfileLink>
      <ProfileLink>Facebook Group</ProfileLink>
      <ProfileLink>Supplements</ProfileLink>
    </Main>
  );
}
