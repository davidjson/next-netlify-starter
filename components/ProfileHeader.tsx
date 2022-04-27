import Image from "next/image";
import styled from "styled-components";

import trevorBg from "assets/trevorbg.png";
import trevorProfile from "assets/trevor.jpeg";

import VStack from "./styled/VStack";
import HStack from "./styled/HStack";
import Center from "./styled/Center";

const Main = styled.div`
  min-width: 500px;
`;

const ProfilePic = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  overflow: hidden;
  background: black;
`;

const ProfileLink = styled.button`
  background: red;
  min-width: 1rem;
`;

const ProfileBox = styled(VStack)`
  width: 100%;
  background: ${(props) => props.theme.colors.dark700};
  border-radius: 20px;
`;

const ProfileBio = styled.div`
  text-align: center;
  width: 300px;
`;

const Test = styled.div`
  width: 100%;
  max-width: 400px;
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
        <Center pt={10}>
          <ProfilePic>
            <Image src={trevorProfile} />
          </ProfilePic>
        </Center>
        <Center pt={10}>
          <h1>Trevor Munoz</h1>
        </Center>
        <Center pt={10}>
          <ProfileBio>
            <p>
              I help busy men and women take control of their health, lose fat,
              and build muscle without giving up foods they love.
            </p>
          </ProfileBio>
        </Center>
        <div></div>
        <div></div>
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
