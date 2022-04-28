import Image from "next/image";
import styled from "styled-components";

import trevorBg from "assets/trevorbg.png";
import trevorProfile from "assets/trevor.jpeg";

import VStack from "./styled/VStack";
import HStack from "./styled/HStack";
import Center from "./styled/Center";

import { MainTheme } from "styles/theme";

const Main = styled.div`
  // min-width: 500px;
`;

const ProfilePic = styled.div`
  // min-height: 50px;
  min-width: 40px;
  width: 40px;
  height: 40px;
  overflow: hidden;
  background: black;
`;

const ProfileLinks = () => {
  const Main = styled.div`
    background: ${(props) => props.theme.colors.dark900};
    padding: 5px;
    padding-right: 20px;
    border-radius: 20px;
    align-items: start;
  `;

  interface ProfileLinkProps {
    title: string;
    color?: keyof MainTheme["colors"];
    bg?: keyof MainTheme["colors"];
    link?: string;
  }

  const ProfileLink = (props: ProfileLinkProps) => {
    const Main = styled.div`
      padding: 5px;
    `;

    const LinkContainer = styled.div`
      min-width: 1rem;
      max-width: 100%;
    `;

    const Link = styled.button`
      border: none;
      padding: 7px 5px;
      border-radius: 5px;
      background: ${(p) =>
        props.bg ? p.theme.colors[props.bg] : p.theme.colors.dark700};
      width: 100%;
      display: block;
      // display: inline-block;
    `;

    const LinkText = styled.p`
      color: ${(p) =>
        props.color ? p.theme.colors[props.color] : p.theme.colors.dark300};
      font-weight: bold;
    `;

    return (
      <Main>
        <Link>
          <LinkText>{props.title}</LinkText>
        </Link>
      </Main>
    );
  };

  const LinkWrapper = styled(HStack)`
    flex-wrap: wrap;
  `;

  return (
    <Main>
      <LinkWrapper>
        <ProfileLink title="Coaching Interest Form" bg="one" color="dark800" />
        <ProfileLink title="YouTube" />
        <ProfileLink title="Facebook Group" />
        <ProfileLink title="Supplements" />
      </LinkWrapper>
    </Main>
  );
};

const ProfileBox = styled(HStack)`
  width: 100%;
  background: ${(props) => props.theme.colors.dark900};
  // border-radius: 20px;
  bg: ${(props) => props.theme.colors.dark900};
  // padding: 15px;
`;

const ProfileBox2 = styled(HStack)`
  width: 100%;
  background: ${(props) => props.theme.colors.dark700};
  border-radius: 20px;
  bg: ${(props) => props.theme.colors.dark900};
  width: 100%;
  // padding: 10px;
`;

const Line = styled.div`
  height: 1px;
  background: ${(props) => props.theme.colors.dark600};
  width: 80%;
`;

const BioMain = styled(HStack)`
  padding: 15px;
  align-items: center;
`;

const BioHeaderContainer = styled.div`
  padding-left: 15px;
`;

const BioHeader = styled.h1`
  color: ${(props) => props.theme.colors.dark200};
  font-size: 1.5em;
  font-weight: bold;
`;

const BioTextContainer = styled(Center)`
  padding-left: 20px;
  width: 100%;
`;

const BioText = styled.p`
  color: ${(props) => props.theme.colors.dark500};
  font-size: 0.6em;
  font-weight: light;
`;

const Banner = styled.div`
  width: 100%;
  height: 80px;
  overflow: hidden;
  background: black;
`;

export default function ProfileHeader() {
  return (
    <Main>
      <Banner>
        <Image src={trevorBg} alt="banner" />
      </Banner>
      <ProfileBox>
        <BioMain>
          <ProfilePic>
            <Image src={trevorProfile} />
          </ProfilePic>
          <BioHeaderContainer>
            <BioHeader>Trevor</BioHeader>
          </BioHeaderContainer>
          <BioTextContainer>
            <BioText>
              I help busy men and women take control of their health, lose fat,
              and build muscle without giving up foods they love.
            </BioText>
          </BioTextContainer>
        </BioMain>
        <div></div>
        <div></div>
      </ProfileBox>
      <Center>
        <Line />
      </Center>
      <ProfileLinks />
    </Main>
  );
}
