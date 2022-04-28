import Image from "next/image";
import styled from "styled-components";

import trevorBg from "assets/trevorbg.png";
import trevorProfile from "assets/trevor.jpeg";

import VStack from "./styled/VStack";
import HStack from "./styled/HStack";
import Center from "./styled/Center";

import { MainTheme } from "styles/theme";

interface ContentCardProps {}

const Line = () => {
  const Main = styled(Center)`
    padding: 20px 0px;
  `;

  const LineDiv = styled.div`
    height: 1px;
    width: 50%;
    background: ${(props) => props.theme.colors.dark600};
  `;

  return (
    <Main>
      <LineDiv />
    </Main>
  );
};

interface ILabel {
  title: string;
  link: string;
}

interface ContentCardProps {
  title: string;
  labels: ILabel[];
}

const Card = () => {
  const LabelLink = (props: LabelLinkProps) => {
    const Main = styled.div`
      padding: 7px 0px;
    `;

    const Link = styled.button`
      padding: 1px 3px;
      border-radius: 5px;
      border: 2px solid
        ${(p) => (props.bg ? p.theme.colors[props.bg] : p.theme.colors.dark700)};
      background: ${(p) => p.theme.colors.dark700};
      display: block;
    `;

    const LinkText = styled.p`
      font-size: 10px;
      font-weight: normal;
      color: ${(p) =>
        props.color ? p.theme.colors[props.color] : p.theme.colors.dark500};
    `;

    return (
      <Main>
        <Link>
          <LinkText>{props.title}</LinkText>
        </Link>
      </Main>
    );
  };

  const Main = styled(VStack)``;

  interface LabelLinkProps {
    color?: keyof MainTheme["colors"];
    bg?: keyof MainTheme["colors"];
    title: string;
    link?: string;
  }

  const ContentLink = styled.a`
    font-weight: bold;
    text-align: center;
  `;

  return (
    <Main>
      <ContentLink>
        Why there is NO such thing as a fat burning workout
      </ContentLink>
      <Center>
        <LabelLink title="Weight Loss" />
      </Center>
    </Main>
  );
};

const ContentCard = () => {
  const Main = styled(VStack)`
    padding-right: 20px;
  `;
  return (
    <Main>
      <Card />
    </Main>
  );
};

export default function ProfileContent() {
  const Main = styled(VStack)`
    padding-left: 15px;
    background: ${(props) => props.theme.colors.dark900};
    align-items: center;
  `;
  return (
    <Main>
      <Line />
      <ContentCard />
      <Line />
      <ContentCard />
      <Line />
      <ContentCard />
      <Line />
      <ContentCard />
      <Line />
    </Main>
  );
}
