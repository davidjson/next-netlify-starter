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
  width: 100px;
  height: 100px;
  border-radius: 100px;
  overflow: hidden;
  background: black;
`;

const ProfileLink = styled.button`
  background: red;
  min-width: 1rem;
`;

const ProfileBox = styled(HStack)`
  width: 100%;
  background: ${(props) => props.theme.colors.dark700};
  border-radius: 20px;
  // margin: 100px;
  bg: ${(props) => props.theme.colors.dark900};
  // max-width: 320px;
  // min-width: 500px;
  width: 100%;
  padding: 10px;
  // box-shadow: 4px 4px rgb(0 0 0 / 0.1);
`;

const Bio = styled(VStack)`
  justify-content: center;
  padding-left: 20px;
  width: 300px;
`;

const BioHeader = styled.h1`
  color: ${(props) => props.theme.colors.dark200};
  font-size: 1.5em;
  font-weight: bold;
`;

const BioText = styled.p`
  color: ${(props) => props.theme.colors.dark400};
  font-size: 0.8em;
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
      {/* <Banner>
        <Image src={trevorBg} alt="banner" />
      </Banner> */}
      <ProfileBox>
        <ProfilePic>
          <Image src={trevorProfile} />
        </ProfilePic>
        <Bio>
          <BioHeader>Trevor Munoz</BioHeader>
          <BioText>
            I help busy men and women take control of their health, lose fat,
            and build muscle without giving up foods they love.
          </BioText>
        </Bio>
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
