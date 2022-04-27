import styled from "styled-components";
import { color, space } from "styled-system";

interface IProps {
  bg?: string | null;

  // Margin Props
  // m margin
  // mt margin-top
  // mr margin-right
  // mb margin-bottom
  // ml margin-left
  // mx margin-left and margin-right
  // my margin-top and margin-bottom
  m?: string | null;
  mt?: string | null;
  mr?: string | null;
  mb?: string | null;
  ml?: string | null;
  mx?: string | null;
  my?: string | null;

  // Padding Props
  // p padding
  // pt padding-top
  // pr padding-right
  // pb padding-bottom
  // pl padding-left
  // px padding-left and padding-right
  // py padding-top and padding-bottom
  p?: string | null;
  pt?: string | null;
  pr?: string | null;
  pb?: string | null;
  pl?: string | null;
  px?: string | null;
  py?: string | null;
}

const HStack = styled.div<IProps>`
  display: flex;
  flex-direction: row;
  ${color}
  ${space}
`;

export default HStack;
