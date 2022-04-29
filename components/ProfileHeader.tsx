import Image from "next/image";
import styled from "styled-components";
import { FunctionComponent } from "react";

import trevorProfile from "assets/trevorInsta.png";
import insta1 from "assets/insta1.png";
import insta2 from "assets/insta2.png";
import insta3 from "assets/insta3.png";

import VStack from "./styled/VStack";
import HStack from "./styled/HStack";
import Center from "./styled/Center";

import { MainTheme } from "styles/theme";
import { SocialIcon, SocialIconProps } from "react-social-icons";
type ISocialIcon = FunctionComponent<SocialIconProps>;

const ProfilePic = styled.div`
  border-radius: 5px;
  min-width: 160px;
  width: 160px;
  height: 160px;
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

    const Link = styled.a`
      class: button;
      display: flex;
      flex-direction: row;
      align-items: center;
      border: none;
      padding: 7px 0px 5px 5px;
      border-radius: 5px;
      background: ${(p) =>
        props.bg ? p.theme.colors[props.bg] : p.theme.colors.dark700};
      width: 100%;
    `;

    const LinkText = styled.p`
      color: ${(p) =>
        props.color ? p.theme.colors[props.color] : p.theme.colors.dark300};
      font-weight: bold;
      font-size: 14px;
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
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;
  `;

  return (
    <Main>
      <LinkWrapper>
        {/* <ProfileLink title="About Me" bg="one" color="dark800" /> */}
        <ProfileLink title="Apply For Coaching" bg="one" color="dark800" />
        <ProfileLink title="Facebook Group" />
        <ProfileLink title="YouTube" />
        <ProfileLink title="Supplements" />
      </LinkWrapper>
    </Main>
  );
};

const Line = styled.div`
  height: 1px;
  background: ${(props) => props.theme.colors.dark600};
  width: 80%;
`;

const BioHeaderContainer = styled(VStack)`
  align-items: center;
  padding-top: 20px;
`;

const BioHeader = styled.h1`
  color: ${(props) => props.theme.colors.dark300};
  font-size: 1.5em;
  font-family: "Open Sans";
  font-weight: bold;
`;

const BioText = styled.p`
  color: ${(props) => props.theme.colors.dark500};
  font-size: 1em;
  font-weight: light;
  text-align: center;
`;

const ExtendedBioTextContainer = styled.div`
  background: ${(props) => props.theme.colors.dark800};
  margin-top: 30px;
  padding: 20px 20px;
`;

const ExtendedBioText = styled.p`
  color: ${(props) => props.theme.colors.dark500};
  font-size: 1em;
  font-weight: light;
  text-align: center;
`;

const ExtendedBioLink = styled.a`
  color: black;
  text-decoration: none;
`;

const PhotosWrapper = styled(HStack)``;

const InstagramPreviews = () => {
  const Main = styled(VStack)`
    margin-top: 20px;
  `;
  const Link = styled.a`
    margin: 10px;
  `;
  const PreviewLabel = styled.p`
    font-size: 10px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.dark500};
    font-family: "Open Sans";
  `;
  return (
    <Main>
      <PreviewLabel>Trending on Instagram</PreviewLabel>
      <PhotosWrapper>
        <Link href="https://www.instagram.com/p/Cc5W2mzjY5n/">
          <Image src={insta1} />
        </Link>
        <Link href="https://www.instagram.com/p/Cc0M9nwLrZC/">
          <Image src={insta2} />
        </Link>
        <Link href="https://www.instagram.com/p/CcnXWsWrOba/">
          <Image src={insta3} />
        </Link>
      </PhotosWrapper>
    </Main>
  );
};

export default function ProfileHeader() {
  const Main = styled(VStack)`
    align-items: center;
  `;

  return (
    <Main>
      <ProfilePic>
        <Image src={trevorProfile} />
      </ProfilePic>
      <BioHeaderContainer>
        <BioHeader>Trevor and Natalia</BioHeader>
        <BioText>
          We help busy men and women take control of their health, lose fat, and
          build muscle without giving up foods they love.
        </BioText>
      </BioHeaderContainer>
      <ProfileLinks />
      <ExtendedBioTextContainer>
        <ExtendedBioText>
          For those of you that don’t know who I am 👇🏼 My name is Trevor Munoz
          and I was born and raised in Corona, CA...
          <ExtendedBioLink> More</ExtendedBioLink>
        </ExtendedBioText>
      </ExtendedBioTextContainer>
      <InstagramPreviews />
    </Main>
  );
}
