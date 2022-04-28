import Image from "next/image";
import styled from "styled-components";
import { FunctionComponent } from "react";

import trevorBg from "assets/trevorbg.png";
import trevorProfile from "assets/trevor.jpeg";

import VStack from "./styled/VStack";
import HStack from "./styled/HStack";
import Center from "./styled/Center";

import { MainTheme } from "styles/theme";
import { SocialIcon, SocialIconProps } from "react-social-icons";
type ISocialIcon = FunctionComponent<SocialIconProps>;

const ProfilePic = styled.div`
  border-radius: 5px;
  min-width: 40px;
  width: 40px;
  height: 40px;
  overflow: hidden;
  background: black;
`;

const ProfileLinks = () => {
  const Main = styled.div`
    background: ${(props) => props.theme.colors.dark900};
    padding: 0px 15px;
    align-items: start;
  `;

  interface ProfileLinkProps {
    title: string;
    color?: keyof MainTheme["colors"];
    bg?: keyof MainTheme["colors"];
    link?: string;
    socialUrl?: string;
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
      display: flex;
      flex-direction: row;
      align-items: center;
      border: none;
      padding: 7px 8px 5px 5px;
      border-radius: 5px;
      background: ${(p) =>
        props.bg ? p.theme.colors[props.bg] : p.theme.colors.dark700};
      width: 100%;
      // display: block;
      // display: inline-block;
    `;

    const LinkText = styled.p`
      color: ${(p) =>
        props.color ? p.theme.colors[props.color] : p.theme.colors.dark300};
      font-weight: bold;
    `;

    const SocialIconContainer = styled.div`
      padding: 0px 4px;
    `;

    return (
      <Main>
        <Link>
          {props.socialUrl && (
            <SocialIconContainer>
              <SocialIcon
                url={props.socialUrl}
                style={{ height: 20, width: 20 }}
                bgColor="black"
              />
            </SocialIconContainer>
          )}
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
        <ProfileLink title="Apply For Coaching" bg="one" color="dark800" />
        <ProfileLink title="YouTube" />
        <ProfileLink title="Facebook Group" />
        <ProfileLink title="Supplements" />
      </LinkWrapper>
    </Main>
  );
};

const ProfileBox = styled(VStack)`
  position: relative;
  top: -10px;
  width: 100%;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.dark900};
  bg: ${(props) => props.theme.colors.dark900};
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
  font-size: 1em;
  font-family: "Open Sans";
  font-weight: bold;
`;

const BioText = styled.p`
  color: ${(props) => props.theme.colors.dark500};
  font-size: 0.7em;
  font-weight: light;
`;

const Banner = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;
  background: black;
`;

export default function ProfileHeader() {
  const Main = styled.div``;

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
            <BioHeader>Trevor and Natalia</BioHeader>
            <BioText>
              I help busy men and women take control of their health, lose fat,
              and build muscle without giving up foods they love.
            </BioText>
          </BioHeaderContainer>
          {/* <BioTextContainer></BioTextContainer> */}
        </BioMain>
        <ProfileLinks />
      </ProfileBox>
    </Main>
  );
}
