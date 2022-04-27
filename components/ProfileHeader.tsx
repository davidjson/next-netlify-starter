import Image from "next/image";
import styled from "styled-components";

import trevorBg from "assets/trevorbg.png";
import trevorProfile from "assets/trevor.jpeg";

import VStack from "./styled/VStack";
import HStack from "./styled/HStack";

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
  align-items: start;
`;

const LinkBox = styled.div`
  background: ${(props) => props.theme.colors.dark700};
  padding: 10px;
  padding-right: 20px;
  border-radius: 20px;
  align-items: start;
`;

const Banner = styled.div``;

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
              I help busy men and women take control of their health, lose fat,
              and build muscle without giving up foods they love.
            </p>
          </VStack>
        </HStack>
      </ProfileBox>
      <LinkBox>
        <ProfileLink>Coaching</ProfileLink>
        <ProfileLink>YouTube</ProfileLink>
        <ProfileLink>Facebook Group</ProfileLink>
        <ProfileLink>Supplements</ProfileLink>
      </LinkBox>
    </Main>
  );
}
