import Image from "next/image";
import styled from "styled-components";

import trevorBg from "assets/trevorbg.png";
import trevorProfile from "assets/trevor.png";

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

interface LabelProps {
  color?: keyof MainTheme["colors"];
  bg?: keyof MainTheme["colors"];
  title: string;
  href: string;
}

const Label = (props: LabelProps) => {
  const Main = styled.div`
    padding: 7px 2px;
  `;

  const Link = styled.div`
    padding: 1px 3px;
    border-radius: 5px;
    border: 1px solid
      ${(p) => (props.bg ? p.theme.colors[props.bg] : p.theme.colors.dark600)};
    // background: ${(p) => p.theme.colors.dark700};
    display: block;
  `;

  const LinkText = styled.p`
    font-size: 10px;
    font-weight: normal;
    color: ${(p) =>
      props.color ? p.theme.colors[props.color] : p.theme.colors.dark650};
  `;

  return (
    <Main>
      <Link>
        <LinkText>{props.title}</LinkText>
      </Link>
    </Main>
  );
};

const ContentLinkContainer = styled.div`
  padding: 25px 20px;
`;

const ContentLink = styled.a`
  border: none;
  font-weight: bolder;
  font-family: Georgia;
  color: black;
  text-decoration: none;
  font-size: 24px;
  text-align: center;
  background: ${(props) => props.theme.colors.dark900};
`;

interface BlogPostLabel {
  title: string;
  link: string;
}

interface BlogPostProps {
  title?: string;
  links: BlogPostLabel[];
}

const BlogPost = (props: BlogPostProps) => {
  const Main = styled(VStack)`
    padding-right: 20px;
  `;

  const labels = props.links.map((label) => (
    <Label title={label.title} href={label.link} />
  ));

  return (
    <Main>
      <ContentLinkContainer>
        <ContentLink href="">{props.title}</ContentLink>
      </ContentLinkContainer>
      <Center>{labels}</Center>
    </Main>
  );
};

export default function ProfileContent() {
  const Main = styled(VStack)`
    padding-left: 15px;
    background: ${(props) => props.theme.colors.dark900};
    align-items: center;
  `;

  const label: BlogPostLabel = {
    title: "Weight Loss",
    link: "link",
  };
  const label2: BlogPostLabel = {
    title: "Fitness",
    link: "link",
  };
  const label3: BlogPostLabel = {
    title: "Subscriber Content",
    link: "link",
  };

  return (
    <Main>
      <Line />
      <BlogPost
        title="Why there is NO such thing as a fat burning workout"
        links={[label]}
      />
      <Line />
      <BlogPost
        title="This is the macro guide I give to all my clients"
        links={[label2, label3]}
      />
      <Line />
    </Main>
  );
}
