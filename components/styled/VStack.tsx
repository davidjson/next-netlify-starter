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
  m?: number | null;
  mt?: number | null;
  mr?: number | null;
  mb?: number | null;
  ml?: number | null;
  mx?: number | null;
  my?: number | null;

  // Padding Props
  // p padding
  // pt padding-top
  // pr padding-right
  // pb padding-bottom
  // pl padding-left
  // px padding-left and padding-right
  // py padding-top and padding-bottom
  p?: number | null;
  pt?: number | null;
  pr?: number | null;
  pb?: number | null;
  pl?: number | null;
  px?: number | null;
  py?: number | null;
}

const VStack = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  ${color}
  ${space}
`;

export default VStack;
